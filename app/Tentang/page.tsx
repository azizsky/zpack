'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/common/navbar';

export default function TentangPage() {
  const machines = [
    {
      code: '01',
      name: 'Heidelberg GTO 52',
      category: 'Mesin Cetak Offset Lembaran',
      desc: 'Mesin cetak offset standar untuk kebutuhan cetakan komersial, nota, amplop, brosur, serta kemasan dengan detail grafis tajam dan konsisten.',
    },
    {
      code: '02',
      name: 'Heidelberg Speedmaster',
      category: 'Mesin Cetak Offset Multi-Warna',
      desc: 'Mesin offset multi-unit untuk produksi cetakan warna berkecepatan tinggi dan presisi stabil pada skala menengah hingga besar.',
    },
    {
      code: '03',
      name: 'Mesin CTP (Computer to Plate)',
      category: 'Pembuatan Plat Offset Digital',
      desc: 'Proses pembuatan plat cetak langsung dari file digital secara presisi untuk menjaga ketajaman titik raster dan akurasi registrasi warna sebelum naik cetak offset.',
    },
    {
      code: '04',
      name: 'Printer Epson A3',
      category: 'Cetak Proofing & Ukuran A3',
      desc: 'Digunakan untuk mencetak proof/sample layout, mockup desain, atau cetakan ukuran A3 sebelum maupun di luar alur produksi offset.',
    },
    {
      code: '05',
      name: 'Polar Guillotine Paper Cutter',
      category: 'Pemotongan Kertas Industri',
      desc: 'Sistem pemotong kertas industri berakurasi tinggi untuk memotong plano maupun merapikan hasil cetak dengan presisi.',
    },
    {
      code: '06',
      name: 'Mesin Pond & Die-Cutting',
      category: 'Potong Pola & Rel Lipatan',
      desc: 'Pemotongan pola kemasan (die-cut) dan garis lipatan (creasing) secara presisi agar box mudah dirakit, kokoh, dan sudut lipatannya rapi.',
    },
    {
      code: '07',
      name: 'Roll Laminating Machine',
      category: 'Laminasi Doff / Glossy',
      desc: 'Mesin laminasi gulungan untuk melapisi permukaan cetakan dan kemasan agar lebih awet, terlindungi, dan tampil lebih eksklusif.',
    },
    {
      code: '08',
      name: 'Hot Foil & Emboss Machine',
      category: 'Poly / Foil & Cetak Timbul',
      desc: 'Pengerjaan hotprint foil (emas, silver, dll.) maupun emboss untuk menonjolkan logo dan identitas brand pada kemasan atau kartu.',
    },
    {
      code: '09',
      name: 'Mesin Lem (Grakitec)',
      category: 'Perekat & Finishing Kemasan / Jilid',
      desc: 'Digunakan untuk proses pengeleman dan perapihan sambungan kemasan atau jilidan sesuai kebutuhan produksi.',
    },
    {
      code: '10',
      name: 'Large Format Banner & Plotter Printer',
      category: 'Cetak Format Lebar (Roll & Plotter)',
      desc: 'Menangani cetakan format besar seperti banner/spanduk gulungan serta cetakan lebar/plotter sesuai kebutuhan promosi maupun teknis.',
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Konsultasi Produk, Ukuran, Bahan & Finishing',
      desc: 'Diskusikan detail produk yang akan dikemas atau dicetak, ukuran presisi, pilihan jenis bahan, serta opsi finishing yang diinginkan bersama tim ZPack.',
    },
    {
      step: '02',
      title: 'Deal Harga & DP Minimal 60%',
      desc: 'Setelah spesifikasi dan total biaya disepakati (deal harga), pesanan diproses dengan pembayaran DP minimal 60% dari total tagihan.',
    },
    {
      step: '03',
      title: 'Proses Desain (Jika Belum Punya) & Mockup',
      desc: 'Jika belum memiliki desain siap cetak, tim kami bantu proses desain sekaligus pembuatan mockup/sample agar tata letak dan bentuk kemasan tergambar jelas.',
    },
    {
      step: '04',
      title: 'Finalisasi / ACC Fix',
      desc: 'Seluruh detail desain, ukuran, bahan, dan mockup dikonfirmasi hingga status FIX sebelum masuk ke tahap produksi massal.',
    },
    {
      step: '05',
      title: 'Potong Bahan',
      desc: 'Bahan baku dipersiapkan dan dipotong sesuai ukuran kerja/plano agar siap masuk ke mesin cetak.',
    },
    {
      step: '06',
      title: 'Proses Cetak',
      desc: 'Hasil desain yang sudah fix masuk ke tahap pencetakan dengan pengaturan warna dan ketajaman yang terjaga.',
    },
    {
      step: '07',
      title: 'Laminasi',
      desc: 'Permukaan hasil cetak dilapisi laminasi (sesuai opsi finishing) untuk perlindungan ekstra sekaligus tampilan yang lebih rapi.',
    },
    {
      step: '08',
      title: 'Foil atau Emboss (Jika Pakai)',
      desc: 'Jika menggunakan opsi tambahan, dilakukan proses hot foil atau emboss untuk menonjolkan aksen kilau maupun tekstur timbul.',
    },
    {
      step: '09',
      title: 'Mesin Cutting & Creasing',
      desc: 'Pengerjaan potong pola (cutting) dan pembuatan garis lipat (creasing/pond) agar bentuk kemasan presisi dan mudah dilipat.',
    },
    {
      step: '10',
      title: 'Quality Control & Packing',
      desc: 'Setiap batch melalui pengecekan kualitas (QC) untuk memastikan kerapihan hasil, lalu dikemas dengan aman sebelum dikirim.',
    },
    {
      step: '11',
      title: 'Pelunasan & Pengiriman',
      desc: 'Setelah produksi selesai dan pelunasan dilakukan, pesanan dikirim ke alamat tujuan (Free Ongkir se-Kota Bandung atau ekspedisi luar kota).',
    },
    {
      step: '12',
      title: 'Garansi Lifetime',
      desc: 'Dilengkapi komitmen garansi lifetime sesuai ketentuan layanan ZPack untuk ketenangan dan kepercayaan jangka panjang klien.',
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <Navbar />

      {/* 1. HERO / PROFIL SINGKAT ZPACK */}
      <section className="relative w-full py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] sm:w-[780px] h-[260px] rounded-full blur-[110px] -z-10"
        />

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-block text-xs sm:text-[0.9rem] font-bold text-amber-600 dark:text-[#d4af37] tracking-[2px] uppercase mb-3">
              TENTANG ZPACK PRINTING &amp; PACKAGING
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-extrabold tracking-[-0.5px] leading-[1.18] text-slate-900 dark:text-white mb-6">
              Berdiri Sejak 2018, Dipercaya Banyak UMKM hingga Pelaku Usaha
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-[1.08rem] leading-relaxed mb-8">
              Berdiri sejak <strong className="text-slate-900 dark:text-white">2018</strong> dan berbasis di Kota Bandung, ZPack telah dipercaya oleh banyak <strong className="text-slate-900 dark:text-white">UMKM</strong>, brand lokal, serta pelaku usaha untuk memenuhi kebutuhan packaging makanan, skincare &amp; kosmetik, hardbox, paper bag, cetakan komersial, hingga undangan digital dengan pendampingan yang praktis dan jelas.
            </p>

            {/* Ringkasan Angka Kunci (Editorial Borderless Strip) */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-slate-200 dark:border-white/10 max-w-xl">
              <div>
                <span className="block text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                  2018
                </span>
                <span className="text-[11px] sm:text-xs text-amber-600 dark:text-[#d4af37] font-semibold uppercase tracking-wide">
                  Tahun Berdiri
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                  129+
                </span>
                <span className="text-[11px] sm:text-xs text-amber-600 dark:text-[#d4af37] font-semibold uppercase tracking-wide">
                  UMKM &amp; Klien Mitra
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white">
                  100%
                </span>
                <span className="text-[11px] sm:text-xs text-amber-600 dark:text-[#d4af37] font-semibold uppercase tracking-wide">
                  Pendampingan &amp; QC
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CERITA & STANDAR KUALITAS (Split Layout Tanpa Card) */}
      <section className="w-full py-14 sm:py-20 border-t border-slate-200 dark:border-white/[0.07]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Kiri: Kenapa ZPack Berbeda */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="inline-block text-xs font-bold text-amber-600 dark:text-[#d4af37] tracking-[1.5px] uppercase mb-2">
                PERJALANAN SEJAK 2018
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
                Tumbuh Bersama Banyak UMKM &amp; Brand Lokal
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Sejak 2018, ZPack mendampingi banyak UMKM—mulai dari usaha kuliner, produk kecantikan/skincare, hingga kebutuhan ritel, promosi, dan acara—agar memiliki kemasan dan cetakan yang rapi, tepat guna, serta siap bersaing.
              </p>

              {/* Highlight Garansi */}
              <div className="pl-4 border-l-2 border-amber-500 dark:border-[#d4af37]">
                <strong className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-1">
                  Garansi Lifetime &amp; Fitting Mockup
                </strong>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Sebelum naik cetak massal, desain dan mockup dikonfirmasi hingga fix, serta dilengkapi dukungan garansi lifetime sesuai ketentuan layanan.
                </p>
              </div>
            </div>

            {/* Kanan: 4 Pilar Keunggulan ZPack (List Bersih dengan Garis Pemisah) */}
            <div className="lg:col-span-7 divide-y divide-slate-200 dark:divide-white/10 border-y border-slate-200 dark:border-white/10">
              <div className="py-5 sm:py-6 flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-[#d4af37] pt-1">
                  01
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Berpengalaman Sejak 2018 Melayani UMKM
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Dipercaya oleh banyak UMKM dan pelaku usaha untuk kebutuhan kemasan produk, cetak promosi, administrasi usaha, hingga undangan.
                  </p>
                </div>
              </div>

              <div className="py-5 sm:py-6 flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-[#d4af37] pt-1">
                  02
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Pendampingan Desain &amp; Mockup
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Belum punya desain? Kami bantu proses desain sekaligus pembuatan mockup agar ukuran dan tampilan sesuai sebelum dinyatakan fix.
                  </p>
                </div>
              </div>

              <div className="py-5 sm:py-6 flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-[#d4af37] pt-1">
                  03
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Pilihan Bahan &amp; Opsi Finishing Lengkap
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Menyesuaikan kebutuhan produk kuliner, kosmetik, hampers/hardbox, maupun kemasan ramah lingkungan dengan opsi laminasi, foil, emboss, cutting, dan creasing.
                  </p>
                </div>
              </div>

              <div className="py-5 sm:py-6 flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-[#d4af37] pt-1">
                  04
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Free Ongkir Se-Kota Bandung &amp; Pengiriman Luar Kota
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Layanan pengiriman gratis untuk area Kota Bandung serta dukungan pengiriman ekspedisi/kargo untuk pelanggan di luar kota.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FASILITAS PRODUKSI & MESIN (Blueprint Spec Grid) */}
      <section className="w-full py-14 sm:py-20 border-t border-slate-200 dark:border-white/[0.07]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-xs font-bold text-amber-600 dark:text-[#d4af37] tracking-[1.5px] uppercase mb-2">
              FASILITAS &amp; TEKNOLOGI MESIN
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
              Mesin Produksi Cetak, CTP, Finishing &amp; Format Lebar
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Pengerjaan didukung CTP, printer Epson A3, mesin cetak offset, potong, pond, laminasi, foil, lem, serta cetak format lebar sesuai jenis produk dan kebutuhan order.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 border-l-2 border-amber-500/40 dark:border-[#d4af37]/40 pl-6 sm:pl-8">
            {machines.map((item) => (
              <div key={item.code} className="flex flex-col">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-600 dark:text-[#d4af37]">
                    {item.code}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ALUR KERJA PEMESANAN DETAIL */}
      <section className="w-full py-14 sm:py-20 border-t border-slate-200 dark:border-white/[0.07] bg-slate-50/60 dark:bg-white/[0.015]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-xs font-bold text-amber-600 dark:text-[#d4af37] tracking-[1.5px] uppercase mb-2">
              ALUR PEMESANAN
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
              Proses Terarah dari Konsultasi hingga Pengiriman
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Setiap pesanan diproses bertahap agar spesifikasi, desain, dan hasil cetak sesuai dengan kesepakatan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 border-l-2 border-amber-500/40 dark:border-[#d4af37]/40 pl-6 sm:pl-8">
            {workflowSteps.map((item) => (
              <div key={item.step} className="flex flex-col">
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-[#d4af37] mb-2">
                  STEP {item.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
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

      {/* 5. WORKSHOP & AJAKAN KONSULTASI (Open Atmospheric Banner) */}
      <section className="relative w-full py-16 sm:py-24 border-t border-slate-200 dark:border-white/[0.07] overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[260px] rounded-full bg-amber-500/10 dark:bg-[#d4af37]/[0.08] blur-[100px] -z-10"
        />

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <span className="inline-block text-xs font-bold text-amber-600 dark:text-[#d4af37] tracking-[2px] uppercase mb-3">
            KUNJUNGI WORKSHOP ATAU KONSULTASI ONLINE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-extrabold text-slate-900 dark:text-white leading-tight mb-4 max-w-2xl mx-auto">
            Ingin Melihat Sampel Bahan &amp; Hasil Cetak Secara Langsung?
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Workshop kami berlokasi di <strong className="text-slate-900 dark:text-white">Jl. Pagarsih (Dekat Pagarsih Plaza), Kota Bandung</strong>. Silakan hubungi tim kami untuk menjadwalkan kunjungan atau meminta sample dummy gratis.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/6281217780249?text=Halo%20Zpack%2C%20saya%20ingin%20konsultasi%20atau%20jadwal%20kunjungan%20ke%20workshop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Hubungi Tim ZPack via WA</span>
            </a>

            <Link
              href="/z-ai"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-200/80 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/[0.12] border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white font-semibold text-xs sm:text-sm transition-all duration-200"
            >
              <span>Tanya Spesifikasi ke Z-AI</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}