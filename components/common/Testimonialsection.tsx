'use client';

import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Amalia',
      role: 'Owner Brand Skincare (Bandung)',
      quote:
        'Hasil cetak box kosmetik kami rapi banget! Warna emas foil-nya tajam dan potongan presisi. Masalah desain juga dibantu sampai benar-benar siap cetak. Mantap Zpack!',
    },
    {
      name: 'Budi Santoso',
      role: 'Founder Kuliner Nusantara',
      quote:
        'Paling gokil sih free sample dummy-nya. Jadi bisa fitting dulu sama produk sebelum cetak massal 5.000 pcs. Pengiriman se-Bandung juga benar-benar gratis dan tepat waktu.',
    },
    {
      name: 'Diki Setiadi',
      role: 'Purchasing Manager Cafe & Resto',
      quote:
        'Proses cepat dan fast respon via WA. Bahan Duplex-nya kokoh buat box takeaway makanan. Harga langsung pabrik jadi tekan biaya operasional kami.',
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative w-full py-16 md:py-20 lg:py-24 border-t border-slate-200 dark:border-white/5"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
        
        {/* Header Section Testimoni */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
          <span className="inline-block text-xs sm:text-[0.9rem] font-bold text-amber-600 dark:text-[#d4af37] tracking-[1.5px] uppercase mb-2.5">
            TESTIMONI KLIEN ZPACK
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-extrabold tracking-[-0.5px] leading-[1.25] text-slate-900 dark:text-white mb-3.5">
            Apa Kata Mereka yang Sudah Order di ZPack?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Pengalaman nyata dari ratusan pemilik brand, pelaku UMKM, dan perusahaan yang mempercayakan kebutuhan kemasan mereka kepada kami.
          </p>
        </div>

        {/* Grid 3 Kolom Testimoni */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-slate-100/80 dark:bg-[#151a23]/80 border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/40 dark:hover:border-[#d4af37]/40 transition-all duration-300 shadow-sm hover:shadow-lg backdrop-blur-sm"
            >
              <div>
                {/* Header: 5 Bintang & Badge Verified Order */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div
                    className="text-amber-500 dark:text-[#d4af37] text-base sm:text-lg tracking-widest select-none"
                    aria-label="5 out of 5 stars"
                  >
                    ★★★★★
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-amber-500/15 dark:bg-[#d4af37]/15 text-amber-700 dark:text-[#d4af37] border border-amber-500/25 dark:border-[#d4af37]/25">
                    Verified Order
                  </span>
                </div>

                {/* Kutipan Testimoni (Italic) */}
                <p className="text-sm sm:text-[0.92rem] italic text-slate-700 dark:text-slate-300 leading-relaxed mb-7">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-2">
                <strong className="block text-sm sm:text-[0.95rem] font-bold text-slate-900 dark:text-white mb-0.5">
                  {item.name}
                </strong>
                <span className="block text-xs text-slate-500 dark:text-slate-400">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}