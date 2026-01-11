'use client';

import Breadcrumb from '@/app/components/Breadcrumb';
import { useTranslations, useLocale } from 'next-intl';

export default function TermsPage() {
  const t = useTranslations('termsPage');
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-white dark:bg-black py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Breadcrumb customItems={[{ label: t('title'), href: `/${locale}/terms` }]} />
        <h1 className="text-4xl font-black mb-8 text-gray-900 dark:text-white">{t('title')}</h1>
        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
          <p className="mb-4">{t('intro')}</p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">{t('section1Title')}</h2>
          <p className="mb-4">{t('section1Content')}</p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">{t('section2Title')}</h2>
          <p className="mb-4">{t('section2Content')}</p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">{t('section3Title')}</h2>
          <p className="mb-4">{t('section3Content')}</p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">{t('section4Title')}</h2>
          <p className="mb-4">{t('section4Content')}</p>
          <p className="mt-12 text-sm text-gray-500">{t('lastUpdated')}</p>
        </div>
      </div>
    </main>
  );
}
