// ════════════════════════════════════════════════════════════
//  J & S MEMORIES — Memory Data
// ════════════════════════════════════════════════════════════

export interface Memory {
  id: string
  type: 'first-meet' | 'message' | 'photo' | 'letter' | 'milestone'
  date: string
  title: string
  content: string
  media?: string[]
  location?: string
  mood?: string
  tags?: string[]
  month?: string
}

export const memories: Memory[] = [
  {
    id: 'mem-1',
    type: 'first-meet',
    date: '2023-08-05',
    title: 'The First Hello',
    content: 'A simple "Hi" on WhatsApp — the beginning of everything. Friends from childhood, 15 years apart, reconnecting with one message that changed everything.',
    location: 'Chittoor',
    mood: '🥰',
    tags: ['first', 'friendship', 'hello'],
    month: 'August 2023',
  },
  {
    id: 'mem-1.5',
    type: 'photo',
    date: '2023-08-05',
    title: 'The First Gift',
    content: 'A token of love that marked the beginning of our new chapter. Not just an object, but a promise.',
    media: ['/imgs/gift.jpg'],
    location: 'Chittoor',
    mood: '🎁',
    tags: ['gift', 'first', 'love'],
    month: 'August 2023',
  },
  {
    id: 'mem-2',
    type: 'milestone',
    date: '2023-08-05',
    title: 'Friendship Day Wishes',
    content: '"Happy friendship day Junaid in advance..." — she said it first. Always the sweeter one.',
    mood: '😊',
    tags: ['friendship', 'celebration'],
    month: 'August 2023',
  },
  {
    id: 'mem-3',
    type: 'milestone',
    date: '2023-09-29',
    title: 'You Only Understand',
    content: '"You only understand my situation 😩" — Junaid said. And she replied: "U too..mendak..😁" — only she could understand and still make him laugh.',
    mood: '🫂',
    tags: ['deep', 'friendship', 'understanding'],
    month: 'September 2023',
  },
  {
    id: 'mem-4',
    type: 'milestone',
    date: '2024-05-10',
    title: 'Something More',
    content: 'The day it became something more than friendship. Every conversation felt different, every message carried a different weight.',
    location: 'In our hearts',
    mood: '💕',
    tags: ['love', 'beginning', 'special'],
    month: 'May 2024',
  },
  {
    id: 'mem-5',
    type: 'milestone',
    date: '2024-06-14',
    title: '"Little Bit Love"',
    content: '"Not love but little bit love 🙃" — Junaid finally admitted. She laughed: "To relax 😁"',
    mood: '😍',
    tags: ['love', 'confession', 'cute'],
    month: 'June 2024',
  },
  {
    id: 'mem-5.1',
    type: 'milestone',
    date: '2024-08-10',
    title: 'A Bond of Trust',
    content: '"I know you also trust me like my parents" — she said. A deep moment of mutual understanding that strengthened their bond forever.',
    mood: '🤝',
    tags: ['trust', 'deep', 'understanding'],
    month: 'August 2024',
  },
  {
    id: 'mem-5.2',
    type: 'milestone',
    date: '2024-11-10',
    title: 'The Happy Anniversary',
    content: '"Happy anniversary mere jaan mere jaan🤗😍" — even when he forgets, she remembers for both. A day of celebration and love.',
    mood: '✨',
    tags: ['anniversary', 'love', 'celebration'],
    month: 'November 2024',
  },
  {
    id: 'mem-6',
    type: 'milestone',
    date: '2025-01-15',
    title: '"First nd Last"',
    content: 'When she said "First nd last aameen 🤗" — the most beautiful three words she ever typed. A promise wrapped in a prayer.',
    mood: '💖',
    tags: ['promise', 'love', 'forever'],
    month: 'January 2025',
  },
]

export interface TimelineMilestone {
  id: string
  date: string
  title: string
  description: string
  icon: string
  type: 'meet' | 'message' | 'birthday' | 'trip' | 'special' | 'love'
  side: 'left' | 'right'
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 't-1',
    date: 'August 5, 2023',
    title: 'The First Message',
    description: 'A childhood friendship of 15 years rekindled with one "Hi" on WhatsApp. Neither of them knew this was the start of something eternal.',
    icon: 'MessageCircle',
    type: 'message',
    side: 'right',
  },
  {
    id: 't-2',
    date: 'August 2023',
    title: 'Friendship Day',
    description: '"Happy friendship day Junaid in advance..." — she wished him first. Always first in everything.',
    icon: 'Users',
    type: 'meet',
    side: 'left',
  },
  {
    id: 't-3',
    date: 'September 29, 2023',
    title: '"You Only Understand Me"',
    description: 'Late nights, honest conversations. He realized she was the only one who truly understood him without judgment.',
    icon: 'Moon',
    type: 'special',
    side: 'right',
  },
  {
    id: 't-4',
    date: 'October 2023',
    title: 'Didi ki Shaadi',
    description: 'Her sister\'s wedding — she invited him. "Pakka aana" — a promise that meant more than just showing up.',
    icon: 'Gem',
    type: 'special',
    side: 'left',
  },
  {
    id: 't-5',
    date: 'May 10, 2024',
    title: 'Something Changed',
    description: 'The day the air between their messages felt different. Not just friends anymore — something deeper, something permanent.',
    icon: 'Sparkles',
    type: 'love',
    side: 'right',
  },
  {
    id: 't-6',
    date: 'June 14, 2024',
    title: '"Little Bit Love"',
    description: '"Not love but little bit love" — Junaid\'s admission that made her laugh. But they both knew. They always knew.',
    icon: 'Heart',
    type: 'love',
    side: 'left',
  },
  {
    id: 't-6.1',
    date: 'August 10, 2024',
    title: 'A Bond of Trust',
    description: '"I know you also trust me like my parents" — a moment of pure honesty and deep connection.',
    icon: 'ShieldCheck',
    type: 'special',
    side: 'right',
  },
  {
    id: 't-6.2',
    date: 'November 10, 2024',
    title: 'Happy Anniversary',
    description: 'Celebrating their love. "Happy anniversary mere jaan" — a milestone in their beautiful journey.',
    icon: 'Cake',
    type: 'love',
    side: 'left',
  },
  {
    id: 't-7',
    date: 'January 15, 2025',
    title: '"First nd Last"',
    description: '"First nd last aameen" — she said it. The most beautiful dua wrapped in the most beautiful promise. His forever.',
    icon: 'Smile',
    type: 'special',
    side: 'right',
  },
  {
    id: 't-8',
    date: 'January 16, 2025',
    title: 'The Goodbye',
    description: '"Mujhe ab si msg karnakho..." — a painful pause. But love that is meant to be always finds its way back.',
    icon: 'Bird',
    type: 'special',
    side: 'left',
  },
  {
    id: 't-9',
    date: 'February 26, 2026',
    title: '"I Waited for You"',
    description: '"Mai tere wait karya so" — Junaid\'s heart speaking its truth. Some waits are worth every second.',
    icon: 'Timer',
    type: 'love',
    side: 'right',
  },
]
