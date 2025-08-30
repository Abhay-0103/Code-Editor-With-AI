import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Tell Next.js which folder is the real project root
    root: __dirname,
  },
};

export default nextConfig;
