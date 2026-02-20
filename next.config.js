/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Only use basePath in production (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/yabalaban.github.io' : ''
}

module.exports = nextConfig
