# Avernique Interior

Website frontend studio furniture dan interior, dibangun dengan Nuxt 3, Vue 3, TypeScript, dan Tailwind CSS. Delapan halaman: Beranda, Tentang, Produk, Koleksi, Layanan, Proyek, Galeri, dan Kontak.

## Menjalankan

```bash
npm install
npm run dev
```

## Pemeriksaan

```bash
npm run typecheck
npm run build
npm run test:e2e
```

Pengujian browser membutuhkan server dev di `http://127.0.0.1:3000` dan Google Chrome. Playwright menguji seluruh route pada lebar 390, 768, dan 1440 piksel, filter katalog, lightbox, detail produk/proyek, menu mobile, serta slider perbandingan.

## Konten dan komponen

- `data/site.ts`: katalog 15 produk, kategori, koleksi, layanan, proyek, galeri, dan helper WhatsApp.
- `components/`: komponen modular sesuai bagian PRD; nama auto-import mengikuti deduplikasi Nuxt (contoh `ProductHero`, `AboutHero`).
- `assets/css/main.css`: desain responsif, palet brand, animasi ringan, dan aksesibilitas.
- `public/images/`: foto ilustrasi lokal dan fallback SVG. Foto katalog bersifat ilustratif, bukan dokumentasi produk aktual.
- Filter produk disimpan di query `?kategori=` agar tautan kategori dan koleksi dapat dibagikan.
- Modal memakai elemen dialog native dengan focus trap, Escape, pengembalian fokus, dan penguncian scroll.

## Sebelum publikasi

Ganti nomor WhatsApp placeholder dalam `data/site.ts`; konfirmasi email, akun sosial, alamat studio, serta peta pada komponen kontak/footer. Ganti data dummy, testimoni ilustrasi, dan foto dengan aset brand. Perbandingan sebelum/sesudah adalah simulasi warna yang diberi keterangan, bukan dokumentasi renovasi. Font Google membutuhkan koneksi internet; tersedia fallback serif/sans-serif.

Tidak ada backend bisnis, database, autentikasi, keranjang, checkout, atau pembayaran. Nuxt menyediakan rendering frontend bawaan; `npm run generate` tersedia untuk deployment statis.
