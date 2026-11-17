'use client';

import React from 'react';
import Link from 'next/link';

export default function AdvantagesSection() {
  const benefits = [
    {
      num: '1',
      title: 'Cover Garansi Cacat Produksi',
      desc: 'Perlindungan 100% garansi ganti baru tanpa perdebatan jika terdapat kesalahan teknis cetak atau bahan dari kami.',
    },
    {
      num: '2',
      title: 'Free Sample Dummy (Contoh Fisik)',
      desc: 'Coba langsung sampel fisik/dummy kemasan sebelum cetak massal untuk memastikan presisi ukuran dan lipatan.',
    },
    {
      num: '3',
      title: 'Free Design & Revisi Sampai Jadi',
      desc: 'Tim desainer Zpack siap membantu penataan tata letak (layout) dan revisi desain kemasan Anda tanpa biaya tambahan.',
    },
    {
      num: '4',
      title: 'Free Ongkir Se-Kota Bandung',
      desc: 'Layanan bebas biaya pengiriman langsung ke alamat, toko, atau gudang Anda khusus wilayah Kota Bandung.',
    },
    {
      num: '5',
      title: 'Pilihan Bahan & Finishing Terlengkap',
      desc: 'Bebas berkreasi menggunakan Ivory, Duplex, Kraft, hingga finishing Foil Stamping, Emboss/Deboss, dan Spot UV.',
    },
    {
      num: '6',
      title: 'Harga Sangat Bersaing (Direct Factory)',
      desc: 'Penawaran harga langsung dari pabrik/produsen tanpa perantara, tetap menjaga standar kualitas material tertinggi.',
    },
    {
      num: '7',
      title: 'Kualitas Terjamin & Skala Besar',
      desc: 'Didukung mesin industri presisi tinggi yang siap memproduksi kemasan dari ribuan hingga ratusan ribu pcs.',
    },
    {
      num: '8',
      title: 'Terpercaya oleh Banyak Brand & UMKM',
      desc: 'Dipercaya oleh ratusan brand kuliner, kosmetik, fashion, dan manufaktur sebagai mitra cetak kemasan andalan.',
    },
  ];

  return (
    <section
      id="advantages"
      className="relative w-full py-20 lg:py-24 border-t border-slate-200 dark:border-white/5 overflow-visible"
    >
      {/* Animasi Keyframes Khusus untuk Efek Gelombang Liquid Gemini Live */}
      <style jsx>{`
        @keyframes liquidFlow1 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(25%, -20%) scale(1.2) rotate(120deg);
          }
          66% {
            transform: translate(-15%, 20%) scale(0.9) rotate(240deg);
          }
        }
        @keyframes liquidFlow2 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1.1) rotate(0deg);
          }
          33% {
            transform: translate(-25%, 15%) scale(0.85) rotate(-120deg);
          }
          66% {
            transform: translate(20%, -25%) scale(1.15) rotate(-240deg);
          }
        }
        @keyframes liquidFlow3 {
          0%, 100% {
            transform: translate(0%, 0%) scale(0.95);
          }
          50% {
            transform: translate(15%, 15%) scale(1.25);
          }
        }
        .animate-liquid-1 {
          animation: liquidFlow1 4s ease-in-out infinite;
        }
        .animate-liquid-2 {
          animation: liquidFlow2 8s ease-in-out infinite;
        }
        .animate-liquid-3 {
          animation: liquidFlow3 4s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
        
        {/* Layout Split: Kiri (Sticky Pitch, Video & Z-AI Liquid Glass) & Kanan (8 Poin Keunggulan) */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-[60px] items-start">
          
          {/* SISI KIRI */}
          <div className="lg:sticky lg:top-24 flex flex-col gap-6">
            <div>
              <span className="inline-block text-xs sm:text-[0.95rem] font-bold text-slate-700 dark:text-[#d4af37] tracking-[1.5px] uppercase mb-2">
                KEUNTUNGAN CETAK DI ZPACK
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-extrabold tracking-[-0.5px] leading-[1.25] text-slate-900 dark:text-white mb-4">
                Solusi Kemasan Tanpa Khawatir &amp; Bebas Risiko
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-[1.02rem] leading-relaxed">
                Kami mendampingi setiap langkah pembuatan kemasan Anda—mulai dari konsep desain, uji coba sampel, hingga pengiriman barang dengan jaminan kualitas penuh.
              </p>
            </div>

            {/* Garansi Badge Highlight */}
            <div className="p-5 rounded-xl bg-amber-500/10 dark:bg-[#d4af37]/[0.06] border border-amber-500/30 dark:border-[#d4af37]/30 flex items-center gap-4">
              <div className="flex-shrink-0 text-amber-500 dark:text-[#d4af37]">
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <strong className="block text-sm font-bold text-amber-600 dark:text-[#d4af37] mb-1 tracking-wide">
                  GARANSI CACAT PRODUKSI
                </strong>
                <p className="text-xs sm:text-[0.82rem] text-slate-700 dark:text-[#cccccc] leading-relaxed m-0">
                  Jaminan ganti baru jika hasil cetak mengalami kerusakan atau kesalahan dari pihak kami.
                </p>
              </div>
            </div>

            {/* Video Showcase Mesin & Produksi Zpack */}
            <div className="rounded-xl overflow-hidden border border-slate-300 dark:border-white/10 shadow-lg bg-slate-900 relative group">
              <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-bold text-[#d4af37] tracking-wider uppercase border border-white/10 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Direct Factory Production
              </div>

              <video
                className="w-full h-[220px] sm:h-[250px] lg:h-[280px] object-cover group-hover:scale-105 transition-transform duration-700"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/production-video.mp4" type="video/mp4" />
                Browser Anda tidak mendukung pemutar video.
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4 pointer-events-none">
                <p className="text-xs text-white/90 font-medium leading-snug">
                  Teknologi cetak presisi tinggi Heidelberg &amp; mesin pond otomatis in-house Zpack Bandung.
                </p>
              </div>
            </div>

            {/* ==============================================================
                KONTENER BARU: Z-AI ASSISTANT LIQUID GLASS (GEMINI LIVE STYLE)
               ============================================================== */}
           <Link
              href="/Z-Ai-Assistant"
              className="hidden lg:flex relative w-full h-[240px] rounded-2xl p-8 overflow-hidden bg-[#0a0d14] border border-purple-500/30 shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] hover:shadow-[0_0_60px_-5px_rgba(217,70,239,0.5)] flex-col justify-between group cursor-pointer transition-all duration-500"
            >
              {/* LAYER BACKGROUND TERISOLASI: 100% Bebas dari gangguan hover (tidak nge-glitch/tersendat) */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0">
                  {/* Blob 1: Biru Elektrik & Indigo */}
                  <div className="animate-liquid-1 absolute -top-16 -left-16 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 opacity-70 blur-3xl mix-blend-screen" />
                  {/* Blob 2: Ungu Mendalam & Magenta */}
                  <div className="animate-liquid-2 absolute -bottom-16 -right-12 w-68 h-68 rounded-full bg-gradient-to-bl from-purple-600 via-fuchsia-600 to-pink-500 opacity-75 blur-3xl mix-blend-screen" />
                  {/* Blob 3: Violet Terang untuk kontras acak */}
                  <div className="animate-liquid-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-blue-500 opacity-60 blur-3xl mix-blend-screen" />
                </div>
              </div>

              {/* Glass Overlay Backdrop */}
              <div className="absolute inset-0 bg-black/45 backdrop-blur-md pointer-events-none z-10" />

              {/* Konten Utama */}
              <div className="relative z-20 flex flex-col items-center text-center justify-center h-full gap-6">
                <span className="text-xs sm:text-[0.9rem] font-bold tracking-widest uppercase text-purple-300/90 drop-shadow">
                  BUTUH REKOMENDASI KEMASAN CEPAT?
                </span>

                {/* Pill Bar Kaca Liquid Glass */}
                <div className="w-full flex items-center justify-between gap-3 px-5 py-3.5 rounded-full bg-white/[0.12] group-hover:bg-white/[0.22] border border-purple-400/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_0_25px_rgba(168,85,247,0.35)] backdrop-blur-xl transition-all duration-300">
                  
                  {/* Ikon Maskot / Bot AI dengan gradasi ungu-magenta */}
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-tr from-purple-600 to-fuchsia-500 flex items-center justify-center text-white shadow-[0_0_18px_rgba(217,70,239,0.8)]">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 8V4H8" />
                      <rect width="16" height="12" x="4" y="8" rx="2" />
                      <path d="M2 14h2" />
                      <path d="M20 14h2" />
                      <path d="M15 13v2" />
                      <path d="M9 13v2" />
                    </svg>
                  </div>

                  {/* Teks Utama */}
                  <span className="font-mono text-base font-bold tracking-wide text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] truncate">
                    Tanya ke Z-AI Assistant
                  </span>

                  {/* Tombol Lingkaran Panah Kanan */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-purple-400/70 bg-white/10 group-hover:bg-purple-500 group-hover:text-white text-white flex items-center justify-center transition-colors duration-300 shadow-[0_0_12px_rgba(168,85,247,0.4)]">
                    <svg
                      className="w-4 h-4 translate-x-[1px] group-hover:translate-x-0.5 transition-transform"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* SISI KANAN: Typography List dengan Efek Hover Emas */}
          <div>
            <ol className="list-none p-0 m-0">
              {benefits.map((item, idx) => (
                <li
                  key={idx}
                  className="group flex items-start gap-6 py-6 px-2 border-b border-slate-200 dark:border-white/10 hover:border-amber-500 dark:hover:border-[#d4af37] transition-all duration-300 cursor-default"
                >
                  {/* Nomor Monospace */}
                  <span className="p-2 text-lg sm:text-xl font-bold font-mono text-slate-900/60 dark:text-[#d4af37]/60 group-hover:text-amber-500 dark:group-hover:text-[#d4af37] group-hover:scale-110 transition-all duration-300 select-none">
                    {item.num}
                  </span>

                  {/* Konten Teks */}
                  <div className="flex-1 group-hover:translate-x-1.5 transition-transform duration-300">
                    <h3 className="text-base sm:text-[1.15rem] font-bold text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-[#d4af37] mb-1.5 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[0.88rem] text-slate-600 dark:text-[#a0a0a0] leading-relaxed m-0">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

        </div>

      </div>
    </section>
  );
}