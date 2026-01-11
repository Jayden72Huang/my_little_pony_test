import type { Metadata } from "next";
import Link from "next/link";
import QuizComponent from '@/app/components/QuizComponent';
import CharacterGrid from '../../components/CharacterGrid';
import RelatedTests from '../../components/RelatedTests';
import { characters } from "../utils/characterData";
import { getTranslations } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'whichPonyPage' });

  return {
    title: t('title') + " - Quick Character Quiz 2026",
    description: t('description'),
    keywords: [
      "which my little pony are you",
      "which pony are you",
      "my little pony quiz"
    ],
  };
}

export default function WhichPonyAreYouPage() {
  const t = useTranslations('whichPonyPage');
  const tCommon = useTranslations('common');
  const tPopular = useTranslations('popularTests');
  const locale = useLocale();

  const relatedTests = [
    {
      href: "/personality-test",
      title: tPopular('personalityTest.title'),
      description: tPopular('personalityTest.description'),
      icon: "🧠",
      color: "#9D5AC2"
    },
    {
      href: "/character-test",
      title: tPopular('characterTest.title'),
      description: tPopular('characterTest.description'),
      icon: "🎯",
      color: "#3B88C3"
    },
    {
      href: "/guides/idrlabs-comparison",
      title: "Comparison with IDRLabs",
      description: "How our test compares to the famous IDRLabs pony test",
      icon: "📊",
      color: "#FF8FCC"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href={`/${locale}`} className="hover:text-[#9D5AC2] transition-colors">
              {t('home')}
            </Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-semibold">{t('breadcrumb')}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-[#FF8FCC] via-[#9D5AC2] to-[#3B88C3]">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <span className="text-2xl">⚡</span>
              <span className="font-semibold tracking-wide uppercase text-xs">{t('badge')}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              {t('title')}
            </h1>

            <div className="bg-white text-[#FF8FCC] px-8 py-4 rounded-2xl inline-block mb-10 shadow-2xl">
              <p className="text-2xl md:text-3xl font-black">{t('banner')}</p>
            </div>

            <p className="text-xl md:text-2xl mb-12 text-white/95 max-w-3xl mx-auto leading-relaxed font-medium">
              {t('description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#quick-quiz"
                className="inline-flex items-center gap-3 bg-white text-[#FF8FCC] px-12 py-6 rounded-full font-bold text-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
              >
                <span>{t('ctaPrimary')}</span>
                <span className="text-3xl animate-bounce">↓</span>
              </a>
            </div>

            {/* Fun Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-black mb-2">⚡</div>
                <div className="text-3xl font-black">{t('funStats.fast')}</div>
                <div className="text-sm text-white/80">{t('funStats.fastLabel')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-2">🔥</div>
                <div className="text-3xl font-black">{t('funStats.popular')}</div>
                <div className="text-sm text-white/80">{t('funStats.popularLabel')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-2">🎯</div>
                <div className="text-3xl font-black">{t('funStats.accurate')}</div>
                <div className="text-sm text-white/80">{t('funStats.accurateLabel')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quick-quiz" className="bg-[#FFF8E7] dark:bg-zinc-900 py-16">
        <QuizComponent />
      </section>

      {/* Why This Quiz */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-gray-900 dark:text-white">
              {t('whySection.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t('whySection.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-pink-50 dark:bg-pink-900/10 border-2 border-pink-100 dark:border-pink-800">
              <h3 className="text-2xl font-bold mb-4 text-[#FF8FCC]">{t('whySection.fast.title')}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('whySection.fast.description')}
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-purple-50 dark:bg-purple-900/10 border-2 border-purple-100 dark:border-purple-800">
              <h3 className="text-2xl font-bold mb-4 text-[#9D5AC2]">{t('whySection.accurate.title')}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('whySection.accurate.description')}
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-blue-50 dark:bg-blue-900/10 border-2 border-blue-100 dark:border-blue-800">
              <h3 className="text-2xl font-bold mb-4 text-[#3B88C3]">{t('whySection.shareable.title')}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('whySection.shareable.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Character Grid */}
      <CharacterGrid
        title={tCommon('viewProfile')}
        description={t('description')}
        characters={characters}
        ctaText={tCommon('viewProfile')}
        ctaLink="/characters"
        showTraits={false}
      />

      {/* Related Tests */}
      <RelatedTests tests={relatedTests} title={tCommon('learnMore')} />

      {/* CTA */}
      <section className="py-20 bg-[#FFF8E7] dark:bg-zinc-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-gray-900 dark:text-white">Ready to discover your pony?</h2>
          <a
            href="#quick-quiz"
            className="inline-block bg-gradient-to-r from-[#FF8FCC] to-[#9D5AC2] text-white px-12 py-5 rounded-full font-black text-xl shadow-xl hover:scale-105 transition-all"
          >
            Start Quiz →
          </a>
        </div>
      </section>
    </main>
  );
}
