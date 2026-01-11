'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

interface ArticleLink {
    title: string;
    href: string;
}

interface ArticleNavigationProps {
    prevArticle?: ArticleLink;
    nextArticle?: ArticleLink;
}

export default function ArticleNavigation({ prevArticle, nextArticle }: ArticleNavigationProps) {
    const locale = useLocale();

    return (
        <nav className="grid md:grid-cols-2 gap-6 my-12 pt-12 border-t border-gray-200 dark:border-zinc-800">
            {prevArticle ? (
                <Link href={`/${locale}${prevArticle.href}`} className="group block">
                    <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:border-[#9D5AC2] transition-all shadow-sm">
                        <span className="text-gray-500 text-sm font-medium mb-2 block">← Previous Article</span>
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-[#9D5AC2] transition-colors">
                            {prevArticle.title}
                        </h4>
                    </div>
                </Link>
            ) : <div />}

            {nextArticle ? (
                <Link href={`/${locale}${nextArticle.href}`} className="group block">
                    <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:border-[#9D5AC2] transition-all shadow-sm text-right">
                        <span className="text-gray-500 text-sm font-medium mb-2 block">Next Article →</span>
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-[#9D5AC2] transition-colors">
                            {nextArticle.title}
                        </h4>
                    </div>
                </Link>
            ) : <div />}
        </nav>
    );
}
