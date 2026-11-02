import { NextResponse } from "next/server";

export const runtime = "nodejs";

async function queryRemoteD1(sql: string, params: any[] = []) {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const databaseId = process.env.CLOUDFLARE_DATABASE_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;

  if (!accountId || !databaseId || !apiToken) {
    throw new Error("Konfigurasi Cloudflare D1 belum lengkap di .env.local!");
  }

  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sql, params }),
      cache: "no-store",
    }
  );

  const json = await res.json();
  if (!json.success) {
    throw new Error(json.errors?.[0]?.message || "Gagal query D1");
  }

  return json.result?.[0]?.results || [];
}

// POST: Simpan RSVP ke Database D1 dengan Rate Limiting IP & Kolom IP Address
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const invitationId = body.invitation_id || body.invitationId;
    const nama = body.nama;
    const kehadiran = body.kehadiran || "Hadir";
    const jumlahTamu = body.jumlah_tamu || body.jumlahTamu || 1;
    const ucapan = body.ucapan || body.pesan || "-";

    if (!invitationId || !nama) {
      return NextResponse.json(
        { success: false, message: "Data tidak lengkap (invitation_id & nama wajib diisi)" },
        { status: 400 }
      );
    }

    // 1. Ambil IP Address Klien (Mendukung Vercel, Cloudflare, atau Proxy)
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : request.headers.get("cf-connecting-ip") || "unknown";

    // 2. CEK RATE LIMIT IP (Maksimal 7 pesan per IP dalam 1 jam terakhir)
    // Pastikan tabel rsvps kamu memiliki kolom `ip_address`. Jika belum ada, jalankan ALTER TABLE.
    const checkIpSql = `
      SELECT COUNT(*) as total 
      FROM rsvps 
      WHERE invitation_id = ? 
        AND ip_address = ? 
        AND created_at >= DATETIME('now', '-1 hour')
    `;
    
    try {
      const ipCheckResult = await queryRemoteD1(checkIpSql, [invitationId, clientIp]);
      const recentCount = ipCheckResult?.[0]?.total || 0;

      if (recentCount >= 7) {
        return NextResponse.json(
          { 
            success: false, 
            message: "Batas pengiriman pesan dari jaringan/perangkat ini telah tercapai (Maksimal 7 pesan per jam)." 
          },
          { status: 429 } // Status 429 Too Many Requests
        );
      }
    } catch (dbErr) {
      // Mengantisipasi jika kolom ip_address belum sempat dibuat di database, sistem tetap aman berjalan
      console.warn("⚠️ Peringatan: Kolom ip_address mungkin belum ada di tabel rsvps D1.", dbErr);
    }

    const id = crypto.randomUUID();

    // 3. Simpan ke D1 (Menyertakan clientIp ke dalam kolom ip_address)
    const sql = `
      INSERT INTO rsvps (id, invitation_id, nama, kehadiran, jumlah_tamu, ucapan, ip_address, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, DATETIME('now'))
    `;
    await queryRemoteD1(sql, [id, invitationId, nama, kehadiran, jumlahTamu, ucapan.trim(), clientIp]);

    return NextResponse.json({
      success: true,
      message: "RSVP berhasil disimpan",
      data: { id, invitationId, nama, kehadiran, jumlahTamu, ucapan },
    });
  } catch (error: any) {
    console.error("❌ [RSVP POST ERROR]:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Gagal menyimpan RSVP" },
      { status: 500 }
    );
  }
}

// GET: Ambil daftar ucapan berdasarkan invitation_id
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const invitationId = searchParams.get("invitation_id") || searchParams.get("invitationId");

    if (!invitationId) {
      return NextResponse.json(
        { success: false, message: "invitation_id diperlukan" },
        { status: 400 }
      );
    }

    const sql = `
      SELECT id, nama, kehadiran, jumlah_tamu as jumlahTamu, ucapan, created_at 
      FROM rsvps 
      WHERE invitation_id = ? 
      ORDER BY id DESC LIMIT 50
    `;
    const rsvps = await queryRemoteD1(sql, [invitationId]);

    return NextResponse.json({
      success: true,
      data: rsvps,
    });
  } catch (error: any) {
    console.error("❌ [RSVP GET ERROR]:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Gagal mengambil data ucapan" },
      { status: 500 }
    );
  }
}