'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/common/navbar";

export default function ArtikelMesinPage() {
  const machineArticles = [
    {
      id: 'heidelberg-press',
      title: 'Mengenal Teknologi Mesin Heidelberg Offset: Rahasia Ketajaman Warna & Kecepatan Produksi ZPack',
      category: 'Teknologi Cetak Offset',
      readTime: '5 Menit Baca',
      excerpt: 'Standar emas dalam industri percetakan offset terletak pada akurasi warna dan kecepatan cetak tinggi. Pelajari bagaimana mesin Heidelberg GTO dan Speedmaster di workshop ZPack menghasilkan cetakan tanpa belang.',
      content: `Dalam dunia percetakan komersial dan kemasan massal, kualitas warna visual adalah penentu utama daya tarik produk di rak penjualan. ZPack mempercayakan lini cetak utamanya pada mesin offset berstandar global, yaitu Heidelberg.
      
      Keunggulan Utama Heidelberg di ZPack:
      1. Akurasi Warna CMYK & Pantone: Sistem kalibrasi warna presisi tinggi memastikan warna brand produk Anda konsisten dari cetakan pertama hingga puluhan ribu lembar berikutnya.
      2. Kapasitas Kecepatan Tinggi: Mendukung kapasitas produksi hingga 80.000+ pcs per hari tanpa mengorbankan ketajaman detail grafis terkecil sekalipun.
      3. Efisiensi Skala Menengah hingga Besar: Menekan biaya produksi per unit secara signifikan, memberikan keuntungan harga langsung pabrik (direct factory rate) bagi mitra UMKM maupun korporat.`,
    },
    {
      id: 'die-cutting-pond',
      title: 'Presisi Lipatan & Potongan: Peran Vital Mesin Pond (Die-Cutting) dalam Konstruksi Box Kemasan',
      category: 'Teknologi Finishing & Pond',
      readTime: '4 Menit Baca',
      excerpt: 'Box yang kokoh dan mudah dirakit berawal dari garis rel lipatan dan potongan pisau pond yang presisi. Simak bagaimana mesin die-cutting otomatis ZPack bekerja.',
      content: `Sebagus apa pun desain grafis kemasan Anda, jika konstruksi potongan dan rel lipatannya (creasing) meleset, box akan sulit dirakit, tampak longgar, atau bahkan mudah robek. Di ZPack, setiap pola kemasan diproses menggunakan mesin pond (die-cutting) in-house.
      
      Mengapa Proses Pond In-House Sangat Penting:
      1. Kerapian Sudut Lipatan: Garis rel cetak menekan kertas secara akurat sehingga proses perakitan box oleh tangan menjadi sangat cepat dan presisi.
      2. Fleksibilitas Pola Custom: Memungkinkan pembuatan bentuk box unik—mulai dari softbox kosmetik, dus makanan berlubang jendela mika, hingga hardbox kaku bergeser.
      3. Kontrol Kualitas Langsung: Setiap cetakan diperiksa langsung oleh operator berpengalaman untuk memastikan tidak ada cacat potongan.`,
    },
    {
      id: 'polar-cutter',
      title: 'Akurasi Tanpa Toleransi Milimeter: Peran Mesin Polar Guillotine Paper Cutter',
      category: 'Persiapan Bahan Baku',
      readTime: '3 Menit Baca',
      excerpt: 'Ukuran bahan baku kertas yang presisi mutlak diperlukan sebelum naik mesin cetak. Ketahui spesifikasi pemotongan tingkat tinggi menggunakan mesin Polar di ZPack.',
      content: `Sebelum lembaran kertas Ivory, Duplex, atau Art Carton masuk ke mesin cetak Heidelberg, ukuran lembaran besar harus dipotong secara presisi menggunakan mesin potong kertas otomatis berteknologi tinggi asal Jerman, yaitu Polar Guillotine.
      
      Standar Presisi Polar di ZPack:
      1. Pemotongan Tumpukan Tebal: Mampu memotong ratusan lembar kertas sekaligus dengan margin kesalahan nol milimeter.
      2. Mencegah Tepi Kertas Berserat: Mata pisau khusus berkecepatan tinggi menghasilkan pinggiran potongan yang sangat rata, bersih, dan halus, mendukung hasil laminasi yang sempurna.`,
    },
    {
      id: 'in-house-finishing',
      title: 'Sentuhan Kemewahan: Menelisik Lini Finishing Hotprint Foil, Emboss, dan Laminasi Doff/Glossy',
      category: 'Finishing & Pelindung Premium',
      readTime: '6 Menit Baca',
      excerpt: 'Transformasikan kemasan biasa menjadi produk berkelas tinggi dengan sentuhan efek kilau emas, tekstur timbul, dan pelindung anti gores.',
      content: `Tahap akhir (finishing) adalah pembeda utama antara kemasan standar dan kemasan eksklusif yang memikat pembeli. Seluruh pengerjaan finishing di ZPack dikerjakan secara terintegrasi di workshop Jalan Pagarsih, Bandung.
      
      Jenis Finishing Unggulan Kami:
      1. Hotprint Foil Emas & Silver: Memberikan efek kilau metalik elegan pada logo atau teks utama kemasan.
      2. Emboss & Deboss: Menciptakan efek visual timbul (tenggelam) untuk memberikan pengalaman sensorik saat kemasan disentuh.
      3. Laminasi Doff / Glossy: Melapisi permukaan kertas agar tahan terhadap percikan air, minyak, serta tidak mudah robek sekaligus memberikan tekstur lembut (doff) atau mengkilap (glossy).`,
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
              PUSAT ARTIKEL &amp; TEKNOLOGI MESIN ZPACK
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-extrabold tracking-[-0.5px] leading-[1.18] text-slate-900 dark:text-white mb-6">
              Transparansi Standar Produksi &amp; Spesifikasi Mesin Industri ZPack
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-[1.08rem] leading-relaxed">
              Pelajari secara mendalam bagaimana lini mesin cetak offset Heidelberg, mesin pond otomatis, hingga teknik finishing presisi bekerja di balik layar workshop kami di Bandung.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DAFTAR ARTIKEL TEKNIS (Editorial Layout Tanpa Card) */}
      <section className="w-full py-14 sm:py-20 border-t border-slate-200 dark:border-white/[0.07]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="space-y-16 lg:space-y-24">
            {machineArticles.map((art, idx) => (
              <article
                key={art.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start ${
                  idx !== 0 ? 'pt-16 lg:pt-24 border-t border-slate-200 dark:border-white/10' : ''
                }`}
              >
                {/* Kolom Kiri: Meta Info */}
                <div className="lg:col-span-4 lg:sticky lg:top-28">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-amber-500/15 text-amber-600 dark:text-[#d4af37]">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {art.readTime}
                    </span>
                  </div>
                  <span className="inline-block text-xs font-bold text-amber-600 dark:text-[#d4af37] tracking-[1.5px] uppercase mb-3">
                    {art.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
                    {art.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                {/* Kolom Kanan: Isi Detail Artikel */}
                <div className="lg:col-span-8 pl-0 lg:pl-6 border-l-0 lg:border-l-2 border-amber-500/40 dark:border-[#d4af37]/40">
                  <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-4">
                    {art.content}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION (Atmospheric Banner) */}
      <section className="relative w-full py-16 sm:py-24 border-t border-slate-200 dark:border-white/[0.07] overflow-hidden bg-slate-50/60 dark:bg-white/[0.015]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[260px] rounded-full bg-amber-500/10 dark:bg-[#d4af37]/[0.08] blur-[100px] -z-10"
        />

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <span className="inline-block text-xs font-bold text-amber-600 dark:text-[#d4af37] tracking-[2px] uppercase mb-3">
            BUKTIKAN KUALITAS PRODUKSI KAMI
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-extrabold text-slate-900 dark:text-white leading-tight mb-4 max-w-2xl mx-auto">
            Ingin Menguji Kualitas Bahan &amp; Hasil Cetak Mesin Kami Secara Langsung?
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Kunjungi workshop kami di Jl. Pagarsih, Bandung, atau dapatkan sample dummy fisik gratis untuk fitting ukuran kemasan brand Anda.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/6281217780249?text=Halo%20Zpack%2C%20saya%20ingin%20konsultasi%20produksi%20dan%20minta%20sample%20dummy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Minta Sample Dummy &amp; Konsultasi</span>
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