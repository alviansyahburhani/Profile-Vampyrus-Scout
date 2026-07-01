"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const loginBtnRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    // Animasi Masuk (Entry Animation)
    gsap.from('.gsap-header-el', {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
    });
  }, { scope: headerRef });

  const handleLoginHover = () => {
    gsap.to(loginBtnRef.current, { scale: 1.05, boxShadow: "0px 10px 15px -3px rgba(227, 34, 40, 0.4)", duration: 0.3, ease: 'back.out(1.7)' });
  };

  const handleLoginLeave = () => {
    gsap.to(loginBtnRef.current, { scale: 1, boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)", duration: 0.3, ease: 'power2.out' });
  };

  return (
    <header ref={headerRef}>
      {/* ========================================== */}
      {/* 1. LEFT CUTOUT: Area Logo                    */}
      {/* ========================================== */}
      <div className="gsap-header-el absolute top-0 left-0 bg-[#eceef4] px-6 md:px-8 py-4 md:py-5 rounded-br-[2.5rem] z-30 flex items-center justify-center">
        <Image
          src="/Logo.webp"
          alt="Logo Vampyrus"
          width={130}
          height={40}
          priority
          style={{ height: "auto" }}
          className="w-16 md:w-20 object-contain"
        />

        {/* Trik Lengkungan Kanan */}
        <div className="absolute top-0 -right-8 w-8 h-8 bg-transparent rounded-tl-[2rem] shadow-[-1rem_-1rem_0_#eceef4]"></div>

        {/* Trik Lengkungan Bawah */}
        <div className="absolute -bottom-8 left-0 w-8 h-8 bg-transparent rounded-tl-[2rem] shadow-[-1rem_-1rem_0_#eceef4]"></div>
      </div>

      {/* ========================================== */}
      {/* 2. NAVBAR: Link Navigasi (Desktop)         */}
      {/* ========================================== */}
      <nav className="gsap-header-el absolute top-8 left-1/2 -translate-x-1/2 hidden md:flex gap-6 lg:gap-10 text-[#E2E8F0] text-sm font-medium z-10">
        <Link href="#" className="hover:text-[#FFD100] transition-colors">Home</Link>
        <Link href="#" className="hover:text-[#FFD100] transition-colors">Tentang Kami</Link>
        <Link href="#" className="hover:text-[#FFD100] transition-colors">Anggota</Link>
        <Link href="#" className="hover:text-[#FFD100] transition-colors">Galeri</Link>
        <Link href="#" className="hover:text-[#FFD100] transition-colors">Wartvampy</Link>
        <Link href="#" className="hover:text-[#FFD100] transition-colors">Vampyshop</Link>
      </nav>

      {/* ========================================== */}
      {/* 3. RIGHT CUTOUT: Tombol Login & Hamburger  */}
      {/* ========================================== */}
      <div className="gsap-header-el absolute top-0 right-0 bg-[#eceef4] px-6 md:px-8 py-4 md:py-5 rounded-bl-[2.5rem] z-30 flex items-center justify-center">
        <div className="flex items-center gap-3 md:gap-0">
          {/* Tombol Login (Sembunyi di HP yang sangat kecil, pindah ke menu) */}
          <button
            ref={loginBtnRef}
            onMouseEnter={handleLoginHover}
            onMouseLeave={handleLoginLeave}
            className="hidden sm:block bg-[#E32228] text-white px-6 md:px-8 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-colors shadow-lg"
          >
            Login
          </button>

          {/* Tombol Hamburger (Hanya muncul di Mobile/Tablet) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`bg-[#E2E8F0] h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[6px]' : '-translate-y-1'}`}></span>
            <span className={`bg-[#E2E8F0] h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-[#E2E8F0] h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[6px]' : 'translate-y-1'}`}></span>
          </button>
        </div>

        {/* Trik Lengkungan Kiri */}
        <div className="absolute top-0 -left-8 w-8 h-8 bg-transparent rounded-tr-[2rem] shadow-[1rem_-1rem_0_#eceef4]"></div>

        {/* Trik Lengkungan Bawah */}
        <div className="absolute -bottom-8 right-0 w-8 h-8 bg-transparent rounded-tr-[2rem] shadow-[1rem_-1rem_0_#eceef4]"></div>
      </div>

      {/* ========================================== */}
      {/* 4. MOBILE MENU OVERLAY                     */}
      {/* ========================================== */}
      <div
        className={`md:hidden absolute inset-0 bg-[#0F1E36]/95 backdrop-blur-lg z-20 flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <nav className={`flex flex-col gap-6 text-center text-xl font-medium text-[#E2E8F0] transition-transform duration-500 delay-100 ${isOpen ? 'translate-y-0' : 'translate-y-8'}`}>
          <Link href="#" className="hover:text-[#FFD100] transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#" className="hover:text-[#FFD100] transition-colors" onClick={() => setIsOpen(false)}>Tentang Kami</Link>
          <Link href="#" className="hover:text-[#FFD100] transition-colors" onClick={() => setIsOpen(false)}>Anggota</Link>
          <Link href="#" className="hover:text-[#FFD100] transition-colors" onClick={() => setIsOpen(false)}>Galeri</Link>
          <Link href="#" className="hover:text-[#FFD100] transition-colors" onClick={() => setIsOpen(false)}>Wartvampy</Link>
          <Link href="#" className="hover:text-[#FFD100] transition-colors" onClick={() => setIsOpen(false)}>Vampyshop</Link>

          <button className="sm:hidden mt-6 bg-[#E32228] text-white px-10 py-3 rounded-full font-bold shadow-lg hover:scale-105 hover:bg-[#b91c1c] transition-all">
            Login
          </button>
        </nav>
      </div>
    </header>
  );
}