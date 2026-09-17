import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Both loopback hostnames are used to preview this project locally.
  allowedDevOrigins: ['127.0.0.1'],
  poweredByHeader: false,
  devIndicators: false,
};
export default nextConfig;
