'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

type CutieMarkResult = {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  traits: string[];
  character: string;
  characterSlug: string;
};

const cutieMarkResults: CutieMarkResult[] = [
  {
    id: 'star',
    name: 'Sparkling Star',
    description: 'Your cutie mark represents intelligence, magic, and the pursuit of knowledge. Like Twilight Sparkle\'s starburst, you shine brightest when learning and discovering new things. Your analytical mind and love for understanding how things work makes you a natural problem-solver.',
    icon: '⭐',
    color: '#9D5AC2',
    traits: ['Intelligent', 'Curious', 'Studious', 'Organized'],
    character: 'Twilight Sparkle',
    characterSlug: 'twilight-sparkle'
  },
  {
    id: 'cloud',
    name: 'Lightning Bolt & Cloud',
    description: 'Your cutie mark symbolizes speed, athleticism, and unwavering loyalty. Like Rainbow Dash, you\'re always pushing boundaries, striving to be the best, and standing by your friends no matter what. Your competitive spirit and determination inspire others.',
    icon: '⚡',
    color: '#3B88C3',
    traits: ['Fast', 'Brave', 'Competitive', 'Loyal'],
    character: 'Rainbow Dash',
    characterSlug: 'rainbow-dash'
  },
  {
    id: 'butterfly',
    name: 'Gentle Butterflies',
    description: 'Your cutie mark represents kindness, empathy, and a deep connection with nature. Like Fluttershy, you have a special gift for understanding and caring for others. Your gentle approach and patience make the world a better place for those around you.',
    icon: '🦋',
    color: '#F9E38D',
    traits: ['Kind', 'Gentle', 'Empathetic', 'Patient'],
    character: 'Fluttershy',
    characterSlug: 'fluttershy'
  },
  {
    id: 'diamond',
    name: 'Radiant Diamonds',
    description: 'Your cutie mark embodies creativity, beauty, and generosity. Like Rarity, you have an eye for elegance and love to make the world more beautiful. Your artistic vision and generous spirit help others see the beauty in themselves.',
    icon: '💎',
    color: '#B8A2E0',
    traits: ['Creative', 'Artistic', 'Generous', 'Elegant'],
    character: 'Rarity',
    characterSlug: 'rarity'
  },
  {
    id: 'balloon',
    name: 'Colorful Balloons',
    description: 'Your cutie mark signifies joy, laughter, and bringing happiness to others. Like Pinkie Pie, you light up every room with your energy and positivity. Your spontaneous nature and ability to make others smile is your greatest gift.',
    icon: '🎈',
    color: '#FF8FCC',
    traits: ['Energetic', 'Optimistic', 'Fun', 'Spontaneous'],
    character: 'Pinkie Pie',
    characterSlug: 'pinkie-pie'
  },
  {
    id: 'apple',
    name: 'Sweet Apples',
    description: 'Your cutie mark represents honesty, hard work, and strong family values. Like Applejack, you\'re dependable, genuine, and always tell the truth. Your integrity and work ethic make you someone others can always count on.',
    icon: '🍎',
    color: '#F49B38',
    traits: ['Honest', 'Hardworking', 'Dependable', 'Loyal'],
    character: 'Applejack',
    characterSlug: 'applejack'
  }
];

const quizQuestions = [
  {
    question: "What's your favorite way to spend a Saturday?",
    options: [
      "Reading or learning something new",
      "Playing sports or being active",
      "Spending time with animals or in nature",
      "Creating art or designing something beautiful",
      "Throwing a party or socializing",
      "Helping family or working on projects"
    ]
  },
  {
    question: "When you accomplish something, you feel most proud when:",
    options: [
      "You've learned something valuable",
      "You've achieved a personal best",
      "You've helped someone in need",
      "You've created something beautiful",
      "You've made people laugh or smile",
      "You've completed hard, honest work"
    ]
  },
  {
    question: "What's your biggest strength?",
    options: [
      "Intelligence and problem-solving",
      "Physical ability and courage",
      "Empathy and understanding",
      "Creativity and artistic talent",
      "Positivity and enthusiasm",
      "Reliability and honesty"
    ]
  },
  {
    question: "Pick a superpower:",
    options: [
      "Telekinesis and unlimited knowledge",
      "Super speed and flight",
      "Ability to talk to animals",
      "Power to create beautiful things instantly",
      "Making anyone laugh at will",
      "Super strength and endurance"
    ]
  },
  {
    question: "Your friends would say you're:",
    options: [
      "The smart one who has all the answers",
      "The adventurous one who's always up for a challenge",
      "The caring one who listens and understands",
      "The stylish one with great taste",
      "The fun one who lightens the mood",
      "The dependable one they can count on"
    ]
  },
  {
    question: "What matters most to you?",
    options: [
      "Knowledge and understanding",
      "Achievement and loyalty",
      "Kindness and compassion",
      "Beauty and generosity",
      "Joy and laughter",
      "Honesty and hard work"
    ]
  },
  {
    question: "Choose a color:",
    options: [
      "Purple - mysterious and magical",
      "Blue - bold and dynamic",
      "Yellow - gentle and warm",
      "White - elegant and pure",
      "Pink - bright and cheerful",
      "Orange - earthy and reliable"
    ]
  },
  {
    question: "Your ideal job would be:",
    options: [
      "Professor or researcher",
      "Professional athlete or pilot",
      "Veterinarian or counselor",
      "Fashion designer or artist",
      "Event planner or comedian",
      "Builder or farmer"
    ]
  },
  {
    question: "How do you handle challenges?",
    options: [
      "Research and plan carefully",
      "Face them head-on with confidence",
      "Consider everyone's feelings first",
      "Find creative solutions",
      "Stay positive and optimistic",
      "Work hard until it's done"
    ]
  },
  {
    question: "What would your perfect day look like?",
    options: [
      "Discovering something new and fascinating",
      "Winning a competition or achieving a goal",
      "Helping others and connecting with nature",
      "Creating something beautiful",
      "Celebrating with friends and having fun",
      "Accomplishing meaningful work with loved ones"
    ]
  }
];

export default function CutieMarkQuizComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<number[]>([]);
  const [result, setResult] = useState<CutieMarkResult | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const locale = useLocale();

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newResponses = [...responses, selectedOption];
    setResponses(newResponses);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      // Calculate result
      setIsCalculating(true);
      setTimeout(() => {
        const resultIndex = calculateCutieMarkResult(newResponses);
        setResult(cutieMarkResults[resultIndex]);
        setIsCalculating(false);
      }, 1500);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setResponses(responses.slice(0, -1));
      setSelectedOption(responses[currentQuestion - 1]);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setResponses([]);
    setResult(null);
    setSelectedOption(null);
    setIsCalculating(false);
  };

  const calculateCutieMarkResult = (answers: number[]): number => {
    // Count occurrences of each answer (0-5 maps to character index)
    const counts = new Array(6).fill(0);
    answers.forEach(answer => {
      counts[answer]++;
    });

    // Find the most common answer
    let maxCount = 0;
    let resultIndex = 0;
    counts.forEach((count, index) => {
      if (count > maxCount) {
        maxCount = count;
        resultIndex = index;
      }
    });

    return resultIndex;
  };

  if (isCalculating) {
    return (
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-zinc-800 p-12 text-center">
          <div className="text-6xl mb-6 animate-bounce">✨</div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Discovering Your Cutie Mark...
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Analyzing your unique talents and personality
          </p>
          <div className="mt-6 w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-[#9D5AC2] to-[#FF8FCC] h-2 rounded-full animate-pulse" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden">
          <div
            className="text-white p-12 text-center"
            style={{ background: `linear-gradient(135deg, ${result.color}, ${result.color}dd)` }}
          >
            <div className="text-8xl mb-6">{result.icon}</div>
            <h2 className="text-4xl font-black mb-4">Your Cutie Mark:</h2>
            <h3 className="text-5xl font-black mb-6">{result.name}</h3>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-bold">Most Like: {result.character}</span>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What Your Cutie Mark Means</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {result.description}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Your Special Traits</h4>
              <div className="flex flex-wrap gap-3">
                {result.traits.map((trait, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full text-white font-semibold"
                    style={{ backgroundColor: result.color }}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRetake}
                className="px-8 py-4 rounded-full font-bold text-lg border-2 hover:scale-105 transition-all"
                style={{ borderColor: result.color, color: result.color }}
              >
                Retake Quiz
              </button>
              <Link
                href={`/${locale}/characters/${result.characterSlug}`}
                className="px-8 py-4 rounded-full font-bold text-lg text-white hover:scale-105 transition-all text-center"
                style={{ backgroundColor: result.color }}
              >
                Meet {result.character} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden">
        {/* Progress Bar */}
        <div className="bg-gray-200 dark:bg-zinc-800 h-3">
          <div
            className="bg-gradient-to-r from-[#F9E38D] via-[#FF8FCC] to-[#9D5AC2] h-3 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-8 md:p-12">
          {/* Question Counter */}
          <div className="text-center mb-8">
            <span className="inline-block bg-gradient-to-r from-[#9D5AC2] to-[#FF8FCC] text-white px-6 py-2 rounded-full font-bold text-sm">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              {Math.round(progress)}% Complete
            </p>
          </div>

          {/* Question */}
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            {question.question}
          </h3>

          {/* Options */}
          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full p-5 rounded-2xl text-left font-semibold transition-all duration-300 border-2 ${
                  selectedOption === index
                    ? 'border-[#9D5AC2] bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 scale-105'
                    : 'border-gray-200 dark:border-zinc-700 hover:border-[#9D5AC2]/50 hover:scale-102'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedOption === index
                        ? 'border-[#9D5AC2] bg-[#9D5AC2]'
                        : 'border-gray-300 dark:border-zinc-600'
                    }`}
                  >
                    {selectedOption === index && (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-900 dark:text-white">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            {currentQuestion > 0 && (
              <button
                onClick={handlePrevious}
                className="flex-1 px-6 py-4 rounded-full font-bold text-lg border-2 border-gray-300 dark:border-zinc-600 text-gray-700 dark:text-gray-300 hover:border-[#9D5AC2] hover:text-[#9D5AC2] transition-all"
              >
                ← Previous
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`flex-1 px-6 py-4 rounded-full font-bold text-lg transition-all ${
                selectedOption === null
                  ? 'bg-gray-300 dark:bg-zinc-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#9D5AC2] to-[#FF8FCC] text-white hover:scale-105 shadow-lg'
              }`}
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Discover My Cutie Mark ✨' : 'Next →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
