'use client';

import React from 'react';

export default function CtaFinalSection() {
  return (
    <section
      id="cta-final"
      className="relative w-full py-20 md:py-28 lg:py-32 border-t border-slate-200 dark:border-white/5 overflow-hidden"
    >
      {/* Ambient Radial Glow di Tengah (Pengganti kotak card agar tetap mewah & fokus) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[760px] h-[280px] sm:h-[340px] rounded-full bg-amber-500/10 dark:bg-[#d4af37]/[0.08] blur-[110px] -z-10"
      />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          
          {/* Subtitle / Eyebrow */}
          <span className="inline-block text-xs sm:text-[0.9rem] font-bold text-amber-600 dark:text-[#d4af37] tracking-[2px] uppercase mb-3.5">
            MULAI KONSULTASI SEKARANG
          </span>

          {/* Judul Utama */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.5px] leading-[1.2] text-slate-900 dark:text-white mb-5">
            Siap Wujudkan Kemasan Premium untuk Brand Anda?
          </h2>

          {/* Deskripsi */}
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-[1.08rem] leading-relaxed mb-9 max-w-2xl">
            Konsultasikan spesifikasi cetak, dapatkan estimasi harga instant, dan minta{' '}
            <strong className="text-slate-900 dark:text-white font-semibold">
              Sample Dummy Gratis
            </strong>{' '}
            langsung via WhatsApp.
          </p>

          {/* MAIN CTA BUTTON (WhatsApp) */}
          <a
            href="https://wa.me/6281217780249?text=Halo%20Zpack%2C%20saya%20mau%20konsultasi%20cetak%20kemasan%20dan%20minta%20estimasi%20harga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:shadow-[0_0_45px_rgba(212,175,55,0.55)] transition-all duration-300 hover:-translate-y-0.5 mb-12"
          >
            <svg
              className="w-5 h-5 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>Konsultasi &amp; Hitung Harga via WA</span>
          </a>

          {/* Garis Pemisah Minimalis */}
          <div className="w-full max-w-md flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/15 to-transparent" />
            <span className="text-xs text-slate-500 dark:text-slate-400 tracking-wide whitespace-nowrap">
              Atau temukan Zpack di platform lain
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/15 to-transparent" />
          </div>

          {/* MULTI-CHANNEL SOCIAL & MARKETPLACE LINKS (Gaya Pill Ringan) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            
            {/* Shopee Link */}
            <a
              href="https://shopee.co.id/AAGB8Ysb9X"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/70 dark:bg-white/[0.04] hover:bg-slate-200/70 dark:hover:bg-white/[0.09] border border-slate-200 dark:border-white/10 hover:border-amber-500/40 dark:hover:border-[#d4af37]/40 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white text-xs sm:text-sm font-medium transition-all duration-200"
            >
              <svg
                className="w-4 h-4 text-orange-500 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.38 8.082h-3.416a4.02 4.02 0 0 0-7.928 0H4.62a1.32 1.32 0 0 0-1.32 1.32v11.136a1.32 1.32 0 0 0 1.32 1.32h14.76a1.32 1.32 0 0 0 1.32-1.32V9.402a1.32 1.32 0 0 0-1.32-1.32ZM12 5.34a2.7 2.7 0 0 1 2.614 2.742H9.386A2.7 2.7 0 0 1 12 5.341Zm6.38 13.838H5.62V9.402h2.364v1.8h1.32v-1.8h5.432v1.8h1.32v-1.8h2.364v9.776Z" />
              </svg>
              <span>Shopee Official Store</span>
            </a>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/zpack_official?igsh=MTVzMXNxcjdkMXE2ZQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/70 dark:bg-white/[0.04] hover:bg-slate-200/70 dark:hover:bg-white/[0.09] border border-slate-200 dark:border-white/10 hover:border-amber-500/40 dark:hover:border-[#d4af37]/40 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white text-xs sm:text-sm font-medium transition-all duration-200"
            >
              <svg
                className="w-4 h-4 text-pink-500 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram Portofolio</span>
            </a>

            {/* TikTok Link */}
            <a
              href="https://tiktok.com/@zpack_official"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/70 dark:bg-white/[0.04] hover:bg-slate-200/70 dark:hover:bg-white/[0.09] border border-slate-200 dark:border-white/10 hover:border-amber-500/40 dark:hover:border-[#d4af37]/40 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white text-xs sm:text-sm font-medium transition-all duration-200"
            >
              <svg
                className="w-4 h-4 text-cyan-500 dark:text-cyan-400 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.28-2.36.54-4.74 2.17-6.41 1.55-1.63 3.77-2.52 6.02-2.42.09 1.39-.02 2.78-.02 4.17-.67-.07-1.36.03-1.99.27-.92.35-1.67 1.07-2.02 2-.43 1.09-.27 2.36.38 3.32.61.93 1.66 1.54 2.76 1.63 1.22.1 2.44-.3 3.27-1.2.68-.73 1.03-1.72 1.02-2.73V.02z" />
              </svg>
              <span>TikTok Video Process</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}