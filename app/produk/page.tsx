
'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import Image from 'next/image';

function ProdukContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Kategori tab yang tersedia
  const tabCategories = [
    { id: 'semua', label: 'Semua Produk' },
    {
      id: 'packaging-makanan',
      label: 'Packaging Makanan',
      desc: 'Dus makanan & lunch box berbahan foodgrade tahan minyak & aman.',
    },
    {
      id: 'skincare-kosmetik',
      label: 'Skincare & Kosmetik',
      desc: 'Kemasan dus eksklusif untuk serum, cream, lotion, dan produk kosmetik.',
    },
    {
      id: 'label-branding',
      label: 'Label & Branding',
      desc: 'Stiker kemasan, label botol, dan hangtag untuk memperkuat brand Anda.',
    },
    {
      id: 'promotional-print',
      label: 'Promotional Print',
      desc: 'Brosur, poster, dan materi promosi untuk event & pemasaran.',
    },
    {
      id: 'general-print',
      label: 'General Print',
      desc: 'Paperbag, nota, kalender, dan kebutuhan cetak umum lainnya.',
    },
    {
      id: 'undangan-digital',
      label: 'Undangan Digital',
      desc: 'Platform web undangan digital interaktif modern.',
    },
  ];

  // Baca kategori awal dari query URL ?category=...
  const categoryQuery = searchParams.get('category') || 'semua';
  const [activeCategory, setActiveCategory] = useState(categoryQuery);

  // Sync state dengan query URL jika ada perubahan
  useEffect(() => {
    setActiveCategory(searchParams.get('category') || 'semua');
  }, [searchParams]);

  // Handle klik tombol tab
  const handleTabChange = (id: string) => {
    setActiveCategory(id);

    if (id === 'semua') {
      router.push('/produk', { scroll: false });
    } else {
      router.push(`/produk?category=${id}`, { scroll: false });
    }
  };

  // Mendapatkan detail deskripsi kategori aktif
  const currentTabInfo = tabCategories.find(
    (t) => t.id === activeCategory
  );

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">

      {/* Title Katalog */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
          Katalog Packaging & Cetak Custom
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          Pilih kategori kemasan sesuai kebutuhan brand kamu untuk melihat spesifikasi bahan dan perkiraan harga.
        </p>
      </div>

      {/* Navigation Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10 border-b border-slate-200 dark:border-slate-800">
        {tabCategories.map((tab) => {
          const isActive = activeCategory === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Header Info Kategori Aktif */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-amber-500 capitalize">
          {currentTabInfo?.label}
        </h2>

        {currentTabInfo?.desc && (
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            {currentTabInfo.desc}
          </p>
        )}
      </div>

      {/* Banner Catatan Harga */}
      <div className="mb-8 p-4 rounded-xl bg-slate-100 dark:bg-slate-900/80 border-l-4 border-amber-500 text-slate-700 dark:text-slate-300 text-xs sm:text-sm flex items-start gap-3">
        <span className="text-lg">ℹ️</span>

        <div>
          <strong className="text-slate-900 dark:text-white">
            Catatan Harga:
          </strong>{' '}
          Perkiraan harga di bawah bersifat{' '}
          <span className="font-semibold text-amber-500">
            estimasi awal
          </span>
          . Harga pasti akan disesuaikan dengan ukuran presisi, variasi finishing,
          serta total jumlah (QTY) pesanan kamu.
        </div>
      </div>

      {/* Container Grid Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Nanti di sini mapping data produk dari API Cloudflare D1 kamu */}
      </div>

    </div>
  );
}

export default function ProdukPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-slate-500">
          Memuat katalog produk...
        </div>
      }
    >
      <ProdukContent />
    </Suspense>
  );
}
