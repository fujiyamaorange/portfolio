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
    domains: ["images.microcms-assets.io"],
  },
  swcMinify: true,
};
