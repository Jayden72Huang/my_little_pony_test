'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { locales, localeNames, defaultLocale, type Locale } from '../../i18n';

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (newLocale: Locale) => {
    // 移除当前 locale 前缀（如果存在）
    let pathWithoutLocale = pathname;
    for (const locale of locales) {
      if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
        pathWithoutLocale = pathname.slice(`/${locale}`.length) || '/';
        break;
      }
    }

    // 构建新的路径 - 遵循 localePrefix: 'as-needed' 规则
    // 默认语言（英语）不使用前缀，其他语言使用前缀
    const newPath = newLocale === defaultLocale
      ? pathWithoutLocale
      : `/${newLocale}${pathWithoutLocale}`;

    // 设置 NEXT_LOCALE cookie，防止中间件的 localeDetection 覆盖用户的显式选择
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;

    // 关闭下拉菜单
    setIsOpen(false);

    // 使用 window.location 进行完整页面导航，确保中间件正确处理 locale
    window.location.href = newPath;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <span className="text-sm font-medium">{localeNames[currentLocale]}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* 点击外部关闭下拉菜单的遮罩 */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-gray-700">
            <div className="py-2">
              {locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => handleLocaleChange(locale)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${locale === currentLocale ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-semibold' : ''
                    }`}
                >
                  {localeNames[locale]}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
