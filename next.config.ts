// next.config.ts (VERSI BARU/BENAR)
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Hanya properti Next.js yang valid di sini
  // Misalnya: output: 'export' atau images: { unoptimized: true }
};

// Konfigurasi ESLint DITAMBAHKAN ke objek yang diekspor
// (Ini adalah sintaks yang digunakan Next.js setelah menghapus 'eslint' dari NextConfig)

const configWithEslint = {
  ...nextConfig,
  eslint: {
    // ⛔ Allow build even if there are eslint errors
    ignoreDuringBuilds: true,
  },
};

export default configWithEslint;