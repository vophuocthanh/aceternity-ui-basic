/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['aceternity.com', 'ui.aceternity.com', 'images.unsplash.com'],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
