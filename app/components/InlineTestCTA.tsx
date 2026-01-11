'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

interface InlineTestCTAProps {
    text?: string;
    testHref?: string;
    testTitle?: string;
    variant?: 'personality' | 'character' | 'quick';
}

export default function InlineTestCTA({
    text,
    testHref,
    testTitle,
    variant = 'personality'
}: InlineTestCTAProps) {
    const locale = useLocale();

    const configs = {
        personality: {
            defaultText: "Want to discover your My Little Pony personality type? Take our in-depth personality test now!",
            defaultTitle: "Take Personality Test",
            defaultHref: "/personality-test",
            icon: "🧠",
            bgGradient: "from-[#9D5AC2]/10 to-[#E8B7F5]/10",
            borderLeft: "border-[#9D5AC2]",
            buttonBg: "bg-[#9D5AC2]",
            textColor: "text-[#9D5AC2]"
        },
        character: {
            defaultText: "Find out which My Little Pony character matches your personality through our behavioral test!",
            defaultTitle: "Take Character Test",
            defaultHref: "/character-test",
            icon: "🎯",
            bgGradient: "from-[#3B88C3]/10 to-[#9BD5F5]/10",
            borderLeft: "border-[#3B88C3]",
            buttonBg: "bg-[#3B88C3]",
            textColor: "text-[#3B88C3]"
        },
        quick: {
            defaultText: "In a hurry? Take our 2-minute quick quiz and get instant results!",
            defaultTitle: "Take Quick Quiz",
            defaultHref: "/which-pony-are-you",
            icon: "⚡",
            bgGradient: "from-[#FF8FCC]/10 to-[#FFD1EC]/10",
            borderLeft: "border-[#FF8FCC]",
            buttonBg: "bg-[#FF8FCC]",
            textColor: "text-[#FF8FCC]"
        }
    };

    const config = configs[variant];
    const finalHref = testHref || config.defaultHref;
    const finalTitle = testTitle || config.defaultTitle;
    const finalText = text || config.defaultText;

    return (
        <div className={`my-12 p-8 rounded-3xl bg-gradient-to-r ${config.bgGradient} border-l-8 ${config.borderLeft} shadow-sm group hover:shadow-md transition-all`}>
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center text-4xl shadow-sm group-hover:scale-110 transition-transform">
                    {config.icon}
                </div>
                <div className="flex-grow text-center md:text-left">
                    <p className="text-xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
                        {finalText}
                    </p>
                    <Link
                        href={`/${locale}${finalHref}`}
                        className={`inline-flex items-center gap-2 ${config.buttonBg} text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all`}
                    >
                        <span>{finalTitle}</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
