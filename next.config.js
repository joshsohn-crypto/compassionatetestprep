/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: '/testimonials', destination: '/about', permanent: false }];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
