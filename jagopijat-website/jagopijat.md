# JagoPijat Website

## Deskripsi Proyek
Website multi-page untuk JagoPijat — layanan pijat & refleksi tradisional home service berbasis di Jakarta.

---

## Tech Stack
| Layer | Teknologi |
|-------|-----------|
| Frontend | HTML5 + CSS3 + Vanilla JS |
| Backend | WhatsApp API (wa.me) |
| Hosting | Netlify |
| CI/CD | GitHub → Netlify Auto Deploy |
| Domain | jagopijat.com |

---

## Struktur File
```
jagopijat-website/
├── index.html               # Halaman utama (marketing)
├── layanan.html             # Daftar layanan & harga
├── booking.html             # Form pemesanan
├── tentang.html             # Tentang JagoPijat
├── brand-profile.html       # Brand profile
├── syarat-ketentuan.html    # Legal: Terms of Service
├── kebijakan-privasi.html   # Legal: Privacy Policy
├── assets/
│   ├── js/
│   │   ├── header.js              # ★ Shared header (DRY, hamburger mobile)
│   │   └── footer.js              # ★ Shared footer (DRY, auto-year)
│   ├── images/                    # Foto & gambar (coming soon)
│   └── favicon/
│       ├── logo_transparent.png   # ★ Logo aktif (PNG transparent, dipakai semua tag)
│       ├── android-chrome-192x192.png   # legacy, white bg
│       ├── android-chrome-512x512.png   # legacy, white bg
│       ├── apple-touch-icon.png         # legacy, white bg
│       ├── favicon.ico                  # legacy, white bg
│       ├── favicon-16x16.png            # legacy, white bg
│       ├── favicon-32x32.png            # legacy, white bg
│       └── site.webmanifest
└── README.md
```

---

## Halaman & Konten

### 1. `index.html` — Halaman Utama (Marketing)
- Hero full-screen dengan foto pijat + overlay gradient + Quick Book form
- Stats strip (500+ pelanggan, 15+ tahun, 7 layanan, 4.9★)
- **Kenapa Terapi** — 3 benefit columns (energi/stamina, stres pikiran, nyaman di rumah) + social proof line
- 3 layanan unggulan highlight (Pijat Tradisional, Layanan Spesial, Terapi Lintah)
- Section "Kenapa JagoPijat" (4 poin: bersertifikat, alami, home service, transparan)
- **Testimoni** — auto-scroll marquee dengan 6 testimoni (pause-on-hover, mask-fade edges, JS-duplicate untuk seamless loop)
- Big CTA → booking.html

### 2. `layanan.html` — Daftar Layanan & Harga
- Page hero dark
- Daftar lengkap semua layanan dengan harga real
- CTA dark card di bawah (Pesan Sekarang + Chat WA)

### 3. `booking.html` — Form Pemesanan
- Page hero dark
- Info card (kontak, jam, area) — dark side
- Form card — light side, dengan field:
  - Nama Lengkap + No. WhatsApp (2-col)
  - **Jenis Kelamin** — radio pills Laki-laki/Perempuan (gold gradient saat selected)
  - Pilih Layanan (grouped dropdown)
  - Tanggal + Waktu (2-col)
  - Alamat Lengkap
  - **Provinsi + Kota/Area** — cascading dropdown (Banten default → Tangerang Kota/Selatan)
  - Catatan Tambahan (opsional)
- Validasi per-field (alert list field yang kosong)
- Submit → format pesan template literal → kirim ke WhatsApp

### 4. `tentang.html` — Tentang JagoPijat
- Page hero dark
- Timeline perjalanan brand (2009–sekarang)
- Grid pencapaian (4 angka)
- Skill bars layanan
- Why choose us grid
- CTA section → booking.html

### 5. `brand-profile.html` — Brand Profile
- Hero split (logo circle + info brand)
- Skill bars
- Timeline karir
- Teknik unggulan
- CTA booking

### 6. `syarat-ketentuan.html` — Terms of Service
- 10 section: definisi, pemesanan, pembayaran, reschedule/pembatalan,
  tanggung jawab pelanggan & JagoPijat, pembatasan layanan, area,
  perubahan, kontak
- Linked dari footer

### 7. `kebijakan-privasi.html` — Privacy Policy
- 9 section: data yang dikumpulkan, cara penggunaan, penyimpanan,
  berbagi data, cookies, keamanan, hak pelanggan, perubahan, kontak
- Linked dari footer

---

## Daftar Harga Layanan

| Kategori | Layanan | Durasi | Harga |
|----------|---------|--------|-------|
| Pijat Tradisional | Pijat Tradisional | 60 mnt | Rp 125.000 |
| | | 90 mnt | Rp 160.000 |
| | | 120 mnt | Rp 230.000 |
| Pijat Plus+ | Pijat + Kerokan | 90 mnt | Rp 200.000 |
| | | 120 mnt | Rp 280.000 |
| | Pijat + Scrub | 90 mnt | Rp 200.000 |
| | | 120 mnt | Rp 280.000 |
| Layanan Spesial | Pijat + Totok Wajah + Scrub | 60 mnt | Rp 190.000 |
| | | 90 mnt | Rp 220.000 |
| | | 120 mnt | Rp 290.000 |
| Pijat Kombinasi | Pijat + Refleksi | 60 mnt | Rp 180.000 |
| | | 90 mnt | Rp 210.000 |
| | | 120 mnt | Rp 280.000 |
| Bekam Cupping | Bekam Basah | Per sesi | Rp 120.000 |
| | Pijat + Bekam Kering | Per sesi | Rp 180.000 |
| Terapi Lintah | Terapi Lintah (10 ekor) | Per treatment | Rp 300.000 |

---

## Informasi Kontak
| Info | Detail |
|------|--------|
| WhatsApp | +62 858-2306-1990 |
| Instagram | [@jago_pijat](https://www.instagram.com/jago_pijat) |
| Website | www.jagopijat.com |
| Jam Operasional | Setiap hari, 08.00 – 21.00 WIB |
| Area Layanan | Jakarta, Bekasi, Tangerang, Depok |

---

## Design System

### Font
| Font | Kegunaan |
|------|----------|
| **Cinzel** | Nama brand, navbar, label, tombol CTA |
| **Playfair Display** | Heading & judul section |
| **Lora** | Body text & deskripsi |

### Warna
| Variable | Hex | Kegunaan |
|----------|-----|----------|
| `--br` | `#1C0A02` | Deep brown — text utama |
| `--bm` | `#4A2010` | Mid brown |
| `--bl` | `#7A3D1A` | Light brown — text sekunder |
| `--gd` | `#C8943A` | Gold — aksen utama |
| `--gl` | `#DFB254` | Gold light — gradient |
| `--cr` | `#FAF2E0` | Cream — background utama |
| `--cd` | `#EDE0C0` | Cream dark — background section |
| `--ts` | `#5C2E10` | Text secondary |

### Breakpoints Responsive
| Breakpoint | Target |
|------------|--------|
| `max-width: 1024px` | Tablet |
| `max-width: 768px` | Mobile |
| `max-width: 420px` | Small mobile |

---

## Shared Components (DRY)

Header & footer di-extract jadi 1 file JS masing-masing. Setiap halaman cuma punya mount point + script tag — edit 1× di JS, semua halaman update otomatis. Ini menghindari drift error yang pernah terjadi (broken anchor di footer, dll).

### `assets/js/header.js`
- Generate `<div class="jp-navbar">` 2-tier (nav-top + nav-sub)
- Inject scoped CSS (prefix `.jp-*` supaya tidak collision)
- Auto-detect active sub-link dari `location.pathname.split('/').pop()`
- **Hamburger menu mobile** (≤768px): hide sub-links, show ☰ button → click open full-screen overlay dengan 5 nav links + 2 CTA (Pesan Sekarang, Chat WA). Esc/link click close, body lock scroll
- Edit NAV array di top file untuk ubah link

### `assets/js/footer.js`
- Generate `<footer class="jp-footer">` lengkap (logo, sosmed, Layanan, Navigasi, Kontak, copyright + legal links)
- Inject scoped CSS (prefix `.jp-ft-*`)
- **Copyright year** dari `new Date().getFullYear()` — auto-update tahunan
- Edit array link di top file untuk update nav/kontak

### Mount pattern (semua halaman):
```html
<body>
<div id="site-header"></div>
<script src="assets/js/header.js"></script>

<!-- page content -->

<div id="site-footer"></div>
<script src="assets/js/footer.js"></script>
</body>
```

### Trade-off SEO
Header & footer di-render client-side. Modern Google crawl JS dengan baik. Untuk konten kritis SEO (heading, body), masih di static HTML — yang JS hanya nav/footer (link discovery, bukan content).

---

## Logo & Favicon
File aktif: `assets/favicon/logo_transparent.png` (PNG transparan, 512×512).

| Dipakai sebagai | Tag / Lokasi |
|-----------------|--------------|
| Navbar logo | `<img class="jp-logo-img">` (di-inject oleh header.js) |
| Footer logo | `<img class="jp-ft-logo-img">` (di-inject oleh footer.js) |
| Hero brand-circle | `<img class="brand-logo">` di brand-profile |
| CTA section logo | inline-styled `<img>` di index/tentang/brand-profile |
| Browser tab favicon | `<link rel="icon" sizes="16x16/32x32">` |
| iOS home screen | `<link rel="apple-touch-icon">` |
| Shortcut icon | `<link rel="shortcut icon">` |
| Android / PWA | `site.webmanifest` icons array (192/512) |
| WhatsApp & sosmed preview | `og:image`, `twitter:image` |
| Schema.org | JSON-LD `"image"` field |

**Catatan:** File favicon lama (`favicon-16x16.png`, `favicon-32x32.png`, `favicon.ico`, `apple-touch-icon.png`, `android-chrome-192/512.png`) masih ada di disk untuk safety tapi sudah tidak di-reference. Bisa dihapus kalau mau bersih-bersih. Saat browser load favicon 16/32px, file 512×512 akan auto-downscale — boros bandwidth sedikit tapi cache 1× cross-page.

`site.webmanifest` juga sudah di-fix: sebelumnya `name`/`short_name` empty dan icon paths refer ke `/android-chrome-...` (broken, file ada di `/assets/favicon/`). Sekarang `name: JagoPijat`, `theme_color: #C8943A` (gold), `background_color: #1C0A02` (deep brown).

---

## SEO & Metadata
Setiap halaman HTML sudah dilengkapi:

| Komponen | Isi |
|----------|-----|
| Meta dasar | `description` (unik per halaman, ≤160 char), `keywords`, `author`, `robots` |
| Open Graph | `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:site_name`, `og:locale=id_ID` |
| Twitter Card | `summary_large_image` + title/description/image |
| Canonical | `<link rel="canonical">` per halaman |
| Favicon | Link ke `assets/favicon/*` (apple-touch, 16x16, 32x32, ico, webmanifest) |
| Schema.org | JSON-LD `LocalBusiness` (name, telephone, address Tangerang, areaServed Jabodetabek, IG `sameAs`, opening hours Mo-Su 08:00–21:00, priceRange Rp 120.000 – Rp 300.000) |

**Keyword utama:** pijat tradisional Tangerang · pijat home service Tangerang · refleksi kaki Tangerang · bekam Tangerang · terapi lintah Tangerang · pijat panggilan Jakarta · pijat panggilan Tangerang

> Saat update domain final, cari-ganti `https://www.jagopijat.com` di canonical, OG `url`, dan JSON-LD `url` di 5 file HTML.

---

## WhatsApp Integration
Form booking otomatis format pesan dan kirim ke WA:
- Nomor tujuan: `6285823061990`
- Format URL: `https://wa.me/6285823061990?text=...`
- Pesan berisi: nama, jenis kelamin, no WA, layanan, tanggal, waktu, alamat, kota, provinsi, catatan
- Template literal + 1× `encodeURIComponent()` (bukan hand-coded %XX literal)
- Format pesan:
  ```
  🌿 *PEMESANAN JAGOPIJAT* 🌿
  ━━━━━━━━━━
  👤 *Nama:* ...
  🚻 *Jenis Kelamin:* ...
  📱 *No. WA:* ...

  💆 *Layanan:* ...
  📅 *Tanggal:* ...
  ⏰ *Waktu:* ...
  📍 *Alamat:* ...
  🏙️ *Kota:* ...
  🗺️ *Provinsi:* ...
  📝 *Catatan:* ...
  ━━━━━━━━━━
  _Dikirim via jagopijat.com_
  ```

---

## Deploy (Netlify + GitHub)

### Setup Awal
```bash
# 1. Clone / buat repo baru
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/username/jagopijat-website.git
git push -u origin main
```

### Connect ke Netlify
1. Login ke [netlify.com](https://netlify.com)
2. **Add new site** → **Import from Git**
3. Pilih repo `jagopijat-website`
4. Build command: _(kosongkan)_
5. Publish directory: `/` _(root)_
6. **Deploy site**

### Custom Domain
1. Di Netlify → **Domain settings** → **Add custom domain**
2. Masukkan `jagopijat.com`
3. Update DNS di registrar domain:
   ```
   Type    Name    Value
   A       @       75.2.60.5
   CNAME   www     [site-name].netlify.app
   ```
4. Tunggu propagasi DNS (±24 jam)
5. HTTPS otomatis aktif via Let's Encrypt

### Update Website
```bash
# Edit file di VS Code, lalu:
git add .
git commit -m "update: deskripsi perubahan"
git push
# Netlify auto-deploy dalam ~30 detik
```

---

## To Do
- [x] SEO meta tags, Open Graph, Twitter Card, canonical, JSON-LD LocalBusiness
- [x] Link favicon di `<head>` semua halaman
- [x] Fix navbar navigation (index.html anchor mati → cross-page links, brand-profile.html tambah navbar)
- [x] Logo transparent untuk navbar/footer/hero & semua favicon/OG references
- [x] Fix `site.webmanifest` (paths broken + name/colors)
- [x] Shared header & footer (`header.js` + `footer.js`) — DRY
- [x] Hamburger menu mobile (≤768px) dengan full-screen overlay
- [x] Auto-update copyright year (`new Date().getFullYear()`)
- [x] Cleanup dead `.ft-*` / `.nav-*` CSS dari semua halaman
- [x] Footer link konsisten di 5 halaman (Layanan 6 items, Navigasi 4 items)
- [x] Booking form: Jenis Kelamin (radio), Provinsi+Kota cascade
- [x] Halaman utama: section "Kenapa Terapi" + testimoni slider auto-scroll 6 items
- [x] Halaman legal: Syarat & Ketentuan + Kebijakan Privasi
- [ ] Tambah foto-foto layanan di `assets/images/`
- [ ] Tambah foto tim terapis
- [ ] Tambah foto before/after treatment
- [ ] Integrasikan Google Analytics
- [ ] Tambah halaman FAQ
- [ ] Optimasi gambar (WebP format) + resize logo_transparent (~135KB) jadi ukuran lebih kecil untuk navbar
- [ ] Test di berbagai device & browser
- [ ] Setup Google My Business
- [ ] Submit sitemap ke Google Search Console
- [ ] (Opsional) Hapus file favicon legacy (white bg) kalau sudah pasti tidak dipakai

---

## Catatan Developer
- Hero photo (1 gambar besar di index) masih embed base64. Logo & icon di CTA section sudah pakai file `logo_transparent.png`.
- Setelah foto asli tersedia, pindahkan ke `assets/images/` dan ganti `<img src>` (terutama di hero index.html).
- Navigasi antar halaman pakai relative path — semua file harus dalam 1 folder root.
- Header & footer di-render JS. Untuk update kontak/link/copy, edit `assets/js/header.js` atau `assets/js/footer.js` saja.
- Untuk update legal pages (Syarat/Privasi), edit file HTML masing-masing + ubah tanggal "Berlaku efektif sejak ..." di akhir.
- Form booking validation: setiap field required ada di array `fields` di `submitForm()` (booking.html). Tambah/kurangi field di sini juga ikut update validasi otomatis.

---

*Dibuat dengan Claude · JagoPijat — copyright year auto-update via JS*
