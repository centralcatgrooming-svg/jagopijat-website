# JagoPijat Website

Website resmi **JagoPijat** — Layanan Pijat & Refleksi Tradisional Home Service.

🌐 **Live:** [www.jagopijat.com](https://www.jagopijat.com)  
📱 **WhatsApp:** [+62 858-2306-1990](https://wa.me/6285823061990)  
📸 **Instagram:** [@jago_pijat](https://www.instagram.com/jago_pijat)

---

## Halaman

| File | URL | Keterangan |
|------|-----|------------|
| `index.html` | `/` | Halaman utama (marketing) |
| `layanan.html` | `/layanan` | Daftar layanan & harga |
| `booking.html` | `/booking` | Form pemesanan |
| `tentang.html` | `/tentang` | Tentang JagoPijat |
| `brand-profile.html` | `/brand-profile` | Brand profile |

## Struktur Folder

```
jagopijat-website/
├── index.html
├── layanan.html
├── booking.html
├── tentang.html
├── brand-profile.html
├── assets/
│   ├── images/        ← tambahkan foto di sini
│   ├── favicon/       ← logo & favicon
│   └── css/           ← untuk stylesheet terpisah (opsional)
├── jagopijat.md       ← dokumentasi lengkap
└── README.md
```

## Tech Stack

- **Frontend:** HTML5 + CSS3 + Vanilla JS
- **Booking:** WhatsApp API
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions (auto deploy on push to main)
- **Domain:** jagopijat.com

## Cara Update Website

```bash
# Edit file di VS Code
# Lalu push ke GitHub:
git add .
git commit -m "update: deskripsi perubahan"
git push
# GitHub Actions auto-deploy otomatis ✅
```

## Setup GitHub Pages

1. Buka repo → **Settings** → **Pages**
2. Source: pilih **GitHub Actions**
3. Push ke `main` → workflow `deploy.yml` otomatis deploy folder `jagopijat-website/`
4. Custom domain: masukkan `www.jagopijat.com`, centang **Enforce HTTPS**

### DNS (di domain registrar)

| Type | Name | Value |
|------|------|-------|
| CNAME | www | centralcatgrooming-svg.github.io |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

## Dokumentasi Lengkap

Lihat [jagopijat.md](./jagopijat.md) untuk dokumentasi lengkap termasuk:
- Design system (font, warna, breakpoints)
- Panduan deploy & DNS
- Daftar harga layanan
- WhatsApp integration

---

*JagoPijat © 2025 — Sentuhan Tradisi, Ketenangan Sejati*
