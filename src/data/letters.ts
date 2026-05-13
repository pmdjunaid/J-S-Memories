// ════════════════════════════════════════════════════════════
//  J & S MEMORIES — Love Letters
// ════════════════════════════════════════════════════════════

export interface LoveLetter {
  id: string
  date: string
  opening: string
  body: string
  signature: string
  mood: string
  from: 'junaid' | 'annu'
  rotation: number
}

export const loveLetters: LoveLetter[] = [
  {
    id: 'letter-1',
    date: 'May 10, 2024',
    opening: 'My dearest 〽️annu,',
    body: `There are some moments in life that shift everything — quietly, without announcement. This is one of those days.

I've been thinking about how strange and beautiful it is that we've known each other for 15 years, and yet, only now am I beginning to see what was always there. In every "mendak" you've called me, in every late night conversation, in every time you said "I know you, Junaid."

You know me better than most. You see through my jokes, you know when I'm pretending to be okay, and you always, always understand my silence.

I don't have a fancy way to say this. So I'll say it simply: I'm grateful you exist. I'm grateful that one "Hi" on Friendship Day became all of this.

Whatever this is — whatever we are — I cherish it more than words can hold.

Always yours in friendship and something more,`,
    signature: 'Junaid 💫',
    mood: '💕',
    from: 'junaid',
    rotation: -2,
  },
  {
    id: 'letter-2',
    date: 'June 2024',
    opening: 'To my Junaid,',
    body: `You always say "little bit love" like that makes it smaller. But Junaid, little things are the biggest things.

It's the little bit of worry you feel when I don't reply. The little bit of smile I imagine on your face when I send a reel. The little bit of happiness when we find time to talk between your studies and mine.

You told me once: "You only understand my situation." And I want you to know — I always will. Not because I have to. Because you matter.

You are the person who tells me to eat well, who reminds me about namaz time, who turns "mendak" into the most affectionate nickname in the world. 

Don't carry everything alone, okay? Your 〽️ is here.

With all the little-big love I have,`,
    signature: '〽️annu 🥰',
    mood: '🥰',
    from: 'annu',
    rotation: 1.5,
  },
  {
    id: 'letter-3',
    date: 'January 2025',
    opening: 'To the one who said "First nd Last",',
    body: `Three words. "First nd last."

You didn't write a poem. You didn't make a grand gesture. You just said it — "First nd last aameen" — like a prayer, like a truth, like you'd already decided and were just announcing it to the universe.

And I sat there, holding my phone, reading it five times.

Do you know what that does to a person? When someone chooses them so simply, so completely, so without drama or condition?

I will spend the rest of my life being worthy of that sentence.

"First nd last" — I accept. With every heartbeat, I accept.

Yours, completely and always,`,
    signature: 'Junaid, your mendak 💍',
    mood: '💖',
    from: 'junaid',
    rotation: -1,
  },
]
