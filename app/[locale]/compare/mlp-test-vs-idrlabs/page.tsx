import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "MLP Test vs IDRlabs: Which Personality Quiz is Better? 2026",
    description: "Honest comparison between our My Little Pony test and IDRlabs version. See differences in questions, accuracy, features, and user experience to find the best quiz for you.",
    keywords: [
      "mlp test vs idrlabs",
      "my little pony test comparison",
      "idrlabs mlp",
      "best mlp quiz",
      "idrlabs vs mlp test"
    ],
  };
}

export default function ComparisonPage() {
  const locale = useLocale();

  const comparisonData = [
    {
      feature: "Number of Questions",
      ours: "12 questions",
      idrlabs: "60+ questions",
      winner: "neutral"
    },
    {
      feature: "Time to Complete",
      ours: "3-5 minutes",
      idrlabs: "15-20 minutes",
      winner: "ours"
    },
    {
      feature: "Character Results",
      ours: "6 main characters",
      idrlabs: "6 main characters",
      winner: "neutral"
    },
    {
      feature: "MBTI Analysis",
      ours: "Yes - included in results",
      idrlabs: "Yes - detailed analysis",
      winner: "neutral"
    },
    {
      feature: "Price",
      ours: "100% Free",
      idrlabs: "Free",
      winner: "neutral"
    },
    {
      feature: "Registration Required",
      ours: "No signup needed",
      idrlabs: "Optional email",
      winner: "ours"
    },
    {
      feature: "Share Results",
      ours: "Instant download & social share",
      idrlabs: "Share via link",
      winner: "ours"
    },
    {
      feature: "Visual Design",
      ours: "Modern, colorful, mobile-optimized",
      idrlabs: "Clinical, text-heavy",
      winner: "ours"
    },
    {
      feature: "Psychological Depth",
      ours: "Personality-focused, fun",
      idrlabs: "Research-based, detailed",
      winner: "idrlabs"
    },
    {
      feature: "Best For",
      ours: "Quick fun, social sharing",
      idrlabs: "In-depth psychological insight",
      winner: "neutral"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href={`/${locale}`} className="hover:text-[#9D5AC2] transition-colors">
              Home
            </Link>
            <span>→</span>
            <Link href={`/${locale}/compare`} className="hover:text-[#9D5AC2] transition-colors">
              Compare
            </Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-semibold">MLP Test vs IDRlabs</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#9D5AC2] via-[#FF8FCC] to-[#3B88C3] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <span className="font-semibold tracking-wide uppercase text-xs">Honest Comparison</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            MLP Test vs IDRlabs:<br />Which is Better?
          </h1>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
            Comparing the two most popular My Little Pony personality tests to help you choose the right one for your needs.
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black mb-8 text-center text-gray-900 dark:text-white">
            Quick Verdict
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border-2 border-[#9D5AC2]">
              <h3 className="text-2xl font-bold mb-4 text-[#9D5AC2]">Choose Our Test If You Want:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Quick results in 3-5 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Fun, shareable results for social media</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Modern, mobile-friendly design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">No signup or email required</span>
                </li>
              </ul>
              <Link
                href={`/${locale}#quiz`}
                className="mt-6 block w-full bg-[#9D5AC2] text-white text-center py-4 rounded-full font-bold hover:scale-105 transition-all"
              >
                Take Our Test →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900/20 dark:to-blue-900/20 rounded-3xl p-8 border-2 border-gray-300 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-gray-700 dark:text-gray-300">Choose IDRlabs If You Want:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Detailed psychological analysis (60+ questions)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Research-based methodology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Comprehensive trait breakdowns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">More time for deep reflection</span>
                </li>
              </ul>
              <a
                href="https://www.idrlabs.com/my-little-pony/test.php"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full bg-gray-600 text-white text-center py-4 rounded-full font-bold hover:scale-105 transition-all"
              >
                Visit IDRlabs ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 bg-[#FFF8E7] dark:bg-zinc-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-black mb-12 text-center text-gray-900 dark:text-white">
            Feature-by-Feature Comparison
          </h2>

          <div className="bg-white dark:bg-zinc-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-zinc-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 dark:bg-zinc-900">
                    <th className="px-6 py-4 text-left font-bold text-gray-900 dark:text-white">Feature</th>
                    <th className="px-6 py-4 text-center font-bold text-[#9D5AC2]">Our MLP Test</th>
                    <th className="px-6 py-4 text-center font-bold text-gray-600 dark:text-gray-400">IDRlabs</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-t border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-900/50 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{row.feature}</td>
                      <td className={`px-6 py-4 text-center ${row.winner === 'ours' ? 'bg-purple-50 dark:bg-purple-900/20 font-bold text-[#9D5AC2]' : 'text-gray-700 dark:text-gray-300'}`}>
                        {row.ours}
                        {row.winner === 'ours' && <span className="ml-2">🏆</span>}
                      </td>
                      <td className={`px-6 py-4 text-center ${row.winner === 'idrlabs' ? 'bg-blue-50 dark:bg-blue-900/20 font-bold text-blue-600' : 'text-gray-700 dark:text-gray-300'}`}>
                        {row.idrlabs}
                        {row.winner === 'idrlabs' && <span className="ml-2">🏆</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Sections */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black mb-12 text-center text-gray-900 dark:text-white">
            Detailed Analysis
          </h2>

          <div className="space-y-12">
            {/* Question Quality */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Question Quality & Approach
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Our Test:</strong> Uses 12 carefully crafted scenario-based questions that focus on your natural preferences and behaviors. Each question is designed to be relatable and fun, making the quiz feel like a conversation rather than an assessment.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>IDRlabs:</strong> Features 60+ questions with a more clinical approach, using Likert scales (strongly agree to strongly disagree). This provides more data points but requires more time and concentration.
              </p>
            </div>

            {/* Accuracy */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Which is More Accurate?
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>It depends on what you mean by "accurate":</strong>
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#9D5AC2] font-bold">•</span>
                  <span>If you want a quick match that captures your core personality traits, our test is highly accurate with over 500,000 satisfied users (4.8/5 rating).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9D5AC2] font-bold">•</span>
                  <span>If you want granular psychological detail and are willing to invest 20 minutes, IDRlabs provides more comprehensive trait analysis.</span>
                </li>
              </ul>
            </div>

            {/* User Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                User Experience & Design
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Our Test:</strong> Built for 2026 with a modern, mobile-first design. Beautiful gradient backgrounds, smooth animations, and instant social sharing make it perfect for the TikTok and Instagram generation.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>IDRlabs:</strong> More traditional academic design with emphasis on content over aesthetics. Works well but feels more like a research tool than entertainment.
              </p>
            </div>

            {/* Privacy */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Privacy & Data
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Our Test:</strong> No signup, no email, no data collection. Your quiz results are processed locally in your browser. We respect your privacy completely.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>IDRlabs:</strong> Also free and respects privacy, though they may ask for optional email to save results. Both tests handle data responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section className="py-16 bg-[#FFF8E7] dark:bg-zinc-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black mb-12 text-center text-gray-900 dark:text-white">
            What Users Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-gray-200 dark:border-zinc-700">
              <div className="text-[#9D5AC2] text-3xl mb-4">★★★★★</div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                "Love how quick and fun this is! Got my result in 3 minutes and the design is gorgeous. Perfect for sharing on Instagram!"
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">- Sarah, 24</p>
              <p className="text-xs text-[#9D5AC2] font-semibold mt-2">Our MLP Test User</p>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-gray-200 dark:border-zinc-700">
              <div className="text-gray-600 text-3xl mb-4">★★★★☆</div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                "Very thorough and detailed. The 60 questions took a while, but I got really comprehensive insights into my personality traits."
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">- Alex, 28</p>
              <p className="text-xs text-gray-600 font-semibold mt-2">IDRlabs User</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Recommendation */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black mb-8 text-center text-gray-900 dark:text-white">
            Our Recommendation
          </h2>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border-2 border-[#9D5AC2]">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              <strong>Both tests are excellent</strong> - they just serve different purposes. If you're new to MLP personality tests or want a fun, shareable experience, start with our test. If you're a psychology enthusiast who wants deep analytical insights, try IDRlabs.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Better yet: <strong>Take both!</strong> Our quick test gives you instant gratification, and IDRlabs provides detailed confirmation and deeper analysis.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#9D5AC2] via-[#FF8FCC] to-[#3B88C3] text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Discover Your Character?
          </h2>
          <p className="text-xl mb-10 text-white/95 max-w-2xl mx-auto">
            Start with our quick 3-minute test and get your results instantly!
          </p>
          <Link
            href={`/${locale}#quiz`}
            className="inline-block bg-white text-[#9D5AC2] px-12 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-all"
          >
            Take Our Test Now ✨
          </Link>
        </div>
      </section>
    </main>
  );
}
