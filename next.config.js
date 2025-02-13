/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['images.unsplash.com', 'cdn-icons-png.flaticon.com','images.pexels.com'],
        // Add allowed image domains here
    },
  };
  
  module.exports = nextConfig;
  