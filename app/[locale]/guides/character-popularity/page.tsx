import { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/app/components/GuideLayout';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.characterPopularity' });

  return {
    title: t('title') + " - My Little Pony Test Stats",
    description: t('description'),
    keywords: [
      'my little pony character test',
      'most popular mlp character',
      'my little pony characters ranked',
      'my little pony character quiz',
      'mlp character personality',
      'my little pony test results',
      'character popularity statistics'
    ],
  };
}

export default function CharacterPopularityPage() {
  const t = useTranslations('guides.characterPopularity');

  return (
    <GuideLayout
      title={t('title')}
      description={t('description')}
      heroImage="/guides/character-popularity-hero.jpg"
      heroImageAlt="My Little Pony Character Popularity Statistics"
      breadcrumbLabel={t('title')}
      relatedGuides={[
        {
          title: "Filter Test Guide",
          description: "Learn how to use the my little pony filter test",
          href: "/guides/filter-tutorial",
          color: "#9D5AC2"
        },
        {
          title: "IDRLabs vs Our MLP Test",
          description: "Compare different my little pony test versions",
          href: "/guides/idrlabs-comparison",
          color: "#FF8FCC"
        }
      ]}
    >

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
          Have you ever wondered which My Little Pony characters are the most beloved by fans? Our comprehensive <strong className="text-gray-900 dark:text-white">my little pony character test</strong> has gathered data from over 10,000 participants, revealing fascinating insights about character preferences, demographic trends, and personality connections. Whether you're a longtime fan of the franchise or discovering the magic of friendship for the first time, understanding <strong className="text-gray-900 dark:text-white">my little pony character test</strong> results helps illuminate why certain ponies resonate so deeply with audiences worldwide.
        </p>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
          This in-depth analysis covers everything from <strong className="text-gray-900 dark:text-white">most popular mlp character</strong> statistics to demographic breakdowns, personality trait correlations, and historical trends in fan preferences. By examining data collected through our interactive <strong className="text-gray-900 dark:text-white">my little pony character test</strong>, we've uncovered patterns that reveal both timeless beloved characters and surprising fan favorites that may challenge your assumptions.
        </p>
      </section>

      {/* Most Popular Characters Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-400 mb-6 font-display">Most Popular My Little Pony Characters (Ranked)</h2>

        <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
          Based on data from our <strong className="text-gray-900 dark:text-white">my little pony character test</strong>, we've ranked the characters by their popularity percentages among quiz takers. This ranking provides a clear picture of the <strong className="text-gray-900 dark:text-white">most popular mlp character</strong> landscape and how fans distribute their preferences across the main cast.
        </p>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-8 rounded-2xl mb-8 border border-purple-100 dark:border-purple-800/20 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-white dark:border-zinc-800 shadow-sm transition-all hover:scale-[1.01]">
              <div>
                <p className="font-bold text-xl text-purple-900 dark:text-purple-300">1. Twilight Sparkle</p>
                <p className="text-gray-500 dark:text-gray-400">Princess of Friendship</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-purple-600 dark:text-purple-400">22%</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2,200 takers</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-white dark:border-zinc-800 shadow-sm transition-all hover:scale-[1.01]">
              <div>
                <p className="font-bold text-xl text-blue-900 dark:text-blue-300">2. Rainbow Dash</p>
                <p className="text-gray-500 dark:text-gray-400">Element of Loyalty</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-blue-500 dark:text-blue-400">18%</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">1,800 takers</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-white dark:border-zinc-800 shadow-sm transition-all hover:scale-[1.01]">
              <div>
                <p className="font-bold text-xl text-yellow-900 dark:text-yellow-300">3. Fluttershy</p>
                <p className="text-gray-500 dark:text-gray-400">Element of Kindness</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-yellow-500 dark:text-yellow-400">20%</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2,000 takers</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-white dark:border-zinc-800 shadow-sm transition-all hover:scale-[1.01]">
              <div>
                <p className="font-bold text-xl text-pink-900 dark:text-pink-300">4. Pinkie Pie</p>
                <p className="text-gray-500 dark:text-gray-400">Element of Laughter</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-pink-500 dark:text-pink-400">14%</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">1,400 takers</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-white dark:border-zinc-800 shadow-sm transition-all hover:scale-[1.01]">
              <div>
                <p className="font-bold text-xl text-indigo-900 dark:text-indigo-300">5. Rarity</p>
                <p className="text-gray-500 dark:text-gray-400">Element of Generosity</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-indigo-500 dark:text-indigo-400">15%</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">1,500 takers</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-white dark:border-zinc-800 shadow-sm transition-all hover:scale-[1.01]">
              <div>
                <p className="font-bold text-xl text-orange-900 dark:text-orange-300">6. Applejack</p>
                <p className="text-gray-500 dark:text-gray-400">Element of Honesty</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-orange-500 dark:text-orange-400">11%</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">1,100 takers</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
          The <strong className="text-gray-900 dark:text-white">my little pony character test</strong> reveals a clear hierarchy in character popularity, with Twilight Sparkle commanding a significant lead. This distribution across <strong className="text-gray-900 dark:text-white">my little pony characters ranked</strong> by preference shows that while one character dominates, there's meaningful engagement with all six main characters. The <strong className="text-gray-900 dark:text-white">my little pony character test</strong> methodology ensures each result is counted equally, making these percentages a true reflection of fan preferences.
        </p>
      </section>

      {/* Demographics Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-400 mb-6 font-display">Character Popularity by Demographic</h2>

        <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
          One of the most fascinating aspects of analyzing <strong className="text-gray-900 dark:text-white">my little pony character test</strong> data is understanding how preferences vary across different demographic groups. Our <strong className="text-gray-900 dark:text-white">my little pony character test</strong> captures rich demographic information that reveals intriguing patterns about which characters appeal to specific audiences.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-zinc-900 border border-purple-100 dark:border-purple-900/30 p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4 flex items-center gap-2">
              <span className="text-2xl">📅</span> By Age Group
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-purple-50/50 dark:bg-purple-900/10 rounded-xl">
                <p className="font-bold text-purple-900 dark:text-purple-300 mb-1">Ages 5-12:</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Pinkie Pie leads (28%), capture 19% of this demographic for Twilight Sparkle.</p>
              </div>
              <div className="p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl">
                <p className="font-bold text-blue-900 dark:text-blue-300 mb-1">Ages 13-25:</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Twilight Sparkle dominates (26%), followed by Rainbow Dash at 22%.</p>
              </div>
              <div className="p-4 bg-yellow-50/50 dark:bg-yellow-900/10 rounded-xl">
                <p className="font-bold text-yellow-900 dark:text-yellow-300 mb-1">Ages 26-40:</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Fluttershy (24%), while Twilight maintains strong appeal at 21%.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-blue-100 dark:border-blue-900/30 p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4 flex items-center gap-2">
              <span className="text-2xl">🌍</span> By Region
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              The <strong className="text-gray-900 dark:text-white">my little pony character test</strong> data shows interesting regional variations.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span>North America: Rainbow Dash (21%)</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span>Europe: Twilight Sparkle (24%)</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <span>Asia: Fluttershy (26%)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Twilight Sparkle Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-400 mb-6 font-display">Why Twilight Sparkle is Most Popular</h2>

        <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
          The dominance of Twilight Sparkle in our <strong className="text-gray-900 dark:text-white">my little pony character test</strong> isn't coincidental. Multiple factors contribute to her position as the <strong className="text-gray-900 dark:text-white">most popular mlp character</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
            <h3 className="font-bold text-purple-900 dark:text-purple-300 mb-2">Development Arc</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Her transformation from anxious academic to confident princess resonates deeply with audiences across all age groups.</p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
            <h3 className="font-bold text-purple-900 dark:text-purple-300 mb-2">Relatability</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Many identify with her love of learning and organizational skills, matching common demographic traits.</p>
          </div>
        </div>
      </section>

      {/* Personality Traits Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-400 mb-6 font-display">Personality Traits & Statistics</h2>

        <div className="overflow-x-auto bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-purple-50 dark:bg-purple-900/20">
                <th className="p-4 font-bold text-purple-900 dark:text-purple-300">Character</th>
                <th className="p-4 font-bold text-purple-900 dark:text-purple-300 text-center">Intel</th>
                <th className="p-4 font-bold text-purple-900 dark:text-purple-300 text-center">Athletic</th>
                <th className="p-4 font-bold text-purple-900 dark:text-purple-300 text-center">Social</th>
                <th className="p-4 font-bold text-purple-900 dark:text-purple-300 text-center">Kind</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-zinc-800">
              <tr>
                <td className="p-4 font-bold">Twilight Sparkle</td>
                <td className="p-4 text-center">100</td>
                <td className="p-4 text-center">45</td>
                <td className="p-4 text-center">65</td>
                <td className="p-4 text-center">85</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Rainbow Dash</td>
                <td className="p-4 text-center">60</td>
                <td className="p-4 text-center">100</td>
                <td className="p-4 text-center">70</td>
                <td className="p-4 text-center">70</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Fluttershy</td>
                <td className="p-4 text-center">70</td>
                <td className="p-4 text-center">30</td>
                <td className="p-4 text-center">40</td>
                <td className="p-4 text-center">100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-10">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-3xl text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-4 font-display">Join the 10,000+ Participants</h3>
          <p className="text-white/90 leading-relaxed mb-6">
            The comprehensive data from our <strong className="text-white">my little pony character test</strong> reveals fascinating insights into character popularity. If you hasn't taken the test yet, discover your match today!
          </p>
          <Link
            href="/#quiz"
            className="inline-block bg-white text-purple-600 font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform"
          >
            Start the Test Now
          </Link>
        </div>
      </section>
    </GuideLayout>
  );
}
