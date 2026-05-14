'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface InstaMessage {
  id: string
  sender: 'me' | 'her'
  text: string
  time: string
  reactions?: string[]
}

interface InstaChapter {
  title: string
  date: string
  messages: InstaMessage[]
}

const instaChapters: InstaChapter[] = [
  {
    title: '👋 Initial Contact',
    date: 'Today 1:01 PM',
    messages: [
      { id: 'i1-1', sender: 'her', text: 'Hello', time: '1:01 PM' },
      { id: 'i1-2', sender: 'her', text: 'Hello', time: '2:09 PM' },
      { id: 'i1-3', sender: 'her', text: 'Fouziya here', time: '2:09 PM' },
      { id: 'i1-4', sender: 'me', text: 'Assalam walikum bolo didi', time: '2:09 PM' },
      { id: 'i1-5', sender: 'her', text: 'Walaikumassalam', time: '2:10 PM' },
    ]
  },
  {
    title: '🚫 Family Decision',
    date: 'Today 2:15 PM',
    messages: [
      { id: 'i2-1', sender: 'her', text: 'lagaye toh Hume nakko bol dale na ba\nNai dete Hume katho bol dale bath khatam hogai\nHmre Abba khud nakko bole....', time: '2:15 PM' },
      { id: 'i2-2', sender: 'her', text: 'And shaziya bhi nai karleti my udar shadi karko boli\nClearly no boldale hume', time: '2:16 PM' },
      { id: 'i2-3', sender: 'her', text: 'Hmri family Wale nakko bole\nThen y u guys are insisting', time: '2:17 PM' },
      { id: 'i2-4', sender: 'me', text: 'Didi kya kya kich bath boldale bolko kon bole tumna..', time: '2:18 PM' },
      { id: 'i2-5', sender: 'her', text: 'Hmre Abba and ammi ku nai pasand tumare Ghar me rishta karna...so it\'s better to quit here', time: '2:20 PM' },
      { id: 'i2-6', sender: 'me', text: 'Mai izath se rishta bheja tha..\nReject karre so nai malum tha', time: '2:21 PM' },
      { id: 'i2-7', sender: 'her', text: 'Yes we are absolutely rejecting', time: '2:22 PM' },
      { id: 'i2-8', sender: 'her', text: 'Hume saaf nakko bole.. tu bhi drop hoja\nAnd just move on\nU have the whole life in front of u', time: '2:25 PM' },
    ]
  },
  {
    title: '💔 Move On Advice',
    date: 'Today 2:28 PM',
    messages: [
      { id: 'i3-1', sender: 'me', text: 'Mai silent tha phir hamare family members thak aa bath aaye so shaziya ku rishta aale kho hai une reject karle kho hai isa bolke hamare si rishta bhej ne lagya mai uska permission thak nai leya didi', time: '2:28 PM' },
      { id: 'i3-2', sender: 'her', text: 'Muje mlm my vo sab ni bolri\nUne dil se nikal dali sab kuch\nUne move on hogai\nAb tu bhi move on karle', time: '2:30 PM' },
      { id: 'i3-3', sender: 'her', text: 'Firstly hmre Abba usse rayadurg me shadi ich ni kartu bolre....\nAlready usse dusre rishte bhi are', time: '2:32 PM' },
      { id: 'i3-4', sender: 'me', text: 'Ammi ku kya bolu mai.', time: '2:35 PM' },
      { id: 'i3-5', sender: 'her', text: 'Tu tumare ammi ku samjhale ba\nAaj k bad ye topic repeat ich ni hona', time: '2:40 PM' },
    ]
  },
  {
    title: '⚖️ Izzath & Trust',
    date: 'Today 2:45 PM',
    messages: [
      { id: 'i4-1', sender: 'her', text: 'Une bhool gai tuje ....ab tu bhi bhool ja', time: '2:45 PM' },
      { id: 'i4-2', sender: 'me', text: 'Apko abi kuch bi nai mlm woh sirf mere aur shaziya ke bich me hai...\nMai izzat kharab hothe bolko chup ho didi', time: '2:47 PM' },
      { id: 'i4-3', sender: 'her', text: 'Aur tumare ammi ku bhi bol ba ab ye topic kiske pas bhi discuss karnako katho', time: '2:48 PM' },
      { id: 'i4-4', sender: 'her', text: 'Hamare Abba ka decision ich uska decision\nEk ladki ki izzath ki kya importance tuje mlm rhata', time: '2:50 PM' },
      { id: 'i4-5', sender: 'her', text: 'Tu mere samne chota baccha...bachpan se dekhe so tuje Hume....nd u r a nice guy', time: '2:52 PM' },
      { id: 'i4-6', sender: 'me', text: 'Didi aik last cheez puchna hai but decision kiska tha shaziya ka tha kya like rejecting ???', time: '2:55 PM' },
      { id: 'i4-7', sender: 'her', text: 'Yes....hmre Abba badeabba sab the....my bhi thi....une khud my izzath naiso jaga ni karleti katho', time: '2:58 PM' },
    ]
  },
  {
    title: '🫂 Empathy & Pain',
    date: 'Today 3:05 PM',
    messages: [
      { id: 'i5-1', sender: 'me', text: 'Izath?? Ap ko kon kya bole hamare family ke baarre me... ? Meko nai mlm ap thoda ye tafsil se boliye... Ke ap hamako itta girra ke baat q karee.', time: '3:05 PM' },
      { id: 'i5-2', sender: 'her', text: 'My tumna gira ko bath nai karri ba....tu nai samajra bath ku', time: '3:06 PM' },
      { id: 'i5-3', sender: 'me', text: 'Hamare pas har koi well mannered hai aur upar se hamari naik family unko bole toh meko bhoot boora dikh ra dil ko chub ri ye baat.', time: '3:08 PM' },
      { id: 'i5-4', sender: 'her', text: 'Hmri fmly me bhi sabku mlm hogaya....\nTumari fmly ku my kuch ni bolri....\nI know ur family....', time: '3:10 PM' },
      { id: 'i5-5', sender: 'me', text: 'Mai meri jagah samajh dari se tha upar se mere abba nai meko responsibility hai bolke upar se hamari naik family izath dar ghr ke hai bolke mai kisko bi aaj tak meri zindagi me kisko approach nai kara...', time: '3:12 PM' },
      { id: 'i5-6', sender: 'her', text: 'Tuje bhi abi bhot responsibilities hai...focus on that...ur ammi n bhai need ur support', time: '3:15 PM' },
      { id: 'i5-7', sender: 'her', text: 'Meri behen ki taraf galthi hito....sorry from bottom of my heart', time: '3:18 PM' },
    ]
  },
  {
    title: '🤲 Sacrifice & Faith',
    date: 'Today 3:25 PM',
    messages: [
      { id: 'i6-1', sender: 'me', text: 'Didi mai tumna har bath nai bol sakta mera dream sab kuch alagna hona hai tho aap shaziya se puchlo didi', time: '3:25 PM' },
      { id: 'i6-2', sender: 'her', text: 'Sacrifice kaiku karya ba....ab bhi kya ni hua....', time: '3:26 PM' },
      { id: 'i6-3', sender: 'me', text: 'Kaiku bole tho usko pasand nai tha didi mai dubai jana.. Mera first dream job vahi tha so\n6 months work krne ke badh uno 2 years ka agreement sign karro bole onsite jana liken usko before me job krna pasand nai didi', time: '3:30 PM' },
      { id: 'i6-4', sender: 'me', text: 'Usko izzat se pana samaj kho sacrifice krya so didi isa nai ke logo krte na timepass krke chod dale mere intention wrong nai tha.. Didi', time: '3:32 PM' },
      { id: 'i6-5', sender: 'me', text: 'Alhamdulillah jaisa uska pasand tha vaisa Bengalore me job karro liken ab usko mai pasand nai..\nJazakaAllah khair didi', time: '3:35 PM' },
      { id: 'i6-6', sender: 'her', text: 'Ab shaziya khud rishte ku inkar kari ba\nHogaya bath khatam\nUske dil ka hal Allah janta.....', time: '3:40 PM' },
      { id: 'i6-7', sender: 'me', text: 'Allah Harqiz nai maaf krta didi.. Isa nai ke aak kho promise krna trust dila na aur sab kuch bolke Good bye that\'s it bolna itha asan nai didi', time: '3:45 PM' },
    ]
  },
  {
    title: '🕌 Final Realities',
    date: 'Today 3:50 PM',
    messages: [
      { id: 'i7-1', sender: 'her', text: 'Ghar k bade kidar rishta lagaye udar karleti ab une shadi.. ...ye final decision uska....\nUski wajah se hmre maa baap ka sar ni jhukna katho une move on karli ba', time: '3:50 PM' },
      { id: 'i7-2', sender: 'me', text: 'Nai didi hargiz maaf nai krta mai allah ke samne mai ya baat rakh toh akhirat me ye baar sawal rakh tun meri galti thi kya...', time: '3:55 PM' },
      { id: 'i7-3', sender: 'her', text: 'Unki feelings ku hurt karko unka sar jhuka ko Hume kabhi khush ni reh sakte\nReh sakte kya khush\nTu hi bol', time: '4:00 PM' },
      { id: 'i7-4', sender: 'me', text: 'Like tume sach sach bolo une happy se rhe sakthe kya didi\nMuje aak chota bhai samaj kho bolo une happy se rhete bole tho mai kudh move on hothu didi', time: '4:05 PM' },
      { id: 'i7-5', sender: 'her', text: 'Ye Allah ki marzi ba....uski naseeb me Khushi likhi haito khush rhati\nNaito une bhi bhugatti', time: '4:10 PM' },
      { id: 'i7-6', sender: 'me', text: 'Khair Allah se dua une kushi randhe..', time: '4:15 PM' },
    ]
  },
  {
    title: '📜 Closing Words',
    date: 'Today 4:20 PM',
    messages: [
      { id: 'i8-1', sender: 'her', text: 'Aisa shadi se pehle milna karna bath karna sab islam me jaiz hai kya\nTume kare so galath ich\nFirst Allah k samne uski maafi manglo tume', time: '4:20 PM' },
      { id: 'i8-2', sender: 'her', text: 'Hmre Abba ammi ki kya izath ni rhati bolko une khamosh hogai\nAur ek bath....maa baap raazi toh Allah bhi raazi', time: '4:25 PM' },
      { id: 'i8-3', sender: 'her', text: 'Best luck for ur future\nTake care\nNaseeb ka joda kidar hi udar hota\nAllah hafiz', time: '4:30 PM' },
      { id: 'i8-4', sender: 'me', text: 'Exactly sahi bath didi\nInshallah muje thoda time lagya samajne..', time: '4:35 PM' },
      { id: 'i8-5', sender: 'her', text: 'Jannath ka darja rakhte so uno\nUnki bath maan lena khamoshi se\nRishte ku inkar hi', time: '4:45 PM' },
    ]
  }
]

function InstaBubble({ message, index }: { message: InstaMessage; index: number }) {
  const isMe = message.sender === 'me'
  return (
    <motion.div
      initial={{ opacity: 0, x: isMe ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.045 }}
      className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-1.5 px-4`}
    >
      <div className="relative max-w-[76%]">
        <div
          className="px-4 py-2.5 text-sm leading-relaxed"
          style={{
            background: isMe
              ? 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)'
              : 'rgba(255,255,255,0.1)',
            border: isMe ? 'none' : '1px solid rgba(255,255,255,0.12)',
            borderRadius: isMe ? '22px 22px 4px 22px' : '22px 22px 22px 4px',
            color: '#ffffff',
          }}
        >
          <p className="whitespace-pre-wrap break-words font-sans">
            {message.text.split(new RegExp(`(rishta|reject|move on|izzath|maaf|promise|trust|sacrifice|Allah|family|parents)`, 'gi')).map((part, i) => (
              <span
                key={i}
                className={/^(rishta|reject|move on|izzath|maaf|promise|trust|sacrifice|Allah|family|parents)$/i.test(part) ? 'text-pink-200 font-bold drop-shadow-sm' : ''}
              >
                {part}
              </span>
            ))}
          </p>
        </div>
        <div className={`flex items-center gap-1 mt-0.5 px-1 ${isMe ? 'justify-end' : 'justify-start'}`}>
          <span className="text-[9px] text-white/30 font-sans">{message.time}</span>
          {isMe && <span className="text-[10px] text-purple-300/60">✓✓</span>}
        </div>
        {message.reactions && message.reactions.length > 0 && (
          <div className={`flex gap-0.5 mt-0.5 ${isMe ? 'justify-end' : 'justify-start'}`}>
            {message.reactions.map((r, i) => (
              <span key={i} className="text-xs bg-white/10 rounded-full px-1.5 py-0.5 border border-pink-500/20">{r}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

const InstagramIcon = () => (
  <svg viewBox="0 0 32 32" fill="white" className="w-5 h-5">
    <path d="M16 4.9c3.7 0 4.1.01 5.6.08 1.35.06 2.09.29 2.57.48.65.25 1.11.55 1.6 1.03.48.49.78.95 1.03 1.6.19.48.42 1.22.48 2.57.07 1.5.08 1.94.08 5.6s-.01 4.1-.08 5.6c-.06 1.35-.29 2.09-.48 2.57-.25.65-.55 1.11-1.03 1.6-.49.48-.95.78-1.6 1.03-.48.19-1.22.42-2.57.48-1.5.07-1.94.08-5.6.08s-4.1-.01-5.6-.08c-1.35-.06-2.09-.29-2.57-.48-.65-.25-1.11-.55-1.6-1.03a4.27 4.27 0 0 1-1.03-1.6c-.19-.48-.42-1.22-.48-2.57C4.91 20.1 4.9 19.66 4.9 16s.01-4.1.08-5.6c.06-1.35.29-2.09.48-2.57.25-.65.55-1.11 1.03-1.6A4.27 4.27 0 0 1 8.09 5.2c.48-.19 1.22-.42 2.57-.48C12 4.91 12.44 4.9 16 4.9M16 3c-3.76 0-4.23.02-5.71.08-1.48.07-2.49.31-3.37.65a6.8 6.8 0 0 0-2.46 1.6A6.8 6.8 0 0 0 2.87 7.8c-.34.88-.58 1.89-.65 3.37C2.16 12.65 2.14 13.12 2.14 16s.02 3.35.08 4.83c.07 1.48.31 2.49.65 3.37a6.8 6.8 0 0 0 1.6 2.46 6.8 6.8 0 0 0 2.46 1.6c.88.34 1.89.58 3.37.65 1.48.07 1.95.08 4.71.08s3.23-.01 4.71-.08c1.48-.07 2.49-.31 3.37-.65a6.8 6.8 0 0 0 2.46-1.6 6.8 6.8 0 0 0 1.6-2.46c.34-.88.58-1.89.65-3.37.07-1.48.08-1.95.08-4.83s-.01-3.35-.08-4.83c-.07-1.48-.31-2.49-.65-3.37a6.8 6.8 0 0 0-1.6-2.46A6.8 6.8 0 0 0 24.17 3.65C23.29 3.31 22.28 3.07 20.8 3 19.32 2.93 18.85 2.91 16 2.91z"/>
    <circle cx="16" cy="16" r="4.4"/>
    <circle cx="21.3" cy="10.7" r="1.15"/>
  </svg>
)

export default function InstagramPage() {
  const [activeChapter, setActiveChapter] = useState(0)
  const chapter = instaChapters[activeChapter]

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
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
            style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}
          >
            <InstagramIcon />
          </div>
          <h1
            className="font-heading text-4xl sm:text-5xl"
            style={{
              background: 'linear-gradient(135deg, #c76ef0, #fd4d4d, #fcb045)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Instagram
          </h1>
        </div>
        <p className="text-white/40 text-sm font-sans">The full weight of the truth 💜</p>
      </motion.div>

      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          style={{
            background: '#000000',
            boxShadow: '0 30px 80px rgba(0,0,0,0.85), 0 0 50px rgba(131,58,180,0.15)',
            border: '1px solid rgba(131,58,180,0.2)',
            height: '72vh',
            maxHeight: 660,
          }}
        >
          <div
            className="px-4 py-3 flex items-center gap-3 shrink-0"
            style={{
              background: '#000000',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <Link href="/memories/messages" className="text-white/60 text-lg hover:text-white transition-colors">←</Link>
            <div className="relative shrink-0">
              <div
                className="absolute inset-0 rounded-full p-[2px]"
                style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', borderRadius: '50%' }}
              />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-700 to-pink-500 flex items-center justify-center text-white text-base font-bold relative z-10 m-[2px]">
                F
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-bold truncate font-sans">Fouziya</p>
              <p className="text-white/40 text-xs font-sans">Mannu's Sister</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button className="text-white/60 text-xl">📞</button>
              <button className="text-white/60 text-xl">📹</button>
            </div>
          </div>

          <div className="flex flex-col items-center py-5 shrink-0 border-b border-white/5" style={{ background: '#000' }}>
            <div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-2xl font-black mb-2 shadow-lg"
              style={{ boxShadow: '0 0 0 3px #000, 0 0 0 5px', outline: '3px solid', outlineColor: '#833ab4' }}
            >
              F
            </div>
            <p className="text-white font-bold text-sm font-sans">Fouziya</p>
            <p className="text-white/40 text-xs font-sans">Instagram • Mannu's Sister</p>
          </div>

          <div
            className="shrink-0 px-3 py-2 flex gap-2 overflow-x-auto border-b border-white/5"
            style={{ background: '#0a0a0a', scrollbarWidth: 'none' }}
          >
            {instaChapters.map((conv, i) => (
              <button
                key={i}
                id={`ig-chapter-${i}`}
                onClick={() => setActiveChapter(i)}
                className="whitespace-nowrap px-3 py-1.5 rounded-xl text-[10px] font-sans transition-all duration-200 shrink-0"
                style={{
                  background: activeChapter === i ? 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' : 'rgba(255,255,255,0.06)',
                  color: activeChapter === i ? '#fff' : 'rgba(255,255,255,0.45)',
                  border: activeChapter === i ? 'none' : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {conv.title}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto py-3" style={{ scrollbarWidth: 'none', background: '#000' }}>
            <div className="flex justify-center mb-3">
              <span className="px-3 py-1 rounded-full text-[10px] font-sans" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.4)' }}>
                {chapter.date}
              </span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {chapter.messages.map((msg, i) => (
                  <InstaBubble key={msg.id} message={msg} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="px-4 py-3 flex items-center gap-3 shrink-0"
            style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div
              className="flex-1 rounded-full px-4 py-2.5 flex items-center gap-2"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <span className="text-white/20 text-sm font-sans flex-1">Message...</span>
              <span className="text-white/30 text-base">😊</span>
            </div>
            <span className="text-2xl">❤️</span>
          </div>
        </motion.div>

        <p className="text-center text-white/20 text-xs font-sans mt-4">
          {instaChapters.length} chapters • Instagram DM memories 💜
        </p>
      </div>
    </section>
  )
}
