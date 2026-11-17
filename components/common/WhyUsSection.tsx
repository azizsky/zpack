'use client';

import { useState, useEffect, useRef } from 'react';

export default function WhyUsSection() {
  const [productionCount, setProductionCount] = useState(0);
  const [partnerCount, setPartnerCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let currentProd = 0;
    const targetProd = 80000;
    const durationProd = 3000;
    const incrementProd = targetProd / (durationProd / 30);

    const prodTimer = setInterval(() => {
      currentProd += incrementProd;
      if (currentProd >= targetProd) {
        setProductionCount(targetProd);
        clearInterval(prodTimer);
      } else {
        setProductionCount(Math.floor(currentProd));
      }
    }, 30);

    let currentPartner = 0;
    const targetPartner = 129;
    const durationPartner = 2500;
    const incrementPartner = targetPartner / (durationPartner / 30);

    const partnerTimer = setInterval(() => {
      currentPartner += incrementPartner;
      if (currentPartner >= targetPartner) {
        setPartnerCount(targetPartner);
        clearInterval(partnerTimer);
      } else {
        setPartnerCount(Math.floor(currentPartner));
      }
    }, 30);

    return () => {
      clearInterval(prodTimer);
      clearInterval(partnerTimer);
    };
  }, [hasAnimated]);

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-3 px-2 lg:py-[4.5rem] lg:px-12 lg:mt-[5.5rem]">
      {/* Inline Styles untuk Micro-Animasi SVG Asli */}
      <style jsx global>{`
        @keyframes boxFlap {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-2px) scaleY(0.85); }
        }
        @keyframes personPulse {
          0%, 100% { opacity: 0.5; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(1.5px) translateY(-1px); }
        }
        @keyframes rotateClock {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounceArrow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(3px); }
        }

        .svg-box-flap {
          transform-origin: 12px 12px;
          animation: boxFlap 3s ease-in-out infinite;
        }
        .svg-person-secondary {
          transform-origin: center;
          animation: personPulse 2.5s ease-in-out infinite;
        }
        .svg-minute-hand {
          transform-origin: 12px 12px;
          animation: rotateClock 4s linear infinite;
        }
        .svg-arrow-down {
          animation: bounceArrow 1.8s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto flex flex-col gap-1 lg:gap-[3.5px]">
        
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-10 px-4">
          <span className="inline-block text-xs sm:text-[0.95rem] font-bold text-amber-500 dark:text-amber-400 tracking-[1.5px] uppercase mb-2">
            MENGAPA MEMILIH ZPACK
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-[2.5rem] font-extrabold tracking-[-0.5px] leading-[1.3] text-slate-900 dark:text-white mb-3">
            Kapasitas Produksi Skala Besar dengan Presisi Tinggi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm lg:text-[1.05rem] leading-relaxed">
            Kami mengintegrasikan teknologi manufaktur modern untuk menghasilkan kemasan berkualitas tinggi, pengerjaan cepat, dan harga yang kompetitif bagi bisnis Anda.
          </p>
        </div>

        {/* Content Container (Diubah proporsinya agar kartu metrik lebih ramping dan video di kanan lebih pas) */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-[2.5rem] w-full">
          
         {/* Kolom Kiri: Editorial Metrics (Tanpa Card, Menggunakan Garis Pembatas Minimalis) */}
          <div className="grid grid-cols-4 lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-x-8 lg:gap-y-7 w-full lg:flex-[0_0_42%]">
            
            {/* Metric 1: Kapasitas Produksi */}
            <div className="group flex flex-col items-center lg:items-start text-center lg:text-left py-2 lg:py-1 lg:pl-4 lg:border-l-2 border-slate-300 dark:border-white/15 hover:border-amber-500 dark:hover:border-[#d4af37] transition-colors duration-300">
              <div className="flex items-center gap-2 mb-1.5 lg:mb-2">
                <div className="w-[24px] h-[24px] lg:w-8 lg:h-8 rounded-lg bg-amber-500/10 dark:bg-[#d4af37]/10 text-amber-600 dark:text-[#d4af37] flex items-center justify-center">
                  <svg className="w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" className="svg-box-flap"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <span className="hidden lg:inline-block text-[0.72rem] text-amber-600 dark:text-[#d4af37] font-bold tracking-wider uppercase">
                  pcs / hari
                </span>
              </div>

              <span className="text-[0.85rem] sm:text-base lg:text-[2.25rem] font-extrabold text-slate-900 dark:text-white leading-none tabular-nums">
                {formatNumber(productionCount)}+
              </span>
              <span className="lg:hidden text-[0.55rem] text-amber-600 dark:text-[#d4af37] font-bold uppercase mt-1">
                pcs / hari
              </span>
              <p className="text-[0.60rem] lg:text-[0.88rem] text-slate-600 dark:text-slate-400 mt-1 lg:mt-1.5 leading-tight">
                Kapasitas Produksi
              </p>
            </div>

            {/* Metric 2: Mitra Bisnis */}
            <div className="group flex flex-col items-center lg:items-start text-center lg:text-left py-2 lg:py-1 lg:pl-4 lg:border-l-2 border-slate-300 dark:border-white/15 hover:border-amber-500 dark:hover:border-[#d4af37] transition-colors duration-300">
              <div className="flex items-center gap-2 mb-1.5 lg:mb-2">
                <div className="w-[24px] h-[24px] lg:w-8 lg:h-8 rounded-lg bg-amber-500/10 dark:bg-[#d4af37]/10 text-amber-600 dark:text-[#d4af37] flex items-center justify-center">
                  <svg className="w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" className="svg-person-secondary"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" className="svg-person-secondary"></path>
                  </svg>
                </div>
                <span className="hidden lg:inline-block text-[0.72rem] text-amber-600 dark:text-[#d4af37] font-bold tracking-wider uppercase">
                  Brand &amp; UMKM
                </span>
              </div>

              <span className="text-[0.85rem] sm:text-base lg:text-[2.25rem] font-extrabold text-slate-900 dark:text-white leading-none tabular-nums">
                {partnerCount}+
              </span>
              <span className="lg:hidden text-[0.55rem] text-amber-600 dark:text-[#d4af37] font-bold uppercase mt-1">
                Brand &amp; UMKM
              </span>
              <p className="text-[0.60rem] lg:text-[0.88rem] text-slate-600 dark:text-slate-400 mt-1 lg:mt-1.5 leading-tight">
                Telah Bermitra
              </p>
            </div>

            {/* Metric 3: Cepat & Presisi */}
            <div className="group flex flex-col items-center lg:items-start text-center lg:text-left py-2 lg:pt-5 lg:pl-4 lg:border-t lg:border-l-2 border-slate-200 dark:border-white/10 lg:border-l-slate-300 dark:lg:border-l-white/15 hover:lg:border-l-amber-500 dark:hover:lg:border-l-[#d4af37] transition-colors duration-300">
              <div className="w-[24px] h-[24px] lg:w-8 lg:h-8 rounded-lg bg-amber-500/10 dark:bg-[#d4af37]/10 text-amber-600 dark:text-[#d4af37] flex items-center justify-center mb-1.5 lg:mb-2.5">
                <svg className="w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="12" x2="12" y2="7"></line>
                  <line x1="12" y1="12" x2="16" y2="12" className="svg-minute-hand"></line>
                </svg>
              </div>
              <span className="text-[0.72rem] sm:text-sm lg:text-[1.15rem] font-bold text-slate-900 dark:text-white leading-snug">
                Cepat &amp; Presisi
              </span>
              <p className="text-[0.60rem] lg:text-[0.85rem] text-slate-600 dark:text-slate-400 mt-0.5 lg:mt-1 leading-tight">
                Pengerjaan Tepat Waktu
              </p>
            </div>

            {/* Metric 4: Harga Bersaing */}
            <div className="group flex flex-col items-center lg:items-start text-center lg:text-left py-2 lg:pt-5 lg:pl-4 lg:border-t lg:border-l-2 border-slate-200 dark:border-white/10 lg:border-l-slate-300 dark:lg:border-l-white/15 hover:lg:border-l-amber-500 dark:hover:lg:border-l-[#d4af37] transition-colors duration-300">
              <div className="w-[24px] h-[24px] lg:w-8 lg:h-8 rounded-lg bg-amber-500/10 dark:bg-[#d4af37]/10 text-amber-600 dark:text-[#d4af37] flex items-center justify-center mb-1.5 lg:mb-2.5">
                <svg className="w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  <polyline points="7 19 12 23 17 19" className="svg-arrow-down"></polyline>
                </svg>
              </div>
              <span className="text-[0.72rem] sm:text-sm lg:text-[1.15rem] font-bold text-slate-900 dark:text-white leading-snug">
                Harga Bersaing
              </span>
              <p className="text-[0.60rem] lg:text-[0.85rem] text-slate-600 dark:text-slate-400 mt-0.5 lg:mt-1 leading-tight">
                Direct Factory Rate
              </p>
            </div>

          </div>

          {/* Kolom Kanan: Video Showcase (Diberi porsi flex 60% agar ukurannya jauh lebih proporsional & ramping) */}
          <div className="relative mt-4 lg:mt-0 w-full lg:flex-[0_0_60%] rounded-xl lg:rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.5)] border border-white/[0.08] bg-black aspect-[16/9] lg:aspect-auto lg:h-[320px]">
            <video
              ref={videoRef}
              src="/production-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover block"
            />

            {/* Tombol Play / Pause Toggle Interaktif */}
            <button 
              onClick={toggleVideoPlay}
              className="absolute top-[7.75rem] right-[0.55rem] lg:top-[1.25rem] lg:right-[1.25rem] w-[34px] h-[34px] lg:w-[38px] lg:h-[38px] rounded-full bg-[#0b0d10]/[0.65] hover:bg-blue-950/80 text-white border border-white/20 hover:border-white/40 flex items-center justify-center cursor-pointer backdrop-blur-[8px] transition-all duration-200 hover:scale-108 z-10 shadow-lg"
              aria-label="Toggle Video Play/Pause"
            >
              {isPlaying ? (
                /* Icon Pause */
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
              ) : (
                /* Icon Play */
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}