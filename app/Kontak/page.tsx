'use client';

import React, { useState } from 'react';
import Navbar from "@/components/common/navbar";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    packageType: 'Box Skincare / Kosmetik',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format pesan otomatis ke WhatsApp tim ZPack
    const text = `Halo Zpack, saya ${formData.name} (${formData.phone}). Saya ingin konsultasi mengenai ${formData.packageType}. Pesan: ${formData.message}`;
    const encodedUrl = `https://wa.me/6281217780249?text=${encodeURIComponent(text)}`;
    window.open(encodedUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col">
      <Navbar />

      {/* 1. HERO / JUDUL HALAMAN */}
      <section className="relative w-full py-12 sm:py-16 lg:py-24 overflow-hidden">
        {/* Ambient Glow halus */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] sm:w-[780px] h-[260px] rounded-full blur-[110px] -z-10"
        />

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-block text-xs sm:text-[0.9rem] font-bold text-amber-600 dark:text-[#d4af37] tracking-[2px] uppercase mb-3">
              LAYANAN PELANGGAN &amp; KONSULTASI
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-extrabold tracking-[-0.5px] leading-[1.18] text-slate-900 dark:text-white mb-6">
              Mari Wujudkan Kemasan Impian untuk Brand Anda Bersama ZPack
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-[1.08rem] leading-relaxed">
              Punya pertanyaan seputar spesifikasi bahan, ingin menghitung estimasi harga cetak custom, atau menjadwalkan kunjungan ke workshop? Tim kami siap membantu Anda dengan respon cepat.
            </p>
          </div>
        </div>
      </section>

      {/* 2. KARTU INFORMASI KONTAK & FORMULIR (Grid Layout Tanpa Card Kaku) */}
      <section className="w-full py-14 sm:py-20 border-t border-slate-200 dark:border-white/[0.07]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Kolom Kiri: Informasi Kontak Langsung */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              <div>
                <span className="inline-block text-xs font-bold text-amber-600 dark:text-[#d4af37] tracking-[1.5px] uppercase mb-2">
                  SALURAN RESMI
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
                  Hubungi Kami Langsung
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  Pilih jalur komunikasi yang paling nyaman bagi Anda. Konsultasi via WhatsApp sangat dianjurkan untuk perhitungan harga instan dan klaim promo free desain.
                </p>
              </div>

              {/* List Kontak dengan Garis Kiri Emas */}
              <div className="space-y-6 pl-4 border-l-2 border-amber-500/50 dark:border-[#d4af37]/50">
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    WhatsApp Konsultasi Cepat
                  </span>
                  <a
                    href="https://wa.me/6281217780249?text=Halo%20Zpack%2C%20saya%20mau%20konsultasi%20cetak%20kemasan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-[#d4af37] transition-colors"
                  >
                    0812-1778-0249
                  </a>
                </div>

                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Email Resmi Korporat / File
                  </span>
                  <a
                    href="mailto:aszprinting21@gmail.com"
                    className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-[#d4af37] transition-colors break-all"
                  >
                    aszprinting21@gmail.com
                  </a>
                </div>

                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Alamat Workshop &amp; Produksi
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
                    Jl. Pagarsih (Dekat Pagarsih Plaza), Kota Bandung, Jawa Barat
                  </p>
                  <span className="inline-block text-xs text-amber-600 dark:text-[#d4af37] font-medium mt-1">
                    (Buka Senin - Sabtu, 08.00 - 17.00 WIB)
                  </span>
                </div>
              </div>

              {seoBadgeSnippet()}
            </div>

            {/* Kolom Kanan: Formulir Pesan Cepat / Langsung ke WhatsApp */}
            <div className="lg:col-span-7 bg-slate-50/70 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Kirim Pesan &amp; Konsultasi Kilat
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Isi formulir di bawah ini. Tombol kirim akan secara otomatis mengarahkan Anda langsung ke WhatsApp resmi ZPack beserta detail pesanan Anda.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Nama / Nama Brand Anda *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi / Skincare Glow"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white dark:bg-[#161f30] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-500 dark:focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 08123456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white dark:bg-[#161f30] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-500 dark:focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Kebutuhan / Jenis Produk Kemasan *
                  </label>
                  <select
                    value={formData.packageType}
                    onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                    className="w-full bg-white dark:bg-[#161f30] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-[#d4af37] transition-colors"
                  >
                    <option value="Box Skincare & Kosmetik">Box Skincare &amp; Kosmetik</option>
                    <option value="Packaging Food & Takeaway (Makanan)">Packaging Food &amp; Takeaway (Makanan)</option>
                    <option value="Paperbag Custom">Paperbag Custom</option>
                    <option value="Label Stiker & Brosur">Label Stiker &amp; Brosur</option>
                    <option value="Undangan Digital Website">Undangan Digital Website</option>
                    <option value="Lainnya / Konsultasi Umum">Lainnya / Konsultasi Umum</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Detail Pesan / Spesifikasi (Ukuran &amp; Jumlah Perkiraan)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tuliskan ukuran perkiraan (P x L x T) dan jumlah pcs yang ingin dicetak..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white dark:bg-[#161f30] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-500 dark:focus:border-[#d4af37] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  Kirim Pertanyaan via WhatsApp
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PETA LOKASI WORKSHOP (Google Maps Embed Placeholder) */}
      <section className="w-full py-14 sm:py-20 border-t border-slate-200 dark:border-white/[0.07] bg-slate-50/60 dark:bg-white/[0.015]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-xs font-bold text-amber-600 dark:text-[#d4af37] tracking-[1.5px] uppercase mb-2">
              LOKASI WORKSHOP
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
              Kunjungi Pusat Produksi ZPack di Bandung
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Jl. Pagarsih (Dekat Pagarsih Plaza), Kota Bandung, Jawa Barat. Temui tim kami untuk melihat langsung sampel bahan dan hasil cetak finishing.
            </p>
          </div>

          {/* Kotak Peta Interaktif */}
          <div className="w-full h-[350px] sm:h-[420px] rounded-3xl overflow-hidden border border-slate-300 dark:border-white/10 shadow-md relative bg-slate-200 dark:bg-slate-800">
            <iframe
              title="ZPack Workshop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.0251682787048!2d107.58754527417591!3d-6.9225586677552124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9b99c75c309600d%3A0x30498696a9d14998!2sz%20pack!5e1!3m2!1sid!2sid!4v1794941841849!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

    </div>
  );
}

function seoBadgeSnippet() {
  return (
    <div className="p-5 rounded-2xl bg-amber-500/10 dark:bg-[#d4af37]/10 border border-amber-500/30 dark:border-[#d4af37]/30">
      <h4 className="text-xs sm:text-sm font-bold text-amber-600 dark:text-[#d4af37] uppercase tracking-wide mb-1">
        Keuntungan Datang Langsung / Konsultasi:
      </h4>
      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        Dapatkan fasilitas <strong className="text-slate-900 dark:text-white">Free Desain</strong>, pembuatan <strong className="text-slate-900 dark:text-white">Sample Dummy Gratis</strong> untuk fitting ukuran, serta <strong className="text-slate-900 dark:text-white">Free Ongkir se-Kota Bandung</strong> untuk pemesanan massal.
      </p>
    </div>
  );
}