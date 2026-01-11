import { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/app/components/GuideLayout';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.idrlabsComparison' });

  return {
    title: t('title') + " - Complete Comparison 2026",
    description: t('description'),
    keywords: [
      "my little pony test idrlabs",
      "idrlabs my little pony",
      "mlp test comparison",
      "my little pony test",
      "idrlabs personality test",
      "mlp personality quiz",
      "mlp character test"
    ],
  };
}

export default function IDRLabsComparisonPage() {
  const t = useTranslations('guides.idrlabsComparison');

  return (
    <GuideLayout
      title={t('title')}
      description={t('description')}
      heroImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&h=800&fit=crop&q=80"
      heroImageAlt="Colorful personality test comparison"
      breadcrumbLabel={t('title')}
      relatedGuides={[
        {
          title: "Explore All Characters",
          description: "Discover the full roster of My Little Pony characters",
          href: "/characters",
          color: "#FF6B9D"
        },
        {
          title: "Take Our Quiz",
          description: "Find your My Little Pony character match",
          href: "/#quiz",
          color: "#C06CF8"
        }
      ]}
    >
      <div className="bg-gradient-to-r from-[#FF6B9D]/10 to-[#C06CF8]/10 rounded-2xl p-8 mb-12 border-l-4 border-[#FF6B9D] shadow-sm">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-0">
          <strong>Quick Answer:</strong> This guide compares the IDRLabs My Little Pony test with our own platform. Both assessments aim to match fans with their character equivalent, but they differ significantly in methodology.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#FF6B9D] to-[#C06CF8] bg-clip-text text-transparent font-display">
          Overview of Both Tests
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          The <strong>my little pony test idrlabs</strong> and our proprietary quiz represent two distinct approaches to matching MLP fans with their character counterpart.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-gray-100 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
            <h3 className="font-bold text-xl mb-4 text-[#FF6B9D]">IDRLabs Version</h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FF6B9D]" />
                <span>Established personality platform</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FF6B9D]" />
                <span>Standard academic methodology</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FF6B9D]" />
                <span>Focuses on core personality dimensions</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-gray-100 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
            <h3 className="font-bold text-xl mb-4 text-[#C06CF8]">Our Quiz</h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#C06CF8]" />
                <span>MLP-specific trait mapping</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#C06CF8]" />
                <span>Modern, interactive UI</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#C06CF8]" />
                <span>Includes extended character roster</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#FF6B9D] to-[#C06CF8] bg-clip-text text-transparent font-display">
          IDRLabs My Little Pony Test Review
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          IDRLabs has established itself as a credible voice in online personality assessment. The my little pony test idrlabs version applies their standard methodology to the beloved franchise.
        </p>

        <div className="space-y-6">
          <div className="bg-green-50/50 dark:bg-green-900/10 p-6 rounded-2xl border-l-4 border-green-500">
            <h3 className="font-bold text-lg mb-2">Strengths</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Scientifically-grounded approach and broad user base. Quick assessment (5-10 mins).</p>
          </div>
          <div className="bg-red-50/50 dark:bg-red-900/10 p-6 rounded-2xl border-l-4 border-red-500">
            <h3 className="font-bold text-lg mb-2">Limitations</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Limited character pool (mane 6 focus) and generic personality framework.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#FF6B9D] to-[#C06CF8] bg-clip-text text-transparent font-display">
          Comparison Table
        </h2>

        <div className="overflow-x-auto bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 dark:bg-zinc-800/50">
                <th className="p-4 font-bold">Feature</th>
                <th className="p-4 font-bold">IDRLabs</th>
                <th className="p-4 font-bold">Our Quiz</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-zinc-800">
              <tr>
                <td className="p-4 font-medium">Cost</td>
                <td className="p-4">Free / Premium</td>
                <td className="p-4">Completely Free</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Character Pool</td>
                <td className="p-4">~10 characters</td>
                <td className="p-4">20+ characters</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Analysis Depth</td>
                <td className="p-4">Standard</td>
                <td className="p-4">Detailed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 border border-gray-200 dark:border-zinc-700 text-center">
          <h3 className="font-bold text-2xl mb-6 font-display">Ready to Take the Best Test?</h3>
          <Link
            href="/#quiz"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6B9D] to-[#C06CF8] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            Start Our Quiz Now →
          </Link>
        </div>
      </section>
    </GuideLayout>
  );
}
