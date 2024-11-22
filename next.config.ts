import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/genogramaexpert',
  //       destination: '/genogramaexpert',
  //       permanent: false,
  //     },
  //     {
  //       source: '/browextension',
  //       destination: '/browextension',
  //       permanent: false,
  //     },
  //   ]
  // },
}

export default nextConfig
