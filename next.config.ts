import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Matches the path used in your frontend
        destination: 'https://api.socialverseapp.com/:path*', // Forward to the API
      },
    ]
  },
}