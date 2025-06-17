// prompt-website/next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ 关键修复：添加这一行来启用静态导出
  output: 'export',

  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  // 你的 exportPathMap 保持不变
  exportPathMap: async function (
      defaultPathMap,
      { dev }
  ) {
    if (dev) {
      return defaultPathMap;
    }
    // 这些路径会生成在 out/ 文件夹的根目录
    return {
      "/": { page: "/" },
      "/zh": { page: "/[locale]", query: { locale: 'zh' } },
      "/404": { page: "/404" }
    };
  },

  // ✅ 再次确认：这里绝对不能有 basePath
};

module.exports = nextConfig;