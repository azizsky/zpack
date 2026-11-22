import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"];

async function executeD1(sql: string, params: any[] = []) {
  let db: any = null;
  try {
    const { env } = getCloudflareContext();
    db = (env as any)?.DB || (env as any)?.zpack_db;
  } catch {
    db = null;
  }

  if (db) {
    if (sql.trim().toUpperCase().startsWith("SELECT")) {
      const { results } = await db.prepare(sql).bind(...params).all();
      return results || [];
    }
    await db.prepare(sql).bind(...params).run();
    return true;
  }

  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const databaseId = process.env.CLOUDFLARE_DATABASE_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;

  if (!accountId || !databaseId || !apiToken) {
    throw new Error("ENV D1 belum lengkap.");
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
    }
  );

  const json = await res.json();
  if (!json.success) {
    throw new Error(json.errors?.[0]?.message || "Query D1 gagal.");
  }

  if (sql.trim().toUpperCase().startsWith("SELECT")) {
    return json.result?.[0]?.results || [];
  }
  return true;
}

function getR2Client() {
  const endpoint =
    process.env.S3_API_ENDPOINT ||
    `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID || process.env.ACCESS_KEY_ID || "";
  const secretAccessKey =
    process.env.R2_SECRET_ACCESS_KEY || process.env.SECRET_ACCESS_KEY || "";

  if (!endpoint || !accessKeyId || !secretAccessKey) {
    throw new Error("ENV R2 belum lengkap.");
  }

  return new S3Client({
    region: "auto",
    endpoint,
    credentials: { accessKeyId, secretAccessKey },
  });
}

async function uploadToR2(file: File): Promise<string> {
  const bucketName = process.env.R2_BUCKET_NAME || "zpack";
  const publicDomain = (
    process.env.R2_PUBLIC_DOMAIN ||
    process.env.NEXT_PUBLIC_R2_PUBLIC_DOMAIN ||
    "https://assets.zpack.my.id"
  ).replace(/\/$/, "");

  const r2 = getR2Client();
  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const cleanName = file.name
    .replace(/\.[^/.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-");
  const key = `products/${Date.now()}-${cleanName}.${ext}`;

  const buffer = await file.arrayBuffer();
  await r2.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: new Uint8Array(buffer),
      ContentType: file.type,
    })
  );

  return `${publicDomain}/${key}`;
}

async function deleteFromR2(imgUrl: string) {
  if (!imgUrl || !imgUrl.includes("/products/")) return;
  try {
    const r2 = getR2Client();
    const bucketName = process.env.R2_BUCKET_NAME || "zpack";
    const key = "products/" + imgUrl.split("/products/")[1];
    await r2.send(
      new DeleteObjectCommand({
        Bucket: bucketName,
        Key: key,
      })
    );
  } catch {
    // Abaikan error jika file R2 sudah tidak ada
  }
}

// GET: Ambil daftar produk dari D1
export async function GET() {
  try {
    const rows = await executeD1("SELECT * FROM products ORDER BY rowid DESC");
    const list = (Array.isArray(rows) ? rows : [])
      .filter((r: any) => r && String(r.title || "").trim() !== "")
      .map((r: any) => ({
        id: r.id,
        category: r.category || "skincare",
        catLabel: r.cat_label || "Skincare & Kosmetik",
        title: r.title,
        badge: r.badge || "",
        img: r.img || "",
        priceEst: r.price_est || "",
        material: r.material || "",
        finishing: r.finishing || "",
        moq: r.moq || "500 pcs",
        desc: r.description || "",
        isActive: r.is_active === undefined ? true : Boolean(r.is_active),
      }));

    return NextResponse.json({ success: true, data: list, products: list });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err?.message || "Gagal memuat produk." },
      { status: 500 }
    );
  }
}

// POST: Upload foto ke R2 (FormData) ATAU tambah produk baru ke D1 (JSON)
export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      const file = formData.get("file") as File | null;

      if (!file) {
        return NextResponse.json({ success: false, message: "File tidak ada." }, { status: 400 });
      }
      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json(
          { success: false, message: "Format harus JPG/PNG/WEBP/AVIF." },
          { status: 400 }
        );
      }

      const url = await uploadToR2(file);
      return NextResponse.json({ success: true, url });
    }

    const body = await req.json();
    const { id, category, catLabel, title, badge, img, priceEst, material, finishing, moq, desc } =
      body;

    if (!id || !title || !img || !priceEst) {
      return NextResponse.json(
        { success: false, message: "ID, Judul, Foto, dan Estimasi Harga wajib diisi." },
        { status: 400 }
      );
    }

    await executeD1(
      `INSERT INTO products (
        id, category, cat_label, title, badge, img,
        price_est, min_price, material, finishing, moq, description, is_active
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)`,
      [
        id,
        category || "skincare",
        catLabel || "Skincare & Kosmetik",
        title,
        badge || "",
        img,
        priceEst,
        "",
        material || "",
        finishing || "",
        moq || "500 pcs",
        desc || "",
      ]
    );

    return NextResponse.json({ success: true, message: "Produk berhasil disimpan.", id });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err?.message || "Gagal menyimpan produk." },
      { status: 500 }
    );
  }
}

// PUT: Update produk berdasarkan ID
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      id,
      category,
      catLabel,
      title,
      badge,
      img,
      priceEst,
      material,
      finishing,
      moq,
      desc,
      isActive = true,
    } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: "ID produk wajib diisi." }, { status: 400 });
    }

    await executeD1(
      `UPDATE products SET
        category = ?, cat_label = ?, title = ?, badge = ?, img = ?,
        price_est = ?, material = ?, finishing = ?, moq = ?, description = ?, is_active = ?
      WHERE id = ?`,
      [
        category || "skincare",
        catLabel || "Skincare & Kosmetik",
        title,
        badge || "",
        img,
        priceEst,
        material || "",
        finishing || "",
        moq || "500 pcs",
        desc || "",
        isActive ? 1 : 0,
        id,
      ]
    );

    return NextResponse.json({ success: true, message: "Produk berhasil diperbarui." });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err?.message || "Gagal memperbarui produk." },
      { status: 500 }
    );
  }
}

// DELETE: Hapus produk di D1 & file di R2
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    let id = searchParams.get("id");

    if (!id) {
      try {
        const body = await req.json();
        id = body?.id || null;
      } catch {
        id = null;
      }
    }

    if (!id) {
      return NextResponse.json({ success: false, message: "ID produk wajib diisi." }, { status: 400 });
    }

    const existing: any = await executeD1("SELECT img FROM products WHERE id = ?", [id]);
    if (Array.isArray(existing) && existing[0]?.img) {
      await deleteFromR2(existing[0].img);
    }

    await executeD1("DELETE FROM products WHERE id = ?", [id]);

    return NextResponse.json({ success: true, message: "Produk berhasil dihapus." });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err?.message || "Gagal menghapus produk." },
      { status: 500 }
    );
  }
}