require("dotenv").config({ path: "./.env.local" });

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    ENDPOINT: process.env.ENDPOINT,
    PROFILE_API_KEY: process.env.PROFILE_API_KEY,
    WORKS_API_KEY: process.env.WORKS_API_KEY,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    // zenn OGP: res.cloudinary.com
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'slack-imgs.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ]
  },
};
