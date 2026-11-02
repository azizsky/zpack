'use client';

import React from 'react';
// Import komponen internal folder luxurygold
import LuxuryCover from './components/luxuryCover';
import LuxuryRSVP from './components/luxuryRsvp';
import LuxuryGift from './components/luxuryGift';

// Interface Data Undangan dari Database D1
export interface InvitationData {
  id: string;
  slug: string;
  category?: string;
  package?: string; // 'basic' | 'premium' | 'exclusive'
  status?: string;
  template_id?: string;
  nama_panggilan_pria?: string;
  nama_panggilan_wanita?: string;
  nama_lengkap_pria?: string;
  nama_lengkap_wanita?: string;
  orang_tua_pria?: string;
  orang_tua_wanita?: string;
  turut_mengundang_pria?: string;
  turut_mengundang_wanita?: string;
  tanggal_akad?: string;
  waktu_akad?: string;
  tanggal_resepsi?: string;
  waktu_resepsi?: string;
  lokasi_teks?: string;
  lokasi_maps?: string;
  created_at?: string;
  xtra_data?: {
    musicOption?: string;
    customMusicUrl?: string;
    enableRsvp?: boolean;
    liveStreamUrl?: string;
    videoPrewedUrl?: string;
    galeriFoto?: string[];
    loveStory?: { year?: string; title?: string; story?: string }[];
    qris_url?: string;
    bank_accounts?: { bank: string; account_number: string; account_name: string }[];
    og_image_url?: string;
  } | null;
}

interface LuxuryTemplateProps {
  data: InvitationData;
}

export default function LuxuryTemplate({ data }: LuxuryTemplateProps) {
  // 1. Ekstraksi informasi paket (Basic, Premium, Exclusive)
  const pkg = (data.package || 'basic').toLowerCase();
  
  const isBasic = pkg === 'basic';
  const isPremiumOrAbove = pkg === 'premium' || pkg === 'exclusive';
  const isExclusive = pkg === 'exclusive';

  // 2. Ekstraksi Xtra Data (JSON)
  const xtra = data.xtra_data || {};
  
  // Pengaturan izin fitur berdasarkan paket
  const allowRsvp = isPremiumOrAbove && (xtra.enableRsvp ?? true);
  const allowGift = isPremiumOrAbove && ((xtra.bank_accounts && xtra.bank_accounts.length > 0) || !!xtra.qris_url);
  const allowStory = isPremiumOrAbove && xtra.loveStory && xtra.loveStory.length > 0;
  const allowGallery = isPremiumOrAbove && xtra.galeriFoto && xtra.galeriFoto.length > 0;

  return (
    <div className="w-full bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-amber-500 selection:text-slate-950 overflow-x-hidden">
      
      {/* 1. COVER / HERO SECTION (Selalu Ada di Semua Paket) */}
      <LuxuryCover data={data} />

      {/* 2. SECTION PROFIL MEMPELAI */}
      <section className="w-full py-16 px-4 text-center border-b border-amber-500/10">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold">
            The Wedding Of
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-amber-100">
            {data.nama_panggilan_pria || 'Mempelai Pria'} &amp; {data.nama_panggilan_wanita || 'Mempelai Wanita'}
          </h1>
          <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
            Maha Suci Allah yang telah menciptakan makhluk-rekan berpasang-pasangan.
          </p>
        </div>
      </section>

      {/* 3. SECTION WAKTU & LOKASI ACARA */}
      <section className="w-full py-16 px-4 bg-slate-900/50 text-center border-b border-amber-500/10">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-xl font-serif text-amber-200">Waktu &amp; Tempat Acara</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl">
              <h3 className="text-sm font-bold text-amber-400 mb-1">Akad Nikah</h3>
              <p className="text-xs text-slate-300">{data.tanggal_akad || 'Tanggal Akad'}</p>
              <p className="text-[11px] text-slate-400 mt-1">{data.waktu_akad || '08:00 WIB'}</p>
            </div>
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl">
              <h3 className="text-sm font-bold text-amber-400 mb-1">Resepsi</h3>
              <p className="text-xs text-slate-300">{data.tanggal_resepsi || 'Tanggal Resepsi'}</p>
              <p className="text-[11px] text-slate-400 mt-1">{data.waktu_resepsi || '11:00 WIB'}</p>
            </div>
          </div>

          {data.lokasi_teks && (
            <p className="text-xs text-slate-400 mt-2">{data.lokasi_teks}</p>
          )}

          {data.lokasi_maps && (
            <a
              href={data.lokasi_maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 bg-amber-500/10 border border-amber-500/40 hover:bg-amber-500 hover:text-slate-950 text-amber-300 text-xs font-bold rounded-xl transition-all duration-200"
            >
              Buka Google Maps
            </a>
          )}
        </div>
      </section>

      {/* 4. LOVE STORY SECTION (Hanya untuk Paket Premium & Exclusive) */}
      {allowStory && (
        <section className="w-full py-16 px-4 text-center border-b border-amber-500/10">
          <div className="max-w-md mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold">Our Journey</span>
            <h2 className="text-2xl font-serif text-amber-100 mt-1 mb-6">Love Story</h2>
            <div className="space-y-4 text-left">
              {xtra.loveStory?.map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                  <span className="text-[10px] font-bold text-amber-400">{item.year}</span>
                  <h3 className="text-xs font-bold text-slate-200 mt-0.5">{item.title}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.story}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. RSVP & BUKU TAMU SECTION (Hanya untuk Paket Premium & Exclusive) */}
      {allowRsvp && (
        <LuxuryRSVP invitationId={data.id} />
      )}

      {/* 6. WEDDING GIFT SECTION / REKENING & QRIS (Hanya untuk Paket Premium & Exclusive) */}
      {allowGift && (
        <LuxuryGift xtraData={xtra} />
      )}

      {/* FOOTER PLATFORM LESTARI PROJECT */}
      <footer className="w-full py-8 text-center text-[10px] text-slate-600 bg-slate-950 border-t border-slate-900">
        <p>Created with Love by <span className="text-amber-500/80 font-semibold">Lestari Project</span> ({pkg.toUpperCase()} Package)</p>
      </footer>
    </div>
  );
}