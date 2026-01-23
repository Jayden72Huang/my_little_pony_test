'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { locales, defaultLocale, type Locale } from '../../i18n';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('navigation');
  const tHero = useTranslations('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;
  // For 'as-needed' localePrefix: default locale (en) uses no prefix, others use /{locale}
  const localePrefix = currentLocale === defaultLocale ? '' : `/${currentLocale}`;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if we're on the home page
    const homePaths = currentLocale === defaultLocale
      ? ['/', '']
      : [`/${currentLocale}`, `/${currentLocale}/`];
    if (homePaths.includes(pathname)) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            href={localePrefix || '/'}
            className="flex items-center gap-3 group"
            onClick={handleLogoClick}
          >
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/mlp-logo.png"
                alt="My Little Pony Test Logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform"
                priority
              />
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-[#9D5AC2] to-[#FF8FCC] bg-clip-text text-transparent">
              {tHero('title')}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <a href={`${localePrefix || '/'}#quiz`} className="font-semibold text-gray-700 dark:text-gray-300 hover:text-[#9D5AC2] transition-colors">
              {t('takeQuiz')}
            </a>
            <Link href={`${localePrefix}/characters`} className="font-semibold text-gray-700 dark:text-gray-300 hover:text-[#9D5AC2] transition-colors">
              {t('characters')}
            </Link>
            <div className="relative" onMouseEnter={() => setIsGuidesOpen(true)} onMouseLeave={() => setIsGuidesOpen(false)}>
              <Link href={`${localePrefix}/guides`} className="font-semibold text-gray-700 dark:text-gray-300 hover:text-[#9D5AC2] transition-colors flex items-center gap-1">
                {t('guides')}
                <svg className={`w-4 h-4 transition-transform ${isGuidesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {isGuidesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-zinc-800 rounded-xl shadow-xl border border-gray-200 dark:border-zinc-700 py-2 z-50">
                  <Link href={`${localePrefix}/guides/filter-tutorial`} className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-[#FFF8E7] dark:hover:bg-zinc-700 hover:text-[#9D5AC2] transition-colors">
                    <div className="font-semibold">{t('guidesDropdown.filterTest.title')}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{t('guidesDropdown.filterTest.description')}</div>
                  </Link>
                  <Link href={`${localePrefix}/guides/idrlabs-comparison`} className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-[#FFF8E7] dark:hover:bg-zinc-700 hover:text-[#9D5AC2] transition-colors">
                    <div className="font-semibold">{t('guidesDropdown.idrlabsComparison.title')}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{t('guidesDropdown.idrlabsComparison.description')}</div>
                  </Link>
                  <Link href={`${localePrefix}/guides/character-popularity`} className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-[#FFF8E7] dark:hover:bg-zinc-700 hover:text-[#9D5AC2] transition-colors">
                    <div className="font-semibold">{t('guidesDropdown.characterPopularity.title')}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{t('guidesDropdown.characterPopularity.description')}</div>
                  </Link>
                </div>
              )}
            </div>
            <a href={`${localePrefix || '/'}#faq`} className="font-semibold text-gray-700 dark:text-gray-300 hover:text-[#9D5AC2] transition-colors">
              {t('faq')}
            </a>

            {/* 语言切换器 */}
            <LanguageSwitcher currentLocale={currentLocale} />

            <a href={`${localePrefix || '/'}#quiz`} className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-[#FF8FCC] to-[#9D5AC2] text-white hover:shadow-lg hover:scale-105 transition-all">
              {t('startTest')} →
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-zinc-800">
            <div className="flex flex-col gap-4">
              <a href={`${localePrefix || '/'}#quiz`} className="font-semibold text-gray-700 dark:text-gray-300 hover:text-[#9D5AC2] transition-colors py-2" onClick={() => setIsMenuOpen(false)}>{t('takeQuiz')}</a>
              <Link href={`${localePrefix}/characters`} className="font-semibold text-gray-700 dark:text-gray-300 hover:text-[#9D5AC2] transition-colors py-2" onClick={() => setIsMenuOpen(false)}>{t('characters')}</Link>
              <Link href={`${localePrefix}/guides`} className="font-semibold text-gray-700 dark:text-gray-300 hover:text-[#9D5AC2] transition-colors py-2" onClick={() => setIsMenuOpen(false)}>{t('guides')}</Link>
              <a href={`${localePrefix || '/'}#faq`} className="font-semibold text-gray-700 dark:text-gray-300 hover:text-[#9D5AC2] transition-colors py-2" onClick={() => setIsMenuOpen(false)}>{t('faq')}</a>

              {/* 移动端语言切换 */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-zinc-800">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{t('language')}</span>
                <LanguageSwitcher currentLocale={currentLocale} />
              </div>

              <a href={`${localePrefix || '/'}#quiz`} className="text-center px-6 py-3 rounded-full font-bold bg-gradient-to-r from-[#FF8FCC] to-[#9D5AC2] text-white" onClick={() => setIsMenuOpen(false)}>{t('startTest')} →</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
