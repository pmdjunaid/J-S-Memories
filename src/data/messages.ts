// ════════════════════════════════════════════════════════════
//  REAL WhatsApp messages from Junaid & 〽️annu's chat
//  Curated from the actual exported chat history
// ════════════════════════════════════════════════════════════

export interface Message {
  id: string
  sender: 'me' | 'her'
  text: string
  time: string
  date: string
  reactions?: string[]
  type: 'text' | 'image' | 'voice' | 'emoji' | 'media'
  pinned?: boolean
}

export const pinnedMessages: Message[] = [
  {
    id: 'pin-1',
    sender: 'her',
    text: 'First nd last aameen 🤗',
    time: '11:27 PM',
    date: '15 Jan 2025',
    reactions: ['💕'],
    type: 'text',
    pinned: true,
  },
  {
    id: 'pin-2',
    sender: 'me',
    text: 'Muje tere se personal bath krna... mai tere wait karya so ❤️',
    time: '1:32 PM',
    date: '26 Feb 2026',
    reactions: ['🥺'],
    type: 'text',
    pinned: true,
  },
  {
    id: 'pin-3',
    sender: 'her',
    text: 'Happy anniversary mere jaan❤️❤️',
    time: '1:07 AM',
    date: '10 Nov 2024',
    type: 'text',
    pinned: true,
  },
  {
    id: 'pin-4',
    sender: 'her',
    text: 'I know you also trust me like my parents',
    time: '2:26 PM',
    date: '10 Aug 2024',
    type: 'text',
    pinned: true,
  },
  {
    id: 'pin-5',
    sender: 'me',
    text: 'Muje aak promise kar',
    time: '11:04 PM',
    date: '15 Jan 2025',
    type: 'text',
    pinned: true,
  },
  {
    id: 'pin-6',
    sender: 'her',
    text: 'I love you rayyy❤️❤️',
    time: '11:19 PM',
    date: '12 Jan 2025',
    type: 'text',
    pinned: true,
  },
]

// Curated conversation snapshots — "Chapter" approach
export const conversations: { title: string; date: string; messages: Message[] }[] = [
  {
    title: '💌 The First Hello',
    date: '5 Aug 2023',
    messages: [
      { id: 'c1-1', sender: 'me', text: 'Hi', time: '5:58 PM', date: '8/5/23', type: 'text' },
      { id: 'c1-2', sender: 'her', text: 'Hello', time: '5:59 PM', date: '8/5/23', type: 'text' },
      { id: 'c1-3', sender: 'me', text: 'Bhabhi kon nai malum', time: '5:59 PM', date: '8/5/23', type: 'text' },
      { id: 'c1-4', sender: 'her', text: 'Abba', time: '5:59 PM', date: '8/5/23', type: 'text' },
      { id: 'c1-5', sender: 'her', text: 'Happy friendship day Junaid in advance... 🥰', time: '6:10 PM', date: '8/5/23', type: 'text' },
      { id: 'c1-6', sender: 'me', text: 'Thank you', time: '6:10 PM', date: '8/5/23', type: 'text' },
      { id: 'c1-7', sender: 'her', text: 'Wlcm🥰', time: '6:10 PM', date: '8/5/23', type: 'text' },
      { id: 'c1-8', sender: 'me', text: 'Memories hai ☺️\nHona kya', time: '6:15 PM', date: '8/5/23', type: 'text' },
      { id: 'c1-9', sender: 'her', text: 'Yahhh 😇😇', time: '6:16 PM', date: '8/5/23', type: 'text' },
    ],
  },
  {
    title: '🌙 Friendship Nights',
    date: '29 Sep 2023',
    messages: [
      { id: 'c2-1', sender: 'her', text: 'Oyee', time: '11:27 PM', date: '9/29/23', type: 'text' },
      { id: 'c2-2', sender: 'me', text: '🫣', time: '11:27 PM', date: '9/29/23', type: 'text' },
      { id: 'c2-3', sender: 'me', text: '100 years\nTuje', time: '11:28 PM', date: '9/29/23', type: 'text' },
      { id: 'c2-4', sender: 'her', text: '😜😜\nHow was the day?', time: '11:28 PM', date: '9/29/23', type: 'text' },
      { id: 'c2-5', sender: 'me', text: 'Oye l like you characters😊\nYour*', time: '11:36 PM', date: '9/29/23', type: 'text' },
      { id: 'c2-6', sender: 'her', text: '🤭😁', time: '11:36 PM', date: '9/29/23', type: 'text' },
      { id: 'c2-7', sender: 'me', text: 'You have a one goal\nAnd\nYou don\'t want to waste your time\nYou want to reach your destination', time: '11:45 PM', date: '9/29/23', type: 'text' },
      { id: 'c2-8', sender: 'her', text: 'Haa\nInsha allah 🥰', time: '11:46 PM', date: '9/29/23', type: 'text' },
      { id: 'c2-9', sender: 'me', text: 'Thank you so much shaziya🤝\nBeing a part of my frd', time: '11:48 PM', date: '9/29/23', type: 'text' },
      { id: 'c2-10', sender: 'me', text: 'You only understand my situation😩', time: '11:49 PM', date: '9/29/23', type: 'text' },
      { id: 'c2-11', sender: 'her', text: 'U too..mendak..😁', time: '11:49 PM', date: '9/29/23', type: 'text' },
    ],
  },
  {
    title: '🤝 A Bond of Trust',
    date: '10 Aug 2024',
    messages: [
      { id: 'ct-1', sender: 'me', text: 'Your parents trust you more then me 〽️\nI don\'t want hurt them', time: '2:23 PM', date: '8/10/24', type: 'text' },
      { id: 'ct-2', sender: 'her', text: 'Haa o to hai\n🫂🫂', time: '2:24 PM', date: '8/10/24', type: 'text' },
      { id: 'ct-3', sender: 'me', text: 'Inshallah one day we will plan then we will keep status public to ever contact 😊\nOk mere 〽️', time: '2:25 PM', date: '8/10/24', type: 'text' },
      { id: 'ct-4', sender: 'her', text: 'I know you also trust me like my parents', time: '2:26 PM', date: '8/10/24', type: 'text', reactions: ['🥰'] },
    ],
  },
  {
    title: '✨ The Happy Anniversary',
    date: '10 Nov 2024',
    messages: [
      { id: 'ca-1', sender: 'her', text: 'Happy anniversary mere jaan mere jaan🤗😍', time: '1:07 AM', date: '11/10/24', type: 'text' },
      { id: 'ca-2', sender: 'me', text: 'Ayyo mere jaan \nSry i forgot...', time: '3:13 AM', date: '11/10/24', type: 'text' },
      { id: 'ca-3', sender: 'her', text: 'Super se b upparrrr 😍😍😍\nI know', time: '6:04 AM', date: '11/10/24', type: 'text' },
      { id: 'ca-4', sender: 'her', text: 'Miss u Junaid...😒', time: '6:09 AM', date: '11/10/24', type: 'text' },
    ],
  },
  {
    title: '💫 Little Bit Love',
    date: '14 Jun 2024',
    messages: [
      { id: 'c3-1', sender: 'her', text: 'Assalamu alaikum', time: '5:38 PM', date: '6/14/24', type: 'text' },
      { id: 'c3-2', sender: 'me', text: 'Walaykum assalam\nBol 〽️', time: '5:39 PM', date: '6/14/24', type: 'text' },
      { id: 'c3-3', sender: 'her', text: 'Kya b nai le', time: '5:39 PM', date: '6/14/24', type: 'text' },
      { id: 'c3-4', sender: 'me', text: 'That\'s why I\'ll never share my sad thing to my 〽️\nGot it 🙃', time: '5:47 PM', date: '6/14/24', type: 'text' },
      { id: 'c3-5', sender: 'her', text: 'Eeeeee chup tu\nShare karya ni to dekh phir tujhe', time: '5:48 PM', date: '6/14/24', type: 'text' },
      { id: 'c3-6', sender: 'me', text: 'Not love but little bit love', time: '6:01 PM', date: '6/14/24', type: 'text' },
      { id: 'c3-7', sender: 'her', text: 'To relax 😁\nAccha', time: '6:02 PM', date: '6/14/24', type: 'text' },
      { id: 'c3-8', sender: 'me', text: 'Mere mama ka hath kabhi bhi nai chod tha until I die', time: '5:45 PM', date: '6/14/24', type: 'text', reactions: ['🥰'] },
      { id: 'c3-9', sender: 'her', text: '🤗🥰😇', time: '5:45 PM', date: '6/14/24', type: 'text' },
    ],
  },
  {
    title: '❤️ First nd Last',
    date: '15 Jan 2025',
    messages: [
      { id: 'c4-1', sender: 'me', text: 'Muje tere se personal bath krna 〽️annu\nI know everything', time: '11:26 PM', date: '1/15/25', type: 'text' },
      { id: 'c4-2', sender: 'her', text: 'First nd last aameen', time: '11:27 PM', date: '1/15/25', type: 'text', reactions: ['💕', '🥺'] },
      { id: 'c4-3', sender: 'me', text: 'Ok soja 〽️annu', time: '11:28 PM', date: '1/15/25', type: 'text' },
      { id: 'c4-4', sender: 'her', text: 'Mujhe koi hamara accha sa vdo share kar\nMood accha karletun', time: '11:29 PM', date: '1/15/25', type: 'text' },
      { id: 'c4-5', sender: 'me', text: 'Happy 〽️annu', time: '11:34 PM', date: '1/15/25', type: 'text' },
      { id: 'c4-6', sender: 'her', text: 'Haan', time: '11:34 PM', date: '1/15/25', type: 'text' },
      { id: 'c4-7', sender: 'me', text: 'Sleep well\nBye..', time: '11:34 PM', date: '1/15/25', type: 'text' },
      { id: 'c4-8', sender: 'her', text: 'Byeee🫂', time: '11:34 PM', date: '1/15/25', type: 'text' },
    ],
  },
  {
    title: '💔 The Final Goodbye',
    date: '26 Feb 2026',
    messages: [
      { id: 'c5-1', sender: 'me', text: 'Assalam walikum shaziya.. \nSorry for disturbing \nI know didi ku promise karre bath nai krtu bolko. \nAtleast Just listen one thing..', time: '12:55 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-2', sender: 'her', text: 'Walikum assalam\nBol', time: '12:57 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-3', sender: 'me', text: 'Call kr\nOne time', time: '12:57 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-4', sender: 'her', text: 'I\'m in scl', time: '12:57 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-5', sender: 'me', text: 'Ok lunch time me\nNamaz ku break nai kya', time: '12:57 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-6', sender: 'her', text: 'Ab ich lunch time', time: '12:57 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-7', sender: 'me', text: 'Phir call kar\nJust listen\nMai bol tu \nTu kuch nko bol ok', time: '12:58 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-8', sender: 'her', text: 'Ok', time: '12:58 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-9', sender: 'her', text: 'Mujhe bhool ja please\nMy kya b nai karsakte', time: '1:27 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-10', sender: 'me', text: 'Shaziya\nWait. M', time: '1:27 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-11', sender: 'her', text: 'Noo\nPlease forget me', time: '1:28 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-12', sender: 'me', text: 'Muje tere se personal bath krna\nWait\nMasjid me hoo', time: '1:29 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-13', sender: 'her', text: 'Kuch nai\nMy bolrun na ab kya b nai hosakta\nAlready sab hogaya bat jo b hona tha o ghar mein\nNakho kar call', time: '1:29 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-14', sender: 'her', text: 'I\'m telling mujhe maaf kar\nPlease ba rehem kar', time: '1:30 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-15', sender: 'me', text: 'Mere bath ki kuch value nai ab', time: '1:30 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-16', sender: 'her', text: 'Mujhe nai hora\nUnderstand me\nI\'m sorry', time: '1:30 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-17', sender: 'her', text: 'Bas Allah se dua hai k allah tujhe mujhe bhoolne mein madad kare', time: '1:31 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-18', sender: 'me', text: 'Shaziya\nBas kar ab please', time: '1:31 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-19', sender: 'her', text: 'Please\nNooo', time: '1:31 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-20', sender: 'her', text: 'I can\'t\nI\'m sorry', time: '1:32 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-21', sender: 'me', text: 'Aaa aak msg se', time: '1:32 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-22', sender: 'her', text: 'Please', time: '1:32 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-23', sender: 'me', text: 'Mai tere wait karya so', time: '1:32 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-24', sender: 'her', text: 'Nakho kar ab\nDon\'t text me', time: '1:32 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-25', sender: 'me', text: 'Negative nko soch bole oo yaad hai na', time: '1:33 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-26', sender: 'her', text: 'I\'m sorry', time: '1:33 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-27', sender: 'me', text: 'Shaziya sorry nko bol please', time: '1:34 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-28', sender: 'her', text: 'Bhool ja\nThat\'s it', time: '1:34 PM', date: '2/26/26', type: 'text' },
      { id: 'c5-29', sender: 'her', text: 'Gd byeee', time: '1:34 PM', date: '2/26/26', type: 'text' },
    ],
  },
]

// Full flat messages list (all conversations combined)
export const allMessages: Message[] = conversations.flatMap(c => c.messages)
