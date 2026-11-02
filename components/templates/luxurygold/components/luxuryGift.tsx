'use client';

import { useState } from 'react';

interface BankAccount {
  bank: string;
  account_number: string;
  account_name: string;
}

interface WeddingGiftProps {
  xtraData?: {
    bank_accounts?: BankAccount[];
    qris_url?: string;
  };
}

export default function LuxuryGift({ xtraData }: WeddingGiftProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const bankAccounts = xtraData?.bank_accounts || [];
  const qrisUrl = xtraData?.qris_url;

  const handleCopy = (accountNumber: string, index: number) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-slate-100 flex flex-col items-center">
      <div className="max-w-lg w-full text-center mb-8">
        <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold">
          Digital Envelope & Gift
        </span>
        <h2 className="text-2xl font-serif text-amber-100 mt-1">Hadiah Pernikahan</h2>
        <p className="text-xs text-slate-400 mt-2 max-w-sm mx-auto">
          Doa restu Anda adalah hadiah terindah. Namun jika ingin memberi hadiah secara digital, dapat melalui rekening di bawah ini:
        </p>
      </div>

      <div className="max-w-md w-full space-y-6">
        {/* LOOPING KARTU ATM DARI xtra_data.bank_accounts */}
        {bankAccounts.length > 0 ? (
          bankAccounts.map((account, idx) => (
            <div
              key={idx}
              className="relative w-full aspect-[1.58/1] rounded-2xl bg-gradient-to-br from-teal-900 via-slate-900 to-teal-950 border border-teal-500/30 p-5 sm:p-6 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-amber-400/50 transition-all duration-300"
            >
              {/* Pattern Background Kartu */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* BARIS ATAS: Chip Kartu & Nama Bank */}
              <div className="flex items-center justify-between z-10">
                {/* Chip Kartu Emas */}
                <div className="w-10 h-8 sm:w-12 sm:h-9 bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-500 rounded-md border border-amber-300/60 shadow-inner flex flex-col justify-around p-1">
                  <div className="w-full h-[1px] bg-amber-700/40"></div>
                  <div className="w-full h-[1px] bg-amber-700/40"></div>
                  <div className="w-full h-[1px] bg-amber-700/40"></div>
                </div>

                {/* Nama Bank di Kanan Atas */}
                <span className="text-base sm:text-lg font-black tracking-wider text-white uppercase drop-shadow-sm">
                  {account.bank}
                </span>
              </div>

              {/* BARIS TENGAH: Nomor Rekening Besar */}
              <div className="my-auto z-10">
                <p className="text-[10px] uppercase tracking-widest text-teal-300/80 mb-1 font-mono">
                  Nomor Rekening
                </p>
                <p className="text-lg sm:text-2xl font-mono font-bold tracking-widest text-white drop-shadow-md">
                  {account.account_number}
                </p>
              </div>

              {/* BARIS BAWAH: Nama Pemilik (Atas Nama) & Tombol Salin */}
              <div className="flex items-end justify-between z-10 pt-2 border-t border-teal-800/50">
                <div>
                  <p className="text-[8px] uppercase tracking-wider text-teal-400/80">Atas Nama</p>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wide text-amber-200 truncate max-w-[180px] sm:max-w-[220px]">
                    {account.account_name}
                  </p>
                </div>

                {/* Tombol Salin */}
                <button
                  onClick={() => handleCopy(account.account_number, idx)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 shrink-0 ${
                    copiedIndex === idx
                      ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/40'
                      : 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-amber-400/30'
                  } shadow-md cursor-pointer`}
                >
                  {copiedIndex === idx ? (
                    <>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Salin Rekening</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-slate-500 text-xs">
            Informasi rekening belum ditambahkan.
          </div>
        )}

        {/* OPSIONAL: KARTU QRIS (JIKA ADA URL QRIS DI xtra_data) */}
        {qrisUrl && (
          <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-5 text-center shadow-xl">
            <p className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-3">
              Scan QRIS Pembayaran
            </p>
            <div className="w-48 h-48 mx-auto bg-white p-2 rounded-xl shadow-inner flex items-center justify-center">
              <img src={qrisUrl} alt="QRIS Wedding Gift" className="w-full h-full object-contain" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}