/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "xwemsfgtjtwokqckvwus.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
