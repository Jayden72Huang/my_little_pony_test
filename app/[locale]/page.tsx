import { getTranslations } from 'next-intl/server';
import QuizComponent from '@/app/components/QuizComponent';
import CharacterCard from '@/app/components/CharacterCard';
import { characters } from '../utils/characterData';
import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/i18n';

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const tHero = await getTranslations('hero');
  const tQuiz = await getTranslations('quiz');
  const tPopular = await getTranslations('popularTests');
  const tHowItWorks = await getTranslations('howItWorks');
  const tCharacters = await getTranslations('characters');
  const tData = await getTranslations('characterData');
  const tGuides = await getTranslations('guides');
  const tAbout = await getTranslations('about');
  const tFaq = await getTranslations('faq');
  const tCta = await getTranslations('cta');
  const tFooter = await getTranslations('footer');

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative text-white py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#9D5AC2] via-[#FF8FCC] to-[#3B88C3]"
        style={{
          backgroundImage: 'url(/hero_cover.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-8">
              <span className="sparkle-effect text-2xl">✨</span>
              <span className="font-semibold tracking-wide uppercase text-xs">{tHero('badge')}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
              {tHero('title')}
            </h1>

            <div className="bg-white text-[#9D5AC2] px-8 py-4 rounded-2xl inline-block mb-10 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <p className="text-2xl md:text-3xl font-black">{tHero('subtitle')}</p>
            </div>

            <p className="text-xl md:text-2xl mb-12 text-white/95 max-w-3xl mx-auto leading-relaxed font-medium">
              {tHero('description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={`/${locale}#quiz`}
                className="inline-flex items-center gap-3 bg-white text-[#9D5AC2] px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
              >
                <span>{tHero('cta')}</span>
                <span className="animate-bounce">↓</span>
              </a>
              <Link
                href={`/${locale}/characters`}
                className="inline-flex items-center gap-3 border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-[#9D5AC2] transition-all duration-300"
              >
                <span>{tHero('ctaSecondary')}</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="bg-white dark:bg-black py-16">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
            {tQuiz('sectionTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {tQuiz('sectionDescription')}
          </p>
        </div>
        <QuizComponent />
      </section>

      {/* What is MLP Test Section */}
      <section className="py-24 bg-[#FFF8E7] dark:bg-zinc-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center tracking-tight text-gray-900 dark:text-white">
              {tAbout('title')}
            </h2>

            <div className="prose prose-xl max-w-none">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {tAbout('description')}
              </p>

              <div className="bg-white dark:bg-black rounded-[2.5rem] p-10 md:p-12 my-16 shadow-2xl border border-gray-100 dark:border-zinc-800">
                <h3 className="text-3xl font-bold mb-8 text-[#9D5AC2]">{tAbout('whyTakeTitle')}</h3>
                <ul className="space-y-6">
                  {[
                    { title: tAbout('reason1Title'), desc: tAbout('reason1Description') },
                    { title: tAbout('reason2Title'), desc: tAbout('reason2Description') },
                    { title: tAbout('reason3Title'), desc: tAbout('reason3Description') },
                    { title: tAbout('reason4Title'), desc: tAbout('reason4Description') }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#9D5AC2] flex items-center justify-center text-white text-xs font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <strong className="text-xl text-gray-900 dark:text-white block mb-1">{item.title}</strong>
                        <span className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tests Section - NEW */}
      <section className="py-24 bg-gradient-to-b from-white via-[#FFF8F3] to-white dark:from-black dark:via-zinc-900 dark:to-black border-b border-gray-100 dark:border-zinc-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#9D5AC2]/10 px-6 py-2 rounded-full mb-6">
              <span className="text-2xl">🎯</span>
              <span className="font-semibold tracking-wide uppercase text-xs text-[#9D5AC2] dark:text-[#FF8FCC]">{tPopular('badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900 dark:text-white">
              {tPopular('title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {tPopular('description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Personality Test */}
            <Link href={`/${locale}/personality-test`} className="group block">
              <div className="bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#9D5AC2] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-[#9D5AC2] to-[#FF8FCC] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl opacity-20">🧠</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-bold text-[#9D5AC2] text-sm">{tPopular('personalityTest.time')}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">⭐ {tPopular('personalityTest.badge')}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span>🔥</span>
                    <span className="font-semibold">{tPopular('personalityTest.stats')}</span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-[#9D5AC2] transition-colors">
                    {tPopular('personalityTest.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                    {tPopular('personalityTest.description')}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500">✓</span>
                      <span>{tPopular('personalityTest.feature1')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500">✓</span>
                      <span>{tPopular('personalityTest.feature2')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500">✓</span>
                      <span>{tPopular('personalityTest.feature3')}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-[#9D5AC2] font-bold group-hover:gap-3 transition-all">
                    <span>{tPopular('personalityTest.cta')}</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Character Test */}
            <Link href={`/${locale}/character-test`} className="group block">
              <div className="bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#3B88C3] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-[#3B88C3] to-[#9BD5F5] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl opacity-20">🎯</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-bold text-[#3B88C3] text-sm">{tPopular('characterTest.time')}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-400 text-white px-3 py-1 rounded-full text-xs font-bold">🎯 {tPopular('characterTest.badge')}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span>🔥</span>
                    <span className="font-semibold">{tPopular('characterTest.stats')}</span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-[#3B88C3] transition-colors">
                    {tPopular('characterTest.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                    {tPopular('characterTest.description')}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500">✓</span>
                      <span>{tPopular('characterTest.feature1')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500">✓</span>
                      <span>{tPopular('characterTest.feature2')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500">✓</span>
                      <span>{tPopular('characterTest.feature3')}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-[#3B88C3] font-bold group-hover:gap-3 transition-all">
                    <span>{tPopular('characterTest.cta')}</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Which Pony Are You */}
            <Link href={`/${locale}/which-pony-are-you`} className="group block">
              <div className="bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#FF8FCC] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-[#FF8FCC] to-[#FFD1EC] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl opacity-20">⚡</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-bold text-[#FF8FCC] text-sm">{tPopular('quickQuiz.time')}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-pink-400 text-white px-3 py-1 rounded-full text-xs font-bold">⚡ {tPopular('quickQuiz.badge')}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span>🔥</span>
                    <span className="font-semibold">{tPopular('quickQuiz.stats')}</span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-[#FF8FCC] transition-colors">
                    {tPopular('quickQuiz.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                    {tPopular('quickQuiz.description')}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500">✓</span>
                      <span>{tPopular('quickQuiz.feature1')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500">✓</span>
                      <span>{tPopular('quickQuiz.feature2')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500">✓</span>
                      <span>{tPopular('quickQuiz.feature3')}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-[#FF8FCC] font-bold group-hover:gap-3 transition-all">
                    <span>{tPopular('quickQuiz.cta')}</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Comparison Helper */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-100 dark:border-purple-800">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {tPopular('helperTitle')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {tPopular('helperSubtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6">
                <div className="text-4xl mb-3">🎓</div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{tPopular('guideDeep')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{tPopular('guideDeepDesc')}</p>
                <Link href={`/${locale}/personality-test`} className="text-[#9D5AC2] font-semibold text-sm hover:underline">
                  {tPopular('guideDeepCta')}
                </Link>
              </div>
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6">
                <div className="text-4xl mb-3">🎬</div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{tPopular('guideScenario')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{tPopular('guideScenarioDesc')}</p>
                <Link href={`/${locale}/character-test`} className="text-[#3B88C3] font-semibold text-sm hover:underline">
                  {tPopular('guideScenarioCta')}
                </Link>
              </div>
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{tPopular('guideRush')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{tPopular('guideRushDesc')}</p>
                <Link href={`/${locale}/which-pony-are-you`} className="text-[#FF8FCC] font-semibold text-sm hover:underline">
                  {tPopular('guideRushCta')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-[#FFF8E7] dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900 dark:text-white">
              {tHowItWorks('title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {tHowItWorks('description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-10 bg-white dark:bg-black rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-zinc-800 hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-gradient-to-br from-[#9D5AC2] to-[#FF8FCC] rounded-2xl flex items-center justify-center text-4xl mx-auto mb-8 floating">
                ❓
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{tHowItWorks('step1Title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {tHowItWorks('step1Description')}
              </p>
            </div>

            <div className="text-center p-10 bg-white dark:bg-black rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-zinc-800 hover:scale-105 transition-transform" style={{ transitionDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF8FCC] to-[#3B88C3] rounded-2xl flex items-center justify-center text-4xl mx-auto mb-8 floating" style={{ animationDelay: '0.5s' }}>
                🎯
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{tHowItWorks('step2Title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {tHowItWorks('step2Description')}
              </p>
            </div>

            <div className="text-center p-10 bg-white dark:bg-black rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-zinc-800 hover:scale-105 transition-transform" style={{ transitionDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-[#3B88C3] to-[#F9E38D] rounded-2xl flex items-center justify-center text-4xl mx-auto mb-8 floating" style={{ animationDelay: '1s' }}>
                🔗
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{tHowItWorks('step3Title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {tHowItWorks('step3Description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Character Introduction Cards */}
      <section className="py-24 bg-gradient-to-b from-white via-[#FFF8F3] to-white dark:from-black dark:via-zinc-900 dark:to-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900 dark:text-white">
              {tCharacters('sectionTitle')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {tCharacters('sectionDescription')}
            </p>
          </div>

          {/* Horizontal Character Cards */}
          <div className="space-y-6 mb-12">
            {characters.map((character) => (
              <Link
                key={character.id}
                href={`/${locale}/characters/${character.slug}`}
                className="block group"
              >
                <div
                  className="rounded-3xl p-6 md:p-10 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  style={{
                    backgroundColor: `${character.color}08`,
                    borderColor: `${character.color}20`
                  }}
                >
                  <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                    {/* Character Image - Full Display */}
                    <div className="flex-shrink-0">
                      <div
                        className="relative w-64 h-64 rounded-3xl shadow-xl overflow-hidden transition-transform duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${character.color}, ${character.secondaryColor})`
                        }}
                      >
                        <Image
                          src={character.imageUrl}
                          alt={tData(`${character.slug}.name`)}
                          fill
                          className="object-contain p-4 rounded-3xl group-hover:scale-110 transition-transform duration-500"
                          sizes="256px"
                        />
                      </div>
                    </div>

                    {/* Character Info */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">
                        {tData(`${character.slug}.name`)}
                      </h3>
                      <p className="text-lg mb-4" style={{ color: character.color }}>
                        {tData(`${character.slug}.title`)}
                      </p>

                      {/* Personality Traits */}
                      <div className="mb-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {tData(`${character.slug}.description`).split('.')[0]}.
                        </p>
                      </div>

                      {/* MBTI and Tags */}
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start items-center">
                        {character.mbti && (
                          <span
                            className="px-4 py-2 rounded-full font-bold text-white text-sm shadow-md"
                            style={{ backgroundColor: character.color }}
                          >
                            {tCharacters('mbtiLabel')} {character.mbti}
                          </span>
                        )}
                        {character.tags?.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full text-sm font-medium border-2"
                            style={{
                              borderColor: character.color,
                              color: character.color
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Key Traits Grid - 2 Column Layout */}
                      <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
                        <div className="w-full max-w-[220px]">
                          <div className="flex justify-between mb-1.5">
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{tCharacters('traits.intelligence')}</span>
                            <span className="font-bold text-gray-900 dark:text-white">{character.traits.intelligence}%</span>
                          </div>
                          <div className="h-1.5 bg-gray-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${character.traits.intelligence}%`,
                                background: `linear-gradient(90deg, ${character.color}, ${character.secondaryColor})`
                              }}
                            />
                          </div>
                        </div>
                        <div className="w-full max-w-[220px]">
                          <div className="flex justify-between mb-1.5">
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{tCharacters('traits.kindness')}</span>
                            <span className="font-bold text-gray-900 dark:text-white">{character.traits.kindness}%</span>
                          </div>
                          <div className="h-1.5 bg-gray-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${character.traits.kindness}%`,
                                background: `linear-gradient(90deg, ${character.color}, ${character.secondaryColor})`
                              }}
                            />
                          </div>
                        </div>
                        <div className="w-full max-w-[220px]">
                          <div className="flex justify-between mb-1.5">
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{tCharacters('traits.sociability')}</span>
                            <span className="font-bold text-gray-900 dark:text-white">{character.traits.sociability}%</span>
                          </div>
                          <div className="h-1.5 bg-gray-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${character.traits.sociability}%`,
                                background: `linear-gradient(90deg, ${character.color}, ${character.secondaryColor})`
                              }}
                            />
                          </div>
                        </div>
                        <div className="w-full max-w-[220px]">
                          <div className="flex justify-between mb-1.5">
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{tCharacters('traits.determination')}</span>
                            <span className="font-bold text-gray-900 dark:text-white">{character.traits.determination}%</span>
                          </div>
                          <div className="h-1.5 bg-gray-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${character.traits.determination}%`,
                                background: `linear-gradient(90deg, ${character.color}, ${character.secondaryColor})`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/characters`}
              className="inline-block px-10 py-5 rounded-full font-bold text-xl bg-gradient-to-r from-[#9D5AC2] to-[#FF8FCC] text-white hover:shadow-2xl hover:scale-105 transition-all"
            >
              {tCharacters('exploreAll')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog/Guides Section */}
      <section className="py-24 bg-gradient-to-b from-white via-[#FFF8F3] to-white dark:from-black dark:via-zinc-900 dark:to-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-gray-900 dark:text-white">
              {tGuides('sectionTitle')}
            </h2>
            <Link href={`/${locale}/guides`} className="text-lg text-[#9D5AC2] hover:text-[#FF8FCC] font-semibold transition-colors inline-flex items-center gap-2">
              {tGuides('viewAll')} <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                slug: 'filter-tutorial',
                key: 'filterTutorial',
                color: 'from-[#9D5AC2] to-[#FF8FCC]',
                icon: '📅'
              },
              {
                slug: 'idrlabs-comparison',
                key: 'idrlabsComparison',
                color: 'from-[#FF8FCC] to-[#3B88C3]',
                icon: '📅'
              },
              {
                slug: 'character-popularity',
                key: 'characterPopularity',
                color: 'from-[#3B88C3] to-[#F9E38D]',
                icon: '📅'
              },
              {
                slug: 'best-mlp-quizzes',
                key: 'bestQuizzes',
                color: 'from-[#F9E38D] to-[#FF8FCC]',
                icon: '📅'
              },
              {
                slug: 'character-traits-explained',
                key: 'traitsExplained',
                color: 'from-[#9D5AC2] to-[#BFE0FF]',
                icon: '📅'
              },
              {
                slug: 'how-accurate-is-mlp-test',
                key: 'accuracy',
                color: 'from-[#BFE0FF] to-[#9D5AC2]',
                icon: '📅'
              },
              {
                slug: 'mbti-types-mlp',
                key: 'mbti',
                color: 'from-[#FF8FCC] to-[#F9E38D]',
                icon: '📅'
              }
            ].map((guide) => (
              <Link key={guide.slug} href={`/${locale}/guides/${guide.slug}`} className="group block h-full">
                <article className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 dark:border-zinc-700 hover:border-[#9D5AC2]/50">
                  <div className={`h-48 bg-gradient-to-br ${guide.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                      <span className="text-9xl">✨</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span>{guide.icon}</span>
                      <span>{tGuides(`${guide.key}.date`)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#9D5AC2] transition-colors line-clamp-2">
                      {tGuides(`${guide.key}.title`)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                      {tGuides(`${guide.key}.description`)}
                    </p>
                    <span className="text-[#9D5AC2] font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      {tGuides('readArticle')} <span>→</span>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900 dark:text-white">
              {tFaq('title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {tFaq('description')}
            </p>
          </div>

          <div className="space-y-6">
            {[
              { q: tFaq('q1'), a: tFaq('a1') },
              { q: tFaq('q2'), a: tFaq('a2') },
              { q: tFaq('q3'), a: tFaq('a3') },
              { q: tFaq('q4'), a: tFaq('a4') },
              { q: tFaq('q5'), a: tFaq('a5') },
              { q: tFaq('q6'), a: tFaq('a6') }
            ].map((item, i) => (
              <details key={i} className="group bg-[#FFF8E7] dark:bg-zinc-900 rounded-3xl p-8 shadow-md border border-gray-100 dark:border-zinc-800 transition-all hover:shadow-lg">
                <summary className="cursor-pointer font-bold text-xl flex items-center justify-between text-gray-900 dark:text-white list-none">
                  <span>{item.q}</span>
                  <span className="text-[#9D5AC2] text-3xl group-open:rotate-180 transition-transform duration-300">↓</span>
                </summary>
                <div className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: item.a }} />
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#9D5AC2] via-[#FF8FCC] to-[#3B88C3] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl floating"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full filter blur-3xl floating" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
            {tCta('title')}
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/95 max-w-2xl mx-auto font-medium leading-relaxed">
            {tCta('description')}
          </p>
          <a
            href={`/${locale}#quiz`}
            className="inline-block bg-white text-[#9D5AC2] px-12 py-6 rounded-full font-black text-2xl shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {tCta('button')} ✨
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image
                    src="/mlp-logo.png"
                    alt="My Little Pony Test Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-black text-2xl">MLP Test</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                {tFooter('tagline')}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">{tFooter('testSection')}</h4>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li><a href={`/${locale}#quiz`} className="hover:text-white transition-colors">{tFooter('takeQuiz')}</a></li>
                <li><a href={`/${locale}#how-it-works`} className="hover:text-white transition-colors">{tFooter('howItWorks')}</a></li>
                <li><Link href={`/${locale}/characters`} className="hover:text-white transition-colors">{tFooter('characters')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">{tFooter('aboutSection')}</h4>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li><a href={`/${locale}#faq`} className="hover:text-white transition-colors">{tFooter('faq')}</a></li>
                <li><Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">{tFooter('privacy')}</Link></li>
                <li><Link href={`/${locale}/terms`} className="hover:text-white transition-colors">{tFooter('terms')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">My Little Pony Test</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {tFooter('disclaimer')}
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 text-center text-gray-500 text-sm">
            <p>{tFooter('copyright')}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
