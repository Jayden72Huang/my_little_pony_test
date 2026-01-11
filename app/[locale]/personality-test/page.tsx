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
  const t = await getTranslations({ locale, namespace: 'personalityTestPage' });

  return {
    title: t('title') + " - Free Character Quiz 2026",
    description: t('description'),
    keywords: [
      "my little pony personality test",
      "mlp personality test",
      "my little pony character quiz",
      "which my little pony am i"
    ],
  };
}

export default function PersonalityTestPage() {
  const t = useTranslations('personalityTestPage');
  const tCommon = useTranslations('common');
  const tPopular = useTranslations('popularTests');
  const tData = useTranslations('characterData');
  const locale = useLocale();

  const relatedTests = [
    {
      href: `/${locale}/character-test`,
      title: tPopular('characterTest.title'),
      description: tPopular('characterTest.description'),
      icon: "🎯",
      color: "#3B88C3"
    },
    {
      href: `/${locale}/which-pony-are-you`,
      title: tPopular('quickQuiz.title'),
      description: tPopular('quickQuiz.description'),
      icon: "⚡",
      color: "#FF8FCC"
    },
    {
      href: `/${locale}/guides/filter-tutorial`,
      title: t('howToUseFilter'),
      description: t('howToUseFilterDesc'),
      icon: "✨",
      color: "#9D5AC2"
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
      <section className="relative text-white py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#9D5AC2] via-[#FF8FCC] to-[#3B88C3]">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-2xl">🧠</span>
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
                href="#personality-quiz"
                className="inline-flex items-center gap-3 bg-white text-[#9D5AC2] px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
              >
                <span>{t('ctaPrimary')}</span>
                <span className="animate-bounce">↓</span>
              </a>
              <Link
                href={`/${locale}/characters`}
                className="inline-flex items-center gap-3 border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-[#9D5AC2] transition-all duration-300"
              >
                <span>{t('ctaSecondary')}</span>
                <span>→</span>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex items-center justify-center gap-6 text-white/90">
              <div className="text-center">
                <div className="text-3xl font-black">500K+</div>
                <div className="text-sm">{t('stats.testsTaken')}</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-black">4.8★</div>
                <div className="text-sm">{t('stats.rating')}</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-black">100%</div>
                <div className="text-sm">{t('stats.free')}</div>
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
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-100 dark:border-purple-800">
              <div className="w-16 h-16 bg-gradient-to-br from-[#9D5AC2] to-[#FF8FCC] rounded-2xl flex items-center justify-center text-3xl mb-6">
                🎯
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('whySection.mbti.title')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('whySection.mbti.description')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-800">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3B88C3] to-[#9BD5F5] rounded-2xl flex items-center justify-center text-3xl mb-6">
                📊
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('whySection.detailed.title')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('whySection.detailed.description')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-3xl p-8 border border-amber-100 dark:border-amber-800">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F9E38D] to-[#FFF7CC] rounded-2xl flex items-center justify-center text-3xl mb-6">
                🎨
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('whySection.allCharacters.title')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('whySection.allCharacters.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="personality-quiz" className="bg-[#FFF8E7] dark:bg-zinc-900 py-16">
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

      {/* Personality Types Explained */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900 dark:text-white">
              {t('personaTypes.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('personaTypes.description')}
            </p>
          </div>

          <div className="space-y-6">
            {/* Introverted Types */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl p-8 border border-purple-100 dark:border-purple-800">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('personaTypes.introverted')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#9D5AC2] flex items-center justify-center text-white font-bold">
                      TS
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">{tData('twilight-sparkle.name')}</h4>
                      <p className="text-sm text-[#9D5AC2] font-semibold">ISTJ - The Organizer</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {tData('twilight-sparkle.description').split('.')[0]}.
                  </p>
                  <Link href={`/${locale}/characters/twilight-sparkle`} className="inline-flex items-center gap-2 mt-4 text-[#9D5AC2] font-semibold text-sm hover:gap-3 transition-all">
                    <span>{t('personaTypes.learnMore')}</span>
                    <span>→</span>
                  </Link>
                </div>

                <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#F9E38D] flex items-center justify-center text-gray-900 font-bold">
                      FS
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">{tData('fluttershy.name')}</h4>
                      <p className="text-sm text-[#F9E38D] font-semibold">ISFJ - The Caregiver</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {tData('fluttershy.description').split('.')[0]}.
                  </p>
                  <Link href={`/${locale}/characters/fluttershy`} className="inline-flex items-center gap-2 mt-4 text-[#F9E38D] font-semibold text-sm hover:gap-3 transition-all">
                    <span>{t('personaTypes.learnMore')}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Extroverted Types */}
            <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-3xl p-8 border border-pink-100 dark:border-pink-800">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('personaTypes.extroverted')}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#3B88C3] flex items-center justify-center text-white font-bold">
                      RD
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{tData('rainbow-dash.name')}</h4>
                      <p className="text-xs text-[#3B88C3] font-semibold">ESTP - The Athlete</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {tData('rainbow-dash.description').split('.')[0]}.
                  </p>
                  <Link href={`/${locale}/characters/rainbow-dash`} className="inline-flex items-center gap-2 mt-4 text-[#3B88C3] font-semibold text-sm hover:gap-3 transition-all">
                    <span>{t('personaTypes.viewProfile')}</span>
                    <span>→</span>
                  </Link>
                </div>

                <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#FF8FCC] flex items-center justify-center text-white font-bold">
                      PP
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{tData('pinkie-pie.name')}</h4>
                      <p className="text-xs text-[#FF8FCC] font-semibold">ENFP - The Enthusiast</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {tData('pinkie-pie.description').split('.')[0]}.
                  </p>
                  <Link href={`/${locale}/characters/pinkie-pie`} className="inline-flex items-center gap-2 mt-4 text-[#FF8FCC] font-semibold text-sm hover:gap-3 transition-all">
                    <span>{t('personaTypes.viewProfile')}</span>
                    <span>→</span>
                  </Link>
                </div>

                <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#F49B38] flex items-center justify-center text-white font-bold">
                      AJ
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{tData('applejack.name')}</h4>
                      <p className="text-xs text-[#F49B38] font-semibold">ESTJ - The Guardian</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {tData('applejack.description').split('.')[0]}.
                  </p>
                  <Link href={`/${locale}/characters/applejack`} className="inline-flex items-center gap-2 mt-4 text-[#F49B38] font-semibold text-sm hover:gap-3 transition-all">
                    <span>{t('personaTypes.viewProfile')}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Balanced Creative Type */}
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-violet-100 dark:border-violet-800">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('personaTypes.creative')}
              </h3>
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#B8A2E0] flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">{tData('rarity.name')}</h4>
                    <p className="text-sm text-[#B8A2E0] font-semibold">ESFJ - The Artist</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {tData('rarity.description').split('.')[0]}.
                </p>
                <Link href={`/${locale}/characters/rarity`} className="inline-flex items-center gap-2 text-[#B8A2E0] font-semibold hover:gap-3 transition-all">
                  <span>{t('personaTypes.learnMore')}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`/${locale}/guides`}
              className="inline-flex items-center gap-2 text-[#9D5AC2] font-bold text-lg hover:gap-3 transition-all"
            >
              <span>{t('personaTypes.learnMoreLabel')}</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Character Grid */}
      <CharacterGrid
        title={tCommon('viewProfile')}
        description={t('whySection.allCharacters.description')}
        characters={characters}
        ctaText={tCommon('viewProfile')}
        ctaLink="/characters"
        showTraits={true}
      />

      {/* How This Test Works */}
      <section className="py-16 bg-[#FFF8E7] dark:bg-zinc-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900 dark:text-white">
              {t('howItWorks.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t('howItWorks.description')}
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 border-l-4 border-[#9D5AC2]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#9D5AC2] text-white flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {t('howItWorks.step1.title')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t('howItWorks.step1.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 border-l-4 border-[#FF8FCC]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF8FCC] text-white flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {t('howItWorks.step2.title')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t('howItWorks.step2.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 border-l-4 border-[#3B88C3]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3B88C3] text-white flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {t('howItWorks.step3.title')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t('howItWorks.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900 dark:text-white">
              {t('faq.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t('faq.description')}
            </p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-zinc-800">
              <summary className="cursor-pointer font-bold text-lg flex items-center justify-between text-gray-900 dark:text-white list-none">
                <span>{t('faq.q1')}</span>
                <span className="text-[#9D5AC2] text-2xl group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('faq.a1')}
              </div>
            </details>

            <details className="group bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-zinc-800">
              <summary className="cursor-pointer font-bold text-lg flex items-center justify-between text-gray-900 dark:text-white list-none">
                <span>{t('faq.q2')}</span>
                <span className="text-[#9D5AC2] text-2xl group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('faq.a2')}
              </div>
            </details>

            <details className="group bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-zinc-800">
              <summary className="cursor-pointer font-bold text-lg flex items-center justify-between text-gray-900 dark:text-white list-none">
                <span>{t('faq.q3')}</span>
                <span className="text-[#9D5AC2] text-2xl group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('faq.a3')}
              </div>
            </details>

            <details className="group bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-zinc-800">
              <summary className="cursor-pointer font-bold text-lg flex items-center justify-between text-gray-900 dark:text-white list-none">
                <span>{t('faq.q4')}</span>
                <span className="text-[#9D5AC2] text-2xl group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('faq.a4')}
              </div>
            </details>

            <details className="group bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-zinc-800">
              <summary className="cursor-pointer font-bold text-lg flex items-center justify-between text-gray-900 dark:text-white list-none">
                <span>{t('faq.q5')}</span>
                <span className="text-[#9D5AC2] text-2xl group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('faq.a5')}
              </div>
            </details>

            <details className="group bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-zinc-800">
              <summary className="cursor-pointer font-bold text-lg flex items-center justify-between text-gray-900 dark:text-white list-none">
                <span>{t('faq.q6')}</span>
                <span className="text-[#9D5AC2] text-2xl group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('faq.a6')}
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Tests */}
      <RelatedTests tests={relatedTests} title={t('relatedTitle')} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#9D5AC2] via-[#FF8FCC] to-[#3B88C3] text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            {t('ctaSection.title')}
          </h2>
          <p className="text-xl mb-10 text-white/95 max-w-2xl mx-auto">
            {t('ctaSection.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#personality-quiz"
              className="inline-block bg-white text-[#9D5AC2] px-12 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-all"
            >
              {t('ctaSection.button')}
            </a>
            <Link
              href={`/${locale}`}
              className="inline-block border-2 border-white text-white px-12 py-5 rounded-full font-black text-xl hover:bg-white hover:text-[#9D5AC2] transition-all"
            >
              {t('ctaSection.backToHome')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
