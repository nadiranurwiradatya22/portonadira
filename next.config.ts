import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ⛔ Allow build even if there are eslint errors
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
