import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';
import CutieMarkQuizComponent from '@/app/components/CutieMarkQuizComponent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cutieMarkQuiz' });

  return {
    title: t('title') + " - Discover Your Cutie Mark 2026",
    description: t('description'),
    keywords: [
      "cutie mark quiz",
      "what's my cutie mark",
      "mlp cutie mark test",
      "my little pony cutie mark",
      "discover your cutie mark"
    ],
  };
}

const cutieMarkResults = [
  {
    id: 'star',
    name: 'Sparkling Star',
    description: 'Your cutie mark represents intelligence, magic, and the pursuit of knowledge. Like Twilight Sparkle\'s starburst, you shine brightest when learning and discovering new things.',
    icon: '⭐',
    color: '#9D5AC2',
    traits: ['Intelligent', 'Curious', 'Studious', 'Organized']
  },
  {
    id: 'cloud',
    name: 'Lightning Bolt & Cloud',
    description: 'Your cutie mark symbolizes speed, athleticism, and loyalty. Like Rainbow Dash, you\'re always pushing boundaries and standing by your friends.',
    icon: '⚡',
    color: '#3B88C3',
    traits: ['Fast', 'Brave', 'Competitive', 'Loyal']
  },
  {
    id: 'butterfly',
    name: 'Gentle Butterflies',
    description: 'Your cutie mark represents kindness, empathy, and connection with nature. You have a special gift for understanding and caring for others.',
    icon: '🦋',
    color: '#F9E38D',
    traits: ['Kind', 'Gentle', 'Empathetic', 'Patient']
  },
  {
    id: 'diamond',
    name: 'Radiant Diamonds',
    description: 'Your cutie mark embodies creativity, beauty, and generosity. You have an eye for elegance and love to make the world more beautiful.',
    icon: '💎',
    color: '#B8A2E0',
    traits: ['Creative', 'Artistic', 'Generous', 'Elegant']
  },
  {
    id: 'balloon',
    name: 'Colorful Balloons',
    description: 'Your cutie mark signifies joy, laughter, and bringing happiness to others. You light up every room with your energy and positivity.',
    icon: '🎈',
    color: '#FF8FCC',
    traits: ['Energetic', 'Optimistic', 'Fun', 'Spontaneous']
  },
  {
    id: 'apple',
    name: 'Sweet Apples',
    description: 'Your cutie mark represents honesty, hard work, and family values. You\'re dependable, genuine, and always tell the truth.',
    icon: '🍎',
    color: '#F49B38',
    traits: ['Honest', 'Hardworking', 'Dependable', 'Loyal']
  }
];

export default function CutieMarkQuizPage() {
  const t = useTranslations('cutieMarkQuiz');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href={`/${locale}`} className="hover:text-[#9D5AC2] transition-colors">
              {tCommon('home')}
            </Link>
            <span>→</span>
            <Link href={`/${locale}/quizzes`} className="hover:text-[#9D5AC2] transition-colors">
              Quizzes
            </Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-semibold">{t('breadcrumb')}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#F9E38D] via-[#FF8FCC] to-[#9D5AC2]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 text-9xl">⭐</div>
          <div className="absolute bottom-20 right-20 text-9xl">💎</div>
          <div className="absolute top-1/2 left-1/4 text-7xl">🎈</div>
          <div className="absolute top-1/3 right-1/3 text-7xl">🦋</div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-2xl">✨</span>
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
                href="#cutie-mark-quiz"
                className="inline-flex items-center gap-3 bg-white text-[#9D5AC2] px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
              >
                <span>{t('cta')}</span>
                <span className="animate-bounce">↓</span>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-8 flex items-center justify-center gap-6 text-white/90">
              <div className="text-center">
                <div className="text-3xl font-black">{t('stats.questions')}</div>
                <div className="text-sm">{t('stats.questionsLabel')}</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-black">{t('stats.results')}</div>
                <div className="text-sm">{t('stats.resultsLabel')}</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-black">{t('stats.time')}</div>
                <div className="text-sm">{t('stats.timeLabel')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Cutie Mark Section */}
      <section className="py-16 bg-white dark:bg-black border-b border-gray-100 dark:border-zinc-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900 dark:text-white">
              {t('whatIs.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
              {t('whatIs.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-100 dark:border-purple-800">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t('whatIs.special.title')}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {t('whatIs.special.description')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t('whatIs.unique.title')}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {t('whatIs.unique.description')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-2xl p-6 border border-amber-100 dark:border-amber-800">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t('whatIs.discover.title')}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {t('whatIs.discover.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="cutie-mark-quiz" className="bg-[#FFF8E7] dark:bg-zinc-900 py-16">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
            {t('quizSection.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('quizSection.description')}
          </p>
        </div>
        <CutieMarkQuizComponent />
      </section>

      {/* Possible Results Preview */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900 dark:text-white">
              {t('results.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t('results.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cutieMarkResults.map((result) => (
              <div
                key={result.id}
                className="rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundColor: `${result.color}10`,
                  borderColor: `${result.color}40`
                }}
              >
                <div className="text-6xl mb-4 text-center">{result.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white text-center">
                  {result.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                  {result.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {result.traits.map((trait, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: result.color }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#FFF8E7] dark:bg-zinc-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900 dark:text-white">
              {t('faq.title')}
            </h2>
          </div>

          <div className="space-y-4">
            {[1, 2, 3, 4].map((num) => (
              <details key={num} className="group bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-gray-200 dark:border-zinc-700">
                <summary className="cursor-pointer font-bold text-lg flex items-center justify-between text-gray-900 dark:text-white list-none">
                  <span>{t(`faq.q${num}`)}</span>
                  <span className="text-[#9D5AC2] text-2xl group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t(`faq.a${num}`)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Quizzes */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900 dark:text-white">
              {t('related.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href={`/${locale}`} className="group block">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border-2 border-transparent hover:border-[#9D5AC2] transition-all duration-300 hover:shadow-xl">
                <div className="text-5xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[#9D5AC2] transition-colors">
                  Main Personality Quiz
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Discover which My Little Pony character matches your personality through our comprehensive quiz.
                </p>
                <span className="inline-flex items-center gap-2 text-[#9D5AC2] font-semibold group-hover:gap-3 transition-all">
                  <span>Take Quiz</span>
                  <span>→</span>
                </span>
              </div>
            </Link>

            <Link href={`/${locale}/characters`} className="group block">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8 border-2 border-transparent hover:border-[#3B88C3] transition-all duration-300 hover:shadow-xl">
                <div className="text-5xl mb-4">🎭</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[#3B88C3] transition-colors">
                  Explore Characters
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Learn more about each character, their traits, and what makes them special in Equestria.
                </p>
                <span className="inline-flex items-center gap-2 text-[#3B88C3] font-semibold group-hover:gap-3 transition-all">
                  <span>View Characters</span>
                  <span>→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#F9E38D] via-[#FF8FCC] to-[#9D5AC2] text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-10 text-white/95 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <a
            href="#cutie-mark-quiz"
            className="inline-block bg-white text-[#9D5AC2] px-12 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-all"
          >
            {t('cta.button')} ✨
          </a>
        </div>
      </section>
    </main>
  );
}
