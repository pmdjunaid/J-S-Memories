/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'fonts.googleapis.com' },
      { protocol: 'https', hostname: 'fonts.gstatic.com' },
    ],
  },
  // Suppress hydration warnings from browser extensions
  reactStrictMode: true,
}

export default nextConfig
