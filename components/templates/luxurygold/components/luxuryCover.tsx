'use client';

import { useState, useEffect } from 'react';
import { InvitationData } from '../luxuryTemplate';

interface LuxuryCoverProps {
  data: InvitationData;
  onOpen?: () => void;
}

export default function LuxuryCover({ data, onOpen }: LuxuryCoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Kunci scroll halaman sebelum cover dibuka
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    if (onOpen) onOpen();
  };

  return (
    <>
      {/* Inject Font Langsung Secara Instan Anti-Delay/Flash */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Alex+Brush&display=swap"
      />

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0a0f1d] text-slate-100 transition-all duration-1000 ease-in-out overflow-hidden ${
          isOpen ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
      >
        <style jsx global>{`
          .font-curly {
            font-family: 'Great Vibes', 'Alex Brush', cursive, sans-serif !important;
          }

          /* Animasi Kelopak Bunga Jatuh Kontinu */
          @keyframes fallingPetals {
            0% {
              transform: translateY(-10vh) rotate(0deg) translateX(0px);
              opacity: 0;
            }
            15% {
              opacity: 0.85;
            }
            100% {
              transform: translateY(105vh) rotate(360deg) translateX(35px);
              opacity: 0;
            }
          }

          /* Animasi Glowing Bunga Emas */
          @keyframes goldGlow {
            0%, 100% {
              filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.4));
              opacity: 0.85;
            }
            50% {
              filter: drop-shadow(0 0 18px rgba(251, 191, 36, 0.8));
              opacity: 1;
            }
          }

          .petal {
            position: absolute;
            background: linear-gradient(135deg, #fef08a, #f59e0b);
            border-radius: 100% 0% 100% 0% / 100% 0% 100% 0%;
            filter: drop-shadow(0 0 6px rgba(245, 158, 11, 0.5));
            pointer-events: none;
          }

          .petal-1 { left: 8%;  width: 12px; height: 16px; animation: fallingPetals 8s linear infinite -2s; }
          .petal-2 { left: 28%; width: 10px; height: 14px; animation: fallingPetals 10s linear infinite -6s; }
          .petal-3 { left: 52%; width: 14px; height: 18px; animation: fallingPetals 7.5s linear infinite -3s; }
          .petal-4 { left: 74%; width: 9px;  height: 13px; animation: fallingPetals 9s linear infinite -7s; }
          .petal-5 { left: 88%; width: 11px; height: 15px; animation: fallingPetals 8.5s linear infinite -4s; }

          .animate-gold-glow {
            animation: goldGlow 4s ease-in-out infinite;
          }
        `}</style>

        {/* 1. Latar Belakang Gradasi Biru Malam Mewah */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827] via-[#0b1120] to-[#050811]"></div>

        {/* 2. Bintang Kecil Kelap-Kelip Bertaburan */}
        <div className="absolute inset-0 pointer-events-none opacity-80">
          <div className="absolute top-[12%] left-[15%] w-1 h-1 bg-amber-200 rounded-full animate-ping"></div>
          <div className="absolute top-[18%] left-[80%] w-1.5 h-1.5 bg-yellow-100 rounded-full animate-pulse"></div>
          <div className="absolute top-[28%] left-[40%] w-1 h-1 bg-amber-300 rounded-full animate-ping duration-1000"></div>
          <div className="absolute top-[45%] left-[10%] w-1 h-1 bg-yellow-200 rounded-full animate-pulse"></div>
          <div className="absolute top-[52%] left-[88%] w-1.5 h-1.5 bg-amber-100 rounded-full animate-ping"></div>
          <div className="absolute top-[68%] left-[25%] w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute top-[75%] left-[70%] w-1 h-1 bg-amber-200 rounded-full animate-ping"></div>
          <div className="absolute top-[85%] left-[45%] w-1.5 h-1.5 bg-amber-100 rounded-full animate-pulse"></div>
        </div>

        {/* 3. Kelopak Bunga Emas Berjatuhan (Langsung Tersebar) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="petal petal-1"></div>
          <div className="petal petal-2"></div>
          <div className="petal petal-3"></div>
          <div className="petal petal-4"></div>
          <div className="petal petal-5"></div>
        </div>

        {/* 4. Ukiran Bunga & Sulur Emas SVG Mewah (Sudut Kiri Bawah) */}
        <div className="absolute bottom-0 left-0 pointer-events-none z-20 w-36 h-36 sm:w-48 sm:h-48 animate-gold-glow">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="goldGradientLeft" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>
            {/* Sulur Bunga Utama */}
            <path d="M 10 190 C 30 140, 80 120, 130 70 C 110 90, 80 110, 50 150 Z" fill="url(#goldGradientLeft)" />
            <path d="M 10 190 Q 60 170 110 180 Q 70 190 10 190 Z" fill="url(#goldGradientLeft)" />
            {/* Kelopak Bunga Kiri */}
            <path d="M 40 160 C 20 130, 40 100, 70 120 C 60 140, 50 150, 40 160 Z" fill="url(#goldGradientLeft)" opacity="0.9" />
            <path d="M 70 120 C 90 90, 120 110, 100 135 C 85 130, 75 125, 70 120 Z" fill="url(#goldGradientLeft)" opacity="0.95" />
            <path d="M 30 180 C 10 160, 20 130, 50 145 Z" fill="url(#goldGradientLeft)" opacity="0.8" />
            {/* Detil Putik & Kilau */}
            <circle cx="65" cy="130" r="6" fill="#fef08a" />
            <circle cx="110" cy="85" r="4" fill="#fef08a" />
            <circle cx="45" cy="165" r="3" fill="#fef08a" />
          </svg>
        </div>

        {/* 5. Ukiran Bunga & Sulur Emas SVG Mewah (Sudut Kanan Bawah) */}
        <div className="absolute bottom-0 right-0 pointer-events-none z-20 w-36 h-36 sm:w-48 sm:h-48 transform scale-x-[-1] animate-gold-glow">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="goldGradientRight" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>
            <path d="M 10 190 C 30 140, 80 120, 130 70 C 110 90, 80 110, 50 150 Z" fill="url(#goldGradientRight)" />
            <path d="M 10 190 Q 60 170 110 180 Q 70 190 10 190 Z" fill="url(#goldGradientRight)" />
            <path d="M 40 160 C 20 130, 40 100, 70 120 C 60 140, 50 150, 40 160 Z" fill="url(#goldGradientRight)" opacity="0.9" />
            <path d="M 70 120 C 90 90, 120 110, 100 135 C 85 130, 75 125, 70 120 Z" fill="url(#goldGradientRight)" opacity="0.95" />
            <path d="M 30 180 C 10 160, 20 130, 50 145 Z" fill="url(#goldGradientRight)" opacity="0.8" />
            <circle cx="65" cy="130" r="6" fill="#fef08a" />
            <circle cx="110" cy="85" r="4" fill="#fef08a" />
            <circle cx="45" cy="165" r="3" fill="#fef08a" />
          </svg>
        </div>

        {/* 6. Konten Utama Cover (Posisi Bawah Dinaikkan Jauh Lebih Tinggi) */}
        <div className="relative z-30 w-full max-w-md h-[100svh] mx-auto px-6 pt-6 pb-28 sm:pb-32 flex flex-col items-center justify-between text-center">
          
          {/* Header Atas */}
          <div className="space-y-1 pt-2">
            <span className="text-[10px] uppercase tracking-[0.4em] text-amber-300/90 font-semibold drop-shadow">
              The Wedding Invitation
            </span>
            <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-1.5"></div>
          </div>

          {/* Tengah: Kepada & Nama Mempelai dengan Font Curly Instan */}
          <div className="space-y-3 my-auto w-full py-1">
            <p className="text-xs text-slate-300 italic tracking-wider font-serif">
              Kepada Yth. Bapak/Ibu/Saudara/i
            </p>
            
            <div className="inline-block px-4 py-1 bg-slate-900/80 border border-amber-500/30 rounded-full shadow-inner backdrop-blur-md">
              <p className="text-[10px] text-amber-200 tracking-widest font-medium uppercase">
                Tamu Undangan
              </p>
            </div>

            <div className="space-y-0.5 pt-1">
              {/* Nama Pria - Font Curly */}
              <h1 className="font-curly text-6xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 drop-shadow-[0_2px_15px_rgba(245,158,11,0.5)] leading-tight">
                {data?.nama_panggilan_pria || 'Romeo'}
              </h1>
              
              <span className="text-xl font-serif text-amber-400/80 italic block py-0.5">&amp;</span>
              
              {/* Nama Wanita - Font Curly */}
              <h1 className="font-curly text-6xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 drop-shadow-[0_2px_15px_rgba(245,158,11,0.5)] leading-tight">
                {data?.nama_panggilan_wanita || 'Juliet'}
              </h1>
            </div>
          </div>
            
             <button
              onClick={handleOpenInvitation}
              className="group relative w-full inline-flex items-center justify-center px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest text-slate-950 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 rounded-xl shadow-[0_0_25px_rgba(245,158,11,0.5)] active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Efek Kilau Cahaya */}
              <span className="absolute inset-0 w-full h-full bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              
              <span className="relative flex items-center justify-center gap-2">
                <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M12 12v9" />
                </svg>
                Buka Undangan
              </span>
            </button>

          {/* Bawah: Ornamen Bunga Emas, Teks, & Tombol Buka Undangan (Naik Lebih Tinggi) */}
          <div className="w-full space-y-3.5 mb-2">
            {/* Ornamen Garis Bunga Emas Tengah */}
            <div className="flex items-center justify-center gap-3 opacity-90">
              <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-amber-400"></div>
              <svg className="w-4 h-4 text-amber-400 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 4.89 13.41 5.65 12.6 5.92C13.5 6.5 14.1 7.56 14.1 8.75C14.1 9.38 13.9 9.97 13.56 10.47C14.42 10.95 15 11.89 15 12.95C15 13.3 14.93 13.64 14.81 13.95C15.53 14.53 16 15.42 16 16.4C16 18.39 14.39 20 12.4 20C11.64 20 10.93 19.76 10.35 19.33C9.76 19.76 9.06 20 8.3 20C6.31 20 4.7 18.39 4.7 16.4C4.7 15.42 5.17 14.53 5.89 13.95C5.77 13.64 5.7 13.3 5.7 12.95C5.7 11.89 6.28 10.95 7.14 10.47C6.8 9.97 6.6 9.38 6.6 8.75C6.6 7.56 7.2 6.5 8.1 5.92C7.29 5.65 6.7 4.89 6.7 4C6.7 2.9 7.6 2 8.7 2C9.55 2 10.28 2.54 10.57 3.29C11.02 3.1 11.5 3 12 3C12.5 3 12.98 3.1 13.43 3.29C13.72 2.54 14.45 2 15.3 2H12Z" />
              </svg>
              <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>

            <p className="text-[11px] text-slate-300 max-w-xs mx-auto leading-relaxed">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.
            </p>

          </div>

        </div>
      </div>
    </>
  );
}