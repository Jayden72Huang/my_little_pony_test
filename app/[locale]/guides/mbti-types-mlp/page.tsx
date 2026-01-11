import type { Metadata } from "next";
import GuideLayout from '@/app/components/GuideLayout';
import InlineTestCTA from '@/app/components/InlineTestCTA';
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Little Pony MBTI Types: Complete Character Personality Guide 2025",
  description: "Discover the MBTI personality types of all My Little Pony characters. From Twilight Sparkle (ISTJ) to Pinkie Pie (ENFP), explore detailed personality analysis and find which MLP character matches your MBTI type.",
  keywords: [
    "my little pony mbti",
    "mlp personality types",
    "my little pony personality test",
    "twilight sparkle mbti",
    "rainbow dash personality type",
    "my little pony character test",
    "mbti types mlp",
    "my little pony myers briggs"
  ],
};

export default function MBTITypesMLPPage() {
  return (
    <GuideLayout
      title="My Little Pony MBTI Types: Complete Personality Guide"
      description="Understanding the Myers-Briggs personality types of your favorite MLP characters"
      heroImage="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=1600&h=800&fit=crop&q=80"
      heroImageAlt="My Little Pony MBTI Personality Types"
      breadcrumbLabel="MBTI Types"

      publishDate="January 10, 2025"
      readingTime="10 min"
      category="Deep Dive"
      categoryColor="#9D5AC2"

      prevArticle={{
        title: "Character Popularity Statistics",
        href: "/guides/character-popularity"
      }}
      nextArticle={{
        title: "How Accurate is MLP Test",
        href: "/guides/how-accurate-is-mlp-test"
      }}

      relatedTests={[
        {
          href: "/personality-test",
          title: "Personality Test",
          description: "Find your MBTI-based MLP character match",
          icon: "🧠",
          color: "#9D5AC2"
        },
        {
          href: "/character-test",
          title: "Character Test",
          description: "Behavioral matching test",
          icon: "🎯",
          color: "#3B88C3"
        },
        {
          href: "/which-pony-are-you",
          title: "Quick Quiz",
          description: "2-minute personality quiz",
          icon: "⚡",
          color: "#FF8FCC"
        }
      ]}

      relatedGuides={[
        {
          title: "Character Popularity Stats",
          description: "See which characters are most popular among quiz takers",
          href: "/guides/character-popularity",
          color: "#FF8FCC"
        },
        {
          title: "Character Traits Explained",
          description: "Deep dive into personality trait dimensions",
          href: "/guides/character-traits-explained",
          color: "#3B88C3"
        },
        {
          title: "IDRLabs Comparison",
          description: "How our test compares to IDRLabs",
          href: "/guides/idrlabs-comparison",
          color: "#9D5AC2"
        }
      ]}
    >
      {/* Introduction */}
      <section className="mb-12">
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Have you ever wondered what MBTI personality types the beloved <strong>My Little Pony</strong> characters would have? Understanding the Myers-Briggs Type Indicator (MBTI) profiles of Twilight Sparkle, Rainbow Dash, Fluttershy, and the rest of the mane six can provide fascinating insights into their behaviors, relationships, and why certain characters resonate with different fans.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our <Link href="/personality-test" className="text-[#9D5AC2] hover:underline font-semibold">my little pony personality test</Link> uses MBTI-based analysis to match you with your perfect character. In this comprehensive guide, we'll explore each character's personality type, what makes them unique, and how you can discover which pony shares your MBTI type!
        </p>
      </section>

      {/* What is MBTI Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          What is MBTI and Why Does it Matter for MLP?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          The Myers-Briggs Type Indicator (MBTI) is a personality framework that categorizes people into 16 distinct types based on four key dimensions:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-100 dark:border-purple-800">
            <h3 className="text-xl font-bold mb-3 text-[#9D5AC2]">Extraversion (E) vs Introversion (I)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Where you direct your energy: outward to people and activities, or inward to thoughts and reflection.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
            <h3 className="text-xl font-bold mb-3 text-[#3B88C3]">Sensing (S) vs Intuition (N)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              How you gather information: through concrete facts and details, or patterns and possibilities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-2xl p-6 border border-amber-100 dark:border-amber-800">
            <h3 className="text-xl font-bold mb-3 text-[#F9E38D]">Thinking (T) vs Feeling (F)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              How you make decisions: through logical analysis, or personal values and harmony.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-800">
            <h3 className="text-xl font-bold mb-3 text-[#F49B38]">Judging (J) vs Perceiving (P)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              How you approach the outside world: through structure and planning, or flexibility and spontaneity.
            </p>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Applying MBTI to <strong>My Little Pony</strong> characters helps us understand their core motivations, how they interact with friends, and why certain ponies naturally gravitate toward specific roles in their friend group. This framework forms the basis of our <Link href="/personality-test" className="text-[#9D5AC2] hover:underline font-semibold">my little pony personality test</Link>.
        </p>
      </section>

      <InlineTestCTA variant="personality" />

      {/* Character MBTI Types */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          My Little Pony Characters and Their MBTI Types
        </h2>

        {/* Twilight Sparkle - ISTJ */}
        <div className="mb-10">
          <div className="bg-gradient-to-r from-[#9D5AC2]/10 to-[#E8B7F5]/10 rounded-3xl p-8 border-l-4 border-[#9D5AC2]">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#9D5AC2] to-[#E8B7F5] flex items-center justify-center text-4xl shadow-lg">
                ✨
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                  Twilight Sparkle - ISTJ (The Inspector)
                </h3>
                <p className="text-[#9D5AC2] font-bold text-lg">Princess of Friendship</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <Link href="/characters/twilight-sparkle" className="text-[#9D5AC2] hover:underline font-semibold">Twilight Sparkle</Link> exemplifies the ISTJ personality type through her methodical approach to problem-solving, love of structure and organization, and deep sense of responsibility. As an <strong>Introverted</strong> personality, Twilight recharges through quiet study time in the library. Her <strong>Sensing</strong> preference shows in her attention to detail and reliance on proven knowledge from books.
            </p>

            <div className="bg-white/50 dark:bg-zinc-800/50 rounded-2xl p-6 mb-4">
              <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">ISTJ Traits in Twilight:</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#9D5AC2] font-bold">✓</span>
                  <span><strong>Organized & Methodical:</strong> Creates detailed checklists and follows structured plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9D5AC2] font-bold">✓</span>
                  <span><strong>Responsible & Dutiful:</strong> Takes her role as Princess of Friendship seriously</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9D5AC2] font-bold">✓</span>
                  <span><strong>Knowledge-Focused:</strong> Seeks solutions through research and study</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9D5AC2] font-bold">✓</span>
                  <span><strong>Loyal & Dependable:</strong> Always there for her friends when needed</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
              "If you scored high on organization, love of learning, and responsibility in our <Link href="/personality-test" className="text-[#9D5AC2] hover:underline">my little pony personality test</Link>, you likely share Twilight's ISTJ traits!"
            </p>
          </div>
        </div>

        {/* Rainbow Dash - ESTP */}
        <div className="mb-10">
          <div className="bg-gradient-to-r from-[#3B88C3]/10 to-[#9BD5F5]/10 rounded-3xl p-8 border-l-4 border-[#3B88C3]">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3B88C3] to-[#9BD5F5] flex items-center justify-center text-4xl shadow-lg">
                ⚡
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                  Rainbow Dash - ESTP (The Dynamo)
                </h3>
                <p className="text-[#3B88C3] font-bold text-lg">Element of Loyalty</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <Link href="/characters/rainbow-dash" className="text-[#3B88C3] hover:underline font-semibold">Rainbow Dash</Link> perfectly embodies the ESTP personality: action-oriented, bold, and living in the moment. As an <strong>Extraverted</strong> type, she thrives on excitement and social interaction. Her <strong>Sensing</strong> preference makes her highly aware of her physical surroundings—essential for her incredible flying skills!
            </p>

            <div className="bg-white/50 dark:bg-zinc-800/50 rounded-2xl p-6 mb-4">
              <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">ESTP Traits in Rainbow Dash:</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#3B88C3] font-bold">✓</span>
                  <span><strong>Action-Oriented:</strong> Prefers doing over planning ("20% cooler!")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3B88C3] font-bold">✓</span>
                  <span><strong>Competitive:</strong> Always striving to be the best and fastest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3B88C3] font-bold">✓</span>
                  <span><strong>Bold & Confident:</strong> Never backs down from a challenge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3B88C3] font-bold">✓</span>
                  <span><strong>Fiercely Loyal:</strong> Protective of friends and values loyalty above all</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
              "Athletic, competitive personalities often match with Rainbow Dash in our <Link href="/character-test" className="text-[#3B88C3] hover:underline">my little pony character test</Link>!"
            </p>
          </div>
        </div>

        {/* Fluttershy - ISFJ */}
        <div className="mb-10">
          <div className="bg-gradient-to-r from-[#F9E38D]/10 to-[#FFF7CC]/10 rounded-3xl p-8 border-l-4 border-[#F9E38D]">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F9E38D] to-[#FFF7CC] flex items-center justify-center text-4xl shadow-lg">
                🦋
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                  Fluttershy - ISFJ (The Protector)
                </h3>
                <p className="text-[#F9E38D] font-bold text-lg">Element of Kindness</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <Link href="/characters/fluttershy" className="text-[#F9E38D] hover:underline font-semibold">Fluttershy</Link> represents the ISFJ type beautifully: nurturing, empathetic, and deeply caring. Her <strong>Introverted</strong> nature makes her prefer quiet, peaceful environments (like her cottage), while her <strong>Feeling</strong> preference drives her incredible kindness and sensitivity to others' emotions.
            </p>

            <div className="bg-white/50 dark:bg-zinc-800/50 rounded-2xl p-6 mb-4">
              <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">ISFJ Traits in Fluttershy:</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#F9E38D] font-bold">✓</span>
                  <span><strong>Nurturing & Caring:</strong> Natural caretaker for animals and friends</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F9E38D] font-bold">✓</span>
                  <span><strong>Empathetic:</strong> Deeply attuned to others' feelings and needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F9E38D] font-bold">✓</span>
                  <span><strong>Gentle & Patient:</strong> Approaches situations with calmness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F9E38D] font-bold">✓</span>
                  <span><strong>Quietly Strong:</strong> Shows inner courage when protecting what matters</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
              "If you're empathetic, gentle, and love animals, you might share Fluttershy's ISFJ personality!"
            </p>
          </div>
        </div>

        {/* Pinkie Pie - ENFP */}
        <div className="mb-10">
          <div className="bg-gradient-to-r from-[#FF8FCC]/10 to-[#FFD1EC]/10 rounded-3xl p-8 border-l-4 border-[#FF8FCC]">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF8FCC] to-[#FFD1EC] flex items-center justify-center text-4xl shadow-lg">
                🎉
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                  Pinkie Pie - ENFP (The Campaigner)
                </h3>
                <p className="text-[#FF8FCC] font-bold text-lg">Element of Laughter</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <Link href="/characters/pinkie-pie" className="text-[#FF8FCC] hover:underline font-semibold">Pinkie Pie</Link> is the quintessential ENFP: spontaneous, enthusiastic, and endlessly creative. Her <strong>Extraverted</strong> energy is boundless, and her <strong>Intuitive</strong> nature allows her to make unexpected connections (hello, Pinkie Sense!). She lives for bringing joy to others.
            </p>

            <div className="bg-white/50 dark:bg-zinc-800/50 rounded-2xl p-6 mb-4">
              <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">ENFP Traits in Pinkie Pie:</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF8FCC] font-bold">✓</span>
                  <span><strong>Enthusiastic & Energetic:</strong> Boundless positivity and excitement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF8FCC] font-bold">✓</span>
                  <span><strong>Creative & Spontaneous:</strong> Comes up with imaginative party ideas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF8FCC] font-bold">✓</span>
                  <span><strong>People-Focused:</strong> Thrives on social connections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF8FCC] font-bold">✓</span>
                  <span><strong>Intuitive:</strong> Has mysterious "Pinkie Sense" for predicting events</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
              "Energetic, social butterflies often get Pinkie Pie in our <Link href="/which-pony-are-you" className="text-[#FF8FCC] hover:underline">quick my little pony quiz</Link>!"
            </p>
          </div>
        </div>

        {/* Rarity - ESFJ */}
        <div className="mb-10">
          <div className="bg-gradient-to-r from-[#B8A2E0]/10 to-[#E5DCF5]/10 rounded-3xl p-8 border-l-4 border-[#B8A2E0]">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#B8A2E0] to-[#E5DCF5] flex items-center justify-center text-4xl shadow-lg">
                💎
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                  Rarity - ESFJ (The Consul)
                </h3>
                <p className="text-[#B8A2E0] font-bold text-lg">Element of Generosity</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <Link href="/characters/rarity" className="text-[#B8A2E0] hover:underline font-semibold">Rarity</Link> showcases classic ESFJ traits: socially graceful, generous, and detail-oriented. Her <strong>Extraverted</strong> nature thrives in social settings and fashion shows, while her <strong>Feeling</strong> preference drives her genuine generosity and desire to make others feel special.
            </p>

            <div className="bg-white/50 dark:bg-zinc-800/50 rounded-2xl p-6 mb-4">
              <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">ESFJ Traits in Rarity:</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#B8A2E0] font-bold">✓</span>
                  <span><strong>Generous & Giving:</strong> Creates beautiful outfits for friends</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8A2E0] font-bold">✓</span>
                  <span><strong>Socially Adept:</strong> Understands social graces and etiquette</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8A2E0] font-bold">✓</span>
                  <span><strong>Detail-Oriented:</strong> Perfectionist about her fashion creations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8A2E0] font-bold">✓</span>
                  <span><strong>Harmony-Seeking:</strong> Wants everyone to look and feel their best</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
              "Creative, generous, and fashion-forward? You might match with Rarity's ESFJ personality!"
            </p>
          </div>
        </div>

        {/* Applejack - ESTJ */}
        <div className="mb-10">
          <div className="bg-gradient-to-r from-[#F49B38]/10 to-[#FFD699]/10 rounded-3xl p-8 border-l-4 border-[#F49B38]">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F49B38] to-[#FFD699] flex items-center justify-center text-4xl shadow-lg">
                🍎
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                  Applejack - ESTJ (The Executive)
                </h3>
                <p className="text-[#F49B38] font-bold text-lg">Element of Honesty</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <Link href="/characters/applejack" className="text-[#F49B38] hover:underline font-semibold">Applejack</Link> exemplifies the ESTJ personality: practical, hardworking, and straightforward. Her <strong>Extraverted</strong> nature shows in her comfort with family gatherings and community events, while her <strong>Thinking</strong> preference means she values honesty and direct communication above all.
            </p>

            <div className="bg-white/50 dark:bg-zinc-800/50 rounded-2xl p-6 mb-4">
              <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">ESTJ Traits in Applejack:</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#F49B38] font-bold">✓</span>
                  <span><strong>Hardworking & Practical:</strong> Dedicated to running Sweet Apple Acres</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F49B38] font-bold">✓</span>
                  <span><strong>Honest & Direct:</strong> Says what she means, values truth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F49B38] font-bold">✓</span>
                  <span><strong>Family-Oriented:</strong> Strong sense of duty to family</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F49B38] font-bold">✓</span>
                  <span><strong>Reliable & Dependable:</strong> Always keeps her promises</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
              "Down-to-earth, honest, and hardworking? You share Applejack's ESTJ traits!"
            </p>
          </div>
        </div>
      </section>

      <InlineTestCTA variant="character" />

      {/* MBTI Type Summary Table */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          My Little Pony MBTI Types at a Glance
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-[#9D5AC2] to-[#FF8FCC]">
                <th className="text-left p-4 text-white font-bold">Character</th>
                <th className="text-left p-4 text-white font-bold">MBTI Type</th>
                <th className="text-left p-4 text-white font-bold">Nickname</th>
                <th className="text-left p-4 text-white font-bold">Key Traits</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-zinc-700">
              <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/10">
                <td className="p-4 font-semibold text-gray-900 dark:text-white">Twilight Sparkle</td>
                <td className="p-4 font-mono font-bold text-[#9D5AC2]">ISTJ</td>
                <td className="p-4 text-gray-700 dark:text-gray-300">The Inspector</td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-400">Organized, Responsible, Studious</td>
              </tr>
              <tr className="hover:bg-blue-50 dark:hover:bg-blue-900/10">
                <td className="p-4 font-semibold text-gray-900 dark:text-white">Rainbow Dash</td>
                <td className="p-4 font-mono font-bold text-[#3B88C3]">ESTP</td>
                <td className="p-4 text-gray-700 dark:text-gray-300">The Dynamo</td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-400">Action-Oriented, Bold, Competitive</td>
              </tr>
              <tr className="hover:bg-yellow-50 dark:hover:bg-yellow-900/10">
                <td className="p-4 font-semibold text-gray-900 dark:text-white">Fluttershy</td>
                <td className="p-4 font-mono font-bold text-[#F9E38D]">ISFJ</td>
                <td className="p-4 text-gray-700 dark:text-gray-300">The Protector</td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-400">Nurturing, Empathetic, Gentle</td>
              </tr>
              <tr className="hover:bg-pink-50 dark:hover:bg-pink-900/10">
                <td className="p-4 font-semibold text-gray-900 dark:text-white">Pinkie Pie</td>
                <td className="p-4 font-mono font-bold text-[#FF8FCC]">ENFP</td>
                <td className="p-4 text-gray-700 dark:text-gray-300">The Campaigner</td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-400">Enthusiastic, Creative, Social</td>
              </tr>
              <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/10">
                <td className="p-4 font-semibold text-gray-900 dark:text-white">Rarity</td>
                <td className="p-4 font-mono font-bold text-[#B8A2E0]">ESFJ</td>
                <td className="p-4 text-gray-700 dark:text-gray-300">The Consul</td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-400">Generous, Graceful, Artistic</td>
              </tr>
              <tr className="hover:bg-orange-50 dark:hover:bg-orange-900/10">
                <td className="p-4 font-semibold text-gray-900 dark:text-white">Applejack</td>
                <td className="p-4 font-mono font-bold text-[#F49B38]">ESTJ</td>
                <td className="p-4 text-gray-700 dark:text-gray-300">The Executive</td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-400">Honest, Practical, Dependable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How to Find Your MBTI Match */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          How to Find Your My Little Pony MBTI Match
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Understanding your own MBTI type can help you predict which <strong>My Little Pony</strong> character you'll match with in our <Link href="/personality-test" className="text-[#9D5AC2] hover:underline font-semibold">personality test</Link>. Here's how to discover your type:
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border-l-4 border-[#9D5AC2]">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Step 1: Take Our Personality Test</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Our <Link href="/personality-test" className="text-[#9D5AC2] hover:underline font-semibold">my little pony personality test</Link> uses MBTI principles to match you with your perfect character. Answer 12 questions honestly based on your natural preferences, not how you wish to be.
            </p>
            <Link
              href="/personality-test"
              className="inline-flex items-center gap-2 bg-[#9D5AC2] text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all"
            >
              <span>Take Personality Test</span>
              <span>→</span>
            </Link>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border-l-4 border-[#3B88C3]">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Step 2: Understand Your Result</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Once you get your result, read the detailed character analysis to understand why you matched with that pony. Our test explains which MBTI dimensions aligned with your character match and what that says about your personality.
            </p>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-2xl p-6 border-l-4 border-[#FF8FCC]">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Step 3: Explore Your Character</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Visit your matched character's page to learn more about their personality, strengths, and how they interact with other ponies. Understanding your character helps you understand yourself!
            </p>
            <Link
              href="/characters"
              className="inline-flex items-center gap-2 text-[#FF8FCC] font-bold hover:gap-3 transition-all"
            >
              <span>Explore All Characters</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          My Little Pony MBTI FAQ
        </h2>

        <div className="space-y-4">
          <details className="group bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-zinc-800">
            <summary className="cursor-pointer font-bold text-lg flex items-center justify-between text-gray-900 dark:text-white list-none">
              <span>What is the most accurate MBTI type for Twilight Sparkle?</span>
              <span className="text-[#9D5AC2] text-2xl group-open:rotate-180 transition-transform">↓</span>
            </summary>
            <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              Twilight Sparkle is best typed as an <strong>ISTJ (The Inspector)</strong>. Her love of organization, responsibility, and structured learning aligns perfectly with ISTJ traits. Some argue for INTJ, but her reliance on proven knowledge over abstract theories points more strongly to Sensing (S) rather than Intuition (N).
            </div>
          </details>

          <details className="group bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-zinc-800">
            <summary className="cursor-pointer font-bold text-lg flex items-center justify-between text-gray-900 dark:text-white list-none">
              <span>Can I have a different MBTI type than my matched My Little Pony character?</span>
              <span className="text-[#9D5AC2] text-2xl group-open:rotate-180 transition-transform">↓</span>
            </summary>
            <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              Yes! Our <Link href="/personality-test" className="text-[#9D5AC2] hover:underline">my little pony personality test</Link> considers multiple personality dimensions beyond just MBTI. You might match with a character because of shared values, behavioral patterns, or specific traits, even if your exact MBTI type differs. The test provides a holistic personality match rather than only MBTI typing.
            </div>
          </details>

          <details className="group bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-zinc-800">
            <summary className="cursor-pointer font-bold text-lg flex items-center justify-between text-gray-900 dark:text-white list-none">
              <span>Which My Little Pony characters are introverted vs extroverted?</span>
              <span className="text-[#9D5AC2] text-2xl group-open:rotate-180 transition-transform">↓</span>
            </summary>
            <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Introverted characters (I):</strong> Twilight Sparkle (ISTJ) and Fluttershy (ISFJ) prefer quieter environments and recharge through solitude.
              <br/><br/>
              <strong>Extraverted characters (E):</strong> Rainbow Dash (ESTP), Pinkie Pie (ENFP), Rarity (ESFJ), and Applejack (ESTJ) gain energy from social interactions and external activities.
            </div>
          </details>

          <details className="group bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-zinc-800">
            <summary className="cursor-pointer font-bold text-lg flex items-center justify-between text-gray-900 dark:text-white list-none">
              <span>How does knowing MLP MBTI types help me?</span>
              <span className="text-[#9D5AC2] text-2xl group-open:rotate-180 transition-transform">↓</span>
            </summary>
            <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              Understanding the MBTI types of <strong>My Little Pony</strong> characters helps you better understand your own personality and why you relate to certain characters. It can also improve your self-awareness, help you identify your strengths, and even guide personal development by seeing how your matched character handles challenges.
            </div>
          </details>

          <details className="group bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-zinc-800">
            <summary className="cursor-pointer font-bold text-lg flex items-center justify-between text-gray-900 dark:text-white list-none">
              <span>What if I'm a mix of multiple MLP characters?</span>
              <span className="text-[#9D5AC2] text-2xl group-open:rotate-180 transition-transform">↓</span>
            </summary>
            <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              That's completely normal! Most people have traits from multiple characters. Our <Link href="/character-test" className="text-[#3B88C3] hover:underline">my little pony character test</Link> matches you with your closest overall match, but you'll likely see aspects of yourself in several ponies. This is why the detailed results show percentage matches across all characters.
            </div>
          </details>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Discover Your My Little Pony MBTI Match Today
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Understanding the MBTI personality types of <strong>My Little Pony</strong> characters provides fascinating insights into both the ponies and yourself. Whether you're an organized ISTJ like Twilight Sparkle, an action-oriented ESTP like Rainbow Dash, or a creative ENFP like Pinkie Pie, there's a character whose personality type aligns with yours.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Ready to discover which <strong>My Little Pony</strong> character shares your MBTI type? Take our comprehensive <Link href="/personality-test" className="text-[#9D5AC2] hover:underline font-semibold">my little pony personality test</Link> to find your perfect match based on scientifically-validated personality assessment principles!
        </p>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 text-center border border-purple-100 dark:border-purple-800">
          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
            🎯 Find Your MBTI Match Now!
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Take our free personality test and discover which MLP character shares your unique MBTI type
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/personality-test"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9D5AC2] to-[#FF8FCC] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <span>Take MBTI Personality Test</span>
              <span>→</span>
            </Link>
            <Link
              href="/character-test"
              className="inline-flex items-center gap-2 border-2 border-[#9D5AC2] text-[#9D5AC2] dark:text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#9D5AC2] hover:text-white transition-all"
            >
              <span>Try Character Test</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </GuideLayout>
  );
}
