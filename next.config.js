/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/users',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
