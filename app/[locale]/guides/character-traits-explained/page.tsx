import type { Metadata } from "next";
import GuideLayout from '@/app/components/GuideLayout';
import InlineTestCTA from '@/app/components/InlineTestCTA';
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Little Pony Character Traits Explained - Complete Analysis 2025 | MLP Test",
  description: "Deep dive into the personality traits, strengths, weaknesses, and characteristics of all My Little Pony characters. Understand what makes each pony unique.",
  keywords: [
    "my little pony character traits",
    "mlp personality traits",
    "twilight sparkle personality",
    "rainbow dash traits",
    "fluttershy characteristics",
    "pinkie pie personality",
    "rarity traits",
    "applejack personality"
  ],
};

export default function CharacterTraitsExplainedPage() {
  return (
    <GuideLayout
      title="My Little Pony Character Traits Explained - Complete Analysis 2025"
      description="Comprehensive breakdown of personality traits, strengths, weaknesses, and unique characteristics for all My Little Pony characters. Discover what makes each pony special."
      heroImage="/guides/traits-hero.jpg"
      heroImageAlt="Visual guide showing personality traits of all My Little Pony characters"
      breadcrumbLabel="Character Traits Guide"

      // Article metadata
      publishDate="January 10, 2025"
      readingTime="12 min"
      category="Deep Dive"
      categoryColor="#9D5AC2"
      author="MLP Test Team"

      // Navigation
      prevArticle={{
        title: "How Accurate is MLP Test",
        href: "/guides/how-accurate-is-mlp-test"
      }}
      nextArticle={{
        title: "Best MLP Quizzes Comparison",
        href: "/guides/best-mlp-quizzes"
      }}

      // Related Tests
      relatedTests={[
        {
          href: "/personality-test",
          title: "Personality Test",
          description: "Discover which character matches your traits",
          icon: "🧠",
          color: "#9D5AC2"
        },
        {
          href: "/character-test",
          title: "Character Test",
          description: "Find your match through behavioral scenarios",
          icon: "🎯",
          color: "#3B88C3"
        },
        {
          href: "/which-pony-are-you",
          title: "Quick Quiz",
          description: "2-minute personality match quiz",
          icon: "⚡",
          color: "#FF8FCC"
        }
      ]}

      // Related Guides
      relatedGuides={[
        {
          title: "MBTI Types in My Little Pony",
          description: "Understanding personality types of MLP characters",
          href: "/guides/mbti-types-mlp",
          color: "#9D5AC2"
        },
        {
          title: "How Accurate is MLP Test",
          description: "Scientific analysis of test reliability",
          href: "/guides/how-accurate-is-mlp-test",
          color: "#3B88C3"
        },
        {
          title: "Best MLP Quizzes Comparison",
          description: "Comprehensive review of all MLP tests",
          href: "/guides/best-mlp-quizzes",
          color: "#FF8FCC"
        }
      ]}
    >
      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg leading-relaxed mb-6">
          What makes <Link href="/characters/twilight-sparkle" className="text-[#9D5AC2] hover:underline font-semibold">Twilight Sparkle</Link> such
          a great leader? Why is <Link href="/characters/fluttershy" className="text-[#9D5AC2] hover:underline font-semibold">Fluttershy</Link> so
          kind yet sometimes surprisingly brave? This comprehensive guide breaks down the <strong>personality traits, strengths, weaknesses,
            and unique characteristics</strong> of all My Little Pony characters.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Whether you're taking our <Link href="/personality-test" className="text-[#9D5AC2] hover:underline">my little pony personality test</Link> and
          want to understand your result better, or you're simply curious about what makes each pony tick, this deep dive will give you
          complete insight into the psychology behind Equestria's most beloved characters.
        </p>

        <div className="bg-gradient-to-r from-[#9D5AC2]/10 to-[#FF8FCC]/10 dark:from-[#9D5AC2]/20 dark:to-[#FF8FCC]/20 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What You'll Learn</h3>
          <ul className="space-y-2 text-lg">
            <li className="flex items-start">
              <span className="text-2xl mr-3">🎯</span>
              <span>Core personality traits for all 6 main characters</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">💪</span>
              <span>Key strengths that make each pony valuable</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">⚠️</span>
              <span>Weaknesses and growth areas for each character</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🧠</span>
              <span>Psychological analysis based on MBTI and Big Five</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">✨</span>
              <span>What makes each character unique and special</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Twilight Sparkle */}
      <section className="mb-10">
        <div className="bg-gradient-to-r from-[#9D5AC2] to-[#9D5AC2]/70 text-white rounded-2xl p-8 mb-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold">Twilight Sparkle - The Analytical Leader</h2>
            <span className="text-5xl">🦄</span>
          </div>
          <p className="text-xl opacity-90">MBTI: ISTJ | Element: Magic | Archetype: The Scholar</p>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          <Link href="/characters/twilight-sparkle" className="text-[#9D5AC2] hover:underline font-semibold">Twilight Sparkle</Link> represents
          the logical, organized, and knowledge-driven personality type. As the bearer of the Element of Magic, she embodies intellectual
          curiosity combined with a strong sense of responsibility.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400 flex items-center">
              <span className="text-3xl mr-3">💪</span>
              Core Strengths
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#9D5AC2] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Exceptional Intelligence:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Photographic memory, quick learner, strategic thinker</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#9D5AC2] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Organizational Skills:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Master planner, detail-oriented, systematic approach</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#9D5AC2] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Strong Work Ethic:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Dedicated, persevering, takes responsibilities seriously</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#9D5AC2] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Magical Prowess:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Most powerful unicorn, masters complex spells quickly</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#9D5AC2] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Natural Leadership:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Guides friends through challenges with wisdom and logic</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400 flex items-center">
              <span className="text-3xl mr-3">⚠️</span>
              Weaknesses & Growth Areas
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Perfectionism:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Can become obsessive, stressed by imperfection</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Social Awkwardness:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Struggles with casual socializing, prefers structure</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Overthinking:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Analyzes situations too much, creates unnecessary anxiety</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Rigidity:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Difficulty adapting to unexpected changes in plans</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Workaholic Tendencies:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Neglects self-care when focused on tasks</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#FFF8F3] dark:bg-gray-800 rounded-xl p-6 mb-6 border-l-4 border-[#9D5AC2]">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Personality Breakdown (Big Five)</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-gray-900 dark:text-white">Openness to Experience</span>
                <span className="text-[#9D5AC2] font-bold">95%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-[#9D5AC2] h-3 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-gray-900 dark:text-white">Conscientiousness</span>
                <span className="text-[#9D5AC2] font-bold">98%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-[#9D5AC2] h-3 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-gray-900 dark:text-white">Extraversion</span>
                <span className="text-[#9D5AC2] font-bold">35%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-[#9D5AC2] h-3 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-gray-900 dark:text-white">Agreeableness</span>
                <span className="text-[#9D5AC2] font-bold">75%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-[#9D5AC2] h-3 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-gray-900 dark:text-white">Neuroticism</span>
                <span className="text-[#9D5AC2] font-bold">70%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-[#9D5AC2] h-3 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Perfect For:</strong> People who value knowledge, structure, and logical problem-solving. If you matched with Twilight in
          our <Link href="/personality-test" className="text-[#9D5AC2] hover:underline">personality test</Link>, you likely excel in
          academic or analytical environments. Learn more about
          <Link href="/guides/mbti-types-mlp" className="text-[#9D5AC2] hover:underline ml-1">Twilight's ISTJ personality type</Link>.
        </p>
      </section>

      <InlineTestCTA variant="personality" />

      {/* Rainbow Dash */}
      <section className="mb-10">
        <div className="bg-gradient-to-r from-[#3B88C3] to-[#5FB8E9] text-white rounded-2xl p-8 mb-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold">Rainbow Dash - The Competitive Achiever</h2>
            <span className="text-5xl">🌈</span>
          </div>
          <p className="text-xl opacity-90">MBTI: ESTP | Element: Loyalty | Archetype: The Dynamo</p>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          <Link href="/characters/rainbow-dash" className="text-[#9D5AC2] hover:underline font-semibold">Rainbow Dash</Link> embodies
          action, adventure, and unwavering confidence. As the bearer of the Element of Loyalty, she represents the bold, spontaneous,
          and competitive personality type who lives fully in the present moment.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400 flex items-center">
              <span className="text-3xl mr-3">💪</span>
              Core Strengths
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#3B88C3] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Physical Excellence:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Fastest flyer, athletic prowess, coordination</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#3B88C3] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Fierce Loyalty:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Would do anything for friends, unwavering support</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#3B88C3] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Bravery:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Faces danger head-on, natural risk-taker, courageous</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#3B88C3] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Quick Thinking:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Excellent in crisis situations, decisive action</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#3B88C3] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Confidence:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Strong self-belief, inspires others, natural charisma</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400 flex items-center">
              <span className="text-3xl mr-3">⚠️</span>
              Weaknesses & Growth Areas
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Arrogance:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Can be boastful, overconfident, dismissive of others</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Impulsiveness:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Acts without thinking, rushes into situations</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Competitiveness:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Winning matters too much, poor loser at times</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Insensitivity:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Can be blunt, doesn't always consider feelings</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Impatience:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Struggles with slow processes, wants immediate results</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#F0F8FF] dark:bg-gray-800 rounded-xl p-6 mb-6 border-l-4 border-[#3B88C3]">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Personality Breakdown (Big Five)</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-gray-900 dark:text-white">Openness to Experience</span>
                <span className="text-[#3B88C3] font-bold">80%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-[#3B88C3] h-3 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-gray-900 dark:text-white">Conscientiousness</span>
                <span className="text-[#3B88C3] font-bold">45%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-[#3B88C3] h-3 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-gray-900 dark:text-white">Extraversion</span>
                <span className="text-[#3B88C3] font-bold">92%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-[#3B88C3] h-3 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-gray-900 dark:text-white">Agreeableness</span>
                <span className="text-[#3B88C3] font-bold">55%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-[#3B88C3] h-3 rounded-full" style={{ width: '55%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-gray-900 dark:text-white">Neuroticism</span>
                <span className="text-[#3B88C3] font-bold">25%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-[#3B88C3] h-3 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Perfect For:</strong> Action-oriented people who thrive on excitement and competition. If you're a Rainbow Dash type from
          our <Link href="/character-test" className="text-[#9D5AC2] hover:underline">character test</Link>, you excel in sports,
          high-energy careers, and leadership roles requiring quick decisions.
        </p>
      </section>

      {/* Fluttershy */}
      <section className="mb-10">
        <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white rounded-2xl p-8 mb-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold">Fluttershy - The Gentle Empath</h2>
            <span className="text-5xl">🦋</span>
          </div>
          <p className="text-xl opacity-90">MBTI: ISFJ | Element: Kindness | Archetype: The Protector</p>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          <Link href="/characters/fluttershy" className="text-[#9D5AC2] hover:underline font-semibold">Fluttershy</Link> represents
          compassion, gentleness, and deep empathy. As the bearer of the Element of Kindness, she shows that quiet strength and caring
          nature can be just as powerful as confidence and bravery.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400 flex items-center">
              <span className="text-3xl mr-3">💪</span>
              Core Strengths
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#FFD700] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Exceptional Empathy:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Deep understanding of emotions, connects with animals</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFD700] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Nurturing Nature:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Natural caretaker, patient, supportive of others</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFD700] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Hidden Strength:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Fierce protector when loved ones are threatened</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFD700] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Animal Communication:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Unique ability to understand and help creatures</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFD700] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Patience:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Exceptional tolerance, never gives up on others</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400 flex items-center">
              <span className="text-3xl mr-3">⚠️</span>
              Weaknesses & Growth Areas
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Extreme Shyness:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Struggles with social situations, anxiety in crowds</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Lack of Assertiveness:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Difficulty standing up for herself, easily intimidated</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Low Self-Confidence:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Doubts abilities, needs encouragement from others</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Conflict Avoidance:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Dislikes confrontation, may suppress own needs</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Over-Sensitivity:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Can be easily hurt, takes criticism personally</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Perfect For:</strong> Compassionate individuals who excel in caregiving roles. Fluttershy types from our
          <Link href="/which-pony-are-you" className="text-[#9D5AC2] hover:underline mx-1">quick quiz</Link>
          often work in healthcare, counseling, animal care, or other helping professions where empathy is essential.
        </p>
      </section>

      <InlineTestCTA variant="character" />

      {/* Pinkie Pie */}
      <section className="mb-10">
        <div className="bg-gradient-to-r from-[#FF8FCC] to-[#FFB6D9] text-white rounded-2xl p-8 mb-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold">Pinkie Pie - The Energetic Optimist</h2>
            <span className="text-5xl">🎈</span>
          </div>
          <p className="text-xl opacity-90">MBTI: ENFP | Element: Laughter | Archetype: The Campaigner</p>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          <Link href="/characters/pinkie-pie" className="text-[#9D5AC2] hover:underline font-semibold">Pinkie Pie</Link> embodies
          spontaneity, enthusiasm, and boundless joy. As the bearer of the Element of Laughter, she shows how positivity and creativity
          can transform any situation and bring people together.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400 flex items-center">
              <span className="text-3xl mr-3">💪</span>
              Core Strengths
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#FF8FCC] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Infectious Enthusiasm:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Lifts everyone's spirits, natural mood-booster</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF8FCC] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Creative Genius:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Master party planner, innovative problem solver</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF8FCC] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Social Connector:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Brings ponies together, excellent at making friends</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF8FCC] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Resilient Optimism:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Bounces back quickly, finds silver linings</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF8FCC] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Intuitive Understanding:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> "Pinkie Sense" - reads situations uncannily well</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400 flex items-center">
              <span className="text-3xl mr-3">⚠️</span>
              Weaknesses & Growth Areas
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Overwhelming Energy:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Can exhaust others, doesn't read social cues for "too much"</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Impractical Ideas:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Plans lack realism, ignores logistics and limitations</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Boundary Issues:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Can be invasive, doesn't respect personal space</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Emotional Extremes:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Crashes hard when sad, mood swings when rejected</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Difficulty with Seriousness:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Struggles when situations require gravity</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Perfect For:</strong> Creative, social people who thrive on novelty and excitement. Pinkie types excel in entertainment,
          event planning, marketing, or any career requiring creativity and people skills.
        </p>
      </section>

      {/* Continue with Rarity and Applejack in similar format... */}
      {/* I'll add them now */}

      {/* Rarity */}
      <section className="mb-10">
        <div className="bg-gradient-to-r from-[#9D5AC2] to-[#B87FD9] text-white rounded-2xl p-8 mb-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold">Rarity - The Sophisticated Creator</h2>
            <span className="text-5xl">💎</span>
          </div>
          <p className="text-xl opacity-90">MBTI: ESFJ | Element: Generosity | Archetype: The Consul</p>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          <Link href="/characters/rarity" className="text-[#9D5AC2] hover:underline font-semibold">Rarity</Link> represents
          elegance, creativity, and genuine generosity. As the bearer of the Element of Generosity, she demonstrates that ambition
          and kindness can coexist beautifully.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400 flex items-center">
              <span className="text-3xl mr-3">💪</span>
              Core Strengths
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#9D5AC2] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Artistic Excellence:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Masterful fashion designer, keen aesthetic sense</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#9D5AC2] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">True Generosity:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Gives selflessly, creates beauty for others</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#9D5AC2] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Business Savvy:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Successful entrepreneur, understands market</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#9D5AC2] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Social Grace:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Sophisticated manners, navigates high society well</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#9D5AC2] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Determination:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Pursues dreams relentlessly, ambitious goals</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400 flex items-center">
              <span className="text-3xl mr-3">⚠️</span>
              Weaknesses & Growth Areas
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Melodramatic:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Overreacts to minor issues, theatrical responses</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Vanity:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Overly concerned with appearance, image-focused</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Overcommitment:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Takes on too much, struggles to say no</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Perfectionism:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Won't accept "good enough," can delay completion</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Status-Seeking:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Sometimes prioritizes prestige over substance</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Perfect For:</strong> Creative professionals with entrepreneurial spirit. Rarity types succeed in fashion, design,
          arts, or any field combining creativity with business acumen.
        </p>
      </section>

      {/* Applejack */}
      <section className="mb-10">
        <div className="bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white rounded-2xl p-8 mb-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold">Applejack - The Honest Pragmatist</h2>
            <span className="text-5xl">🍎</span>
          </div>
          <p className="text-xl opacity-90">MBTI: ESTJ | Element: Honesty | Archetype: The Executive</p>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          <Link href="/characters/applejack" className="text-[#9D5AC2] hover:underline font-semibold">Applejack</Link> embodies
          integrity, hard work, and practical wisdom. As the bearer of the Element of Honesty, she represents straightforward
          communication and unwavering reliability.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400 flex items-center">
              <span className="text-3xl mr-3">💪</span>
              Core Strengths
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#FF8C00] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Unshakeable Integrity:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Always truthful, keeps promises, trustworthy</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF8C00] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Strong Work Ethic:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Tireless worker, never shirks responsibility</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF8C00] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Practical Skills:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Excellent at physical tasks, problem-solver</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF8C00] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Family Values:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Deeply loyal to loved ones, protective</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF8C00] font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Dependability:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Most reliable friend, always follows through</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400 flex items-center">
              <span className="text-3xl mr-3">⚠️</span>
              Weaknesses & Growth Areas
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Stubbornness:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Inflexible once mind is made up, resists change</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Excessive Pride:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Won't ask for help even when needed</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Blunt Honesty:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Truth can hurt feelings, lacks tact sometimes</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Traditionalism:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Resistant to new methods, prefers "the old ways"</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Overwork:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Pushes too hard, neglects rest and self-care</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Perfect For:</strong> Practical, hardworking individuals who value honesty and tradition. Applejack types excel in
          hands-on careers, management roles, or family businesses requiring reliability and integrity.
        </p>
      </section>

      {/* Character Comparison Table */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Quick Character Traits Comparison
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8 border border-gray-200 dark:border-gray-700 overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gradient-to-r from-[#9D5AC2] to-[#FF8FCC] text-white">
                <th className="px-4 py-3 text-left font-bold">Character</th>
                <th className="px-4 py-3 text-center font-bold">MBTI</th>
                <th className="px-4 py-3 text-center font-bold">Top Strength</th>
                <th className="px-4 py-3 text-center font-bold">Main Challenge</th>
                <th className="px-4 py-3 text-center font-bold">Best Career</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-4 font-bold text-[#9D5AC2]">Twilight Sparkle</td>
                <td className="px-4 py-4 text-center">ISTJ</td>
                <td className="px-4 py-4 text-center">Intelligence</td>
                <td className="px-4 py-4 text-center">Perfectionism</td>
                <td className="px-4 py-4 text-center">Research, Teaching</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-4 font-bold text-[#3B88C3]">Rainbow Dash</td>
                <td className="px-4 py-4 text-center">ESTP</td>
                <td className="px-4 py-4 text-center">Bravery</td>
                <td className="px-4 py-4 text-center">Arrogance</td>
                <td className="px-4 py-4 text-center">Athletics, Military</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-4 font-bold text-[#FFD700]">Fluttershy</td>
                <td className="px-4 py-4 text-center">ISFJ</td>
                <td className="px-4 py-4 text-center">Empathy</td>
                <td className="px-4 py-4 text-center">Shyness</td>
                <td className="px-4 py-4 text-center">Veterinary, Counseling</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-4 font-bold text-[#FF8FCC]">Pinkie Pie</td>
                <td className="px-4 py-4 text-center">ENFP</td>
                <td className="px-4 py-4 text-center">Creativity</td>
                <td className="px-4 py-4 text-center">Overwhelming Energy</td>
                <td className="px-4 py-4 text-center">Entertainment, Events</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-4 font-bold text-[#9D5AC2]">Rarity</td>
                <td className="px-4 py-4 text-center">ESFJ</td>
                <td className="px-4 py-4 text-center">Artistic Talent</td>
                <td className="px-4 py-4 text-center">Melodrama</td>
                <td className="px-4 py-4 text-center">Fashion, Design</td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-bold text-[#FF8C00]">Applejack</td>
                <td className="px-4 py-4 text-center">ESTJ</td>
                <td className="px-4 py-4 text-center">Integrity</td>
                <td className="px-4 py-4 text-center">Stubbornness</td>
                <td className="px-4 py-4 text-center">Management, Trades</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Want to see how different characters compare head-to-head? Check out our detailed comparison guides for
          <Link href="/compare/twilight-vs-rainbow-dash" className="text-[#9D5AC2] hover:underline mx-1">Twilight vs Rainbow Dash</Link>
          and other character matchups.
        </p>
      </section>

      {/* Conclusion */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Understanding Your Character Match
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Every My Little Pony character represents a unique constellation of personality traits, strengths, and growth areas.
          When you take our <Link href="/personality-test" className="text-[#9D5AC2] hover:underline font-semibold">my little pony personality test</Link>,
          your result reflects which character's traits align most closely with your own personality patterns.
        </p>

        <div className="bg-gradient-to-r from-[#9D5AC2]/10 to-[#3B88C3]/10 dark:from-[#9D5AC2]/20 dark:to-[#3B88C3]/20 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Key Takeaways</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-2xl mr-3">✨</span>
              <span><strong>All traits have value:</strong> There's no "best" character—each represents different strengths</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🎯</span>
              <span><strong>Weaknesses are growth opportunities:</strong> Understanding challenges helps you develop</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🧠</span>
              <span><strong>Personality is complex:</strong> You may share traits with multiple characters</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">📊</span>
              <span><strong>MBTI provides framework:</strong> Scientific personality types ground the character analysis</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">💪</span>
              <span><strong>Play to your strengths:</strong> Understanding your type helps you thrive in the right environments</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-[#9D5AC2]/30 shadow-xl">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
            Discover Your Character Match Today
          </h3>
          <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-6">
            Now that you understand each character's traits, find out which pony matches your unique personality!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/personality-test"
              className="inline-block bg-gradient-to-r from-[#9D5AC2] to-[#FF8FCC] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg text-center"
            >
              Take Full Personality Test
            </Link>
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-[#3B88C3] to-[#5FB8E9] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg text-center"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </GuideLayout>
  );
}
