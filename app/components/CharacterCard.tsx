'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CharacterProfile } from '../utils/characterData';
import { useTranslations, useLocale } from 'next-intl';

interface CharacterCardProps {
  character: CharacterProfile;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const t = useTranslations('characters');
  const tData = useTranslations('characterData');
  const locale = useLocale();

  return (
    <Link href={`/${locale}/characters/${character.slug}`} className="group block h-full">
      <div
        className="rounded-3xl overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
        style={{
          backgroundColor: `${character.color}08`,
          borderColor: `${character.color}20`
        }}
      >
        {/* Character Image - Full Display */}
        <div className="relative p-8 pb-4 flex flex-col items-center">
          <div
            className="relative w-64 h-64 rounded-3xl mb-2 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${character.color}, ${character.secondaryColor})`
            }}
          >
            <Image
              src={character.imageUrl}
              alt={tData(`${character.slug}.name`)}
              fill
              className="object-contain p-4 rounded-3xl group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* MBTI Badge */}
          {character.mbti && (
            <div
              className="absolute top-4 right-4 px-4 py-2 rounded-full font-bold text-white text-sm shadow-lg"
              style={{ backgroundColor: character.color }}
            >
              {character.mbti}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="px-6 pb-6 flex flex-col flex-grow text-center">
          <h3
            className="text-2xl font-black mb-1 group-hover:scale-105 transition-transform"
            style={{ color: character.color }}
          >
            {tData(`${character.slug}.name`)}
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-4">
            {tData(`${character.slug}.title`)}
          </p>

          {/* Tags */}
          {character.tags && (
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {character.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-xs font-medium border-2"
                  style={{
                    borderColor: character.color,
                    color: character.color
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow line-clamp-3 mb-4">
            {tData(`${character.slug}.description`).split('.')[0]}.
          </p>

          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
            <div className="text-center">
              <div className="font-bold text-gray-900 dark:text-white">{character.traits.intelligence}%</div>
              <div className="text-gray-500 dark:text-gray-400">{t('traits.intelligence')}</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-900 dark:text-white">{character.traits.kindness}%</div>
              <div className="text-gray-500 dark:text-gray-400">{t('traits.kindness')}</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-900 dark:text-white">{character.traits.determination}%</div>
              <div className="text-gray-500 dark:text-gray-400">{t('traits.determination')}</div>
            </div>
          </div>

          {/* View More Link */}
          <div
            className="flex items-center justify-center gap-2 text-base font-bold group-hover:gap-4 transition-all pt-4 border-t border-gray-100 dark:border-zinc-800"
            style={{ color: character.color }}
          >
            <span>{t('viewProfile')}</span>
            <span className="transition-transform group-hover:translate-x-2">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
