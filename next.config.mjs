/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "i.postimg.cc",
      "images.unsplash.com",
      "s3-ap-south-1.amazonaws.com",
      "wk-partners.co.jp",
      "cdn.hashnode.com",
    ],
  },
};

export default nextConfig;
