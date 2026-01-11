'use client';

import { characters } from '../utils/characterData';
import CharacterCard from '@/app/components/CharacterCard';
import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function CharactersPage() {
  const t = useTranslations('characters');
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#9D5AC2] to-[#FF8FCC] text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              {t('pageTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {t('pageDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Characters Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumb customItems={[{ label: t('breadcrumb'), href: `/${locale}/characters` }]} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FFF8E7] dark:bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('ctaTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('ctaDescription')}
          </p>
          <Link
            href={`/${locale}#quiz`}
            className="inline-block px-10 py-5 rounded-full font-bold text-xl bg-gradient-to-r from-[#9D5AC2] to-[#FF8FCC] text-white hover:shadow-2xl hover:scale-105 transition-all"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </section>
    </main>
  );
}
