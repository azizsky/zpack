'use client';

import Link from 'next/link';

export default function CategoriesSection() {
  const categories = [
    {
      title: 'Packaging Makanan',
      slug: 'packaging-makanan',
      icon: '🍱',
      items: ['Catering box', 'Lunch Box', 'Cake Box', 'Snack Box', 'Box Nasi Kotak'],
    },
    {
      title: 'Skincare & Kosmetik',
      slug: 'skincare-kosmetik',
      icon: '💄',
      items: ['Dus Skincare', 'Dus Makeup', 'Dus Parfum', 'Dus Serum'],
    },
    {
      title: 'Label & Branding',
      slug: 'label-branding',
      icon: '🏷️',
      items: ['Hang Tag', 'Sticker', 'Label Stiker', 'Sleeve Kemasan'],
    },
    {
      title: 'Promotional Print',
      slug: 'promotional-print',
      icon: '📄',
      items: ['Brosur', 'Flyer', 'Banner', 'Poster'],
    },
    {
      title: 'General Print',
      slug: 'general-print',
      icon: '📚',
      items: ['Paper Bag', 'Kalender', 'Yasin & Maj\'mu', 'Amplop & Stiker', 'Undangan & Nota'],
    },
    {
      title: 'Undangan Digital',
      slug: 'undangan-digital',
      icon: '🌐',
      items: ['Undangan Wedding', 'Undangan Khitanan', 'Halal Bihalal & Event', 'Fitur RSVP & Maps', 'Amplop Digital/QRIS'],
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header Title */}
        <div className="flex flex-col items-center text-center mb-10 lg:mb-14">
          <span className="text-slate-700 dark:text-amber-400 font-bold text-xs sm:text-sm tracking-wider uppercase mb-2">
            LAYANAN KAMI
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mb-3 text-slate-900 dark:text-white">
            Packaging & Printing Categories
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base max-w-2xl leading-relaxed">
            Solusi lengkap cetak kemasan dan atribut promosi bisnis Anda dengan standar presisi tinggi.
          </p>
        </div>

        {/* Grid Kartu Kategori (2 Kolom di HP, 3 Kolom di Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 mb-10">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={`/produk?category=${cat.slug}`}
              className="group relative p-3 sm:p-6 rounded-2xl bg-white/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/50 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Title: Menggunakan flex-wrap agar teks panjang otomatis turun ke bawah dan tidak terpotong */}
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 border-b border-slate-200 dark:border-slate-800 pb-2.5">
                  <span className="text-lg sm:text-2xl p-1.5 sm:p-2 rounded-xl bg-blue-500/10 flex-shrink-0">
                    {cat.icon}
                  </span>
                  <h3 className="text-xs sm:text-base lg:text-lg font-bold text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-amber-300 transition-colors leading-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* List Items */}
                <ul className="space-y-1.5 sm:space-y-2">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-[11px] sm:text-sm text-slate-600 dark:text-slate-300 leading-snug">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-amber-500 mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        {/* Tombol Lihat Semua */}
        <div className="flex flex-col items-center justify-center text-center mt-6">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
            <span>💡</span> Klik kartu kategori untuk melihat produk lebih lanjut[cite: 15]
          </p>
          <Link
            href="/produk"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 dark:bg-slate-800 hover:bg-slate-700 dark:hover:bg-blue-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xl active:scale-95 border border-slate-700"
          >
            Lihat Semua & Estimasi Harga
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}