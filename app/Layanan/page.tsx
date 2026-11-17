'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/common/navbar";

export default function LayananPage() {
  const packagingProducts = [
    {
      title: 'Box Skincare & Kosmetik',
      category: 'Luxury Packaging',
      desc: 'Kemasan eksklusif untuk serum, cream, botol parfum, dan produk kecantikan. Mendukung finishing Hotprint Foil, Emboss, serta Laminasi Doff/Glossy agar produk terlihat mewah dan berkelas.',
    },
    {
      title: 'Packaging Food & Takeaway',
      category: 'Food-Grade Packaging',
      desc: 'Dus makanan, lunch box, dan kemasan snack yang aman bersentuhan langsung dengan makanan. Dilengkapi opsi laminasi bagian dalam yang tahan minyak dan anti bocor.',
    },
    {
      title: 'Softbox & Hardbox Custom',
      category: 'Rigid & Folding Box',
      desc: 'Pilihan box lipat (softbox) yang efisien ruang atau box kaku premium (hardbox) untuk hampers, gift eksklusif, produk fashion, dan peluncuran produk khusus.',
    },
    {
      title: 'Paperbag & Shopping Bag',
      category: 'Eco-Friendly Bag',
      desc: 'Kantong kertas belanja berkualitas tinggi menggunakan bahan Kraft atau Art Carton dengan tali pegangan yang kuat, memperkuat identitas brand retail Anda.',
    },
  ];

  const commercialProducts = [
    {
      title: 'Label Stiker & Kemasan',
      category: 'Sticker & Label',
      desc: 'Stiker label produk dalam bentuk lembaran atau rol (cutting kiss-cut / die-cut presisi) untuk toples kue, botol minuman, hingga segel kemasan.',
    },
    {
      title: 'Brosur, Flyer & Katalog',
      category: 'Marketing Tools',
      desc: 'Media promosi cetak offset beresolusi tinggi dengan ketajaman warna sempurna untuk memperkenalkan profil bisnis, menu kuliner, atau katalog produk.',
    },
    {
      title: 'Kartu Nama & Amplop Custom',
      category: 'Corporate Identity',
      desc: 'Kelengkapan identitas perusahaan berstandar profesional dengan berbagai pilihan ketebalan kertas dan tekstur eksklusif.',
    },
    {
      title: 'Web Undangan Digital (Digital Invitation)',
      category: 'Digital Service',
      desc: 'Jasa pembuatan website undangan pernikahan, khitanan, atau event khusus. Dilengkapi RSVP kehadiran, amplop digital, peta lokasi, galeri foto, dan musik latar.',
    },
  ];

  const materialsAndFinishing = [
    {
      name: 'Ivory & Art Carton',
      use: 'Box Kosmetik, Skincare, & Makanan Premium',
      desc: 'Permukaan putih bersih dan kaku, memberikan hasil cetak warna yang sangat tajam serta elegan.',
    },
    {
      name: 'Kraft Coklat & Putih',
      use: 'Kemasan Eco-Friendly & F&B',
      desc: 'Bahan ramah lingkungan yang memberikan kesan natural, otentik, dan kuat untuk produk organik atau kafe.',
    },
    {
      name: 'Duplex Board',
      use: 'Dus Produk Massal Ekonomis',
      desc: 'Solusi ekonomis dengan sisi luar putih berlapis dan sisi dalam abu-abu untuk efisiensi budget produksi skala besar.',
    },
    {
      name: 'Finishing Premium',
      use: 'Hotprint, Emboss & Laminasi',
      desc: 'Pilihan efek kilau emas/silver (foil), cetak timbul (emboss), dan pelindung permukaan doff/glossy anti gores.',
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <Navbar />

      {/* 1. HERO / JUDUL HALAMAN */}
      <section className="relative w-full py-12 sm:py-16 lg:py-24 overflow-hidden">
        {/* Ambient Glow halus */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] sm:w-[780px] h-[260px] rounded-full bg-amber-500/10 dark:bg-[#d4af37]/[0.07] blur-[110px] -z-10"
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
              Diproduksi langsung in-house menggunakan mesin cetak presisi tinggi dengan standar kualitas industri. Temukan berbagai pilihan produk kemasan fisik hingga layanan digital undangan website di sini.
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

      {/* 2. PILAR 1: KEMASAN CUSTOM & PACKAGING (Editorial Grid Tanpa Card) */}
      <section className="w-full py-14 sm:py-20 border-t border-slate-200 dark:border-white/[0.07]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-xs font-bold text-amber-600 dark:text-[#d4af37] tracking-[1.5px] uppercase mb-2">
              KATEGORI 01
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
              Kemasan Custom &amp; Box Produk
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Tingkatkan nilai jual dan daya tarik produk Anda di pasaran dengan kemasan yang kokoh, higienis, dan berdesain eksklusif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 border-l-2 border-amber-500/40 dark:border-[#d4af37]/40 pl-6 sm:pl-8">
            {packagingProducts.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-[#d4af37] mb-1">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PILAR 2: PERCETAKAN KOMERSIAL & UNDANGAN DIGITAL */}
      <section className="w-full py-14 sm:py-20 border-t border-slate-200 dark:border-white/[0.07] bg-slate-50/60 dark:bg-white/[0.015]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-xs font-bold text-amber-600 dark:text-[#d4af37] tracking-[1.5px] uppercase mb-2">
              KATEGORI 02
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
              Percetakan Komersial &amp; Undangan Digital
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Solusi media promosi bisnis dan layanan undangan website modern untuk menyempurnakan setiap momen dan event spesial Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 border-l-2 border-amber-500/40 dark:border-[#d4af37]/40 pl-6 sm:pl-8">
            {commercialProducts.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-[#d4af37] mb-1">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PILIHAN BAHAN & FINISHING (Editorial List) */}
      <section className="w-full py-14 sm:py-20 border-t border-slate-200 dark:border-white/[0.07]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold text-amber-600 dark:text-[#d4af37] tracking-[1.5px] uppercase mb-2">
              STANDAR KUALITAS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
              Pilihan Bahan &amp; Finishing Eksklusif
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Kami menyediakan beragam pilihan gramasi dan jenis material terbaik yang disesuaikan dengan karakteristik produk Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {materialsAndFinishing.map((mat, idx) => (
              <div
                key={idx}
                className="pt-5 border-t-2 border-slate-200 dark:border-white/15 hover:border-amber-500 dark:hover:border-[#d4af37] transition-colors duration-300"
              >
                <span className="block text-[11px] font-mono font-bold text-amber-600 dark:text-[#d4af37] uppercase tracking-wider mb-1">
                  {mat.use}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {mat.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {mat.desc}
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