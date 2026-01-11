import { characters, getCharacterBySlug, getAllCharacterSlugs } from '../../utils/characterData';
import Breadcrumb from '@/app/components/Breadcrumb';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateStaticParams() {
  return getAllCharacterSlugs().map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const character = getCharacterBySlug(slug);
  const t = await getTranslations({ locale, namespace: 'characterData' });

  if (!character) {
    return { title: 'Character Not Found' };
  }

  const name = t(`${slug}.name`);
  const title = t(`${slug}.title`);
  const description = t(`${slug}.description`);

  return {
    title: `${name} - ${title} | My Little Pony Test`,
    description: `Learn all about ${name}, the ${title}. ${description}`,
    keywords: [`${name}`, 'my little pony', character.slug, 'mlp character']
  };
}

export default async function CharacterPage({ params }: Props) {
  const { slug, locale } = await params;
  const character = getCharacterBySlug(slug);
  const t = await getTranslations({ locale, namespace: 'characterProfile' });
  const tData = await getTranslations({ locale, namespace: 'characterData' });
  const tTraits = await getTranslations({ locale, namespace: 'characters.traits' });

  if (!character) {
    return <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">{t('notFound')}</h1>
    </div>;
  }

  const name = tData(`${slug}.name`);
  const title = tData(`${slug}.title`);
  const description = tData(`${slug}.description`);

  const otherCharacters = characters.filter(c => c.id !== character.id);

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero */}
      <section
        className="py-24 text-white relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${character.color}, ${character.secondaryColor})` }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <div
            className="relative w-48 h-48 mx-auto mb-6 rounded-3xl overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${character.color}, ${character.secondaryColor})`
            }}
          >
            <Image
              src={character.imageUrl}
              alt={name}
              fill
              className="object-contain rounded-3xl p-4"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            {name}
          </h1>
          <p className="text-2xl font-bold mb-6">{title}</p>
          <div className="inline-block bg-white/30 backdrop-blur-sm px-6 py-2 rounded-full">
            <span className="font-bold">{t('popularity', { percent: character.popularity })}</span>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumb customItems={[
            { label: tData('exploreAll'), href: `/${locale}/characters` },
            { label: name, href: `/${locale}/characters/${character.slug}` }
          ]} />
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white mt-6">{t('about', { name })}</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
            {description}
          </p>

          {/* Quote */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('famousQuote')}</h3>
            <div className="p-8 rounded-3xl" style={{ backgroundColor: `${character.color}15` }}>
              <p className="text-2xl font-bold italic text-center" style={{ color: character.color }}>
                "{character.quote}"
              </p>
            </div>
          </div>

          {/* Personality Traits */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('personalityTraits')}</h3>
            <div className="grid gap-4">
              {character.personality.map((trait, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-zinc-900">
                  <span className="text-lg text-gray-700 dark:text-gray-300 flex-1">{trait}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('keyStrengths')}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {character.strengths.map((strength, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl border-2"
                  style={{ borderColor: `${character.color}30` }}
                >
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{strength}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Character Stats */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('stats')}</h3>
            <div className="space-y-4">
              {Object.entries(character.traits).map(([trait, value]) => (
                <div key={trait}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700 dark:text-gray-300 capitalize">
                      {tTraits(trait)}
                    </span>
                    <span className="font-bold" style={{ color: character.color }}>{value}%</span>
                  </div>
                  <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${value}%`,
                        background: `linear-gradient(90deg, ${character.color}, ${character.secondaryColor})`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal For */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('mightBe', { name })}
            </h3>
            <ul className="grid gap-3">
              {character.idealFor.map((ideal, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: character.color }}
                  ></div>
                  <span className="text-lg text-gray-700 dark:text-gray-300">{ideal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Other Characters */}
      <section className="py-16 bg-[#FFF8E7] dark:bg-zinc-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            {t('exploreOther')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherCharacters.slice(0, 3).map((char) => (
              <Link key={char.id} href={`/${locale}/characters/${char.slug}`} className="group">
                <div
                  className="p-6 rounded-3xl text-white text-center hover:scale-105 transition-transform h-full flex flex-col items-center"
                  style={{ background: `linear-gradient(135deg, ${char.color}, ${char.secondaryColor})` }}
                >
                  <div className="relative w-32 h-32 mb-4 rounded-2xl overflow-hidden">
                    <Image
                      src={char.imageUrl}
                      alt={tData(`${char.slug}.name`)}
                      fill
                      className="object-contain rounded-2xl"
                    />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{tData(`${char.slug}.name`)}</h4>
                  <p className="text-white/90">{tData(`${char.slug}.title`)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-black text-center">
        <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          {t('findMatch')}
        </h3>
        <Link
          href={`/${locale}#quiz`}
          className="inline-block px-10 py-5 rounded-full font-bold text-xl bg-gradient-to-r from-[#9D5AC2] to-[#FF8FCC] text-white hover:shadow-2xl hover:scale-105 transition-all"
        >
          {t('takeTest')}
        </Link>
      </section>
    </main>
  );
}
