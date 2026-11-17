'use client';

export default function WorkflowSection() {
  const workflowSteps = [
    { step: "STEP 01", title: "Konsultasi & Penawaran", desc: "Diskusi spesifikasi bahan, ukuran, jumlah pesanan, dan perhitungan estimasi harga terbaik.", svgType: "chat" },
    { step: "STEP 02", title: "Desain & Mockup 3D", desc: "Pembuatan / penyesuaian dieline kemasan, simulasi visual mockup 3D, dan koordinasi sampel fisik.", svgType: "pencil" },
    { step: "STEP 03", title: "DP & Pre-Production", desc: "Pembayaran DP (70%), pembuatan proofing fisik/mockup, dan persetujuan akhir sebelum produksi massal.", svgType: "wallet" },
    { step: "STEP 04", title: "Produksi & Finishing", desc: "Proses cetak offset/pond massal serta aplikasi finishing (UV spot, foil, laminasi, emboss/deboss).", svgType: "printer" },
    { step: "STEP 05", title: "QC & Safety Packing", desc: "Inspeksi ketat kualitas cetak, penghitungan jumlah presisi, dan pengemasan rapi anti-rusak.", svgType: "qc" },
    { step: "STEP 06", title: "Pelunasan & Pengiriman", desc: "Pembayaran sisa pelunasan (30%) dan pengiriman aman via armada internal atau ekspedisi.", svgType: "truck" }
  ];

  const renderSvgIcon = (type: string) => {
    switch(type) {
      case 'chat':
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path className="chat-bubble" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            <path className="chat-dots" d="M8 10h.01M12 10h.01M16 10h.01" strokeWidth="2.5"></path>
          </svg>
        );
      case 'pencil':
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H18a2 2 0 0 1 2 2v13.5"></path>
            <path className="design-pencil" d="M14.5 3.5L18.5 7.5L8 18H4V14L14.5 3.5Z"></path>
          </svg>
        );
      case 'wallet':
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect className="wallet-card" x="7" y="2" width="10" height="7" rx="1"></rect>
            <path d="M20 12V8H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H4"></path>
            <circle cx="18" cy="16" r="1" fill="currentColor"></circle>
          </svg>
        );
      case 'printer':
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path className="paper-top" d="M6 9V2h12v7"></path>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect className="paper-bottom" x="6" y="14" width="12" height="8" rx="1"></rect>
          </svg>
        );
      case 'qc':
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path className="qc-check" d="M9 11l3 3L22 4"></path>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg>
        );
      case 'truck':
        return (
          <svg className="truck-icon w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-12 md:py-20 lg:py-24">
      {/* Micro-Animasi SVG B2B */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes dotTyping {
          0%, 100% { opacity: 0.35; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-1.5px); }
        }
        .workflow-card-item:hover .chat-bubble {
          transform: scale(1.06);
          transition: transform 0.3s ease;
        }
        .chat-dots {
          animation: dotTyping 1.6s ease-in-out infinite;
        }

        @keyframes pencilSketch {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          35% { transform: translate(-2.5px, 2px) rotate(-6deg); }
          70% { transform: translate(1.5px, -1.5px) rotate(4deg); }
        }
        .design-pencil {
          transform-origin: 4px 18px;
          transition: transform 0.3s ease;
        }
        .workflow-card-item:hover .design-pencil {
          animation: pencilSketch 1.2s ease-in-out infinite;
        }

        .wallet-card {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .workflow-card-item:hover .wallet-card {
          transform: translateY(3.5px);
        }

        .paper-top, .paper-bottom {
          transition: transform 0.35s ease;
        }
        .workflow-card-item:hover .paper-top {
          transform: translateY(2.5px);
        }
        .workflow-card-item:hover .paper-bottom {
          transform: translateY(2px);
        }

        .qc-check {
          transform-origin: 14px 9px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .workflow-card-item:hover .qc-check {
          transform: scale(1.18);
        }

        @keyframes truckDrive {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .workflow-card-item:hover .truck-icon {
          animation: truckDrive 1s ease-in-out infinite;
        }
      `}} />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-10 sm:mb-14">
          <span className="inline-block text-xs sm:text-[0.95rem] font-bold text-amber-500 dark:text-[#d4af37] tracking-[1.5px] uppercase mb-2">
            CARA PEMESANAN
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold tracking-[-0.5px] leading-[1.3] text-slate-900 dark:text-white mb-3">
            Alur Kerja & Pemesanan
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm lg:text-[1.05rem] leading-relaxed">
            Proses pemesanan transparan dan terstruktur untuk memastikan hasil cetak kemasan presisi sesuai ekspektasi Anda.
          </p>
        </div>

        {/* 1. TAMPILAN DESKTOP: Grid 3x2 Murni (Terkunci Statis, Dijamin Tidak Bisa Digeser) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 w-full">
          {workflowSteps.map((item, idx) => (
            <div 
              key={idx} 
              className="workflow-card-item group p-7 rounded-2xl bg-slate-600 dark:bg-[#121926]/[0.75] border border-slate-500/30 dark:border-white/[0.08] hover:border-amber-400/50 backdrop-blur-[10px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              <div>
                <div className="text-xs font-semibold text-amber-400 dark:text-[#d4af37] mb-2">{item.step}</div>
                <div className="text-white group-hover:text-amber-400 transition-colors duration-300 mb-3 leading-none">
                  {renderSvgIcon(item.svgType)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-[1.25]">{item.title}</h3>
                <p className="text-sm text-slate-200 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. TAMPILAN MOBILE: Manual Swipe / Scroll Snap (Tanpa Auto-slide yang bikin geser sendiri) */}
        <div className="block lg:hidden w-full overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-4">
          <div className="flex gap-4 w-max px-1">
            {workflowSteps.map((item, idx) => (
              <div 
                key={idx} 
                className="workflow-card-item snap-center group w-[265px] sm:w-[290px] flex-shrink-0 p-5 rounded-2xl bg-slate-600 dark:bg-[#121926]/[0.75] border border-slate-500/30 dark:border-white/[0.08] backdrop-blur-[10px] flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="text-xs font-semibold text-amber-400 dark:text-[#d4af37] mb-2">{item.step}</div>
                  <div className="text-white mb-3 leading-none">
                    {renderSvgIcon(item.svgType)}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-[1.25]">{item.title}</h3>
                  <p className="text-xs text-slate-200 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}