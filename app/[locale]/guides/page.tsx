'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import { useTranslations, useLocale } from 'next-intl';

export default function GuidesPage() {
  const t = useTranslations('guidesPage');
  const tGuides = useTranslations('guides');
  const locale = useLocale();

  const guides = [
    {
      href: `/${locale}/guides/filter-tutorial`,
      titleKey: 'filterTutorial.title',
      descKey: 'filterTutorial.description',
      color: 'from-[#9D5AC2] to-[#FF8FCC]'
    },
    {
      href: `/${locale}/guides/idrlabs-comparison`,
      titleKey: 'idrlabsComparison.title',
      descKey: 'idrlabsComparison.description',
      color: 'from-[#FF8FCC] to-[#3B88C3]'
    },
    {
      href: `/${locale}/guides/character-popularity`,
      titleKey: 'characterPopularity.title',
      descKey: 'characterPopularity.description',
      color: 'from-[#3B88C3] to-[#F9E38D]'
    },
    {
      href: `/${locale}/guides/best-mlp-quizzes`,
      titleKey: 'bestQuizzes.title',
      descKey: 'bestQuizzes.description',
      color: 'from-[#F9E38D] to-[#FF8FCC]'
    },
    {
      href: `/${locale}/guides/character-traits-explained`,
      titleKey: 'traitsExplained.title',
      descKey: 'traitsExplained.description',
      color: 'from-[#9D5AC2] to-[#BFE0FF]'
    },
    {
      href: `/${locale}/guides/how-accurate-is-mlp-test`,
      titleKey: 'accuracy.title',
      descKey: 'accuracy.description',
      color: 'from-[#BFE0FF] to-[#9D5AC2]'
    },
    {
      href: `/${locale}/guides/mbti-types-mlp`,
      titleKey: 'mbti.title',
      descKey: 'mbti.description',
      color: 'from-[#FF8FCC] to-[#F9E38D]'
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <section className="bg-gradient-to-br from-[#9D5AC2] to-[#FF8FCC] text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumb customItems={[{ label: t('breadcrumb'), href: `/${locale}/guides` }]} />
          <div className="space-y-8">
            {guides.map((guide, i) => (
              <Link key={i} href={guide.href} className="block group">
                <div className="p-8 rounded-3xl border-2 border-gray-200 dark:border-zinc-800 hover:border-[#9D5AC2] hover:shadow-2xl transition-all">
                  <h2 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${guide.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block`}>
                    {tGuides(guide.titleKey)}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                    {tGuides(guide.descKey)}
                  </p>
                  <span className="text-[#9D5AC2] font-bold flex items-center gap-2">
                    {t('readGuide')}
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
