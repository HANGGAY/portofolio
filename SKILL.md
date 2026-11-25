---
name: nextjs-lightweight
description: Mengoptimalkan kode Next.js agar ringan, minim JavaScript klien, dan cepat dimuat. Gunakan setiap kali membuat komponen, halaman, atau mengimpor library baru.
---

# Aturan Optimasi Performa & Ukuran Bundle Next.js

Ikuti standar ini secara ketat setiap kali menulis atau merefaktor kode:

1. **Prioritaskan Server Components.**
   - Biarkan semua komponen sebagai React Server Components (RSC) secara default.
   - Tambahkan `"use client"` hanya pada daun komponen (leaf components) terkecil yang benar-benar membutuhkan interaktivitas (`onClick`, `useState`, `useEffect`).

2. **Kontrol Ukuran Bundle & Import.**
   - Hindari _barrel imports_ (contoh: jangan `import { Icon } from 'lucide-react'`, gunakan import spesifik jika memungkinkan atau SVG ringan).
   - Gunakan `next/dynamic` dengan `{ ssr: false }` untuk komponen berat yang tidak langsung terlihat di layar awal (seperti modal, chart, atau editor teks).
   - Tolak penambahan library pihak ketiga yang berat (seperti `moment.js` atau `lodash` penuh); gunakan API bawaan browser/JS atau utilitas ringan.

3. **Data Fetching & Streaming.**
   - Bungkus komponen asinkron yang mengambil data dengan `<Suspense fallback={...}>` agar kerangka halaman statis langsung tampil.
   - Terapkan strategi caching yang tepat (`use cache` atau `revalidate`) agar server tidak melakukan komputasi berulang.

4. **Aset Media & Font.**
   - Selalu gunakan komponen `next/image` dengan atribut `sizes` yang akurat dan `priority` hanya untuk gambar _Above the Fold_ (LCP).
   - Muat font secara lokal atau melalui `next/font` untuk mencegah _layout shift_ (CLS) dan permintaan jaringan tambahan.
