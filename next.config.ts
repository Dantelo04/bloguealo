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
        hostname: "bloguealo-app.s3.us-central-1.wasabisys.com",
      }
    ],
  },
  experimental: {
    useCache: true,
  },
};

export default nextConfig;
