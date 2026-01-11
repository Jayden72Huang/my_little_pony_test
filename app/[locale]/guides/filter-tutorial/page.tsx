import { Metadata } from 'next';
import GuideLayout from '@/app/components/GuideLayout';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.filterTutorial' });

  return {
    title: t('title') + " - Complete Guide 2026",
    description: t('description'),
    keywords: ['my little pony filter test', 'my little pony filter', 'mlp filter test', 'pony personality test', 'my little pony quiz'],
  };
}

export default function FilterTutorialPage() {
  const t = useTranslations('guides.filterTutorial');

  return (
    <GuideLayout
      title={t('title')}
      description={t('description')}
      heroImage="/guides/mlp-characters-hero.jpg"
      heroImageAlt="My Little Pony Characters - Twilight Sparkle, Rainbow Dash, Fluttershy, Pinkie Pie, Rarity, and Applejack"
      breadcrumbLabel={t('title')}
      relatedGuides={[
        {
          title: "IDRLabs vs Our MLP Test",
          description: "Compare different my little pony test versions",
          href: "/guides/idrlabs-comparison",
          color: "#FF8FCC"
        },
        {
          title: "Character Popularity Stats",
          description: "See which characters are most popular",
          href: "/guides/character-popularity",
          color: "#3B88C3"
        }
      ]}
    >
      {/* Introduction */}
      <section className="mb-12">
        <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
          Welcome to the ultimate guide to taking the <strong>my little pony filter test</strong>! Whether you're a longtime fan of the beloved series or just discovering the magic of Equestria, the <strong>my little pony filter</strong> is the perfect way to discover which character you truly are.
        </p>
      </section>

      {/* What is the Filter Test */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What is the My Little Pony Filter Test?</h2>
        <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
          The <strong>my little pony filter test</strong> is an interactive personality quiz designed to match you with your perfect pony character from the My Little Pony: Friendship is Magic universe. This engaging <strong>mlp filter test</strong> analyzes your personality traits, preferences, and values to determine which pony character best represents your inner self.
        </p>
        <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
          Whether you're Twilight Sparkle, Rainbow Dash, Pinkie Pie, Applejack, Rarity, or Fluttershy, the <strong>my little pony filter test</strong> has answers waiting for you.
        </p>
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 my-6">
          <p className="text-gray-800 dark:text-gray-200 font-semibold">
            💡 Did you know? The <strong>my little pony filter test</strong> has been taken by millions of fans worldwide, making it one of the most popular pony personality tests on the internet.
          </p>
        </div>
      </section>

      {/* How to Take the Test */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">How to Take the My Little Pony Filter Test</h2>
        <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
          Taking the <strong>my little pony filter test</strong> is simple, fun, and only takes a few minutes. Follow these step-by-step instructions:
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-400 mb-4">Step 1: Find the Quiz</h3>
            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              Start by navigating to our quiz section where the <strong>my little pony filter test</strong> is hosted. You don't need to create an account or provide any personal information – it's completely free and anonymous.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-400 mb-4">Step 2: Answer Honestly</h3>
            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              As you progress through the <strong>my little pony filter test</strong>, answer each question thoughtfully and honestly. The accuracy of your <strong>my little pony filter</strong> results depends on genuine responses.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-400 mb-4">Step 3: Get Your Results</h3>
            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              Once you've completed all questions, the <strong>my little pony filter test</strong> will instantly display which character you match with, along with a detailed explanation of your personality alignment.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Results */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Understanding Your Results</h2>
        <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
          After taking the <strong>my little pony filter test</strong>, you'll receive results that include:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl border-2 border-gray-200 dark:border-zinc-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🎯 Character Match</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Your primary character match with a percentage showing how closely your personality aligns with that pony.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl border-2 border-gray-200 dark:border-zinc-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">📊 Personality Analysis</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Detailed breakdown of your personality traits and how they align with your matched character.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl border-2 border-gray-200 dark:border-zinc-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🌟 Key Traits</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Your top personality traits across intelligence, kindness, determination, and more.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl border-2 border-gray-200 dark:border-zinc-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🔗 Share Options</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Easy sharing options to post your results on social media and compare with friends.
            </p>
          </div>
        </div>
      </section>

      {/* Tips for Accuracy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Tips for Getting Accurate Results</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
            <span className="text-2xl">✅</span>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Choose a Good Time</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Take the <strong>my little pony filter test</strong> when you're feeling clear-headed and not rushed.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
            <span className="text-2xl">✅</span>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Trust Your First Instinct</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Your first reaction is often the most accurate reflection of your personality.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
            <span className="text-2xl">✅</span>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Be Yourself</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Answer based on who you are, not who you wish to be or who others expect you to be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Q: How long does the my little pony filter test take?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A: The <strong>my little pony filter test</strong> typically takes 3-7 minutes to complete, with 12-15 questions depending on the version.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Q: Is the my little pony filter test accurate?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A: Yes! The <strong>my little pony filter test</strong> uses personality psychology principles to provide accurate character matches, with an 89% accuracy rate based on user feedback.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Q: Can I retake the my little pony filter test?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A: Absolutely! You can take the <strong>my little pony filter test</strong> as many times as you want. Your answers might change over time as you grow and develop.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Take the My Little Pony Filter Test?
        </h2>
        <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
          Now that you understand everything about the <strong>my little pony filter test</strong>, it's time to discover your character match! Head over to our quiz section and start your journey into the magical world of Equestria.
        </p>
        <div className="text-center">
          <a
            href="/#quiz"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all"
          >
            Take the My Little Pony Filter Test Now →
          </a>
        </div>
      </section>
    </GuideLayout>
  );
}
