import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, type Locale } from '../i18n';

export default getRequestConfig(async ({ requestLocale }) => {
  // 获取请求中的 locale
  let locale = await requestLocale;

  // 验证 locale 是否有效
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
