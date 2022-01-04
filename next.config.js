require('dotenv').config({ path: './.env.local' })

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    ENDPOINT: process.env.ENDPOINT,
    PROFILE_API_KEY: process.env.PROFILE_API_KEY,
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
}
