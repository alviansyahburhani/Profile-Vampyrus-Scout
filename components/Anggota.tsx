"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const hierarchyData = {
  mabigus: { id: "m1", name: "Drs. H. Mabigus", role: "Ketua Mabigus", image: "https://ui-avatars.com/api/?name=Ketua+Mabigus&background=0F1E36&color=fff&size=512", periode: "2024 - 2025" },
  pembinaPutra: { id: "pa1", name: "Kak Andi", role: "Pembina Putra", image: "https://ui-avatars.com/api/?name=Kak+Andi&background=0F1E36&color=fff&size=512", periode: "2024 - 2025" },
  pembinaPutri: { id: "pi1", name: "Kak Dina", role: "Pembina Putri", image: "https://ui-avatars.com/api/?name=Kak+Dina&background=0F1E36&color=fff&size=512", periode: "2024 - 2025" },
  putra: [
    { id: "pa2", name: "Budi Santoso", role: "Pratama Putra", image: "https://ui-avatars.com/api/?name=Budi+Santoso&background=E32228&color=fff&size=512", periode: "2024 - 2025" },
    { id: "pa3", name: "Rizky", role: "Pemimpin Regu (Pinru)", image: "https://ui-avatars.com/api/?name=Rizky&background=0F1E36&color=fff&size=512", periode: "2024 - 2025" },
    { id: "pa4", name: "Fajar", role: "Wakil Pinru (Wapinru)", image: "https://ui-avatars.com/api/?name=Fajar&background=E32228&color=fff&size=512", periode: "2024 - 2025" },
    { id: "pa5", name: "Arya", role: "Anggota", image: "https://ui-avatars.com/api/?name=Arya&background=0F1E36&color=fff&size=512", periode: "2024 - 2025" },
    { id: "pa6", name: "Bima", role: "Anggota", image: "https://ui-avatars.com/api/?name=Bima&background=E32228&color=fff&size=512", periode: "2024 - 2025" },
    { id: "pa7", name: "Candra", role: "Anggota", image: "https://ui-avatars.com/api/?name=Candra&background=0F1E36&color=fff&size=512", periode: "2024 - 2025" },
    { id: "pa8", name: "Dika", role: "Anggota", image: "https://ui-avatars.com/api/?name=Dika&background=E32228&color=fff&size=512", periode: "2024 - 2025" },
    { id: "pa9", name: "Eka", role: "Anggota", image: "https://ui-avatars.com/api/?name=Eka&background=0F1E36&color=fff&size=512", periode: "2024 - 2025" },
    { id: "pa10", name: "Fauzi", role: "Anggota", image: "https://ui-avatars.com/api/?name=Fauzi&background=E32228&color=fff&size=512", periode: "2024 - 2025" },
    { id: "pa11", name: "Gilang", role: "Anggota", image: "https://ui-avatars.com/api/?name=Gilang&background=0F1E36&color=fff&size=512", periode: "2024 - 2025" }
  ],
  putri: [
    { id: "pi2", name: "Siti Aminah", role: "Pratama Putri", image: "https://ui-avatars.com/api/?name=Siti+Aminah&background=FFD100&color=0F1E36&size=512", periode: "2024 - 2025" },
    { id: "pi3", name: "Aisyah", role: "Pemimpin Regu (Pinru)", image: "https://ui-avatars.com/api/?name=Aisyah&background=0F1E36&color=fff&size=512", periode: "2024 - 2025" },
    { id: "pi4", name: "Nisa", role: "Wakil Pinru (Wapinru)", image: "https://ui-avatars.com/api/?name=Nisa&background=FFD100&color=0F1E36&size=512", periode: "2024 - 2025" },
    { id: "pi5", name: "Ayu", role: "Anggota", image: "https://ui-avatars.com/api/?name=Ayu&background=0F1E36&color=fff&size=512", periode: "2024 - 2025" },
    { id: "pi6", name: "Bela", role: "Anggota", image: "https://ui-avatars.com/api/?name=Bela&background=FFD100&color=0F1E36&size=512", periode: "2024 - 2025" },
    { id: "pi7", name: "Citra", role: "Anggota", image: "https://ui-avatars.com/api/?name=Citra&background=0F1E36&color=fff&size=512", periode: "2024 - 2025" },
    { id: "pi8", name: "Dinda", role: "Anggota", image: "https://ui-avatars.com/api/?name=Dinda&background=FFD100&color=0F1E36&size=512", periode: "2024 - 2025" },
    { id: "pi9", name: "Evi", role: "Anggota", image: "https://ui-avatars.com/api/?name=Evi&background=0F1E36&color=fff&size=512", periode: "2024 - 2025" },
    { id: "pi10", name: "Fitri", role: "Anggota", image: "https://ui-avatars.com/api/?name=Fitri&background=FFD100&color=0F1E36&size=512", periode: "2024 - 2025" },
    { id: "pi11", name: "Gita", role: "Anggota", image: "https://ui-avatars.com/api/?name=Gita&background=0F1E36&color=fff&size=512", periode: "2024 - 2025" }
  ]
};

const AnggotaCard = ({ data }: { data: any }) => (
  <div className="anggota-card group relative flex flex-col items-center text-center max-w-[280px] w-full mx-auto z-10 cursor-pointer pt-8 mt-4 h-full">
    {/* Base Background Card */}
    <div className="absolute inset-x-0 bottom-0 top-16 bg-white rounded-3xl shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-500 z-0"></div>
    
    {/* Image Container - Overlaps the card base */}
    <div className="relative w-[80%] aspect-[3/4] z-10 transition-transform duration-500 ease-out group-hover:-translate-y-6">
      <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gray-100 shadow-md group-hover:shadow-xl transition-shadow duration-500 border-[6px] border-white">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 240px"
        />
        {/* GSAP Target Overlay: Will slide up on hover */}
        <div className="gsap-card-overlay absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-[#0F1E36]/70 to-transparent opacity-0 translate-y-full transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 flex flex-col justify-end p-4 text-left">
          <p className="text-white text-xs font-medium tracking-widest uppercase mb-1">{data.role}</p>
          <p className="text-[#FFD100] font-bold text-sm">{data.periode}</p>
        </div>
      </div>
    </div>

    {/* Content Text - Sitting inside the white card base */}
    <div className="relative z-10 w-full px-5 pb-6 pt-6 flex flex-col bg-transparent transition-transform duration-500 group-hover:-translate-y-2 flex-1">
      <h3 className="text-xl font-bold text-[#0F1E36] mb-1 group-hover:text-[#E32228] transition-colors duration-300">
        {data.name}
      </h3>
      <p className="text-sm font-semibold text-[#E32228] tracking-wide uppercase">
        {data.role}
      </p>
      
      {/* Kolom periode */}
      <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-center gap-2 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#94A3B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-sm text-[#94A3B8] font-medium">
          {data.periode}
        </p>
      </div>
    </div>
  </div>
);

export default function Anggota() {
  const sectionRef = useRef<HTMLElement>(null);
  const topHierarchyRef = useRef<HTMLDivElement>(null);
  
  // State for Tabs: 'putra' | 'putri'
  const [activeTab, setActiveTab] = useState<'putra' | 'putri'>('putra');

  useGSAP(() => {
    // Animasi judul
    gsap.fromTo(".anggota-title-main", 
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Animasi kartu petinggi (Mabigus & Pembina)
    gsap.fromTo(topHierarchyRef.current?.querySelectorAll('.anggota-card') || [],
      { y: 60, opacity: 0 },
      {
        scrollTrigger: {
          trigger: topHierarchyRef.current,
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.2)",
      }
    );
  }, { scope: sectionRef });

  // Animasi kartu pada Slider SETIAP KALI activeTab berubah
  useGSAP(() => {
    // Karena elemen ada di dalam swiper-slide, kita animasikan keseluruhannya
    gsap.fromTo(".swiper-slide .anggota-card", 
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1.2)",
      }
    );
  }, { scope: sectionRef, dependencies: [activeTab] });

  // Mengambil data anggota berdasarkan tab yang aktif
  const currentMembers = activeTab === 'putra' ? hierarchyData.putra : hierarchyData.putri;
  const activeColor = activeTab === 'putra' ? 'bg-[#E32228]' : 'bg-[#FFD100] text-[#0F1E36]';
  const inactiveColor = 'bg-gray-100 text-gray-500 hover:bg-gray-200';

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-12 w-full max-w-[1400px] mx-auto flex flex-col items-center overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-16 anggota-title-main flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0F1E36] mb-4">
          Struktur Pasukan
        </h2>
        <div className="w-24 h-1 bg-[#FFD100] mb-6 rounded-full"></div>
        <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl leading-relaxed">
          Mengenal lebih dekat struktur kepemimpinan dan para penggerak di balik layar Vampyrus Scout.
        </p>
      </div>

      {/* Top Hierarchy (Mabigus & Pembina) */}
      <div ref={topHierarchyRef} className="w-full flex flex-col items-center mb-12 gap-0 md:gap-2">
        {/* Level 1: Mabigus */}
        <div className="w-full flex justify-center z-20">
          <AnggotaCard data={hierarchyData.mabigus} />
        </div>

        {/* Garis penghubung estetis */}
        <div className="hidden md:flex w-full max-w-[500px] h-[2px] bg-gray-200 relative -mt-20 mb-0 z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-[2px] h-6 bg-gray-200"></div>
          <div className="absolute top-0 left-0 w-[2px] h-4 bg-gray-200"></div>
          <div className="absolute top-0 right-0 w-[2px] h-4 bg-gray-200"></div>
        </div>

        {/* Level 2: Pembina */}
        <div className="w-full flex flex-col md:flex-row justify-center gap-10 md:gap-[220px] -mt-20 z-20">
          <AnggotaCard data={hierarchyData.pembinaPutra} />
          <AnggotaCard data={hierarchyData.pembinaPutri} />
        </div>
      </div>

      {/* Tab Controls */}
      <div className="flex bg-gray-100 p-1 rounded-full mb-12 shadow-inner border border-gray-200">
        <button 
          onClick={() => setActiveTab('putra')}
          className={`px-6 md:px-10 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 flex items-center gap-2 ${activeTab === 'putra' ? activeColor + ' text-white shadow-md' : inactiveColor}`}
        >
          {activeTab === 'putra' && <span className="w-2 h-2 rounded-full bg-white block animate-pulse"></span>}
          Anggota Putra
        </button>
        <button 
          onClick={() => setActiveTab('putri')}
          className={`px-6 md:px-10 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 flex items-center gap-2 ${activeTab === 'putri' ? activeColor + ' text-[#0F1E36] shadow-md' : inactiveColor}`}
        >
          {activeTab === 'putri' && <span className="w-2 h-2 rounded-full bg-[#0F1E36] block animate-pulse"></span>}
          Anggota Putri
        </button>
      </div>

      {/* Level 3: Swiper 3D Coverflow untuk Anggota Lainnya */}
      <div className="w-full max-w-full overflow-hidden py-10 relative">
        {/* Style khusus untuk membatasi HANYA 3 KARTU yang terlihat dan memberi efek blur */}
        <style>{`
          .custom-swiper .swiper-slide {
            opacity: 0 !important;
            visibility: hidden;
            pointer-events: none;
            transition: opacity 0.5s ease, filter 0.5s ease, visibility 0.5s ease !important;
          }
          .custom-swiper .swiper-slide-active,
          .custom-swiper .swiper-slide-prev,
          .custom-swiper .swiper-slide-next {
            opacity: 1 !important;
            visibility: visible;
            pointer-events: auto;
          }
          /* Blur & gelapkan kartu di sisi kiri dan kanan */
          .custom-swiper .swiper-slide-prev,
          .custom-swiper .swiper-slide-next {
            filter: blur(3px) brightness(0.7);
          }
          /* Kartu tengah fokus penuh */
          .custom-swiper .swiper-slide-active {
            filter: blur(0px) brightness(1);
          }
        `}</style>

        {/* Glow effect di belakang slider */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#FFD100]/5 blur-[100px] rounded-full z-0"></div>
        
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={1}
          spaceBetween={100} // Jarak dasar antar slide yang jauh lebih lebar
          coverflowEffect={{
            rotate: 0,
            stretch: -50, // Nilai negatif yang lebih besar untuk mendorong kartu menjauh
            depth: 250,
            modifier: 1,
            slideShadows: false,
            scale: 0.85,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full max-w-[1200px] !pb-16 z-10 custom-swiper"
        >
          {currentMembers.map((anggota) => (
            <SwiperSlide key={anggota.id} style={{ width: '300px' }} className="transition-all duration-300">
              <AnggotaCard data={anggota} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
