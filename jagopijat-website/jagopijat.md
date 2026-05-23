# JagoPijat Website

## Deskripsi Proyek
Website multi-page untuk JagoPijat — layanan pijat & refleksi tradisional home service berbasis di Tangerang dan sekitarnya (Jabodetabek).

---

## Tech Stack
| Layer | Teknologi |
|-------|-----------|
| Frontend | HTML5 + CSS3 + Vanilla JS |
| Backend | WhatsApp API (wa.me) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions (auto deploy on push to main) |
| Domain | jagopijat.com (custom domain via CNAME) |

---

## Struktur File
```
jagopijat-website/              ← git root
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions: deploy subfolder ke Pages
├── jagopijat-website/           ← publish directory (file site)
│   ├── index.html               # Halaman utama (marketing)
│   ├── layanan.html             # Daftar layanan & harga
│   ├── booking.html             # Form pemesanan
│   ├── tentang.html             # Tentang JagoPijat
│   ├── brand-profile.html       # Brand profile
│   ├── syarat-ketentuan.html    # Legal: Terms of Service
│   ├── kebijakan-privasi.html   # Legal: Privacy Policy
│   ├── robots.txt               # SEO: crawler rules + sitemap pointer
│   ├── sitemap.xml              # SEO: 5 URL dengan priority
│   ├── CNAME                    # GitHub Pages custom domain
│   ├── .nojekyll                # Skip Jekyll processing
│   ├── assets/
│   │   ├── js/
│   │   │   ├── header.js        # ★ Shared header (DRY, hamburger mobile)
│   │   │   └── footer.js        # ★ Shared footer (DRY, auto-year)
│   │   ├── images/              # Foto & gambar (coming soon)
│   │   └── favicon/
│   │       ├── logo_transparent.png   # ★ Logo aktif (PNG transparent)
│   │       ├── site.webmanifest
│   │       └── ... (legacy favicon files)
│   └── README.md
```

---

## Halaman & Konten

### 1. `index.html` — Halaman Utama (Marketing)
- Hero full-screen dengan foto pijat + overlay gradient + Quick Book form
- Stats strip (500+ pelanggan, 20+ tahun, 7 layanan, 4.9★)
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
  - **Provinsi → Kabupaten/Kota → Kecamatan** — 3-level cascading dropdown via API Wilayah Indonesia (emsifa.com), default Banten, loading state + error handling
  - Catatan Tambahan (opsional)
- Validasi per-field (alert list field yang kosong)
- Submit → format pesan template literal → kirim ke WhatsApp

### 4. `tentang.html` — Tentang JagoPijat
- Page hero dark
- Timeline perjalanan brand (2005–sekarang, Cilacap → Jakarta)
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
| Twitter Card | `summary_large_image` (content pages) / `summary` (legal pages) + title/description/image |
| Canonical | `<link rel="canonical">` per halaman |
| Favicon | Link ke `assets/favicon/*` (apple-touch, 16x16, 32x32, ico, webmanifest) |
| Schema.org | JSON-LD `LocalBusiness` (name, telephone, address Tangerang, areaServed Jabodetabek, IG `sameAs`, opening hours Mo-Su 08:00–21:00, priceRange Rp 120.000 – Rp 300.000) |

**Keyword utama:** pijat tradisional Tangerang · pijat home service Tangerang · refleksi kaki Tangerang · bekam Tangerang · terapi lintah Tangerang · pijat panggilan Jakarta · pijat panggilan Tangerang

**SEO area phrasing:** Meta description / OG / Twitter pakai "Tangerang dan sekitarnya" sebagai anchor SEO. Daftar formal (schema `areaServed`, card area, footer) tetap list 4 kota: Jakarta, Bekasi, Tangerang, Depok.

**Google Search Console:** Verification meta tag ada di `index.html`. Sitemap (`sitemap.xml`) berisi 5 URL (skip legal pages). `robots.txt` allow all + pointer ke sitemap.

---

## WhatsApp Integration
Form booking otomatis format pesan dan kirim ke WA:
- Nomor tujuan: `6285823061990`
- Format URL: `https://wa.me/6285823061990?text=...`
- Pesan berisi: nama, jenis kelamin, no WA, layanan, tanggal, waktu, alamat, kecamatan, kab/kota, provinsi, catatan
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
  🏘️ *Kecamatan:* ...
  🏙️ *Kabupaten/Kota:* ...
  🗺️ *Provinsi:* ...
  📝 *Catatan:* ...
  ━━━━━━━━━━
  _Dikirim via jagopijat.com_
  ```

## API Wilayah Indonesia
Booking form pakai API publik gratis dari [emsifa.com/api-wilayah-indonesia](https://www.emsifa.com/api-wilayah-indonesia) — pure fetch, no backend, no API key.

| Level | Endpoint | Dipakai |
|-------|----------|---------|
| Provinsi | `/api/provinces.json` | Initial load, auto-select Banten |
| Kab/Kota | `/api/regencies/{province_id}.json` | On province change |
| Kecamatan | `/api/districts/{regency_id}.json` | On regency change |

Setiap select menampilkan loading state (`Memuat ...`) saat fetch dan error message (`Gagal memuat ... — coba lagi`) jika request gagal. Option `value` = nama (dipakai langsung di pesan WA), `data-id` = id (dipakai untuk fetch child level).

---

## Deploy (GitHub Pages + GitHub Actions)

### Cara Kerja
File site ada di subfolder `jagopijat-website/`. GitHub Actions workflow (`.github/workflows/deploy.yml`) otomatis deploy subfolder ini ke GitHub Pages setiap push ke `main`.

Workflow steps: `checkout` → `configure-pages` → `upload-pages-artifact` (path: `jagopijat-website`) → `deploy-pages`

### Setup GitHub Pages (sekali)
1. Repo → **Settings** → **Pages**
2. Source: pilih **GitHub Actions**
3. Custom domain: `www.jagopijat.com`, centang **Enforce HTTPS**

### DNS (di domain registrar)
| Type | Name | Value |
|------|------|-------|
| CNAME | www | centralcatgrooming-svg.github.io |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

### Update Website
```bash
# Edit file di VS Code, lalu:
git add .
git commit -m "update: deskripsi perubahan"
git push
# GitHub Actions auto-deploy otomatis
```

---

## To Do
- [x] SEO meta tags, Open Graph, Twitter Card (semua 7 halaman), canonical, JSON-LD LocalBusiness
- [x] Link favicon di `<head>` semua halaman
- [x] Fix navbar navigation (index.html anchor mati → cross-page links, brand-profile.html tambah navbar)
- [x] Logo transparent untuk navbar/footer/hero & semua favicon/OG references
- [x] Fix `site.webmanifest` (paths relative, name/colors set)
- [x] Shared header & footer (`header.js` + `footer.js`) — DRY
- [x] Hamburger menu mobile (≤768px) dengan full-screen overlay
- [x] Auto-update copyright year (`new Date().getFullYear()`)
- [x] Cleanup dead CSS dari semua halaman
- [x] Footer link konsisten di 5 halaman (Layanan 6 items, Navigasi 4 items)
- [x] Booking form: Jenis Kelamin (radio), Provinsi+Kota+Kecamatan cascade via emsifa API
- [x] Halaman utama: section "Kenapa Terapi" + testimoni slider auto-scroll 6 items
- [x] Halaman legal: Syarat & Ketentuan + Kebijakan Privasi
- [x] Audit brand-profile: fix CTA, year 2005, timeline 2005-2013, a11y (aria, alt, progressbar)
- [x] Standardisasi SEO area: "Tangerang dan sekitarnya"
- [x] robots.txt + sitemap.xml
- [x] Google Search Console verification meta tag
- [x] Migrasi hosting Netlify → GitHub Pages (Actions workflow + CNAME + .nojekyll)
- [x] Audit menyeluruh semua halaman (mobile, tombol, form, WA, konten, SEO, a11y)
- [ ] Tambah foto-foto layanan di `assets/images/`
- [ ] Tambah foto tim terapis
- [ ] Tambah foto before/after treatment
- [ ] Integrasikan Google Analytics
- [ ] Tambah halaman FAQ
- [ ] Optimasi gambar (WebP format) + resize logo_transparent (~135KB)
- [ ] Test di berbagai device & browser
- [ ] Setup Google My Business
- [ ] Submit sitemap ke Google Search Console (setelah domain live)
- [ ] (Opsional) Hapus file favicon legacy (white bg)

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
