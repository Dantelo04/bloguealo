import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "pub-f05f5a33245942d8a423599dd55d69cb.r2.dev",
      }
    ],
  },
  experimental: {
    useCache: true,
  },
};

export default nextConfig;
