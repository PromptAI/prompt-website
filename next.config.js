/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev }
  ) {
    if (dev) {
      return defaultPathMap;
    }
    return {
      "/": { page: "/" },
      "/zh": { page: "/[locale]" },
      "/404": { page: "/404" }
    };
  },
};

module.exports = nextConfig;
