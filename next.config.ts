import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  // Vercel 会自动处理，不需要 output: 'standalone'
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
