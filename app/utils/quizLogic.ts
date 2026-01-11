// Quiz logic for My Little Pony personality test
import { characters, CharacterProfile } from './characterData';

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  category: 'personality' | 'values' | 'social' | 'hobbies';
}

export interface QuizOption {
  text: string;
  scores: {
    twilightSparkle: number;
    rainbowDash: number;
    fluttershy: number;
    rarity: number;
    pinkiePie: number;
    applejack: number;
  };
}

export interface QuizResponse {
  questionId: number;
  selectedOption: number;
}

export interface QuizResult {
  character: CharacterProfile;
  score: number;
  percentage: number;
  allResults: {
    character: CharacterProfile;
    score: number;
    percentage: number;
  }[];
  secondPlace: {
    character: CharacterProfile;
    score: number;
    percentage: number;
  };
  traits: {
    intelligence: number;
    athleticism: number;
    creativity: number;
    sociability: number;
    kindness: number;
    determination: number;
  };
}

// 12 Quiz Questions
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How do you prefer to spend your free time?",
    category: 'hobbies',
    options: [
      {
        text: "Reading books or learning something new",
        scores: { twilightSparkle: 10, rainbowDash: 0, fluttershy: 2, rarity: 1, pinkiePie: 0, applejack: 3 }
      },
      {
        text: "Playing sports or outdoor activities",
        scores: { twilightSparkle: 0, rainbowDash: 10, fluttershy: 1, rarity: 0, pinkiePie: 3, applejack: 5 }
      },
      {
        text: "Taking care of animals or nature",
        scores: { twilightSparkle: 1, rainbowDash: 0, fluttershy: 10, rarity: 0, pinkiePie: 2, applejack: 4 }
      },
      {
        text: "Creating art or fashion designs",
        scores: { twilightSparkle: 2, rainbowDash: 0, fluttershy: 1, rarity: 10, pinkiePie: 4, applejack: 0 }
      },
      {
        text: "Throwing parties or socializing",
        scores: { twilightSparkle: 0, rainbowDash: 3, fluttershy: 0, rarity: 2, pinkiePie: 10, applejack: 1 }
      },
      {
        text: "Working on practical projects",
        scores: { twilightSparkle: 1, rainbowDash: 2, fluttershy: 2, rarity: 0, pinkiePie: 0, applejack: 10 }
      }
    ]
  },
  {
    id: 2,
    question: "When facing a problem, you tend to:",
    category: 'personality',
    options: [
      {
        text: "Research and analyze all possible solutions",
        scores: { twilightSparkle: 10, rainbowDash: 1, fluttershy: 2, rarity: 3, pinkiePie: 0, applejack: 4 }
      },
      {
        text: "Take immediate action without overthinking",
        scores: { twilightSparkle: 0, rainbowDash: 10, fluttershy: 0, rarity: 1, pinkiePie: 5, applejack: 6 }
      },
      {
        text: "Consider everyone's feelings first",
        scores: { twilightSparkle: 2, rainbowDash: 0, fluttershy: 10, rarity: 3, pinkiePie: 4, applejack: 2 }
      },
      {
        text: "Find the most elegant or stylish solution",
        scores: { twilightSparkle: 1, rainbowDash: 0, fluttershy: 1, rarity: 10, pinkiePie: 3, applejack: 0 }
      },
      {
        text: "Turn it into something fun",
        scores: { twilightSparkle: 0, rainbowDash: 2, fluttershy: 1, rarity: 1, pinkiePie: 10, applejack: 1 }
      },
      {
        text: "Use common sense and hard work",
        scores: { twilightSparkle: 2, rainbowDash: 3, fluttershy: 2, rarity: 0, pinkiePie: 1, applejack: 10 }
      }
    ]
  },
  {
    id: 3,
    question: "What's your ideal weekend activity?",
    category: 'hobbies',
    options: [
      {
        text: "Visiting a library or museum",
        scores: { twilightSparkle: 10, rainbowDash: 0, fluttershy: 3, rarity: 4, pinkiePie: 0, applejack: 1 }
      },
      {
        text: "Competing in a sports tournament",
        scores: { twilightSparkle: 0, rainbowDash: 10, fluttershy: 0, rarity: 0, pinkiePie: 3, applejack: 6 }
      },
      {
        text: "Hiking in nature or visiting a sanctuary",
        scores: { twilightSparkle: 1, rainbowDash: 2, fluttershy: 10, rarity: 0, pinkiePie: 1, applejack: 5 }
      },
      {
        text: "Shopping or attending a fashion show",
        scores: { twilightSparkle: 0, rainbowDash: 0, fluttershy: 1, rarity: 10, pinkiePie: 5, applejack: 0 }
      },
      {
        text: "Hosting a party for friends",
        scores: { twilightSparkle: 0, rainbowDash: 2, fluttershy: 1, rarity: 3, pinkiePie: 10, applejack: 2 }
      },
      {
        text: "Helping family with chores",
        scores: { twilightSparkle: 2, rainbowDash: 3, fluttershy: 4, rarity: 0, pinkiePie: 0, applejack: 10 }
      }
    ]
  },
  {
    id: 4,
    question: "Your friends would describe you as:",
    category: 'social',
    options: [
      {
        text: "Smart and organized",
        scores: { twilightSparkle: 10, rainbowDash: 1, fluttershy: 2, rarity: 3, pinkiePie: 0, applejack: 4 }
      },
      {
        text: "Bold and adventurous",
        scores: { twilightSparkle: 0, rainbowDash: 10, fluttershy: 0, rarity: 2, pinkiePie: 5, applejack: 3 }
      },
      {
        text: "Kind and caring",
        scores: { twilightSparkle: 2, rainbowDash: 1, fluttershy: 10, rarity: 2, pinkiePie: 4, applejack: 6 }
      },
      {
        text: "Creative and stylish",
        scores: { twilightSparkle: 1, rainbowDash: 0, fluttershy: 0, rarity: 10, pinkiePie: 6, applejack: 0 }
      },
      {
        text: "Fun and energetic",
        scores: { twilightSparkle: 0, rainbowDash: 5, fluttershy: 1, rarity: 3, pinkiePie: 10, applejack: 1 }
      },
      {
        text: "Honest and hardworking",
        scores: { twilightSparkle: 3, rainbowDash: 4, fluttershy: 3, rarity: 0, pinkiePie: 0, applejack: 10 }
      }
    ]
  },
  {
    id: 5,
    question: "What matters most to you in a friendship?",
    category: 'values',
    options: [
      {
        text: "Intellectual conversations",
        scores: { twilightSparkle: 10, rainbowDash: 1, fluttershy: 2, rarity: 4, pinkiePie: 0, applejack: 2 }
      },
      {
        text: "Loyalty through thick and thin",
        scores: { twilightSparkle: 3, rainbowDash: 10, fluttershy: 2, rarity: 1, pinkiePie: 3, applejack: 8 }
      },
      {
        text: "Understanding and empathy",
        scores: { twilightSparkle: 2, rainbowDash: 0, fluttershy: 10, rarity: 3, pinkiePie: 5, applejack: 4 }
      },
      {
        text: "Shared appreciation for beauty",
        scores: { twilightSparkle: 1, rainbowDash: 0, fluttershy: 2, rarity: 10, pinkiePie: 4, applejack: 0 }
      },
      {
        text: "Having fun and laughing together",
        scores: { twilightSparkle: 0, rainbowDash: 3, fluttershy: 2, rarity: 2, pinkiePie: 10, applejack: 1 }
      },
      {
        text: "Honesty and trust",
        scores: { twilightSparkle: 4, rainbowDash: 6, fluttershy: 4, rarity: 1, pinkiePie: 2, applejack: 10 }
      }
    ]
  },
  {
    id: 6,
    question: "Pick a flower:",
    category: 'personality',
    options: [
      {
        text: "Purple lilac",
        scores: { twilightSparkle: 10, rainbowDash: 0, fluttershy: 2, rarity: 5, pinkiePie: 1, applejack: 0 }
      },
      {
        text: "Blue rose",
        scores: { twilightSparkle: 1, rainbowDash: 10, fluttershy: 1, rarity: 3, pinkiePie: 2, applejack: 0 }
      },
      {
        text: "Yellow daffodil",
        scores: { twilightSparkle: 0, rainbowDash: 0, fluttershy: 10, rarity: 1, pinkiePie: 3, applejack: 2 }
      },
      {
        text: "White orchid",
        scores: { twilightSparkle: 2, rainbowDash: 0, fluttershy: 2, rarity: 10, pinkiePie: 1, applejack: 0 }
      },
      {
        text: "Pink tulip",
        scores: { twilightSparkle: 0, rainbowDash: 1, fluttershy: 3, rarity: 4, pinkiePie: 10, applejack: 0 }
      },
      {
        text: "Orange sunflower",
        scores: { twilightSparkle: 0, rainbowDash: 2, fluttershy: 4, rarity: 0, pinkiePie: 2, applejack: 10 }
      }
    ]
  },
  {
    id: 7,
    question: "What's your dream job?",
    category: 'hobbies',
    options: [
      {
        text: "Teacher or researcher",
        scores: { twilightSparkle: 10, rainbowDash: 0, fluttershy: 2, rarity: 1, pinkiePie: 0, applejack: 2 }
      },
      {
        text: "Professional athlete or pilot",
        scores: { twilightSparkle: 0, rainbowDash: 10, fluttershy: 0, rarity: 0, pinkiePie: 3, applejack: 5 }
      },
      {
        text: "Veterinarian or wildlife expert",
        scores: { twilightSparkle: 2, rainbowDash: 0, fluttershy: 10, rarity: 0, pinkiePie: 1, applejack: 4 }
      },
      {
        text: "Fashion designer or artist",
        scores: { twilightSparkle: 1, rainbowDash: 0, fluttershy: 0, rarity: 10, pinkiePie: 4, applejack: 0 }
      },
      {
        text: "Event planner or entertainer",
        scores: { twilightSparkle: 0, rainbowDash: 2, fluttershy: 1, rarity: 3, pinkiePie: 10, applejack: 1 }
      },
      {
        text: "Farmer or construction worker",
        scores: { twilightSparkle: 1, rainbowDash: 3, fluttershy: 3, rarity: 0, pinkiePie: 0, applejack: 10 }
      }
    ]
  },
  {
    id: 8,
    question: "How do you handle stress?",
    category: 'personality',
    options: [
      {
        text: "Make a detailed plan and follow it",
        scores: { twilightSparkle: 10, rainbowDash: 2, fluttershy: 1, rarity: 3, pinkiePie: 0, applejack: 5 }
      },
      {
        text: "Push through with determination",
        scores: { twilightSparkle: 2, rainbowDash: 10, fluttershy: 0, rarity: 1, pinkiePie: 2, applejack: 8 }
      },
      {
        text: "Take time alone to recharge",
        scores: { twilightSparkle: 3, rainbowDash: 0, fluttershy: 10, rarity: 2, pinkiePie: 0, applejack: 3 }
      },
      {
        text: "Treat myself to something nice",
        scores: { twilightSparkle: 0, rainbowDash: 1, fluttershy: 2, rarity: 10, pinkiePie: 4, applejack: 0 }
      },
      {
        text: "Laugh it off and stay positive",
        scores: { twilightSparkle: 0, rainbowDash: 3, fluttershy: 2, rarity: 2, pinkiePie: 10, applejack: 2 }
      },
      {
        text: "Work harder to solve the problem",
        scores: { twilightSparkle: 4, rainbowDash: 5, fluttershy: 1, rarity: 0, pinkiePie: 0, applejack: 10 }
      }
    ]
  },
  {
    id: 9,
    question: "What's your biggest strength?",
    category: 'values',
    options: [
      {
        text: "Intelligence and problem-solving",
        scores: { twilightSparkle: 10, rainbowDash: 1, fluttershy: 2, rarity: 3, pinkiePie: 0, applejack: 3 }
      },
      {
        text: "Physical fitness and courage",
        scores: { twilightSparkle: 0, rainbowDash: 10, fluttershy: 0, rarity: 0, pinkiePie: 4, applejack: 7 }
      },
      {
        text: "Empathy and compassion",
        scores: { twilightSparkle: 2, rainbowDash: 1, fluttershy: 10, rarity: 2, pinkiePie: 6, applejack: 5 }
      },
      {
        text: "Creativity and artistic talent",
        scores: { twilightSparkle: 2, rainbowDash: 0, fluttershy: 1, rarity: 10, pinkiePie: 7, applejack: 0 }
      },
      {
        text: "Making others happy",
        scores: { twilightSparkle: 1, rainbowDash: 3, fluttershy: 6, rarity: 4, pinkiePie: 10, applejack: 2 }
      },
      {
        text: "Hard work and reliability",
        scores: { twilightSparkle: 3, rainbowDash: 6, fluttershy: 4, rarity: 1, pinkiePie: 1, applejack: 10 }
      }
    ]
  },
  {
    id: 10,
    question: "Choose a weather:",
    category: 'personality',
    options: [
      {
        text: "Clear starry night",
        scores: { twilightSparkle: 10, rainbowDash: 2, fluttershy: 3, rarity: 4, pinkiePie: 0, applejack: 1 }
      },
      {
        text: "Windy with fast-moving clouds",
        scores: { twilightSparkle: 0, rainbowDash: 10, fluttershy: 1, rarity: 1, pinkiePie: 4, applejack: 3 }
      },
      {
        text: "Gentle spring rain",
        scores: { twilightSparkle: 2, rainbowDash: 0, fluttershy: 10, rarity: 3, pinkiePie: 2, applejack: 4 }
      },
      {
        text: "Elegant snow falling",
        scores: { twilightSparkle: 3, rainbowDash: 1, fluttershy: 3, rarity: 10, pinkiePie: 2, applejack: 0 }
      },
      {
        text: "Bright sunny day",
        scores: { twilightSparkle: 1, rainbowDash: 4, fluttershy: 4, rarity: 2, pinkiePie: 10, applejack: 5 }
      },
      {
        text: "Warm harvest season weather",
        scores: { twilightSparkle: 1, rainbowDash: 2, fluttershy: 5, rarity: 0, pinkiePie: 1, applejack: 10 }
      }
    ]
  },
  {
    id: 11,
    question: "What's your biggest weakness?",
    category: 'personality',
    options: [
      {
        text: "Overthinking everything",
        scores: { twilightSparkle: 10, rainbowDash: 0, fluttershy: 3, rarity: 4, pinkiePie: 0, applejack: 1 }
      },
      {
        text: "Being too competitive",
        scores: { twilightSparkle: 0, rainbowDash: 10, fluttershy: 0, rarity: 1, pinkiePie: 3, applejack: 6 }
      },
      {
        text: "Being too shy or timid",
        scores: { twilightSparkle: 2, rainbowDash: 0, fluttershy: 10, rarity: 1, pinkiePie: 0, applejack: 2 }
      },
      {
        text: "Being overly dramatic",
        scores: { twilightSparkle: 1, rainbowDash: 1, fluttershy: 0, rarity: 10, pinkiePie: 5, applejack: 0 }
      },
      {
        text: "Not taking things seriously",
        scores: { twilightSparkle: 0, rainbowDash: 2, fluttershy: 1, rarity: 2, pinkiePie: 10, applejack: 1 }
      },
      {
        text: "Being too stubborn",
        scores: { twilightSparkle: 2, rainbowDash: 6, fluttershy: 0, rarity: 1, pinkiePie: 1, applejack: 10 }
      }
    ]
  },
  {
    id: 12,
    question: "What would be your magical power?",
    category: 'hobbies',
    options: [
      {
        text: "Telekinesis and advanced magic",
        scores: { twilightSparkle: 10, rainbowDash: 1, fluttershy: 1, rarity: 3, pinkiePie: 0, applejack: 0 }
      },
      {
        text: "Super speed and flight",
        scores: { twilightSparkle: 0, rainbowDash: 10, fluttershy: 0, rarity: 0, pinkiePie: 5, applejack: 2 }
      },
      {
        text: "Communicating with animals",
        scores: { twilightSparkle: 1, rainbowDash: 0, fluttershy: 10, rarity: 0, pinkiePie: 2, applejack: 5 }
      },
      {
        text: "Creating beautiful things",
        scores: { twilightSparkle: 2, rainbowDash: 0, fluttershy: 1, rarity: 10, pinkiePie: 4, applejack: 0 }
      },
      {
        text: "Making others laugh instantly",
        scores: { twilightSparkle: 0, rainbowDash: 2, fluttershy: 2, rarity: 3, pinkiePie: 10, applejack: 1 }
      },
      {
        text: "Super strength and endurance",
        scores: { twilightSparkle: 1, rainbowDash: 7, fluttershy: 2, rarity: 0, pinkiePie: 2, applejack: 10 }
      }
    ]
  }
];

// Character name mapping (camelCase to character object)
const characterMapping: { [key: string]: CharacterProfile } = {
  twilightSparkle: characters[0],
  rainbowDash: characters[1],
  fluttershy: characters[2],
  rarity: characters[3],
  pinkiePie: characters[4],
  applejack: characters[5]
};

// Calculate quiz result from user responses
export function calculateResult(responses: QuizResponse[]): QuizResult {
  // Initialize scores
  const scores = {
    twilightSparkle: 0,
    rainbowDash: 0,
    fluttershy: 0,
    rarity: 0,
    pinkiePie: 0,
    applejack: 0
  };

  // Calculate total scores from responses
  responses.forEach(response => {
    const question = quizQuestions.find(q => q.id === response.questionId);
    if (question && question.options[response.selectedOption]) {
      const option = question.options[response.selectedOption];
      Object.keys(scores).forEach(char => {
        scores[char as keyof typeof scores] += option.scores[char as keyof typeof option.scores];
      });
    }
  });

  // Convert to array and sort by score
  const sortedScores = Object.entries(scores)
    .map(([key, value]) => ({
      character: characterMapping[key],
      score: value
    }))
    .sort((a, b) => b.score - a.score);

  const topCharacter = sortedScores[0];
  const secondPlace = sortedScores[1];
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  return {
    character: topCharacter.character,
    score: topCharacter.score,
    percentage: totalScore > 0 ? (topCharacter.score / totalScore) * 100 : 0,
    allResults: sortedScores.map(s => ({
      character: s.character,
      score: s.score,
      percentage: totalScore > 0 ? (s.score / totalScore) * 100 : 0
    })),
    secondPlace: {
      character: secondPlace.character,
      score: secondPlace.score,
      percentage: totalScore > 0 ? (secondPlace.score / totalScore) * 100 : 0
    },
    traits: topCharacter.character.traits
  };
}

// Get a question by ID
export function getQuestionById(id: number): QuizQuestion | undefined {
  return quizQuestions.find(q => q.id === id);
}

// Validate quiz responses (check if all questions answered)
export function validateResponses(responses: QuizResponse[]): boolean {
  if (responses.length !== quizQuestions.length) {
    return false;
  }

  // Check if all question IDs from 1-12 are present
  const answeredQuestions = new Set(responses.map(r => r.questionId));
  for (let i = 1; i <= quizQuestions.length; i++) {
    if (!answeredQuestions.has(i)) {
      return false;
    }
  }

  return true;
}
