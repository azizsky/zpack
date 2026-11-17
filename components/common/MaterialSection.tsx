'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type TabKey = 'paper' | 'laminating' | 'foil' | 'emboss' | 'spotuv';

interface SpecItem {
  title: string;
  badge?: string;
  image: string;
  alt: string;
  char: string;
  gsm?: string;
  useLabel: string;
  use: string;
  articleHref: string;
  articleText: string;
}

export default function MaterialSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>('paper');

  const openMaterialModal = (tab: TabKey) => {
    setActiveTab(tab);
    setIsModalOpen(true);
  };

  const closeMaterialModal = () => {
    setIsModalOpen(false);
  };

  // Tutup modal dengan tombol ESC & kunci scroll body saat modal terbuka
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMaterialModal();
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const mainCards: {
    id: TabKey;
    title: string;
    subtitle: string;
    iconType: TabKey;
  }[] = [
    {
      id: 'paper',
      title: 'Pilihan Bahan Paperboard',
      subtitle: 'Ivory Paper, Duplex, Kraft, Art Carton, Rigid Board',
      iconType: 'paper',
    },
    {
      id: 'laminating',
      title: 'Laminating & Coating',
      subtitle: 'Doff/Matte, Glossy, Soft Touch, Water-Based',
      iconType: 'laminating',
    },
    {
      id: 'foil',
      title: 'Premium Foil Stamping',
      subtitle: 'Gold Foil, Silver, Rose Gold, Bronze, Holographic',
      iconType: 'foil',
    },
    {
      id: 'emboss',
      title: 'Emboss & Deboss Texture',
      subtitle: 'Single Level Emboss, Multi-Level 3D, Deboss Tenggelam',
      iconType: 'emboss',
    },
    {
      id: 'spotuv',
      title: 'Spot UV & Varnish Accent',
      subtitle: 'High Gloss Spot UV, Textured Varnish, Drip Off',
      iconType: 'spotuv',
    },
  ];

  const tabs: { id: TabKey; label: string }[] = [
    { id: 'paper', label: 'Bahan Paper' },
    { id: 'laminating', label: 'Laminasi' },
    { id: 'foil', label: 'Foil Stamping' },
    { id: 'emboss', label: 'Emboss / Deboss' },
    { id: 'spotuv', label: 'Spot UV' },
  ];

  const tabData: Record<TabKey, SpecItem[]> = {
    paper: [
      {
        title: 'Duplex Board',
        badge: 'Best Seller Makanan',
        image: '/images/materials/duplex-board.jpg',
        alt: 'Bahan Duplex Paper Zpack',
        char: 'Sisi depan putih halus (coated), sisi belakang serat abu-abu padat kokoh.',
        gsm: '210 GSM – 400 GSM',
        useLabel: 'Cocok Untuk',
        use: 'Box makanan takeaway, kardus obat/farmasi, paperbag ekonomis, kemasan sparepart.',
        articleHref: '/artikel/bahan-duplex-paper',
        articleText: 'Panduan Cetak Duplex Lengkap',
      },
      {
        title: 'Ivory Paper',
        badge: 'Premium Grade',
        image: '/images/materials/ivory-paper.jpg',
        alt: 'Bahan Ivory Paper Zpack',
        char: 'Sisi luar putih mengkilap mulus, sisi dalam putih doff bersih dan higienis.',
        gsm: '210 GSM – 350 GSM',
        useLabel: 'Cocok Untuk',
        use: 'Packaging kosmetik, skincare, box kue premium, kemasan fashion & produk mewah.',
        articleHref: '/artikel/bahan-ivory-paper',
        articleText: 'Panduan Cetak Ivory Lengkap',
      },
      {
        title: 'Kraft Paper (Cokelat)',
        badge: 'Eco Friendly',
        image: '/images/materials/kraft-paper.jpg',
        alt: 'Bahan Kraft Paper Eco Zpack',
        char: 'Warna cokelat alami dari daur ulang serat kayu, tampilan ramah lingkungan (rustic).',
        gsm: '150 GSM – 350 GSM',
        useLabel: 'Cocok Untuk',
        use: 'Packaging produk organik, kopi/teh, paperbag cafe, box distro, kemasan vintage.',
        articleHref: '/artikel/bahan-kraft-paper',
        articleText: 'Panduan Cetak Kraft Lengkap',
      },
      {
        title: 'Art Carton / Art Paper',
        image: '/images/materials/art-carton.jpg',
        alt: 'Bahan Art Carton Zpack',
        char: 'Kedua sisi putih mulus mengkilap (coated dua sisi), menyerap tinta cetak sangat tajam.',
        gsm: '190 GSM – 310 GSM',
        useLabel: 'Cocok Untuk',
        use: 'Packaging sleeve, hangtag baju, box makanan ringan, flyer, kartu garansi.',
        articleHref: '/artikel/bahan-art-carton',
        articleText: 'Panduan Cetak Art Carton Lengkap',
      },
      {
        title: 'Rigid / Chipboard (Hardbox)',
        badge: 'Hardbox Luxury',
        image: '/images/materials/rigid-board.jpg',
        alt: 'Bahan Rigid Hardbox Zpack',
        char: 'Papan karton sangat tebal & keras, dibungkus kertas art paper/fancy untuk tampilan super eksklusif.',
        gsm: '1.5 mm – 3.0 mm (Karton No. 30–40)',
        useLabel: 'Cocok Untuk',
        use: 'Hardbox parfum, box hampers lebaran/natal, box smartphone, gift box perhiasan.',
        articleHref: '/artikel/bahan-rigid-board',
        articleText: 'Panduan Cetak Rigid Board Lengkap',
      },
    ],
    laminating: [
      {
        title: 'Laminasi Doff (Matte)',
        badge: 'Matte Finish',
        image: '/images/materials/laminasi-doff.jpg',
        alt: 'Laminasi Doff Matte Zpack',
        char: 'Lapisan film tanpa pantulan cahaya, memberikan kesan mewah, eksklusif, hangat, dan sangat halus saat disentuh.',
        useLabel: 'Kelebihan',
        use: 'Anti-pantulan cahaya, tidak meninggalkan bekas sidik jari, dan sangat elegan jika dipadukan dengan Foil Stamping/Spot UV.',
        articleHref: '/artikel/finishing-laminasi-doff',
        articleText: 'Panduan Laminasi Doff Lengkap',
      },
      {
        title: 'Laminasi Glossy (Mengkilap)',
        badge: 'High Shine',
        image: '/images/materials/laminasi-glossy.jpg',
        alt: 'Laminasi Glossy Zpack',
        char: 'Lapisan film berkilau tinggi yang membuat warna cetakan terlihat jauh lebih kontras, cerah, dan tajam.',
        useLabel: 'Kelebihan',
        use: "Tahan terhadap air/minyak, warna cetak lebih 'pop out', serta memberikan efek proteksi ekstra pada permukaan kertas.",
        articleHref: '/artikel/finishing-laminasi-glossy',
        articleText: 'Panduan Laminasi Glossy Lengkap',
      },
    ],
    foil: [
      {
        title: 'Gold & Silver Foil Stamping',
        image: '/images/materials/gold-foil.jpg',
        alt: 'Gold Foil Stamping Zpack',
        char: 'Efek mengkilap emas/perak metalik asli dipress dengan klise panas ke atas kemasan.',
        useLabel: 'Kelebihan',
        use: 'Menyorot logo brand secara dramatis, memberikan impresi produk kelas atas.',
        articleHref: '/artikel/finishing-foil-stamping',
        articleText: 'Panduan Foil Stamping Lengkap',
      },
    ],
    emboss: [
      {
        title: 'Embossing (Tekstur Timbul)',
        badge: 'Raised Effect',
        image: '/images/materials/emboss-timbul.jpg',
        alt: 'Emboss Timbul Zpack',
        char: 'Proses penekanan klise dari bawah kertas sehingga elemen desain (logo/teks) terangkat timbul ke atas.',
        useLabel: 'Kelebihan',
        use: 'Memberikan efek 3D visual dan tekstur timbul yang terasa jelas saat diraba oleh calon konsumen.',
        articleHref: '/artikel/finishing-emboss',
        articleText: 'Panduan Emboss Lengkap',
      },
      {
        title: 'Debossing (Tekstur Tenggelam)',
        badge: 'Sunken Effect',
        image: '/images/materials/deboss-tenggelam.jpg',
        alt: 'Deboss Tenggelam Zpack',
        char: 'Proses penekanan klise dari atas kertas sehingga elemen desain cekung / tenggelam ke dalam.',
        useLabel: 'Kelebihan',
        use: 'Tampilan sangat rapi, clean, dan memberikan impresi craftsmanship tinggi (sangat disukai untuk bahan Hardbox & Kraft Paper).',
        articleHref: '/artikel/finishing-deboss',
        articleText: 'Panduan Deboss Lengkap',
      },
    ],
    spotuv: [
      {
        title: 'Spot UV (Titik Spesifik)',
        badge: 'Selective Gloss',
        image: '/images/materials/spot-uv.jpg',
        alt: 'Spot UV Zpack',
        char: 'Lapisan kimia UV mengkilap yang dicetak hanya di area/titik tertentu (misal hanya pada logo), permukaannya halus mengkilap namun tidak licin.',
        useLabel: 'Kelebihan',
        use: 'Menghasilkan kontras visual ekstrem jika dilapisi di atas laminasi Doff. Menegaskan titik fokus branding Anda.',
        articleHref: '/artikel/finishing-spot-uv',
        articleText: 'Panduan Spot UV Lengkap',
      },
      {
        title: 'Varnish UV (Coating Mengkilap)',
        badge: 'Full Surface Coating',
        image: '/images/materials/varnish-uv.jpg',
        alt: 'Varnish UV Overall Zpack',
        char: 'Lapisan varnish cair ke seluruh permukaan kertas yang dikeringkan dengan sinar UV. Berkilau mirip laminasi glossy, tetapi jauh lebih licin.',
        useLabel: 'Kelebihan',
        use: 'Pilihan ekonomis untuk memberikan efek mengkilap dan licin pada cetakan massal tanpa proses penempelan plastik laminasi.',
        articleHref: '/artikel/finishing-varnish-uv',
        articleText: 'Panduan Varnish UV Lengkap',
      },
    ],
  };

  const renderIcon = (type: TabKey) => {
    switch (type) {
      case 'paper':
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        );
      case 'laminating':
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        );
      case 'foil':
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3-1.9 5.8-5.8 1.9 5.8 1.9L12 18.5l1.9-5.8 5.8-1.9-5.8-1.9L12 3z" />
            <path d="m5 3 .9 2.7L8.5 6.5 5.8 7.4 5 10l-.9-2.6L1.5 6.5 4.1 5.6 5 3z" />
          </svg>
        );
      case 'emboss':
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <path d="M9 15V9h6v6H9z" />
          </svg>
        );
      case 'spotuv':
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        );
    }
  };

  return (
    <section id="materials" className="relative w-full overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs sm:text-[0.95rem] font-bold text-amber-500 dark:text-[#d4af37] tracking-[1.5px] uppercase mb-2">
            SPEKSIFIKASI &amp; MATERIAL CETAK
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold tracking-[-0.5px] leading-[1.3] text-slate-900 dark:text-white mb-3">
            Pilihan Bahan &amp; Finishing Premium
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm lg:text-[1.05rem] leading-relaxed">
            Sesuaikan karakter kemasan brand Anda dengan ragam pilihan kertas berkualitas dan teknik finishing eksklusif.
          </p>
        </div>

        {/* 5 MAIN CARDS GRID: 2 Kolom di Mobile, 5 Kolom di Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-5 w-full">
          {mainCards.map((card) => (
            <div
              key={card.id}
              onClick={() => openMaterialModal(card.id)}
              className="group rounded-xl p-4 sm:p-6 bg-slate-600 dark:bg-[#121926]/[0.75] border border-slate-500/30 dark:border-white/10 hover:border-amber-400/60 backdrop-blur-md flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              <div>
                <div className="mb-3 sm:mb-4 flex items-center text-white group-hover:text-amber-400 transition-colors duration-300 select-none overflow-hidden">
                  {renderIcon(card.iconType)}
                </div>
                <h3 className="text-base sm:text-[1.15rem] font-semibold text-white mb-1.5 sm:mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[0.75rem] sm:text-[0.85rem] text-slate-200 dark:text-[#a0a0a0] leading-[1.4] mb-4 sm:mb-5">
                  {card.subtitle}
                </p>
              </div>

              <div className="flex items-center justify-between text-[0.7rem] sm:text-[0.8rem] font-semibold text-amber-400 dark:text-[#d4af37] pt-2 border-t border-white/5">
                <span className="line-clamp-1">Lihat Detail &amp; Foto</span>
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL POPUP KATALOG MATERIAL & FINISHING */}
      {isModalOpen && (
        <div
          id="materialModal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Overlay */}
          <div
            onClick={closeMaterialModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-[8px] transition-opacity"
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-[1000px] max-h-[85vh] bg-[#141414] border border-white/[0.12] rounded-2xl flex flex-col overflow-hidden shadow-2xl">
            
            {/* Modal Header */}
            <div className="px-5 sm:px-7 py-5 border-b border-white/[0.08] flex items-center justify-between">
              <h3 className="text-lg sm:text-[1.25rem] font-bold text-white">
                Spesifikasi Material &amp; Finishing
              </h3>
              <button
                onClick={closeMaterialModal}
                aria-label="Tutup Popup"
                className="text-[#a0a0a0] hover:text-white text-2xl leading-none px-2 py-1 transition-colors cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex items-center gap-2.5 px-5 sm:px-12 py-3 bg-black/30 border-b border-white/[0.08] overflow-x-auto no-scrollbar">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`h-[32px] px-4 rounded-md text-[0.85rem] whitespace-nowrap transition-all cursor-pointer flex items-center justify-center ${
                      isActive
                        ? 'bg-[#e1e1e1bf] text-black font-semibold'
                        : 'bg-transparent text-[#a0a0a0] hover:text-white font-normal'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-7 overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tabData[activeTab].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/[0.02] border border-white/[0.06] rounded-xl overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-[180px] w-full bg-slate-800">
                        <img
                          src={item.image}
                          alt={item.alt}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        {item.badge && (
                          <span className="absolute top-3 right-3 bg-[#d4af37] text-black text-[0.7rem] font-bold px-2 py-1 rounded-sm">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <div className="p-5">
                        <h4 className="text-[1.1rem] font-bold text-white mb-2.5">
                          {item.title}
                        </h4>
                        <p className="text-[0.82rem] text-[#cccccc] leading-relaxed mb-2">
                          <strong className="text-white">Karakter:</strong> {item.char}
                        </p>
                        {item.gsm && (
                          <p className="text-[0.82rem] text-[#cccccc] leading-relaxed mb-2">
                            <strong className="text-white">Opsi Ketebalan:</strong> {item.gsm}
                          </p>
                        )}
                        <p className="text-[0.82rem] text-[#cccccc] leading-relaxed mb-2">
                          <strong className="text-white">{item.useLabel}:</strong> {item.use}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5">
                      <Link
                        href={item.articleHref}
                        onClick={closeMaterialModal}
                        className="inline-block mt-1 text-[#d4af37] hover:underline text-[0.85rem] font-semibold"
                      >
                        {item.articleText} &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}