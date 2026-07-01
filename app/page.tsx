"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import Header from "@/components/Header";
import VisiMisi from "@/components/VisiMisi";
import Anggota from "@/components/Anggota";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animasi Hero: Stagger masuk dari bawah
    gsap.from('.gsap-hero-title span', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power4.out',
      delay: 0.5,
    });

    gsap.from('.gsap-hero-subtitle', {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.8,
    });

    // Animasi Section "Tentang Pangkalan" dengan ScrollTrigger
    gsap.utils.toArray('.gsap-scroll-section').forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    });
  }, { scope: mainRef });

  return (
    <main ref={mainRef} className="bg-[#eceef4] min-h-screen p-4 md:p-6 font-sans">
      {/* Background Wrapper (Hero Section yang "dikelilingi" bg-outer) */}
      <div className="relative bg-[#0F1E36] w-full min-h-[90vh] rounded-[2.5rem] flex flex-col mb-16 md:mb-40">

        {/* Memanggil Komponen Header yang berisi navigasi dan cutout */}
        <Header />

        {/* ========================================== */}
        {/* 4. HERO CONTENT: Konten Utama Hero         */}
        {/* ========================================== */}
        <div ref={heroRef} className="flex-1 flex flex-col justify-between w-full mx-auto relative z-0 pt-32 pb-8 px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-40 min-h-full">

          {/* Top Section: Title and Image */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-between w-full gap-8 my-auto">
            {/* Text Content */}
            <div className="flex flex-col items-start w-full md:w-1/2">
              <h1 className="gsap-hero-title flex flex-col w-max max-w-full text-[clamp(3rem,8vw,10rem)] leading-[1.05] text-[#FFFFFF] mb-4" style={{ fontFamily: '"Matura MT Script Capitals", "Matura MT Script", serif', fontWeight: 'normal' }}>
                <span className="inline-block break-words max-w-full">Vampyrus</span>
                <span
                  className="self-end inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD100] to-[#E32228] text-[clamp(1.5rem,3.5vw,4.5rem)] tracking-tighter mt-1"
                  style={{ fontFamily: '"Matura MT Script Capitals", "Matura MT Script", serif' }}
                >
                  SCOUT
                </span>
              </h1>

              <div className="gsap-hero-subtitle border-l-4 border-[#E32228] pl-4 md:pl-6 mt-4 max-w-full">
                <h2 className="text-[clamp(1rem,1.25vw,1.5rem)] font-semibold text-[#FFFFFF] mb-1 break-words leading-snug">
                  Pangkalan SMPN 2 Watansoppeng
                </h2>
                <p className="text-[#94A3B8] text-[clamp(0.75rem,0.85vw,1rem)] font-medium tracking-wide">
                  Gugus Depan 01.085 - 01.086
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
              <div className="w-full max-w-[420px] aspect-[4/3] border-2 border-[#94A3B8]/30 rounded-[2rem] flex items-center justify-center bg-[#FFFFFF]/5 backdrop-blur-sm shadow-xl relative overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#94A3B8]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Elements: Form ONLY */}
          <div className="mt-12 md:mt-16 w-full flex justify-end relative h-full">
            {/* Registration Form Card */}
            <div className="w-full md:w-[320px] bg-white rounded-2xl p-6 shadow-2xl md:absolute md:-bottom-40 md:right-8 z-20 border border-gray-100">
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" placeholder="Value" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E32228] focus:border-transparent text-gray-900 transition-shadow" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Whatsapp</label>
                  <input type="tel" placeholder="Value" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E32228] focus:border-transparent text-gray-900 transition-shadow" />
                </div>
                <button className="w-full mt-2 bg-[#2b2b2b] hover:bg-[#1a1a1a] text-white font-medium py-3 rounded-lg transition-colors duration-300 shadow-md">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Support Logos Rectangle (Attached to the bottom, fully responsive perfect fit with Marquee) */}
        <div className="absolute top-full left-0 right-0 md:right-[381px] lg:right-[433px] xl:right-[465px] 2xl:right-[513px] bg-[#0F1E36] py-6 rounded-bl-[2.5rem] rounded-br-[2.5rem] -mt-10 pt-16 shadow-xl z-0 pointer-events-auto overflow-hidden flex items-center">

          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 animate-marquee-right w-max flex-nowrap">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 flex-nowrap">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 drop-shadow-md hover:scale-105 transition-transform shrink-0" title="WOSM">
                  <Image src="/Wosm.webp" alt="WOSM" fill sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, (max-width: 1024px) 64px, 80px" priority className="object-contain" />
                </div>
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 drop-shadow-md hover:scale-105 transition-transform shrink-0" title="Tunas Kelapa">
                  <Image src="/Tunas.webp" alt="Tunas Kelapa" fill sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, (max-width: 1024px) 64px, 80px" priority className="object-contain" />
                </div>
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 drop-shadow-md hover:scale-105 transition-transform shrink-0" title="Kwarda Sulawesi Selatan">
                  <Image src="/Kwarda.webp" alt="Kwarda Sulawesi Selatan" fill sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, (max-width: 1024px) 64px, 80px" priority className="object-contain" />
                </div>
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 drop-shadow-md hover:scale-105 transition-transform shrink-0" title="SMPN 2 Watansoppeng">
                  <Image src="/Smp2.webp" alt="SMPN 2 Watansoppeng" fill sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, (max-width: 1024px) 64px, 80px" priority className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================== */}
      {/* 5. TENTANG PANGKALAN (Scroll Section)      */}
      {/* ========================================== */}
      <div className="gsap-scroll-section mt-12 mb-20 px-4 md:px-12 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0F1E36] mb-6">Tentang Pangkalan</h2>
        <div className="w-24 h-1 bg-[#E32228] mb-8 rounded-full"></div>
        <p className="text-lg md:text-xl text-[#94A3B8] max-w-3xl leading-relaxed">
          Pangkalan SMPN 2 Watansoppeng adalah tempat bernaungnya Pasukan Vampyrus Scout.
          Kami berkomitmen untuk mendidik karakter, keterampilan, dan kepemimpinan generasi muda
          melalui kegiatan kepramukaan yang inovatif dan berprestasi.
        </p>
      </div>

      {/* ========================================== */}
      {/* 6. VISI & MISI (Scroll Section)            */}
      {/* ========================================== */}
      <VisiMisi />

      {/* ========================================== */}
      {/* 7. ANGGOTA (Scroll Section)                */}
      {/* ========================================== */}
      <Anggota />

    </main>
  );
}