"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function VisiMisi() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Background blobs animation
      gsap.to(".blob-1", {
        y: -30,
        x: 30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      
      gsap.to(".blob-2", {
        y: 40,
        x: -20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

      // Bento Cards reveal
      gsap.fromTo(
        ".bento-card",
        { y: 80, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative mt-8 mb-32 px-4 md:px-12 w-full max-w-7xl mx-auto"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[3rem] z-0">
        <div className="blob-1 absolute top-0 left-10 w-72 h-72 bg-[#E32228] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 md:opacity-40"></div>
        <div className="blob-2 absolute bottom-0 right-10 w-80 h-80 bg-[#FFD100] rounded-full mix-blend-multiply filter blur-[120px] opacity-15 md:opacity-30"></div>
      </div>

      {/* Bento Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        
        {/* ================================================== */}
        {/* 1. VISI (Large Card) - Spans 5 cols on lg            */}
        {/* ================================================== */}
        <div className="bento-card lg:col-span-5 relative group overflow-hidden rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl p-8 md:p-12 flex flex-col justify-center transition-all duration-500 hover:shadow-2xl hover:bg-white/80 hover:-translate-y-2">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E32228]/10 to-transparent rounded-bl-full transition-transform duration-500 group-hover:scale-125"></div>
          
          <div className="w-16 h-16 bg-gradient-to-br from-[#E32228] to-[#b91c1c] rounded-2xl flex items-center justify-center shadow-lg shadow-[#E32228]/30 text-white mb-8 transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>

          <h3 className="text-4xl md:text-5xl font-black text-[#0F1E36] mb-6 tracking-tight">Visi</h3>
          <p className="text-lg md:text-xl text-[#475569] leading-relaxed font-medium relative z-10">
            Menjadi pangkalan terdepan dalam membentuk generasi muda yang tangguh, mandiri, berakhlak mulia, dan berwawasan kebangsaan melalui inovasi kepramukaan.
          </p>
        </div>

        {/* ================================================== */}
        {/* 2. MISI (Bento Grid) - Spans 7 cols on lg            */}
        {/* ================================================== */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          
          {/* Header Misi */}
          <div className="bento-card sm:col-span-2 flex items-end pb-4 pt-4 lg:pt-0">
             <h3 className="text-4xl md:text-5xl font-black text-[#0F1E36] tracking-tight flex items-center gap-4 w-full">
               Misi <span className="h-1 flex-1 bg-gradient-to-r from-[#FFD100] to-transparent rounded-full opacity-50"></span>
             </h3>
          </div>

          {/* Misi 1 */}
          <div className="bento-card relative group overflow-hidden rounded-[2rem] bg-[#0F1E36]/90 backdrop-blur-md border border-[#ffffff]/10 p-8 shadow-xl transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(255,209,0,0.3)] hover:-translate-y-2 hover:bg-[#0F1E36]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD100] opacity-0 group-hover:opacity-10 rounded-bl-full transition-all duration-500"></div>
            <span className="text-[#FFD100] font-black text-5xl opacity-40 absolute top-6 right-6">01</span>
            <div className="relative z-10 mt-8">
              <h4 className="text-white text-xl font-bold mb-3 group-hover:text-[#FFD100] transition-colors">Kualitas Latihan</h4>
              <p className="text-[#94A3B8] font-medium leading-relaxed">
                Meningkatkan kualitas latihan kepramukaan secara berkesinambungan dan adaptif.
              </p>
            </div>
          </div>

          {/* Misi 2 */}
          <div className="bento-card relative group overflow-hidden rounded-[2rem] bg-[#0F1E36]/90 backdrop-blur-md border border-[#ffffff]/10 p-8 shadow-xl transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(227,34,40,0.3)] hover:-translate-y-2 hover:bg-[#0F1E36]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#E32228] opacity-0 group-hover:opacity-10 rounded-bl-full transition-all duration-500"></div>
            <span className="text-[#E32228] font-black text-5xl opacity-40 absolute top-6 right-6">02</span>
            <div className="relative z-10 mt-8">
              <h4 className="text-white text-xl font-bold mb-3 group-hover:text-[#E32228] transition-colors">Karakter Unggul</h4>
              <p className="text-[#94A3B8] font-medium leading-relaxed">
                Membina karakter kedisiplinan, kemandirian, dan gotong royong antar anggota.
              </p>
            </div>
          </div>

          {/* Misi 3 */}
          <div className="bento-card sm:col-span-2 relative group overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#FFD100] to-[#f59e0b] p-8 shadow-xl transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(255,209,0,0.5)] hover:-translate-y-2">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between relative z-10 gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[#0F1E36] font-black text-3xl">03</span>
                  <h4 className="text-[#0F1E36] text-xl md:text-2xl font-bold">Pengabdian Masyarakat</h4>
                </div>
                <p className="text-[#0F1E36]/80 font-semibold leading-relaxed max-w-xl">
                  Berperan aktif dalam kegiatan sosial, pelestarian lingkungan, dan pengabdian nyata kepada masyarakat luas.
                </p>
              </div>
              <div className="w-16 h-16 bg-[#0F1E36] rounded-full flex items-center justify-center text-[#FFD100] shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
