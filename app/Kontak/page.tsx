'use client';

import React, { useState } from 'react';
import Navbar from "@/components/common/navbar";

type ChannelKey = 'shopee' | 'instagram' | 'tiktok' | 'tiktokShop' | 'facebook';

function ChannelIcon({ name }: { name: ChannelKey }) {
  switch (name) {
    case 'shopee':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8h12l-1 12H7L6 8z" />
          <path d="M9.5 8a2.5 2.5 0 0 1 5 0" />
          <path d="M14 11.5c0-.8-.7-1.3-1.8-1.3s-1.8.5-1.8 1.2c0 .8.8 1.2 1.8 1.5 1 .3 1.8.7 1.8 1.6 0 .9-.8 1.5-1.9 1.5-1.1 0-1.9-.5-2-1.4" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      );
    case 'tiktokShop':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 9h14l-1 11H6L5 9z" />
          <path d="M9 9V6.5a3 3 0 0 1 6 0V9" />
          <path d="M10.2 14.2a1.8 1.8 0 0 0 3.4-.5v-2.2" />
        </svg>
      );
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M13.5 21v-8.2h2.7l.4-3.2h-3.1V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H8v3.2h2.7V21h2.8z" />
        </svg>
      );
  }
}

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    packageType: 'Box Skincare / Kosmetik',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Ganti href di bawah ini dengan link resmi toko & akun ZPack
  const zpackChannels: { key: ChannelKey; label: string; href: string }[] = [
    { key: 'shopee', label: 'Shopee', href: 'https://shopee.co.id/' },
    { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/' },
    { key: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/' },
    { key: 'tiktokShop', label: 'TikTok Shop', href: 'https://www.tiktok.com/shop' },
    { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Zpack, saya ${formData.name} (${formData.phone}). Saya ingin konsultasi mengenai ${formData.packageType}. Pesan: ${formData.message}`;
    const encodedUrl = `https://wa.me/6281217780249?text=${encodeURIComponent(text)}`;
    window.open(encodedUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col">
      <Navbar />

      {/* 1. HERO / JUDUL HALAMAN */}
      <section className="relative w-full py-12 sm:py-16 lg:py-24 overflow-hidden">
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

      {/* 2. INFORMASI KONTAK & FORMULIR KONSULTASI */}
      <section className="w-full py-14 sm:py-20 border-t border-slate-200 dark:border-white/[0.07]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Kolom Kiri: Informasi Kontak Langsung & Saluran ZPack */}
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

              {/* List Kontak & Ikon Saluran ZPack */}
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

                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                    Marketplace &amp; Media Sosial ZPack
                  </span>
                  <div className="flex flex-wrap items-center gap-2.5">
                    {zpackChannels.map((channel) => (
                      <a
                        key={channel.key}
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={channel.label}
                        title={channel.label}
                        className="w-10 h-10 rounded-xl bg-white dark:bg-white/[0.05] hover:bg-amber-500/15 dark:hover:bg-[#d4af37]/15 border border-slate-300 dark:border-white/15 hover:border-amber-500 dark:hover:border-[#d4af37] text-slate-800 dark:text-slate-200 hover:text-amber-600 dark:hover:text-[#d4af37] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <ChannelIcon name={channel.key} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {seoBadgeSnippet()}
            </div>

            {/* Kolom Kanan: Formulir Konsultasi ke WhatsApp */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-50/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <span className="inline-block text-xs font-bold text-amber-600 dark:text-[#d4af37] tracking-[1.5px] uppercase mb-2">
                  FORMULIR KONSULTASI INSTAN
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                  Kirim Detail Kebutuhan Kemasan atau Cetakan
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                  Isi data di bawah ini, lalu pesan akan otomatis diformat dan diarahkan ke WhatsApp tim ZPack.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Nama Lengkap / Brand
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Contoh: Budi / Brand Kopi Senja"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (submitted) setSubmitted(false);
                        }}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/[0.05] border border-slate-300 dark:border-white/15 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-amber-500 dark:focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Nomor WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="Contoh: 0812xxxxxxxx"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (submitted) setSubmitted(false);
                        }}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/[0.05] border border-slate-300 dark:border-white/15 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-amber-500 dark:focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="packageType"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Jenis Kebutuhan / Produk
                    </label>
                    <select
                      id="packageType"
                      value={formData.packageType}
                      onChange={(e) => {
                        setFormData({ ...formData, packageType: e.target.value });
                        if (submitted) setSubmitted(false);
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/15 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-[#d4af37]"
                    >
                      <option value="Box Skincare / Kosmetik">Box Skincare / Kosmetik</option>
                      <option value="Box Makanan / F&B">Box Makanan / F&amp;B</option>
                      <option value="Hardbox / Hampers">Hardbox / Hampers</option>
                      <option value="Paper Bag">Paper Bag</option>
                      <option value="Cetakan Komersial (Nota, Brosur, dll.)">
                        Cetakan Komersial (Nota, Brosur, dll.)
                      </option>
                      <option value="Undangan Digital / Cetak">Undangan Digital / Cetak</option>
                      <option value="Konsultasi Lainnya">Konsultasi Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Detail Ukuran, Bahan, Qty &amp; Catatan
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tuliskan perkiraan ukuran, jenis bahan/finishing yang diinginkan, estimasi jumlah (qty), atau jadwal kunjungan workshop..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (submitted) setSubmitted(false);
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/[0.05] border border-slate-300 dark:border-white/15 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-amber-500 dark:focus:border-[#d4af37]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(212,175,55,0.28)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                    >
                      Kirim Konsultasi via WhatsApp
                    </button>

                    {submitted && (
                      <p className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        Jendela WhatsApp sudah dibuka. Jika tidak terbuka otomatis, klik nomor WA di sebelah kiri.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PETA LOKASI WORKSHOP */}
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