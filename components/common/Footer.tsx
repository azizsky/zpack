'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full bg-slate-100/80 dark:bg-[#0d121a] border-t border-slate-200 dark:border-white/[0.08] pt-14 sm:pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
        
        {/* Grid 4 Kolom Utama (1 Kolom di HP, 2 di Tablet, 4 di Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200 dark:border-white/[0.08]">
          
          {/* BLOK 1: BRAND & SOSMED (4 Kolom Grid) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="mb-4">
              <h3 className="text-2xl font-extrabold tracking-tight text-amber-600 dark:text-[#d4af37] leading-none">
                ZPACK
              </h3>
              <span className="block text-[11px] font-bold tracking-[2px] text-slate-600 dark:text-slate-400 uppercase mt-1.5">
                PRINTING &amp; PACKAGING
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-sm">
              Mitra cetak kemasan custom, box kosmetik, box makanan, dan percetakan offset profesional skala UMKM hingga korporat.
            </p>

            {/* Social Links Bulat */}
            <div className="flex items-center gap-3">
              <a
                href="https://shopee.co.id/AAGB8Ysb9X"
                target="_blank"
                rel="noopener noreferrer"
                title="Shopee Zpack"
                aria-label="Shopee Zpack"
                className="w-9 h-9 rounded-full bg-slate-200/80 dark:bg-white/[0.06] hover:bg-amber-500/15 dark:hover:bg-[#d4af37]/20 border border-slate-300/60 dark:border-white/10 hover:border-amber-500/50 dark:hover:border-[#d4af37]/50 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-[#d4af37] flex items-center justify-center transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M19.38 8.082h-3.416a4.02 4.02 0 0 0-7.928 0H4.62a1.32 1.32 0 0 0-1.32 1.32v11.136a1.32 1.32 0 0 0 1.32 1.32h14.76a1.32 1.32 0 0 0 1.32-1.32V9.402a1.32 1.32 0 0 0-1.32-1.32ZM12 5.34a2.7 2.7 0 0 1 2.614 2.742H9.386A2.7 2.7 0 0 1 12 5.341Zm6.38 13.838H5.62V9.402h2.364v1.8h1.32v-1.8h5.432v1.8h1.32v-1.8h2.364v9.776Z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/zpack_official?igsh=MTVzMXNxcjdkMXE2ZQ=="
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram Zpack"
                aria-label="Instagram Zpack"
                className="w-9 h-9 rounded-full bg-slate-200/80 dark:bg-white/[0.06] hover:bg-amber-500/15 dark:hover:bg-[#d4af37]/20 border border-slate-300/60 dark:border-white/10 hover:border-amber-500/50 dark:hover:border-[#d4af37]/50 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-[#d4af37] flex items-center justify-center transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://tiktok.com/@zpack_official"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok Zpack"
                aria-label="TikTok Zpack"
                className="w-9 h-9 rounded-full bg-slate-200/80 dark:bg-white/[0.06] hover:bg-amber-500/15 dark:hover:bg-[#d4af37]/20 border border-slate-300/60 dark:border-white/10 hover:border-amber-500/50 dark:hover:border-[#d4af37]/50 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-[#d4af37] flex items-center justify-center transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.28-2.36.54-4.74 2.17-6.41 1.55-1.63 3.77-2.52 6.02-2.42.09 1.39-.02 2.78-.02 4.17-.67-.07-1.36.03-1.99.27-.92.35-1.67 1.07-2.02 2-.43 1.09-.27 2.36.38 3.32.61.93 1.66 1.54 2.76 1.63 1.22.1 2.44-.3 3.27-1.2.68-.73 1.03-1.72 1.02-2.73V.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* BLOK 2A: NAVIGASI (2 Kolom Grid) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-slate-900 dark:text-white mb-4">
              NAVIGASI
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="#hero" className="hover:text-amber-600 dark:hover:text-[#d4af37] transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-amber-600 dark:hover:text-[#d4af37] transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-amber-600 dark:hover:text-[#d4af37] transition-colors">
                  Layanan &amp; Mesin
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-amber-600 dark:hover:text-[#d4af37] transition-colors">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link href="#articles" className="hover:text-amber-600 dark:hover:text-[#d4af37] transition-colors">
                  Artikel &amp; Edukasi
                </Link>
              </li>
            </ul>
          </div>

          {/* BLOK 2B: PRODUK & PACKAGING (3 Kolom Grid) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-slate-900 dark:text-white mb-4">
              PRODUK &amp; PACKAGING
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="#products" className="hover:text-amber-600 dark:hover:text-[#d4af37] transition-colors">
                  Box Skincare &amp; Kosmetik
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-amber-600 dark:hover:text-[#d4af37] transition-colors">
                  Packaging Food &amp; Takeaway
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-amber-600 dark:hover:text-[#d4af37] transition-colors">
                  Paperbag &amp; Label Stiker
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-amber-600 dark:hover:text-[#d4af37] transition-colors">
                  Brosur, Amplop &amp; Undangan
                </Link>
              </li>
            </ul>
          </div>

          {/* BLOK 3: KONTAK & WORKSHOP (3 Kolom Grid) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-slate-900 dark:text-white mb-4">
              KONTAK &amp; WORKSHOP
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-amber-600 dark:text-[#d4af37] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="https://wa.me/6281217780249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 dark:hover:text-[#d4af37] transition-colors"
                >
                  0812-1778-0249 (WhatsApp)
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-amber-600 dark:text-[#d4af37] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a
                  href="mailto:aszprinting21@gmail.com"
                  className="hover:text-amber-600 dark:hover:text-[#d4af37] transition-colors break-all"
                >
                  aszprinting21@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-amber-600 dark:text-[#d4af37] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="leading-relaxed">
                  Jl. Pagarsih (Dekat Pagarsih Plaza), Kota Bandung, Jawa Barat
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* SECTION COPYRIGHT */}
        <div className="pt-7 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            &copy; 2026 Zpack Printing &amp; Packaging. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}