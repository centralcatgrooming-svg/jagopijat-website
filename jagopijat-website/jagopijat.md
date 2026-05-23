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
├── index.html           # Halaman utama (marketing)
├── layanan.html         # Daftar layanan & harga
├── booking.html         # Form pemesanan
├── tentang.html         # Tentang JagoPijat
├── jagopijat_page1.html # Brand profile
├── assets/
│   ├── images/          # Foto & gambar (coming soon)
│   └── favicon/         # Logo & favicon
│       ├── android-chrome-192x192.png
│       ├── android-chrome-512x512.png
│       ├── apple-touch-icon.png
│       ├── favicon.ico
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       └── site.webmanifest
└── README.md
```

---

## Halaman & Konten

### 1. `index.html` — Halaman Utama (Marketing)
- Hero full-screen dengan foto pijat + overlay gradient
- Stats strip (500+ pelanggan, 15+ tahun, 7 layanan, 4.9★)
- 3 layanan unggulan highlight
- Section keunggulan (4 poin)
- 2 testimoni terpilih
- CTA besar → booking.html

### 2. `layanan.html` — Daftar Layanan & Harga
- Page hero dark
- Daftar lengkap semua layanan dengan harga real
- CTA dark card di bawah (Pesan Sekarang + Chat WA)

### 3. `booking.html` — Form Pemesanan
- Page hero dark
- Info card (kontak, jam, area) — dark side
- Form card (nama, WA, layanan, tanggal, waktu, alamat, catatan) — light side
- Submit → format pesan otomatis → kirim ke WhatsApp

### 4. `tentang.html` — Tentang JagoPijat
- Page hero dark
- Timeline perjalanan brand (2009–sekarang)
- Grid pencapaian (4 angka)
- Skill bars layanan
- Why choose us grid
- CTA section → booking.html

### 5. `jagopijat_page1.html` — Brand Profile
- Hero split (logo circle + info brand)
- Skill bars
- Timeline karir
- Teknik unggulan
- CTA booking

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
| Terapi Lintah | Terapi Lintah (10 ekor) | Per treatment | Rp 500.000 |

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

## WhatsApp Integration
Form booking otomatis format pesan dan kirim ke WA:
- Nomor tujuan: `6285823061990`
- Format URL: `https://wa.me/6285823061990?text=...`
- Pesan berisi: nama, nomor WA, layanan, tanggal, waktu, alamat, catatan

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
- [ ] Tambah foto-foto layanan di `assets/images/`
- [ ] Tambah foto tim terapis
- [ ] Tambah foto before/after treatment
- [ ] Integrasikan Google Analytics
- [ ] Tambah halaman FAQ
- [ ] Optimasi gambar (WebP format)
- [ ] Test di berbagai device & browser
- [ ] Setup Google My Business

---

## Catatan Developer
- Semua gambar saat ini embed base64 langsung di HTML (sementara)
- Setelah gambar asli tersedia, pindahkan ke `assets/images/` dan ganti src
- File `jagopijat_main.html` adalah versi lama — sudah digantikan `index.html`
- Navigasi antar halaman pakai relative path — semua file harus dalam 1 folder

---

*Dibuat dengan Claude · JagoPijat © 2025*
