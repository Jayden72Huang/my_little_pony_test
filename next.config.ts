import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  // Vercel 会自动处理，不需要 output: 'standalone'
  images: {
    unoptimized: true,
  },
  // 301 重定向：合并重复的测试页面
  async redirects() {
    return [
      // 英语：character-test 重定向到 personality-test（无前缀）
      {
        source: '/character-test',
        destination: '/personality-test',
        permanent: true, // 301 重定向
      },
      // 英语：which-pony-are-you 重定向到 personality-test（无前缀）
      {
        source: '/which-pony-are-you',
        destination: '/personality-test',
        permanent: true, // 301 重定向
      },
      // 其他语言的 character-test 重定向
      {
        source: '/:locale(tr|pl|es-MX|pt-BR)/character-test',
        destination: '/:locale/personality-test',
        permanent: true,
      },
      // 其他语言的 which-pony-are-you 重定向
      {
        source: '/:locale(tr|pl|es-MX|pt-BR)/which-pony-are-you',
        destination: '/:locale/personality-test',
        permanent: true,
      },
      // 将旧的 /en/* URL 重定向到根路径（处理旧链接）
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
