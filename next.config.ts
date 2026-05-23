import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['*.ngrok-free.dev'],
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;