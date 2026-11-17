'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/common/navbar"; // Sesuaikan jalur impor navbar kamu

export default function TentangPage() {
  const machines = [
    {
      code: '01',
      name: ' Heidelberg & Speed Master',
      category: 'Cetak Warna Presisi',
      desc: 'Mesin cetak offset standar kelas industri untuk menghasilkan ketajaman detail grafis, akurasi warna CMYK/Pantone yang konsisten, serta efisiensi biaya pada produksi skala menengah hingga besar.',
    },
     {
      code: '02',
      name: 'Polar Guillotine Paper Cutter',
      category: 'Pemotongan Kertas Presisi Tinggi',
      desc: 'Sistem pemotongan kertas otomatis berakurasi tinggi untuk memastikan ukuran bahan baku maupun hasil akhir potong rata tanpa selisih milimeter.',
    },
    {
      code: '03',
      name: 'Mesin Pond & Die-Cutting',
      category: 'Potong Pola & Rel Lipatan',
      desc: 'Pemotongan pola kemasan (die-cut) dan garis lipatan (creasing) secara presisi agar setiap box mudah dirakit, kokoh, dan memiliki sudut lipatan yang rapi.',
    },
    {
      code: '04',
      name: 'In-House Finishing Line',
      category: 'Laminasi, Foil & Emboss',
      desc: 'Pengerjaan finishing langsung di workshop—mulai dari laminasi Doff/Glossy, Hotprint Foil emas/silver, hingga Emboss dan Deboss untuk kesan kemasan yang eksklusif.',
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Konsultasi Spesifikasi',
      desc: 'Diskusikan ukuran produk, pemilihan bahan kertas (Ivory, Duplex, Kraft, Art Carton), serta estimasi budget bersama tim kami.',
    },
    {
      step: '02',
      title: 'Desain & Sample Mockup',
      desc: 'Nikmati fasilitas Free Desain dan pembuatan Sample Dummy fisik agar Anda bisa fitting ukuran & ketebalan bahan sebelum cetak massal.',
    },
    {
      step: '03',
      title: 'Produksi & Quality Control',
      desc: 'Proses cetak offset, finishing, dan die-cutting dikerjakan in-house dengan pengawasan ketat di setiap tahap produksi.',
    },
    {
      step: '04',
      title: 'Pengiriman & Garansi',
      desc: 'Pesanan dikemas aman dan dikirim ke lokasi Anda (Free Ongkir se-Kota Bandung) lengkap dengan jaminan Garansi Cacat Produksi.',
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <Navbar />

      {/* 1. HERO / PROFIL SINGKAT ZPACK */}
      <section className="relative w-full py-12 sm:py-16 lg:py-24 overflow-hidden">
        {/* Ambient Glow halus */}
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
              Mitra Produksi Kemasan Custom Tangan Pertama untuk UMKM hingga Korporat
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-[1.08rem] leading-relaxed mb-8">
              Berbasis di Kota Bandung, ZPack hadir untuk mendapatkan kemasan produk berkualitas industri—mulai dari box makanan food-grade, dus kosmetik &amp; skincare, paperbag, hingga cetakan komersial—dengan harga langsung pabrik dan pendampingan teknis dari nol.
            </p>

            {/* Ringkasan Angka Kunci (Editorial Borderless Strip) */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-slate-200 dark:border-white/10 max-w-xl">
              <div>
                <span className="block text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                  80.000+
                </span>
                <span className="text-[11px] sm:text-xs text-amber-600 dark:text-[#d4af37] font-semibold uppercase tracking-wide">
                  Kapasitas Pcs / Hari
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                  129+
                </span>
                <span className="text-[11px] sm:text-xs text-amber-600 dark:text-[#d4af37] font-semibold uppercase tracking-wide">
                  Brand &amp; UMKM Mitra
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white">
                  100%
                </span>
                <span className="text-[11px] sm:text-xs text-amber-600 dark:text-[#d4af37] font-semibold uppercase tracking-wide">
                  Produksi In-House
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
                KOMITMEN PRODUKSI
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
                Kemasan yang Tepat Meningkatkan Nilai Jual Produk Anda
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Banyak pemilik brand kesulitan mencari percetakan yang mau membimbing soal pemilihan gramasi kertas, konstruksi lipatan box yang kuat, hingga hasil warna yang tidak meleset. Di ZPack, seluruh proses tersebut kami tangani langsung di workshop kami sendiri.
              </p>

              {/* Highlight Garansi */}
              <div className="pl-4 border-l-2 border-amber-500 dark:border-[#d4af37]">
                <strong className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-1">
                  Garansi Cacat Produksi &amp; Fitting Mockup
                </strong>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Sebelum produksi massal berjalan, Anda bisa menguji sample dummy fisik terlebih dahulu agar ukuran kemasan benar-benar pas dengan produk Anda.
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
                    Direct Factory Rate (Harga Langsung Pabrik)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Diproduksi langsung di fasilitas workshop ZPack tanpa perantara makelar, sehingga struktur harga jauh lebih kompetitif untuk menjaga margin bisnis Anda.
                  </p>
                </div>
              </div>

              <div className="py-5 sm:py-6 flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-[#d4af37] pt-1">
                  02
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Free Desain &amp; Sample Dummy Gratis
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Belum punya file siap cetak? Tim desain kami siap membantu merancang layout kemasan beserta sample mockup fisik untuk uji coba ukuran sebelum naik cetak.
                  </p>
                </div>
              </div>

              <div className="py-5 sm:py-6 flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-[#d4af37] pt-1">
                  03
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Material Food-Grade &amp; Ramah Lingkungan
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Tersedia pilihan bahan bersertifikat food-grade (Ivory laminasi dalam anti minyak) hingga bahan Kraft eco-friendly untuk kebutuhan F&amp;B dan kosmetik.
                  </p>
                </div>
              </div>

              <div className="py-5 sm:py-6 flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-[#d4af37] pt-1">
                  04
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Free Ongkir Se-Kota Bandung &amp; Pengiriman Nasional
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Pengiriman gratis untuk seluruh area Kota Bandung dan dukungan ekspedisi kargo terpercaya untuk pengiriman ke seluruh wilayah Indonesia.
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
              Didukung Lini Produksi Cetak &amp; Finishing Terintegrasi
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Kombinasi mesin cetak offset presisi dan perangkat finishing mekanis memastikan setiap kemasan keluar dengan standar kualitas yang seragam.
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

      {/* 4. ALUR PEMESANAN (Horizontal Editorial Steps) */}
      <section className="w-full py-14 sm:py-20 border-t border-slate-200 dark:border-white/[0.07]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold text-amber-600 dark:text-[#d4af37] tracking-[1.5px] uppercase mb-2">
              CARA KERJA KAMI
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              4 Langkah Mudah Cetak Kemasan di ZPack
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((flow) => (
              <div
                key={flow.step}
                className="pt-5 border-t-2 border-slate-200 dark:border-white/15 hover:border-amber-500 dark:hover:border-[#d4af37] transition-colors duration-300"
              >
                <span className="block text-2xl font-extrabold text-amber-600 dark:text-[#d4af37] font-mono mb-2">
                  {flow.step}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {flow.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {flow.desc}
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