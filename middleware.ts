import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // 英语不使用前缀，其他语言使用前缀
  localeDetection: true // 自动检测用户浏览器语言
});

export const config = {
  // 匹配所有路径，除了 API、静态文件等
  matcher: [
    '/',
    '/(en|tr|pl|es-MX|pt-BR)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
