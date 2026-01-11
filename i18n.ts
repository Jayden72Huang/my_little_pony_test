export const locales = ['en', 'tr', 'pl', 'es-MX', 'pt-BR'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  'en': 'English',
  'tr': 'Türkçe',
  'pl': 'Polski',
  'es-MX': 'Español (México)',
  'pt-BR': 'Português (Brasil)'
};

export const defaultLocale: Locale = 'en';

// SEO元数据本地化
export const localeMetadata: Record<Locale, {
  title: string;
  description: string;
  keywords: string[];
}> = {
  'en': {
    title: 'My Little Pony Test - Which Pony Are You? | Free Character Quiz',
    description: 'Take the My Little Pony test to discover which character you are! Are you Twilight Sparkle, Rainbow Dash, Fluttershy, Rarity, Pinkie Pie, or Applejack? Free personality quiz with shareable results.',
    keywords: [
      'my little pony test',
      'my little pony filter test',
      'my little pony character test',
      'which pony are you',
      'mlp personality quiz',
      'my little pony quiz',
      'mlp character quiz',
      'my little pony personality test'
    ]
  },
  'tr': {
    title: 'My Little Pony Testi - Hangi Pony Sensin? | Ücretsiz Karakter Testi',
    description: 'Hangi karakter olduğunuzu keşfetmek için My Little Pony testini yapın! Twilight Sparkle, Rainbow Dash, Fluttershy, Rarity, Pinkie Pie veya Applejack misiniz? Paylaşılabilir sonuçlarla ücretsiz kişilik testi.',
    keywords: [
      'my little pony testi',
      'my little pony filtre testi',
      'my little pony karakter testi',
      'hangi pony sensin',
      'mlp kişilik testi',
      'my little pony bilgi yarışması',
      'mlp karakter testi',
      'my little pony kişilik testi'
    ]
  },
  'pl': {
    title: 'Test My Little Pony - Którym kucykiem jesteś? | Darmowy Quiz Postaci',
    description: 'Rozwiąż test My Little Pony, aby dowiedzieć się, którą postacią jesteś! Czy jesteś Twilight Sparkle, Rainbow Dash, Fluttershy, Rarity, Pinkie Pie czy Applejack? Darmowy test osobowości z wynikami do udostępnienia.',
    keywords: [
      'test my little pony',
      'test filtra my little pony',
      'test postaci my little pony',
      'którym kucykiem jesteś',
      'test osobowości mlp',
      'quiz my little pony',
      'quiz o postaciach mlp',
      'test osobowości my little pony'
    ]
  },
  'es-MX': {
    title: 'Test de My Little Pony - ¿Qué Pony eres? | Quiz de Personajes Gratis',
    description: '¡Toma el test de My Little Pony para descubrir qué personaje eres! ¿Eres Twilight Sparkle, Rainbow Dash, Fluttershy, Rarity, Pinkie Pie o Applejack? Test de personalidad gratuito con resultados para compartir.',
    keywords: [
      'test de my little pony',
      'test del filtro de my little pony',
      'test de personajes de my little pony',
      'qué pony eres',
      'test de personalidad mlp',
      'quiz de my little pony',
      'quiz de personajes mlp',
      'test de personalidad de my little pony'
    ]
  },
  'pt-BR': {
    title: 'Teste de My Little Pony - Qual Pônei é Você? | Quiz de Personagens Grátis',
    description: 'Faça o teste de My Little Pony para descobrir qual personagem você é! Você é Twilight Sparkle, Rainbow Dash, Fluttershy, Rarity, Pinkie Pie ou Applejack? Teste de personalidade gratuito com resultados compartilháveis.',
    keywords: [
      'teste de my little pony',
      'teste do filtro de my little pony',
      'teste de personagens de my little pony',
      'qual pônei é você',
      'teste de personalidade mlp',
      'quiz de my little pony',
      'quiz de personagens mlp',
      'teste de personalidade de my little pony'
    ]
  }
};
