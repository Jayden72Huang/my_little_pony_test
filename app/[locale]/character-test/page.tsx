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
  const t = await getTranslations({ locale, namespace: 'characterTestPage' });

  return {
    title: t('title') + " - Find Your Match 2026",
    description: t('description'),
    keywords: [
      "my little pony character test",
      "mlp character test",
      "which my little pony character am i"
    ],
  };
}

export default function CharacterTestPage() {
  const t = useTranslations('characterTestPage');
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
      href: "/which-pony-are-you",
      title: tPopular('quickQuiz.title'),
      description: tPopular('quickQuiz.description'),
      icon: "⚡",
      color: "#FF8FCC"
    },
    {
      href: "/guides",
      title: "MLP Guides",
      description: "Everything you need to know about My Little Pony tests",
      icon: "📖",
      color: "#3B88C3"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href={`/${locale}`} className="hover:text-[#3B88C3] transition-colors">
              {t('home')}
            </Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-semibold">{t('breadcrumb')}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#3B88C3] via-[#9D5AC2] to-[#FF8FCC]">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-2xl">🎯</span>
              <span className="font-semibold tracking-wide uppercase text-xs">{t('badge')}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              {t('title')}
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed font-medium">
              {t('description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#character-quiz"
                className="inline-flex items-center gap-3 bg-white text-[#3B88C3] px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
              >
                <span>{t('ctaPrimary')}</span>
                <span className="animate-bounce">↓</span>
              </a>
              <Link
                href={`/${locale}/characters`}
                className="inline-flex items-center gap-3 border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-[#3B88C3] transition-all duration-300"
              >
                <span>{t('ctaSecondary')}</span>
                <span>→</span>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex items-center justify-center gap-6 text-white/90">
              <div className="text-center">
                <div className="text-3xl font-black">{t('socialProof.questions')}</div>
                <div className="text-sm">{t('socialProof.questionsLabel')}</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-black">{t('socialProof.characters')}</div>
                <div className="text-sm">{t('socialProof.charactersLabel')}</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-black">{t('socialProof.duration')}</div>
                <div className="text-sm">{t('socialProof.durationLabel')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 bg-white dark:bg-black border-b border-gray-100 dark:border-zinc-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900 dark:text-white">
              {t('whySection.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('whySection.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-800">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3B88C3] to-[#9BD5F5] rounded-2xl flex items-center justify-center text-3xl mb-6">
                ✅
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t('whySection.accurate.title')}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('whySection.accurate.description')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-100 dark:border-purple-800">
              <div className="w-16 h-16 bg-gradient-to-br from-[#9D5AC2] to-[#FF8FCC] rounded-2xl flex items-center justify-center text-3xl mb-6">
                ⚡
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t('whySection.fun.title')}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('whySection.fun.description')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-3xl p-8 border border-green-100 dark:border-green-800">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-2xl flex items-center justify-center text-3xl mb-6">
                📱
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t('whySection.shareable.title')}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('whySection.shareable.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="character-quiz" className="bg-[#FFF8E7] dark:bg-zinc-900 py-16">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
            {t('quizSection.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('quizSection.description')}
          </p>
        </div>
        <QuizComponent />
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white dark:bg-black border-b border-gray-100 dark:border-zinc-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900 dark:text-white">
              {t('howItWorks.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t('howItWorks.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3B88C3] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <p className="font-medium text-gray-900 dark:text-white">{t('howItWorks.step1')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9D5AC2] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <p className="font-medium text-gray-900 dark:text-white">{t('howItWorks.step2')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF8FCC] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <p className="font-medium text-gray-900 dark:text-white">{t('howItWorks.step3')}</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3B88C3] via-[#9D5AC2] to-[#FF8FCC] text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to find your pony match?
          </h2>
          <a
            href="#character-quiz"
            className="inline-block bg-white text-[#3B88C3] px-12 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-all"
          >
            Start Test Now ✨
          </a>
        </div>
      </section>
    </main>
  );
}
