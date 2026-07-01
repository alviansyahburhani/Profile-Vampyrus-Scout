# Dokumen Konsep Desain & Arsitektur UI: Vampyrus Scout Web Portal

**File:** `desain.md`  
**Status:** Draft / Ready for Implementation  
**Arsitektur Layout:** Island UI / Inverted Border-Radius  
**Tech Stack Target:** Tailwind CSS, Next.js, **GSAP (Core & Timeline)**

---

## 1. Filosofi & Identitas Visual

Desain web harus mencerminkan karakter **tegas, solid, tangkas, modern, namun tetap rapi.**

### 1.1. Palet Warna (Color Palette)
Warna diambil langsung dari ekstraksi logo untuk menciptakan harmoni visual (*brand consistency*):

*   **Primary Dark (Canvas Hero Background):** `#090d16` (Deep Navy/Night Black) -> Mewakili habitat malam kelelawar sekaligus memberi kontras tinggi bagi elemen di atasnya.
*   **Scout Royal Blue:** `#0a369d` (Diambil dari lingkaran luar logo) -> Digunakan untuk aksen sekunder atau *hover state*.
*   **Scout Yellow:** `#fede00` (Diambil dari latar belakang lambang WOSM/Tunas Kelapa) -> Digunakan secara hemat sebagai *focal point* (misal: *active state* pada Dot Carousel).
*   **Vampyre Red:** `#e61c24` (Diambil dari tipografi "VAMPYRUS SCOUT" di logo) -> Digunakan khusus untuk elemen dengan urgensi tinggi (Tombol Aksi Utama / *Call to Action*).
*   **Canvas White:** `#ffffff` -> Latar belakang utama *outer canvas* dan *cutout* navbar.

### 1.2. Sistem Tipografi (Typography Pairing)
Untuk mengimbangi logo yang memiliki elemen padat dan grafis tegas, tipografi web harus bersih (*clean*) dengan tingkat keterbacaan (*legibility*) maksimal:

*   **Font Utama (Headings & Display):** **Plus Jakarta Sans** (Weights: 700 Bold, 800 ExtraBold)
    *   *Alasan:* Memiliki karakter geometric sans-serif modern yang kokoh, sangat cocok untuk judul hero section yang menumpuk di atas *image carousel*.
*   **Font Pendukung (Body & Navigation):** **Inter** atau **Geist Sans** (Weights: 400 Regular, 500 Medium)
    *   *Alasan:* Standar industri untuk UI/UX modern, memberikan kejelasan struktural pada teks panjang dan menu navigasi.

---

## 2. Bedah Konsep Layout & Visual Tricks

Layout menggunakan model **Island Architecture** dengan trik manipulasi dimensi melalui properti `box-shadow`.

### 2.1. Anatomi Komponen Utama
1.  **Outer Canvas:** Area batas layar browser (`bg-white`).
2.  **Hero Wrapper:** Frame utama dengan radius melengkung ekstrim (`rounded-[2.5rem]`). Berfungsi sebagai *masking container* (`overflow-hidden`) bagi Image Carousel.
3.  **Left Cutout (Logo Island):** Kartu putih yang menempel di pojok kiri atas frame hero. Menampung aset `image-removebg-preview.png` dengan format `.webp`.
4.  **Right Cutout (Action Island):** Kartu putih yang menempel di pojok kanan atas frame hero. Menampung tombol aksi "Login".
5.  **Center Navbar:** Floating navigasi transparan di tengah atas layar.
6.  **Background Carousel:** Layer paling belakang di dalam *Hero Wrapper* yang memutar gambar dokumentasi kegiatan secara dinamis.

### 2.2. Anatomi Trik Lengkungan Terbalik (Inverted Curve CSS)

[ AREA PUTIH (CUTOUT) ]
           │
           ▼
┌────────────────────────┐  ◄── Sisi sudut cutout
│                        │
│     LOGO / TOMBOL      │
│                        │
└─────────────┬──────────┘
│
├────────► [ DIV 32x32px TRANSPARAN ]
│          • Properti: rounded-tl-[2rem]
│          • Shadow: shadow-[-1rem_-1rem_0_#ffffff]
│
┌─────────────┴──────────┐
│                        │
│  AREA HERO (CAROUSEL)  │  ◄── Area gelap / gambar yang seolah "terkikis"

*Prinsip Kerja:* Kita tidak memotong elemen hero secara fisik. Kita menaruh elemen kotak transparan di sudut pertemuan area putih dan area hero, melengkungkan salah satu sisinya, lalu mengisi luar lengkungan tersebut dengan bayangan pekat berwarna putih solid (`#ffffff`).

