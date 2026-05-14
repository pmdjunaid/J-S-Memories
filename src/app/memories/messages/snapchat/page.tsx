'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface SnapMessage {
  id: string
  sender: 'me' | 'her'
  text: string
  time?: string
  reactions?: string[]
}

interface SnapChapter {
  title: string
  date: string
  messages: SnapMessage[]
}

const snapchatChapters: SnapChapter[] = [
  {
    title: '🌙 Halal Path',
    date: '11:05 PM',
    messages: [
      { id: 'sc1-1', sender: 'her', text: 'Phir q bat karra une agar une committed hai tu hona hai tu khud uneich aata rishta leko\nKato bole\nKuch feel nakho hoo\nPlzzzzz' },
      { id: 'sc1-2', sender: 'me', text: 'Feel kyu hona 〽️\nDidi correct bole so na', time: '11:05 PM' },
      { id: 'sc1-3', sender: 'her', text: 'Hann ba but', time: '11:06 PM' },
      { id: 'sc1-4', sender: 'me', text: 'Mai ristha bhej thu ghar me Tu bolna jaan', time: '11:06 PM' },
      { id: 'sc1-5', sender: 'her', text: 'Zarur ba', time: '11:06 PM' },
      { id: 'sc1-6', sender: 'her', text: 'My bolrun\nPraposal tere si aana so my ladki mere Haan ya na poochte uttach', time: '11:07 PM' },
      { id: 'sc1-7', sender: 'me', text: 'Phir kyu bath karra katho aak bolna tha 〽️\nTu', time: '11:08 PM' },
      { id: 'sc1-8', sender: 'her', text: 'Kya bolun mujhe hona my bat karrun bole\nUne bht fikar karre ba\nKal si b\nKette msgs rakhre', time: '11:08 PM' },
      { id: 'sc1-9', sender: 'me', text: 'Une aaj thak whatsApp me message nai kar ya mai karna kho bole jab se call thak nai karya.. Sirf tere izzat muje hona tha so 〽️ annu 🥺\nIsa nai ke muje msg karna call karna aa sab nko muje', time: '11:09 PM' },
      { id: 'sc1-10', sender: 'her', text: 'Hann ba sab boltun utta maukha nai de mujhe une bat ich nai kare\n🥺', time: '11:10 PM' },
      { id: 'sc1-11', sender: 'me', text: 'Jo bhi ho halal hona sirf tere se', time: '11:10 PM' },
      { id: 'sc1-12', sender: 'her', text: 'Une b och bolre so\nNamaz quran ka kya b faida nai jab tak nikah nai hota o haram ich bolre', time: '11:11 PM' },
      { id: 'sc1-13', sender: 'me', text: 'Ok Fine 〽️ annu\nMai tere har bath ku maan leya aa bath ku bhi maan le thu i know aa bhot muskil liken didi ke happiness aur tuje next time aa bath nai aane detha muje nko bath kar jab thak ke mai tuje proposal lekho nai aata kuch emergency hai tho message kar only one msg aur kuch bhi nko salam khairiyat kuch nko same like strenger jaisa msg kar aur aak didi bole na haram bolko i accept didi word\'s Didi ku bol 〽️ annu plz I\'m really sorry didi..\nMere fikar bilkul nko kar 〽️ annu.. Isa bolko muje tere fikar hore 😭', time: '11:12 PM' },
      { id: 'sc1-14', sender: 'her', text: 'Nakho kar mere fikar\nNooo baa\nNoo mujhe tere siwa koun b nakho', time: '11:19 PM', reactions: ['🥺'] },
      { id: 'sc1-15', sender: 'me', text: 'Inshallah 〽️', time: '11:23 PM' },
      { id: 'sc1-16', sender: 'her', text: 'Tu mera nakho sooch I\'m promissing you I\'m committed on u my tujhe nai chodh te....tu b mujhe nakho chod\nUsay bcoz she already suffered alottt\n🥺', time: '11:25 PM' },
    ],
  },
  {
    title: '✨ Dreams & Happiness',
    date: '11:27 PM',
    messages: [
      { id: 'sc1.5-1', sender: 'her', text: 'Junaid mujhe tere saath mere life sooche tho ich mere chehra par happiness rahte soch ek bar tere saath hai tho mere happiness ka limit ich nai mujhe mlm mai tere saath hai tho ghar si b zyada khush rahtun', time: '11:27 PM' },
      { id: 'sc1.5-2', sender: 'me', text: 'Mannu life long tuje happiness se raktu Allah mere life me kitte bhi salary ho usse me barkat ata farmana..', time: '11:27 PM' },
      { id: 'sc1.5-3', sender: 'me', text: 'Ameen summa ameen', time: '11:27 PM' },
      { id: 'sc1.5-4', sender: 'me', text: 'Mai sochliya\nOutside country jana bole tho tere sath sab set krkho nai tho nko muje oo offer nko I don\'t want to lose you', time: '11:27 PM' },
      { id: 'sc1.5-5', sender: 'her', text: 'Tu salry ka nakho sooch mujhe kya b nakho mujhe khawish b nai hai sab ladkiya jaise Maih b tera saath detun maih b job kartun hame banglore shift hojayege', time: '11:28 PM' },
    ],
  },
  {
    title: '⏳ The 1.5 Year Test',
    date: '11:38 PM',
    messages: [
      { id: 'sc2-1', sender: 'me', text: 'Mai kab ristha puchna krko' },
      { id: 'sc2-2', sender: 'her', text: 'After 1.5 year\nJab tak aisach rahna my tujhe bat kare ni jaisa allahhh...', time: '11:38 PM' },
      { id: 'sc2-3', sender: 'me', text: '547.5 days', time: '11:38 PM' },
      { id: 'sc2-4', sender: 'her', text: 'Kya ba yeh test hamare upper\nHoo', time: '11:38 PM' },
      { id: 'sc2-5', sender: 'her', text: 'To sayy s and fight fr u in front of my family', time: '11:38 PM' },
      { id: 'sc2-6', sender: 'me', text: 'Correct time ay tho muje ask msg kr plz', time: '11:38 PM' },
      { id: 'sc2-7', sender: 'her', text: 'Ok Insha Allah', time: '11:39 PM' },
      { id: 'sc2-8', sender: 'her', text: 'Tu tension nakho kar ba\nPromise kar', time: '11:39 PM' },
      { id: 'sc2-9', sender: 'me', text: 'Promise krna kya', time: '11:40 PM' },
      { id: 'sc2-10', sender: 'her', text: 'Hann ba\nMy bolrun na befikar hoo\nMy tujhe ich shaadi karle ne ka\n💝', time: '11:40 PM' },
    ],
  },
  {
    title: '🔥 Promise & Streak',
    date: '11:45 PM',
    messages: [
      { id: 'sc3-1', sender: 'me', text: 'Emotional blackmail karre tho tuje kya tension lenakho 〽️' },
      { id: 'sc3-2', sender: 'her', text: 'Promise me fr not taking a little bit tension or changing ur mood' },
      { id: 'sc3-3', sender: 'me', text: 'Future me hame sath rhans so' },
      { id: 'sc3-4', sender: 'her', text: 'Haan' },
      { id: 'sc3-5', sender: 'me', text: 'Ok promise 〽️ annu', time: '11:45 PM' },
      { id: 'sc3-6', sender: 'her', text: 'Saccha wala\nPakka wala\nFamily si nrml rahna\nJaisa ab hai vaisa', time: '11:45 PM' },
      { id: 'sc3-7', sender: 'me', text: 'Ok', time: '11:45 PM' },
      { id: 'sc3-8', sender: 'me', text: 'Jiju ku malum hua kya', time: '11:48 PM' },
      { id: 'sc3-9', sender: 'her', text: 'Nai mlm\nAnything else', time: '11:48 PM' },
      { id: 'sc3-10', sender: 'me', text: 'I think Good bye aur good night bolne ka time aaya', time: '11:48 PM' },
      { id: 'sc3-11', sender: 'her', text: 'Noo good byee only byeeee\nMy kya mar jarun kya good byee bolne', time: '11:48 PM', reactions: ['😝'] },
    ],
  },
  {
    title: '💖 Last Message',
    date: '11:27 PM',
    messages: [
      { id: 'sc4-1', sender: 'me', text: 'Health ka khayal rak le 〽️', time: '11:25 PM' },
      { id: 'sc4-2', sender: 'her', text: 'Ok tu b', time: '11:25 PM' },
      { id: 'sc4-3', sender: 'me', text: 'Haa 🤩', time: '11:25 PM' },
      { id: 'sc4-4', sender: 'her', text: "junaid Didi's Message i sent to her:\n\nMujhe mlm maa tujhe mere fikar kato...\nIsleye my tujhe mere middle mein nai lana chahte...tere upar koun b ungli nhi uthana o b mere vaste bilkul nai....\nMy tere si kuch b nai chupaye q bole tho i love u i respect you i care u alottt shayad tujhe my utte acchi nai but mujhe tu bht pasand tere bat ko my inkar nhi kare karte b nai....🥺\nRahe bat mere Junaid se bat karne ki tu mujhe bat karna kho bole my use just ek msg rakhi didi bole tere si bat nai karna kate risk nakho bolko une sirf ek bat bolya my tera wait karrun but msg nai karta tujhe my risk mein nai dalta bolko...usk bare mein my tujhe explain nai karte fouzia tu bura soochle usk bare mein use kaisa mujhe mlm utta nai so maih mujhe pasand nai so way mein nai jate my....plz tu mujhe kya tho b bol usay yeh unki family ko kuch nakho bol tujhe mlm kaisa feel hota bolko bht mushkilon k bad alhamdulillah ab settle hore uno dusren k jaisa namhe une hardworking isleye just 2 months mein uski life change hue job aane k bad sirf mere vaste une Dubai Jana cancel karleya uski job ko sacrifice karya....\nTu galt nai bolre my tu correct ich my chodna hai tho kab ka chod dalte thi nai chodh sakte dhoka nai dete usay...\nTu mera saath de bolko kab nhi bolte my but negetive ek nakho bol bolrun...\nEk ek din kaisa guzara mujhe mlm...\nMy ladte ni maa kis si b une ande rishta leko my mera opinion boltun...\nMujhe usk jaisa koun b nai milta.......", time: '11:27 PM' },
      { id: 'sc4-5', sender: 'her', text: 'I told dizz to di she understand me 🥺 finally she told allah par chodh dal bolko', time: '11:27 PM' },
      { id: 'sc4-6', sender: 'her', text: 'Meri upar guzri so tere upar ni guzarna katho bolru\nMeri bhan katho my darad padko boli toh mych galthi kare jaisa hai\nMeri situation tuje kya kisse kisse bhi ni ana katho my boli tuje', time: '11:31 PM' },
      { id: 'sc4-7', sender: 'her', text: "After diz msg she told:\nKyaki le Allah hi deklinge\nAllah ki marzi\nJust leave on allah\nTu acha khako acha rho\nKaisi hogai mlm tu\nMere old days yad are muje\nKhush rho bus\nMera msg last\nMujhe mere future ki fikar nai maa allah par mujhe bharosa hai une sab accha karta", time: '11:31 PM' },
      { id: 'sc4-8', sender: 'her', text: 'Junnu i hope u understood me nd my situation between u nd di 🥺', time: '11:31 PM' },
      { id: 'sc4-9', sender: 'her', text: 'Last mein di mujhe ek bat bole saas ketta b acche rho maa k jaisa nai aatay sirf shohar ich apna bolko 🤗\nAaj si my sukoon si sotun ba di ab si mujhe negative nai bolte hope tu b mujhe negative nai samjhta... Insha Allah 😊🤗', time: '11:31 PM', reactions: ['😊', '🤗'] },
    ],
  },
]

function SnapBubble({ message, index }: { message: SnapMessage; index: number }) {
  const isMe = message.sender === 'me'
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22, delay: index * 0.05 }}
      className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-2 px-4`}
    >
      <div className="relative max-w-[75%]">
        {!isMe && (
          <p className="text-[10px] text-[#FFFC00]/60 mb-0.5 ml-1 font-sans font-semibold">〽️annu</p>
        )}
        <div
          className="px-4 py-2.5 text-sm leading-relaxed shadow-lg"
          style={{
            background: isMe ? '#FFFC00' : 'rgba(255,252,0,0.12)',
            border: isMe ? 'none' : '1.5px solid rgba(255,252,0,0.3)',
            borderRadius: isMe ? '20px 20px 6px 20px' : '20px 20px 20px 6px',
            color: isMe ? '#1a1a00' : '#ffffff',
          }}
        >
          <p className="whitespace-pre-wrap break-words font-sans font-medium">
            {message.text.split(new RegExp(`(Anniversary|promise|trust|i love you|love you|halal|nikah|marriage|happiness|banglore|Ameen)`, 'gi')).map((part, i) => (
              <span
                key={i}
                className={/^(Anniversary|promise|trust|i love you|love you|halal|nikah|marriage|happiness|banglore|Ameen)$/i.test(part) ? (isMe ? 'underline font-bold' : 'text-[#FFFC00] font-bold') : ''}
              >
                {part}
              </span>
            ))}
          </p>
        </div>
        <div className={`flex items-center gap-1 mt-0.5 px-1 ${isMe ? 'justify-end' : 'justify-start'}`}>
          <span className="text-[9px] text-white/30 font-sans">{message.time || ''}</span>
          {isMe && <span className="text-[10px] text-[#FFFC00]/50">✓✓</span>}
        </div>
        {message.reactions && message.reactions.length > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`absolute -bottom-2 ${isMe ? 'right-2' : 'left-2'} flex gap-0.5`}
          >
            {message.reactions.map((r, i) => (
              <span key={i} className="text-xs bg-black/40 rounded-full px-1.5 py-0.5 border border-[#FFFC00]/20 shadow-lg">{r}</span>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default function SnapchatPage() {
  const [activeChapter, setActiveChapter] = useState(0)
  const chapter = snapchatChapters[activeChapter]

  return (
    <section className="min-h-dvh py-8 px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <Link href="/memories/messages" className="inline-flex items-center gap-1.5 text-white/30 hover:text-white/60 text-xs font-sans mb-4 transition-colors">
          ← Back to Messages
        </Link>
        <div className="flex items-center justify-center gap-3 mb-1">
          <div className="w-10 h-10 rounded-xl bg-[#FFFC00] flex items-center justify-center shadow-lg shadow-yellow-500/30">
            <svg viewBox="0 0 32 32" fill="black" className="w-6 h-6">
              <path d="M16.07 2c-.37 0-3.66.1-5.32 3.38-.5.99-.44 2.67-.38 4.06v.04c-.38.22-1.13.17-1.64-.06-.27-.13-.57-.05-.72.18-.16.24-.1.56.13.76.04.04 1 .9 2.28.9.08 0 .17 0 .25-.01.28 1.08.87 2.7 2.2 4.1-1.12.5-3.29 1.18-6.5 1.18-.28 0-.5.2-.5.47 0 1.38 3.34 2.21 5.6 2.58.08.48.19 1.56-.15 2.12-.12.19-.06.45.14.57.78.47 3.04.6 4.15.6.32 0 .52-.01.52-.01s.2.01.52.01c1.11 0 3.37-.13 4.15-.6.2-.12.26-.38.14-.57-.34-.56-.23-1.64-.15-2.12 2.26-.37 5.6-1.2 5.6-2.58 0-.27-.22-.47-.5-.47-3.22 0-5.39-.68-6.5-1.18 1.33-1.4 1.92-3.02 2.2-4.1.08.01.17.01.25.01 1.28 0 2.24-.86 2.28-.9.23-.2.29-.52.13-.76-.15-.23-.45-.31-.72-.18-.51.23-1.27.28-1.64.06v-.04c.06-1.39.12-3.07-.38-4.06C19.73 2.1 16.44 2 16.07 2z"/>
            </svg>
          </div>
          <h1
            className="font-heading text-4xl sm:text-5xl"
            style={{ background: 'linear-gradient(135deg, #FFFC00, #f5e800)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Snapchat
          </h1>
        </div>
        <p className="text-white/40 text-sm font-sans">Snaps that made us smile 👻</p>
      </motion.div>

      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          style={{
            background: '#0a0a0a',
            boxShadow: '0 30px 80px rgba(0,0,0,0.8), 0 0 40px rgba(255,252,0,0.08)',
            border: '1px solid rgba(255,252,0,0.2)',
            height: '72vh',
            maxHeight: 660,
          }}
        >
          <div
            className="px-4 py-3 flex items-center gap-3 shrink-0"
            style={{ background: '#111111', borderBottom: '1px solid rgba(255,252,0,0.1)' }}
          >
            <Link href="/memories/messages" className="text-[#FFFC00]/70 text-lg">←</Link>
            <div className="w-10 h-10 rounded-full bg-[#FFFC00] flex items-center justify-center text-black text-base font-black shrink-0 shadow-lg">
              M
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-bold truncate font-sans">〽️annu</p>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFFC00] inline-block" />
                <span className="text-[#FFFC00]/70 text-xs font-sans">Active now</span>
              </div>
            </div>
            <div className="flex gap-3 text-[#FFFC00]/60 shrink-0 text-base">
              <span>📷</span>
              <span>📞</span>
            </div>
          </div>

          <div
            className="shrink-0 px-3 py-2 flex gap-2 overflow-x-auto border-b border-[#FFFC00]/10"
            style={{ background: '#0a0a0a', scrollbarWidth: 'none' }}
          >
            {snapchatChapters.map((conv, i) => (
              <button
                key={i}
                onClick={() => setActiveChapter(i)}
                className="whitespace-nowrap px-3 py-1.5 rounded-xl text-[10px] font-sans font-semibold transition-all duration-200 shrink-0"
                style={{
                  background: activeChapter === i ? '#FFFC00' : 'rgba(255,252,0,0.07)',
                  color: activeChapter === i ? '#1a1a00' : 'rgba(255,252,0,0.5)',
                  border: activeChapter === i ? 'none' : '1px solid rgba(255,252,0,0.15)',
                }}
              >
                {conv.title}
              </button>
            ))}
          </div>

          <div className="flex justify-center pt-4 pb-2 shrink-0">
            <span className="px-3 py-1 rounded-full text-[10px] font-sans font-semibold" style={{ background: 'rgba(255,252,0,0.1)', color: 'rgba(255,252,0,0.6)', border: '1px solid rgba(255,252,0,0.2)' }}>
              {chapter.date}
            </span>
          </div>

          <div className="flex-1 overflow-y-auto pb-4" style={{ scrollbarWidth: 'none' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {chapter.messages.map((msg, i) => (
                  <SnapBubble key={msg.id} message={msg} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="px-4 py-3 flex items-center gap-3 shrink-0"
            style={{ background: '#111111', borderTop: '1px solid rgba(255,252,0,0.1)' }}
          >
            <div className="w-8 h-8 rounded-full bg-[#FFFC00] flex items-center justify-center text-black text-base font-bold shadow">
              📷
            </div>
            <div className="flex-1 rounded-full px-4 py-2 text-white/20 text-sm font-sans" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,252,0,0.15)' }}>
              Send a snap...
            </div>
            <span className="text-[#FFFC00]/50 text-xl">😊</span>
          </div>
        </motion.div>

        <p className="text-center text-white/20 text-xs font-sans mt-4">
          {snapchatChapters.length} chapters • Snap memories 👻
        </p>
      </div>
    </section>
  )
}
