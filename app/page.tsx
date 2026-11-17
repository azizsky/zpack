import Link from "next/link";
import Navbar from "@/components/common/navbar";
import WhyUsSection from '@/components/common/WhyUsSection';
import CategoriesSection from '@/components/common/CategoriesSection';
import WorkflowSection from '@/components/common/WorkflowSection';
import MaterialSection from '@/components/common/MaterialSection';
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp';
import AdvantagesSection from '@/components/common/AdvantagesSection';
import TestimonialsSection from '@/components/common/Testimonialsection';
import CtaFinalSection from '@/components/common/CTAFinalSection';
import Footer from '@/components/common/Footer';

import Image from 'next/image';

export default function HomePage() {
  return (
   <main className="w-full min-h-screen flex flex-col pt-20 sm:pt-18 overflow-x-clip">
      <Navbar />

        <FloatingWhatsApp />

    <section className="relative overflow-hidden py-6 sm:py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Layout Responsif: HP Tumpuk Vertikal, Desktop Berdampingan */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14">
          
          {/* Kolom Kiri: Teks & Action (Ditambahkan justify-center agar posisi vertikalnya pas di tengah) */}
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left justify-center z-10">
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-600/90 dark:bg-white/5 border border-slate-500/30 dark:border-white/15 backdrop-blur-md mb-4">
              <span className="text-xs font-medium text-white dark:text-[#c2c9d6]">
                Custom Printing & Packaging Solution
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[1.85rem] sm:text-4xl lg:text-[3.1rem] font-extrabold tracking-tight leading-[1.2] text-slate-900 dark:text-white mb-4">
              Kemasan Profesional Untuk Membangun Brand Anda
            </h1>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-lg max-w-[640px] leading-relaxed mb-6">
              ZPack menyediakan solusi packaging custom untuk makanan, skincare, UMKM, dan berbagai kebutuhan bisnis lainnya.
            </p>

            {/* Tombol CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full">
              <a
                href="https://wa.me/6281217780249"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-[0_4px_15px_rgba(33,82,139,0.3)] hover:-translate-y-0.5 active:scale-95"
              >
                Konsultasi Sekarang
              </a>
              <Link
                href="/produk"
                className="w-full sm:w-auto text-center px-6 py-3.5 bg-slate-600 hover:bg-slate-700 text-white dark:bg-[#7a8ea8]/20 dark:hover:bg-[#7a8ea8]/35 dark:text-[#d1dbed] dark:border-white/10 border border-slate-500/30 font-semibold text-sm rounded-xl transition-all duration-200 active:scale-95"
              >
                Lihat Produk
              </Link>
            </div>
          </div>

          {/* Kolom Kanan: Gambar Showcase */}
          <div className="w-full lg:w-[55%] flex justify-center">
            <div 
              className="w-full max-w-[90%] lg:max-w-none group rounded-2xl overflow-hidden border border-slate-400/30 dark:border-white/[0.08] shadow-[0_20px_45px_rgba(0,0,0,0.4)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.6)] bg-slate-600 dark:bg-slate-900/70 backdrop-blur-sm"
              style={{
                animation: 'floatY 6s ease-in-out infinite',
                willChange: 'transform'
              }}
            >
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes floatY {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-12px); }
                }
              `}} />

              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/hero-showcase.webp"
                  alt="Zpack Packaging Showcase"
                  fill
                  priority
                  className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Section 2: Mengapa ZPack */}
    <WhyUsSection />


    {/* Section 3: Categories / Layanan Kami */}
      <CategoriesSection />


      <WorkflowSection />
      

      <MaterialSection />

      <AdvantagesSection />

      <TestimonialsSection />

      <CtaFinalSection />

      <Footer />
    </main>
  );
}