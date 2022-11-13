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
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
