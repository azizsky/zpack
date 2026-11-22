"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import InstallAppButton from "./installappbutton";

export interface AdminCategoryItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
  href: string;
  badge?: string;
}

/**
 * Komponen Card satuan yang bisa dipakai ulang atau di-map di grid admin
 */
function AdminMenuCard({ item }: { item: AdminCategoryItem }) {
  return (
    <Link
      href={item.href}
      className="relative bg-[#0e172a] border border-slate-800 hover:border-amber-400/80 dark:hover:border-[#d4af37] rounded-xl p-6 transition-all duration-200 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-0.5"
    >
      {item.badge && (
        <span className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25">
          {item.badge}
        </span>
      )}

      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-200">
        {item.icon}
      </div>

      <h2 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
        {item.title}
      </h2>

      <p className="text-sm text-gray-400 leading-relaxed">
        {item.desc}
      </p>
    </Link>
  );
}

export default function AdminDashboardPage() {
  const router = useRouter();

  const categories: AdminCategoryItem[] = [
    {
      id: "products",
      title: "Kelola Produk & Kemasan",
      desc: "Input, edit, & atur katalog box skincare, food packaging, stiker, dan harga DB.",
      icon: "📦",
      href: "/admin/dashboard/products",
      badge: "ZPack DB",
    },
    {
      id: "wedding",
      title: "Undangan Pernikahan",
      desc: "Untuk akad nikah, resepsi, lamaran, & engagement.",
      icon: "💍",
      href: "/admin/dashboard/wedding",
    },
    {
      id: "syukuran",
      title: "Khitan / Syukuran / Ultah",
      desc: "Untuk walimatul khitan, ulang tahun, & syukuran keluarga.",
      icon: "🎉",
      href: "/admin/dashboard/syukuran",
    },
    {
      id: "event",
      title: "Undangan Event",
      desc: "Untuk seminar, konser, reuni, & acara komunitas.",
      icon: "🎟️",
      href: "/admin/dashboard/event",
    },
    {
      id: "songs",
      title: "Kelola Lagu / Musik",
      desc: "Tambah atau hapus musik latar R2 Cloudflare untuk undangan.",
      icon: "🎵",
      href: "/admin/dashboard/songs",
    },
    {
      id: "bukutamu",
      title: "Kelola Buku Tamu",
      desc: "Lihat ucapan, doa, serta konfirmasi kehadiran dari para tamu.",
      icon: "📖",
      href: "/admin/dashboard/bukutamu",
    },
    {
      id: "kelolatemplate",
      title: "Kelola Template",
      desc: "Pilih dan ubah desain atau tema yang digunakan setiap undangan.",
      icon: "🎨",
      href: "/admin/dashboard/kelolatemplate",
    },
    {
      id: "packages",
      title: "Kelola Paket & Harga",
      desc: "Atur daftar paket langganan (Basic, Premium, dll) beserta harganya.",
      icon: "💎",
      href: "/admin/dashboard/packages",
    },
  ];

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/admin/logout", {
        method: "POST",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Logout gagal: HTTP ${response.status}`);
      }

      router.replace("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Logout gagal:", error);
      alert("Logout gagal. Periksa koneksi dan coba lagi.");
    }
  };

  return (
    <div className="min-h-screen bg-[#070d19] text-white p-6 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-1">Panel Kelola ZPack &amp; Undangan</h1>
            <p className="text-gray-400 text-sm">
              Pilih menu katalog produk, kategori acara, atau pengaturan sistem yang ingin kamu kelola
            </p>
          </div>

          <div className="flex items-center gap-3">
            <InstallAppButton />
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 text-sm font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              🚪 Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <AdminMenuCard key={cat.id} item={cat} />
          ))}
        </div>
      </div>
    </div>
  );
}