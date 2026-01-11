'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

interface RelatedTest {
    href: string;
    title: string;
    description: string;
    icon: string;
    color: string;
}

interface RelatedTestsProps {
    tests: RelatedTest[];
    title: string;
}

export default function RelatedTests({ tests, title }: RelatedTestsProps) {
    const locale = useLocale();

    return (
        <section className="py-16 bg-gray-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl font-black mb-10 text-center text-gray-900 dark:text-white">{title}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {tests.map((test, i) => (
                        <Link key={i} href={`/${locale}${test.href}`} className="group block">
                            <div className="bg-white dark:bg-zinc-800 p-8 rounded-3xl shadow-md border-2 border-transparent hover:border-opacity-50 transition-all hover:shadow-xl h-full flex flex-col" style={{ borderColor: test.color }}>
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{test.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-opacity-80 transition-colors" style={{ color: test.color }}>{test.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{test.description}</p>
                                <div className="mt-4 flex items-center gap-2 font-bold text-sm" style={{ color: test.color }}>
                                    <span>Try It</span>
                                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
