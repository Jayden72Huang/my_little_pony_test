// Character profiles for My Little Pony test
export interface CharacterProfile {
  id: string;
  name: string;
  slug: string;
  title: string;
  color: string;
  secondaryColor: string;
  emoji: string;
  description: string;
  personality: string[];
  strengths: string[];
  idealFor: string[];
  quote: string;
  popularity: number;
  imageUrl: string;
  traits: {
    intelligence: number;
    athleticism: number;
    creativity: number;
    sociability: number;
    kindness: number;
    determination: number;
  };
  mbti?: string;
  tags?: string[];
  superpowers?: string[];
  soulSisters?: { name: string; origin: string }[];
  harmonySquad?: string[]; // character slugs
}

export const characters: CharacterProfile[] = [
  {
    id: '1',
    name: 'Twilight Sparkle',
    slug: 'twilight-sparkle',
    title: 'Princess of Friendship',
    color: '#9D5AC2',
    secondaryColor: '#E8B7F5',
    emoji: '✨',
    description: 'You are organized, studious, and love to learn new things. Like Twilight Sparkle, you approach problems with logic and research, always seeking knowledge to better understand the world around you.',
    personality: [
      'Intelligent and analytical',
      'Organized and detail-oriented',
      'Natural leader and teacher',
      'Sometimes overthinks situations',
      'Values friendship deeply'
    ],
    strengths: [
      'Problem-solving through knowledge',
      'Strategic planning and organization',
      'Magical abilities and quick learning',
      'Strong sense of responsibility',
      'Loyal friend and mentor'
    ],
    idealFor: [
      'Students and lifelong learners',
      'People who love books and knowledge',
      'Organized planners and list-makers',
      'Natural leaders and teachers',
      'Those who value wisdom and friendship'
    ],
    quote: 'Friendship is the most powerful magic of all!',
    popularity: 22,
    imageUrl: '/characters/twilight-sparkle.png',
    traits: {
      intelligence: 100,
      athleticism: 45,
      creativity: 70,
      sociability: 65,
      kindness: 85,
      determination: 90
    },
    mbti: 'ISTJ',
    tags: ['Bookworm', 'Leader', 'Magical', 'Organized'],
    superpowers: [
      'Mastery of advanced magic and spells',
      'Exceptional organization and planning',
      'Ability to unite ponies through friendship'
    ],
    soulSisters: [
      { name: 'Hermione Granger', origin: 'Harry Potter' },
      { name: 'Lisa Simpson', origin: 'The Simpsons' },
      { name: 'Velma Dinkley', origin: 'Scooby-Doo' }
    ],
    harmonySquad: ['pinkie-pie', 'fluttershy']
  },
  {
    id: '2',
    name: 'Rainbow Dash',
    slug: 'rainbow-dash',
    title: 'Element of Loyalty',
    color: '#3B88C3',
    secondaryColor: '#9BD5F5',
    emoji: '⚡',
    description: 'You are athletic, confident, and competitive. Like Rainbow Dash, you never back down from a challenge and always strive to be the best at what you do.',
    personality: [
      'Athletic and energetic',
      'Confident and bold',
      'Fiercely loyal to friends',
      'Sometimes overconfident',
      'Loves competition and adventure'
    ],
    strengths: [
      'Physical fitness and incredible speed',
      'Courage under pressure',
      'Unwavering loyalty',
      'Goal-oriented competitive mindset',
      'Natural athleticism'
    ],
    idealFor: [
      'Athletes and fitness enthusiasts',
      'Competitive personalities',
      'Adventure seekers',
      'Loyal and dependable friends',
      'People who love sports and flying'
    ],
    quote: 'I need to be 20% cooler!',
    popularity: 18,
    imageUrl: '/characters/rainbow-dash.png',
    traits: {
      intelligence: 60,
      athleticism: 100,
      creativity: 55,
      sociability: 70,
      kindness: 70,
      determination: 95
    },
    mbti: 'ESTP',
    tags: ['Athletic', 'Confident', 'Loyal', 'Competitive'],
    superpowers: [
      'Supersonic speed and Sonic Rainboom',
      'Fearless courage in any situation',
      'Unmatched agility and reflexes'
    ],
    soulSisters: [
      { name: 'Katniss Everdeen', origin: 'Hunger Games' },
      { name: 'Captain Marvel', origin: 'Marvel' },
      { name: 'Korra', origin: 'The Legend of Korra' }
    ],
    harmonySquad: ['applejack', 'fluttershy']
  },
  {
    id: '3',
    name: 'Fluttershy',
    slug: 'fluttershy',
    title: 'Element of Kindness',
    color: '#F9E38D',
    secondaryColor: '#FFF7CC',
    emoji: '🦋',
    description: 'You are gentle, empathetic, and have a special connection with nature and animals. Like Fluttershy, you show kindness to all creatures and value peace and harmony.',
    personality: [
      'Gentle and compassionate',
      'Shy but brave when needed',
      'Deep connection with animals',
      'Soft-spoken and peaceful',
      'Caring and nurturing nature'
    ],
    strengths: [
      'Empathy and understanding',
      'Animal communication and care',
      'Patience and gentleness',
      'Inner strength and courage',
      'Healing and calming presence'
    ],
    idealFor: [
      'Animal lovers and caretakers',
      'Empathetic and gentle souls',
      'Nature enthusiasts',
      'Introverts with big hearts',
      'Peace-seeking individuals'
    ],
    quote: 'I\'d like to be a tree.',
    popularity: 20,
    imageUrl: '/characters/fluttershy.png',
    traits: {
      intelligence: 70,
      athleticism: 30,
      creativity: 60,
      sociability: 40,
      kindness: 100,
      determination: 60
    },
    mbti: 'ISFJ',
    tags: ['Gentle', 'Kind', 'Animal Lover', 'Shy'],
    superpowers: [
      'Understanding and talking to animals',
      'Calming any conflict with kindness',
      'Incredible inner strength and resilience'
    ],
    soulSisters: [
      { name: 'Cinderella', origin: 'Disney' },
      { name: 'Snow White', origin: 'Disney' },
      { name: 'Newt Scamander', origin: 'Fantastic Beasts' }
    ],
    harmonySquad: ['twilight-sparkle', 'rarity']
  },
  {
    id: '4',
    name: 'Rarity',
    slug: 'rarity',
    title: 'Element of Generosity',
    color: '#B8A2E0',
    secondaryColor: '#E5DCF5',
    emoji: '💎',
    description: 'You are creative, fashionable, and have an eye for beauty and elegance. Like Rarity, you appreciate the finer things in life and express yourself through art and style.',
    personality: [
      'Creative and artistic',
      'Generous and giving',
      'Appreciates beauty and elegance',
      'Sometimes dramatic',
      'Fashion-forward and stylish'
    ],
    strengths: [
      'Artistic creativity and design',
      'Generosity towards others',
      'Attention to detail',
      'Business acumen',
      'Making others feel special'
    ],
    idealFor: [
      'Artists and designers',
      'Fashion enthusiasts',
      'Creative professionals',
      'Generous and giving people',
      'Those who appreciate beauty'
    ],
    quote: 'Whining is not a problem-solving technique!',
    popularity: 15,
    imageUrl: '/characters/rarity.png',
    traits: {
      intelligence: 75,
      athleticism: 40,
      creativity: 100,
      sociability: 80,
      kindness: 75,
      determination: 85
    },
    mbti: 'ESFJ',
    tags: ['Creative', 'Fashionable', 'Generous', 'Elegant'],
    superpowers: [
      'Eye for beauty that elevates everything',
      'Generosity that gives without expecting return',
      'Ability to make everyone feel like royalty'
    ],
    soulSisters: [
      { name: 'Elle Woods', origin: 'Legally Blonde' },
      { name: 'Effie Trinket', origin: 'Hunger Games' },
      { name: 'Charlotte York', origin: 'Sex and the City' }
    ],
    harmonySquad: ['pinkie-pie', 'twilight-sparkle']
  },
  {
    id: '5',
    name: 'Pinkie Pie',
    slug: 'pinkie-pie',
    title: 'Element of Laughter',
    color: '#FF8FCC',
    secondaryColor: '#FFD1EC',
    emoji: '🎉',
    description: 'You are energetic, optimistic, and love to make others smile. Like Pinkie Pie, you bring joy and laughter wherever you go and love throwing parties.',
    personality: [
      'Energetic and bubbly',
      'Optimistic and cheerful',
      'Loves parties and celebrations',
      'Random and spontaneous',
      'Makes everyone laugh'
    ],
    strengths: [
      'Spreading joy and laughter',
      'Party planning and entertainment',
      'Cheering up friends',
      'Boundless energy',
      'Making connections easily'
    ],
    idealFor: [
      'Party planners and entertainers',
      'Optimistic personalities',
      'Social butterflies',
      'People who love to laugh',
      'Spontaneous and fun-loving individuals'
    ],
    quote: 'Okie dokie lokie!',
    popularity: 14,
    imageUrl: '/characters/pinkie-pie.png',
    traits: {
      intelligence: 55,
      athleticism: 75,
      creativity: 85,
      sociability: 100,
      kindness: 90,
      determination: 70
    },
    mbti: 'ENFP',
    tags: ['Energetic', 'Party Planner', 'Joyful', 'Random'],
    superpowers: [
      'Unlimited energy and positive spirit',
      'Ability to cheer up anypony instantly',
      'Incredible social intuition'
    ],
    soulSisters: [
      { name: 'Joy', origin: 'Inside Out' },
      { name: 'Olaf', origin: 'Frozen' },
      { name: 'Mabel Pines', origin: 'Gravity Falls' }
    ],
    harmonySquad: ['twilight-sparkle', 'rainbow-dash']
  },
  {
    id: '6',
    name: 'Applejack',
    slug: 'applejack',
    title: 'Element of Honesty',
    color: '#F49B38',
    secondaryColor: '#FFD699',
    emoji: '🍎',
    description: 'You are hardworking, honest, and dependable. Like Applejack, you value family, hard work, and always tell the truth no matter what.',
    personality: [
      'Hardworking and diligent',
      'Honest and straightforward',
      'Family-oriented',
      'Down-to-earth and practical',
      'Reliable and trustworthy'
    ],
    strengths: [
      'Strong work ethic',
      'Honesty and integrity',
      'Physical strength and endurance',
      'Family loyalty',
      'Common sense and practicality'
    ],
    idealFor: [
      'Hard workers and farmers',
      'Honest and straightforward people',
      'Family-oriented individuals',
      'Practical problem-solvers',
      'Dependable friends'
    ],
    quote: 'We don\'t normally wear clothes!',
    popularity: 11,
    imageUrl: '/characters/applejack.png',
    traits: {
      intelligence: 65,
      athleticism: 80,
      creativity: 50,
      sociability: 70,
      kindness: 85,
      determination: 100
    },
    mbti: 'ESTJ',
    tags: ['Hardworking', 'Honest', 'Family-Oriented', 'Down-to-Earth'],
    superpowers: [
      'Unshakeable honesty and integrity',
      'Incredible physical strength and endurance',
      'Deep wisdom from experience'
    ],
    soulSisters: [
      { name: 'Tiana', origin: 'Princess and the Frog' },
      { name: 'Samwise Gamgee', origin: 'Lord of the Rings' },
      { name: 'Steve Rogers', origin: 'Captain America' }
    ],
    harmonySquad: ['rainbow-dash', 'twilight-sparkle']
  }
];

// Helper function to get character by slug
export function getCharacterBySlug(slug: string): CharacterProfile | undefined {
  return characters.find(char => char.slug === slug);
}

// Helper function to get character by ID
export function getCharacterById(id: string): CharacterProfile | undefined {
  return characters.find(char => char.id === id);
}

// Get all character slugs for dynamic routing
export function getAllCharacterSlugs(): string[] {
  return characters.map(char => char.slug);
}
