'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/common/navbar';
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp'

interface ServiceCategoryItem {
  title: string;
  category: string;
  subcategories: string[];
  desc: string;
}

export default function LayananPage() {
  const sopItems = [
    {
      title: 'Fasilitas Bantuan Desain',
      tag: 'FREE DESIGN',
      desc: 'Belum punya file desain? Kami bantu buatkan Layouting Desain Siap Cetak secara GRATIS setelah pemesanan dikonfirmasi.',
    },
    {
      title: 'Format File Mandiri',
      tag: '',
      desc: 'Jika sudah ada desain, kirim file berformat PDF, AI, CDR, atau PSD (Mode CMYK & bleed min. 3mm).',
    },
    {
      title: 'Toleransi Warna Cetak',
      tag: '',
      desc: 'Terdapat toleransi perbedaan warna sekitar 3% - 4% antara tampilan layar digital (RGB) dan cetak mesin (CMYK).',
    },
    {
      title: 'Prosedur ACC Mockup',
      tag: '',
      desc: 'Sebelum produksi massal, kami akan mengirimkan digital proof/mockup untuk disetujui (ACC) oleh Anda.',
    },
    {
      title: 'MOQ & Waktu Pengerjaan',
      tag: '',
      desc: 'Minimal Order (MOQ) 500 pcs. Estimasi pengerjaan 6 - 10 hari kerja tergantung tingkat kerumitan produk.',
    },
    {
      title: 'Ketentuan Pengiriman',
      tag: '',
      desc: 'Pengiriman lokal Kota Bandung bisa COD / Kurir Instan. Untuk Luar Kota Bandung, ongkir ditanggung oleh pembeli.',
    },
  ];

  const packagingProducts: ServiceCategoryItem[] = [
    {
      title: 'Packaging Makanan',
      category: 'Food-Grade Packaging',
      subcategories: ['Catering Box', 'Lunch Box', 'Cake Box', 'Snack Box', 'Rice Box (Nasi Kotak)', 'Dessert Box'],
      desc: 'Kemasan makanan aman pangan (food-grade) dengan opsi laminasi tahan minyak/bocor. Rice Box (Nasi Kotak) dipisahkan jelas dari Lunch Box umum, Cake Box, Snack Box, dan Dessert Box.',
    },
    {
      title: 'Skincare & Kosmetik',
      category: 'Beauty & Cosmetic Box',
      subcategories: ['Dus Skincare', 'Dus Makeup', 'Dus Parfum', 'Dus Serum'],
      desc: 'Box custom untuk produk kecantikan dan perawatan tubuh dengan dukungan laminasi doff/glossy, foil, atau emboss. Siap dikembangkan ke varian Dus Facial Wash, Dus Cream, dan Dus Toner.',
    },
    {
      title: 'Hardbox & Rigid Box',
      category: 'Luxury Rigid Packaging',
      subcategories: ['Hardbox Custom', 'Gift & Hampers Box', 'Rigid Sliding / Top-Bottom Box'],
      desc: 'Kemasan board kaku berstruktur kokoh untuk hampers, produk eksklusif, edisi terbatas, dan gift set premium yang membutuhkan perlindungan maksimal serta tampilan mewah.',
    },
    {
      title: 'Paper Bag & Retail Packaging',
      category: 'Retail & Shopping Bag',
      subcategories: ['Paper Bag Custom', 'Shopping Bag Kraft / Ivory', 'Softbox & Outer Box'],
      desc: 'Kantong belanja dan kemasan ritel yang dipindahkan dari kategori umum agar lebih terfokus pada kebutuhan branding toko, butik, maupun UMKM.',
    },
  ];

  const labelAndPromoProducts: ServiceCategoryItem[] = [
    {
      title: 'Label & Branding',
      category: 'Sticker, Tag & Sleeve',
      subcategories: ['Hang Tag', 'Sticker Label', 'Sticker Cutting', 'Packaging Sleeve'],
      desc: 'Solusi identitas produk yang diperjelas antara Hang Tag, Sticker Label, Sticker Cutting, dan Packaging Sleeve agar tidak tumpang tindih.',
    },
    {
      title: 'Promotional Print',
      category: 'Marketing & Promo Media',
      subcategories: ['Brosur', 'Flyer / Leaflet', 'Banner', 'Poster'],
      desc: 'Media promosi cetak untuk kampanye produk, katalog ringkas, dan informasi event dengan ukuran serta distribusi yang disesuaikan kebutuhan.',
    },
  ];

  const commercialAndDigitalProducts: ServiceCategoryItem[] = [
    {
      title: 'Commercial Print & Stationery',
      category: 'Business & Operational Print',
      subcategories: ['Amplop', 'Nota', 'Kartu Nama', 'Kop Surat / Stationery'],
      desc: 'Kelengkapan administrasi dan identitas usaha seperti Amplop dan Nota yang dipisahkan dari General Print agar lebih rapi dan profesional.',
    },
    {
      title: 'General Print',
      category: 'Calendar & Religious Books',
      subcategories: ['Kalender', 'Buku Yasin', "Majmu' / Buku Doa"],
      desc: 'Difokuskan pada cetakan berkala dan buku khusus seperti Kalender, Buku Yasin, serta Majmu’ / buku doa dengan jilid dan finishing rapi.',
    },
    {
      title: 'Invitation & Event Print',
      category: 'Printed Event Invitation',
      subcategories: ['Undangan Cetak', 'Kartu Ucapan & Souvenir Card'],
      desc: 'Layanan undangan fisik dan perlengkapan acara yang dipisahkan dari cetak umum agar terstruktur dengan jelas.',
    },
    {
      title: 'Undangan Digital',
      category: 'Digital Invitation Service',
      subcategories: ['Undangan Wedding', 'Undangan Khitanan', 'Undangan Halal Bihalal'],
      desc: 'Website undangan interaktif untuk pernikahan, khitanan, halal bihalal, maupun acara khusus—lengkap dengan fitur RSVP tamu dan peta lokasi.',
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <FloatingWhatsApp />
      <Navbar />

      {/* 0. KETENTUAN & SOP PRODUKSI ZPACK (Paling Atas, Tanpa Card) */}
      <section className="w-full pt-10 sm:pt-14 pb-12 border-b border-slate-200 dark:border-white/[0.07]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="pb-4 mb-8 border-b border-slate-200 dark:border-white/10">
            <h2 className="text-lg sm:text-xl font-extrabold text-amber-600 dark:text-[#d4af37] tracking-tight">
              Ketentuan &amp; SOP Produksi Zpack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 border-l-2 border-amber-500/40 dark:border-[#d4af37]/40 pl-6 sm:pl-8">
            {sopItems.map((sop, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {sop.title}
                  </h3>
                  {sop.tag && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                      {sop.tag}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {sop.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. HERO / JUDUL HALAMAN */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Ambient Glow halus */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] sm:w-[780px] h-[260px] rounded-full blur-[110px] -z-10"
        />

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-block text-xs sm:text-[0.9rem] font-bold text-amber-600 dark:text-[#d4af37] tracking-[2px] uppercase mb-3">
              KATALOG LAYANAN &amp; PRODUK ZPACK
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-extrabold tracking-[-0.5px] leading-[1.18] text-slate-900 dark:text-white mb-6">
              Solusi Lengkap Kemasan Custom &amp; Percetakan Profesional Skala UMKM hingga Korporat
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-[1.08rem] leading-relaxed mb-8">
              Diproduksi langsung in-house menggunakan mesin cetak presisi tinggi dengan standar kualitas industri. Temukan berbagai pilihan produk kemasan fisik, hardbox, cetak komersial, hingga undangan digital di sini.
            </p>

            {/* Quick Strip Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-1.5 text-amber-600 dark:text-[#d4af37]">
                ✓ Free Desain
              </span>
              <span className="flex items-center gap-1.5 text-amber-600 dark:text-[#d4af37]">
                ✓ Free Sample Mockup
              </span>
              <span className="flex items-center gap-1.5 text-amber-600 dark:text-[#d4af37]">
                ✓ Free Ongkir Se-Kota Bandung
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PILAR 1: PACKAGING, HARDBOX & KEMASAN PRODUK (Editorial Grid Tanpa Card) */}
      <section className="w-full py-14 sm:py-20 border-t border-slate-200 dark:border-white/[0.07]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-xs font-bold text-amber-600 dark:text-[#d4af37] tracking-[1.5px] uppercase mb-2">
              KATEGORI 01
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
              Packaging Makanan, Skincare, Hardbox &amp; Retail
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Struktur kategori kemasan yang disusun rapi agar mudah dipilih sesuai jenis produk—mulai dari makanan, kosmetik, hardbox eksklusif, hingga paper bag ritel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 border-l-2 border-amber-500/40 dark:border-[#d4af37]/40 pl-6 sm:pl-8">
            {packagingProducts.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-[#d4af37] mb-1">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-amber-700 dark:text-[#d4af37]/90 mb-2.5 leading-relaxed">
                  Subkategori: {item.subcategories.join(' • ')}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PILAR 2: LABEL & BRANDING + PROMOTIONAL PRINT */}
      <section className="w-full py-14 sm:py-20 border-t border-slate-200 dark:border-white/[0.07]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-xs font-bold text-amber-600 dark:text-[#d4af37] tracking-[1.5px] uppercase mb-2">
              KATEGORI 02
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
              Label &amp; Branding serta Promotional Print
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Penanda identitas produk dan media promosi cetak yang dipisahkan jelas agar tidak membingungkan antara stiker, label, sleeve, maupun materi promo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 border-l-2 border-amber-500/40 dark:border-[#d4af37]/40 pl-6 sm:pl-8">
            {labelAndPromoProducts.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-[#d4af37] mb-1">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-amber-700 dark:text-[#d4af37]/90 mb-2.5 leading-relaxed">
                  Subkategori: {item.subcategories.join(' • ')}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PILAR 3: COMMERCIAL PRINT, GENERAL PRINT, INVITATION & UNDANGAN DIGITAL */}
      <section className="w-full py-14 sm:py-20 border-t border-slate-200 dark:border-white/[0.07]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-xs font-bold text-amber-600 dark:text-[#d4af37] tracking-[1.5px] uppercase mb-2">
              KATEGORI 03
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
              Commercial Print, General Print, Event &amp; Undangan Digital
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Cetakan administrasi usaha (Commercial Print), kalender &amp; buku keagamaan (General Print), undangan acara, serta layanan website undangan digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 border-l-2 border-amber-500/40 dark:border-[#d4af37]/40 pl-6 sm:pl-8">
            {commercialAndDigitalProducts.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-[#d4af37] mb-1">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-amber-700 dark:text-[#d4af37]/90 mb-2.5 leading-relaxed">
                  Subkategori: {item.subcategories.join(' • ')}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION (Atmospheric Banner) */}
      <section className="relative w-full py-16 sm:py-24 border-t border-slate-200 dark:border-white/[0.07] overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[260px] rounded-full bg-amber-500/10 dark:bg-[#d4af37]/[0.08] blur-[100px] -z-10"
        />

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <span className="inline-block text-xs font-bold text-amber-600 dark:text-[#d4af37] tracking-[2px] uppercase mb-3">
            KONSULTASIKAN KEBUTUHAN CETAK ANDA
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-extrabold text-slate-900 dark:text-white leading-tight mb-4 max-w-2xl mx-auto">
            Belum Menemukan Spesifikasi yang Sesuai dengan Produk Anda?
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Diskusikan ukuran, bahan, dan jumlah pesanan Anda dengan tim ZPack. Dapatkan estimasi harga cepat, free desain, dan sample mockup fisik.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/6281217780249?text=Halo%20Zpack%2C%20saya%20ingin%20konsultasi%20layanan%20dan%20produk%20cetak"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Konsultasi Gratis via WhatsApp</span>
            </a>

            <Link
              href="/z-ai"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-200/80 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/[0.12] border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white font-semibold text-xs sm:text-sm transition-all duration-200"
            >
              <span>Tanya Z-AI Assistant</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}