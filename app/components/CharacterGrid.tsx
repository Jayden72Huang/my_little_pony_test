'use client';

import Link from 'next/link';
import CharacterCard from './CharacterCard';
import { CharacterProfile } from '../utils/characterData';
import { useLocale } from 'next-intl';

interface CharacterGridProps {
    title: string;
    description: string;
    characters: CharacterProfile[];
    ctaText: string;
    ctaLink: string;
    showTraits?: boolean;
}

export default function CharacterGrid({
    title,
    description,
    characters,
    ctaText,
    ctaLink,
    showTraits = false
}: CharacterGridProps) {
    const locale = useLocale();

    return (
        <section className="py-20 bg-white dark:bg-black">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {characters.map((character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href={`/${locale}${ctaLink}`}
                        className="inline-block px-10 py-5 rounded-full font-bold text-xl bg-gradient-to-r from-[#9D5AC2] to-[#FF8FCC] text-white hover:shadow-2xl hover:scale-105 transition-all"
                    >
                        {ctaText} →
                    </Link>
                </div>
            </div>
        </section>
    );
}
