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
      // 所有语言的 character-test 重定向到 personality-test
      {
        source: '/:locale(en|tr|pl|es-MX|pt-BR)/character-test',
        destination: '/:locale/personality-test',
        permanent: true, // 301 重定向
      },
      // 所有语言的 which-pony-are-you 重定向到 personality-test
      {
        source: '/:locale(en|tr|pl|es-MX|pt-BR)/which-pony-are-you',
        destination: '/:locale/personality-test',
        permanent: true, // 301 重定向
      },
    ];
  },
};

export default withNextIntl(nextConfig);
