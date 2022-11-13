/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com','shezan.pythonanywhere.com'],
    // formats: [ 'image/webp','image/png'],
    remotePatterns: [
      {
        protocol: 'http',
        // hostname: '127.0.0.1',
        hostname: 'shezan.pythonanywhere.com',
        port: '8000',
        pathname: '/media/**',
      },
    ],
  },
}

module.exports = nextConfig
