'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface TGMessage {
  id: string
  sender: 'me' | 'her'
  text: string
  time?: string
  reactions?: string[]
}

// ─── Helper to decide sender ───────────────────────────────────────────────
// In this chat the lines alternate naturally; we mark them manually below.

interface TGChapter {
  title: string
  date: string
  messages: TGMessage[]
}

const telegramChapters: TGChapter[] = [
  {
    title: '🌙 Eid & Missing You',
    date: 'Eid Days',
    messages: [
      { id: 'eid-1', sender: 'her', text: 'Assalamu alikum mere jaan\nJunnuuuu\nI missed u alottttttt🥹', reactions: ['🥹'] },
      { id: 'eid-2', sender: 'me', text: 'Walaykum asalam 〽️annu 🥹' },
      { id: 'eid-3', sender: 'her', text: 'Yaad aya nai Sach bol' },
      { id: 'eid-4', sender: 'me', text: 'Miss toh pakka karya rahta' },
      { id: 'eid-5', sender: 'her', text: 'Kyu isa hua bolkho feel hua\nSab kuch milkho kyu dur hua bolko feel hua.\nFirst eid mere without mama and mami\nAur tu bhi nai 😔' },
      { id: 'eid-6', sender: 'her', text: 'Alhamdulillah fr everything junnu🥹😇I\'m very happy fr u😍❤️' },
      { id: 'eid-7', sender: 'me', text: 'Ayyooo....\nInshallah oo aak hope se hu' },
      { id: 'eid-8', sender: 'her', text: 'Junaid just 1 month😢😭' },
      { id: 'eid-9', sender: 'me', text: 'Eid kaise hue' },
      { id: 'eid-10', sender: 'her', text: 'Alhamdulillah acchi hue\nBut mera last minute mein kab b ronach le 😔' },
      { id: 'eid-11', sender: 'me', text: '〽️annu.. Sorry for late wishes\nMay our love always shine bright. With you by my side, every Eid is special. May Allah bless us with a lifetime of happiness together! Wishing my soulmate a blessed Eid filled with love, peace, and all the happiness in the world!', reactions: ['😘'] },
      { id: 'eid-12', sender: 'her', text: 'Awwww😘😍\nEidi😝' },
      { id: 'eid-13', sender: 'me', text: 'Mai hona kya eidi ka gift me' },
      { id: 'eid-14', sender: 'her', text: 'Naiii proper eidi hona 😝' },
      { id: 'eid-15', sender: 'me', text: 'Och toh bolrun so kuch plan karenge\nMay 9 passport ka appointment hai\nMay 10 sab aare bellary ku\nMay 14 marriage hai' },
      { id: 'eid-16', sender: 'her', text: 'Hoooo 😔\nSoja soja\nBye..' },
      { id: 'eid-17', sender: 'me', text: 'Pagal\nThode Din hai' },
      { id: 'eid-18', sender: 'her', text: 'Haan baa🥺🥺\nSach mein junnu bht yaad aate tere\nLast time kette mushkil si guzre o days\nMujhe future socche toh dar hota 🥹' },
    ],
  },
  {
    title: '🌟 Future Plans & Hope',
    date: 'Planning Days',
    messages: [
      { id: 'fp-1', sender: 'me', text: 'Future me kya tho bhi tere thak bath ii tho tu ghar me stand le.\nMai sach me hamare ghar me mai bole thu' },
      { id: 'fp-2', sender: 'me', text: 'Tuje isa nai bolra ke tu sirf mere soch\nDidi se bath kar personally tuje force karre tho ghar me' },
      { id: 'fp-3', sender: 'her', text: 'Inaha allah zarur junaid...\nI don\'t want my future without u\nSoch b nai sakte', reactions: ['🥰'] },
      { id: 'fp-4', sender: 'me', text: 'Haaa insha allah allah sab theek karta' },
      { id: 'fp-5', sender: 'her', text: 'Junaid u dont worry agar kuch pooche toh insha allah I\'ll take stand\nTu bilkul silent aak nko ho' },
      { id: 'fp-6', sender: 'me', text: '1 year kya 2 year bhi wait karrege 〽️annu' },
      { id: 'fp-7', sender: 'her', text: 'Utte daysss😳😳' },
      { id: 'fp-8', sender: 'me', text: 'Mera bhi 2 years ka Aggrement hai job ka' },
      { id: 'fp-9', sender: 'her', text: 'Junaid tu jaldi settle ho ko rishta leko aa uske bad maih dekhle tun..\nBoltun ghar mein maih b' },
      { id: 'fp-10', sender: 'me', text: 'Job tho mile alhamdulillah\nAb next kya karna bole tho bhi ammi ka aak plan hai' },
      { id: 'fp-11', sender: 'her', text: 'Allahumma barik🥰' },
      { id: 'fp-12', sender: 'me', text: 'Abi kya kya hua maalum\nNew phone\nNew bike (mama ke bike liken sab bolre so)\nNew laptop' },
      { id: 'fp-13', sender: 'her', text: 'Allahumma barik😍❤️' },
      { id: 'fp-14', sender: 'me', text: '〽️annu kon tho kya tho bole tho tu sirf aak bol mai happy se rathu bolkho bol' },
      { id: 'fp-15', sender: 'her', text: 'Insha allah allah ham dono ko apni mohabbat me kamiyabi ata farmaye... 🥰😍ameen😆❤️' },
      { id: 'fp-16', sender: 'me', text: 'Aameen' },
      { id: 'fp-17', sender: 'her', text: 'Alhamdulillah sirf ekich dimag mein aaya ba life mein sirf tuch hona bolko.... Maih tujhe khudh ko pura tera kar dale us time...\nSach bolun safe feel kare😍🤗' },
      { id: 'fp-18', sender: 'her', text: 'Junaid dekh har ladki confort chahte o comfort😌😇 mujhe tere si mehsoos hua tu kabbi maih tere saath rahnde mujhe miss use nai karya mujhe bht pasand aaya tere mein🥰🤗🫂' },
      { id: 'fp-19', sender: 'me', text: '〽️annu jis din tu muje oo bath bole na mai tuje blindly trust karru katho usse din mai soch liye tera trust mere par hai so kabi nai tutna' },
      { id: 'fp-20', sender: 'her', text: 'Haan i know junnu...\nThat\'s why I like u💖', reactions: ['💖'] },
      { id: 'fp-21', sender: 'her', text: 'Missing you junnuuuuu🥺🥺' },
      { id: 'fp-22', sender: 'me', text: 'Tu kya b nakho sooch jo hota 2no b mil ko solution nikalenge mil ko face karenge...' },
      { id: 'fp-23', sender: 'her', text: 'I love to see 👀you happy only\nWhen ever u happy of course i\'ll feel double happy☺️🥰\n\nThanks God\nI got my life time perfect life partner. 😌', reactions: ['😍'] },
    ],
  },
  {
    title: '💪 Stay Strong',
    date: 'Early Days',
    messages: [
      { id: 'tg1-1', sender: 'me', text: 'Inshallah tomorrow se isa nai karna plan sab change krna aur confidence level increase karlena. Mai jaldi har manleru😩' },
      { id: 'tg1-2', sender: 'her', text: 'Sry ba maih tujhe pehle jaisa time nai de pare pehle jaise hamare conversation b nai ho pare....but har waqt mujhe tera khayal aata har dua mein alhamdulillah tu shamil hai 🤗💖' },
      { id: 'tg1-3', sender: 'her', text: 'tu success hua tho mere b double success hue jaisach....jab b tu low feel hota yaad rakhle — this is the time to prove ur self 💪' },
      { id: 'tg1-4', sender: 'her', text: 'allah ki azmaish yeh...allah dekhta tujhe mein o sabar o face karne ki himmat hai yah nai...tere uppar Jo b guzari allah tujhe chunya q bcoz tujhe mein o salahiyat hai isleye.....' },
      { id: 'tg1-5', sender: 'her', text: 'tu kab b khud ko week nakho samajh...i know tera work bht mushkil 24hrs computer k samne baitna easy namhe...but suggestion aur dua tho zarur kar sakte 🤲' },
      { id: 'tg1-6', sender: 'her', text: 'allah tujhe har chote koshish mein kamiyabi ata farmaye ameen....maih dhoor hoon iska matlab yeh nahi k kuch b nai karsakte I\'m always wth u....fr ever nd ever bas tu strong rho.....🥰😍' },
      { id: 'tg1-7', sender: 'her', text: 'Tu kab b low feel nakho ho agar hua tho b share karna sikhle...low feel hua tho bas 2 raqat namaz padhle dua kar Insha Allah sab accha hota🤗💖' },
      { id: 'tg1-8', sender: 'her', text: 'Junaid u don\'t worry insha allah I\'ll handle\nLogun ka i don\'t care\nBadh mein jaye jo log hamare bare mein bura sooche aur kahen' },
      { id: 'tg1-9', sender: 'her', text: 'Maih bol daltun junaid mujhe force kare tho kare tho tere se shaadi karletun nai tho mujhe marriage ich nakho', reactions: ['😳'] },
    ],
  },
  {
    title: '🥺 Her Last Telegram Msg',
    date: 'Last Message',
    messages: [
      { id: 'tg2-1', sender: 'her', text: 'Assalamualaikum🥺🥺', reactions: ['🥺'] },
      { id: 'tg2-2', sender: 'her', text: 'Tujhe yeh msg karna ki nai ki mlm b nai hora tu already pareshan hai maih aur pareshaan nai karna chahte....' },
      { id: 'tg2-3', sender: 'her', text: 'Junaid maih bht pareshaan hoon Junaid' },
      { id: 'tg2-4', sender: 'her', text: 'Didi b bht pareshaan hai mere wajhe si kal n8 51 msgs rakhi une 1 ko' },
      { id: 'tg2-5', sender: 'her', text: 'Mere wajhe se jiju nd sare family k uppar bad name aara o maih bilkul nai chahte🥺🥺' },
      { id: 'tg2-6', sender: 'her', text: 'Maih khud ghar mein sab ko tension ka reason nai Banna chahte hoon Junaid.......' },
      { id: 'tg2-7', sender: 'her', text: 'Allah ham dono ko is takleef se hifazat kare' },
      { id: 'tg2-8', sender: 'her', text: 'How I can Junaid🥹🥹🥹 text karte jab b ankhoon mein ansu aare...' },
      { id: 'tg2-9', sender: 'her', text: 'Junaid family mere wajah si prblm face karte kato mujhe life mein kya b nakho...bas uno happy hai tho...' },
      { id: 'tg2-10', sender: 'her', text: 'Abba nd bade abba still trust me maih todhna nai chahte.....' },
      { id: 'tg2-11', sender: 'her', text: 'Maih kya karun mujhe kuch nai mlm hora\nEk bar call kar plzzz\nSryyyyy aur pareshan karne k leye' },
      { id: 'tg2-12', sender: 'me', text: 'Shaziya tu tumare family ke amanath hai.\nAur mai tuje family ku sab kho bolkho happy se nikha karle na sochya tha..' },
      { id: 'tg2-13', sender: 'me', text: 'Shayad mere life me love lines nai le shaziya\nTuje tumare family important aur tumare ammi aur abba ke izath important...mai jaan sakthu oo tu ammi abba ki izath ke vasthe kya hai tho bhi kar sakthe.' },
      { id: 'tg2-14', sender: 'me', text: '〽️annu kyu isa hora sab mai\nMere taraf se tuje hurt hua hai tho I\'m really sorry for that😕..' },
      { id: 'tg2-15', sender: 'me', text: 'Listen shaziya mere life me mai tere jaise ladki kabhi nai dekya...I like your character aaj thak tu kise se bath nai karre aur tera aak goal hai uspar focus karre the.' },
      { id: 'tg2-16', sender: 'me', text: 'Tuje tere happiness se zyada family ke happiness important. OK I\'ll never force you.\nAnd I\'ll never distup you...' },
      { id: 'tg2-17', sender: 'me', text: 'Don\'t cry shaziya tere face par smile acha ratha...' },
      { id: 'tg2-18', sender: 'me', text: 'Byee shaziya..\nShayad Good bye bolna correct kya🥺\nDon\'t cry tuje bolkho muje kyu asoo aare..' },
    ],
  },
  {
    title: '💞 11 Months — Anniversary',
    date: '10 Apr 2025',
    messages: [
      { id: 'tg3-1', sender: 'her', text: 'Happy anniversary to the one and only love of my life🫂🥰😍', reactions: ['❤️'] },
      { id: 'tg3-2', sender: 'her', text: 'Junaid kitne jaldi 11 months complete hogaye🥹\nAlhamdulillah\nInsha allah one year b complete hota...' },
      { id: 'tg3-3', sender: 'her', text: 'Yeh pure days mere life k sab se beautiful days.....💞\nTnq so much fr making my days spcl...\nTnq fr supporting me\nTnq fr Encouraging me\nTnq fr making me feel special' },
      { id: 'tg3-4', sender: 'her', text: 'Tnq fr loving❤️ me\nTnq fr trusting me\nTnq fr understanding😉me\nSimply jaan...tnq so much fr comming into my life and making my life like a heaven🤗💞' },
      { id: 'tg3-5', sender: 'her', text: 'If any one ask me how much lucky I\'m?\nI \'ll answer them...junnu is in life my life that\'s my biggest luck nd blessing of my life from allah...😇' },
      { id: 'tg3-6', sender: 'her', text: 'Pyaar karne wale tho bht hai liken tum jaisa pyar karne wala koi b nahi milega chaheye b nahi🥰\nu r enough to me till jannah...' },
      { id: 'tg3-7', sender: 'her', text: 'Mujhe tumhara saath idar tak nahi balk jannath tak chaheye🥹😎' },
      { id: 'tg3-8', sender: 'her', text: 'Insha allah allah ham dono ko zarur ek karega....\nPata nahi maih tum ko nxt wish kar paungi ya nahi...\nBut remember one thing I\'m always with you' },
      { id: 'tg3-9', sender: 'her', text: 'Aur hamare aane wale future ka har din ham anniversary jaisa spcl banayenge insha allah❤️' },
      { id: 'tg3-10', sender: 'her', text: 'Love😘u so much my dear 💕mendak....\nMissing you🥹\n\nOnce again happy anniversary mendak🌹🥳💖\nnd sry if I hurt u unknowingly... 😄' },
    ],
  },
  {
    title: '💔 May 1st — Last Words',
    date: '1 May 2025',
    messages: [
      { id: 'tg4-1', sender: 'her', text: 'Junaid at least Tu tho mujhe samajhta bolko samjhi tu b miss understand karleya tho maih kya karna bol...\nMera bolne ka intension o nai tha ba Tu kya b nakho samajh...' },
      { id: 'tg4-2', sender: 'her', text: 'U know about my situation and abut me very well' },
      { id: 'tg4-3', sender: 'her', text: 'Plzzz junaid maih kuch hours ich ab idar rahne ka usko bad kab hamre bat hote ki nai mlm...\nPlzzz sida bat kar ba....' },
      { id: 'tg4-4', sender: 'her', text: 'Heartfully I\'m really veryyy sorry mere jaan without u I\'m nothing junaid.. 🥹🥺', reactions: ['🥺'] },
      { id: 'tg4-5', sender: 'her', text: 'Miss u junaid\nRply dena yah nai tere marzi...' },
      { id: 'tg4-6', sender: 'me', text: 'Mai samajkho na chup hogaya so\nMiss understanding kya nai le..\nOk tere intension oo nai tha le\nMere intension wrong ❌Tha.' },
      { id: 'tg4-7', sender: 'me', text: 'Haa muje tere kuch hours mere le valuable the..malum isliye na plan karra tha kuch hours tere se spend karna aur bhot Kuch bolna bolko..' },
      { id: 'tg4-8', sender: 'me', text: 'Don\'t mention sorry\nYour intension right always..\n\nOk leave it\nPlease take care of yourself.\n\nNow I\'ll never distrub you..\nI think 0 days to go also complete.' },
      { id: 'tg4-9', sender: 'her', text: 'Mujhe kya samjhya junaid Tu...\nKaisa bolta tu mujhe I\'ll never distrub u bolko...\nMain tujhe dil si chahte hoon junaid...' },
      { id: 'tg4-10', sender: 'her', text: 'Millenge insha allah but sabar katenge...\nTu kya b karle junaid maih tujhe pehle b bolun Tu nai tho mujhe life nakho bolko ab b bolrun I\'m on my words...' },
      { id: 'tg4-11', sender: 'her', text: 'Mujhe tere siwa kya b khayal nai aata ba kidar tho b rahne even ghar or clg anyware I\'m totally addicted wth u...' },
      { id: 'tg4-12', sender: 'me', text: 'Mere aane se uncomfortable feel hua tho mai kya samajna\nTeek hai mere words utha hurt karre hai tho sorry..\nMera intention tuje hurt karna ni tha..' },
      { id: 'tg4-13', sender: 'me', text: 'Main maanta hoon ki main thoda over possessive hoon...par sab kuch sirf isliye kyunki main tumhe dil se chaahta hoon aur har choti baat mere liye important hoti hai..' },
      { id: 'tg4-14', sender: 'me', text: 'Galti sirf teri ya meri nahi thi… dono se kuch na kuch galti ho gayi. Par main chahta hoon hum dono milke isse samjhein aur aage badhein...' },
      { id: 'tg4-15', sender: 'me', text: 'Pagal kyu hothe jo hona tha oo hogaya ab ghar me ache se khale aur ammi abba kha khayal rak..\nAur kudh kha bhi..\nPlz sorry bolkho muje aur hurt nko kar..' },
      { id: 'tg4-16', sender: 'her', text: 'Mujhe tere si o vibes b nai aate ba i trust u nd ur intensions very well that\'s y i like u and ur charecter...' },
      { id: 'tg4-17', sender: 'her', text: 'Maih idar si tere si acche si byee bolko jayenge bolko thi aisa hota bolko dream mein b nai soochi...' },
      { id: 'tg4-18', sender: 'her', text: 'Any way junaid galti mere tere nai.... Iseleye sryy bolko end karna chahte hoon maaf kar sida bat kar nai tho pagal hojatun maih think kar ko...' },
      { id: 'tg4-19', sender: 'her', text: 'Junaid nakho ba bas kar... Plzzzz bolrun na galte hue hurt karne ka intension nai tha ho gaya sry k siwa kuch nai bol sakte' },
      { id: 'tg4-20', sender: 'me', text: 'Acche se bye bolne ka bhi time aagaya..\nTu sab luggage pack karle aur friends ku drop kar bol gate thak..\nLuggage count karle..\nLatha ka hath nko chod uske sath rho..' },
      { id: 'tg4-21', sender: 'her', text: 'Ok\nKyu sorry sorry' },
      { id: 'tg4-22', sender: 'me', text: 'Chup rho ab Tu mujhe gussa nakho dila' },
      { id: 'tg4-23', sender: 'her', text: 'Bolrun na galte hue bolko och pakad le ko baithya tho kaisa aage badh na bol' },
      { id: 'tg4-24', sender: 'me', text: 'Bolru na kyu sorry sorry\nMai bhol gaya' },
      { id: 'tg4-25', sender: 'her', text: 'Mujhe mlm tere bare mein acche si Tu kya feel hora bol bolko b bas b kar ab ab sida bat kar' },
      { id: 'tg4-26', sender: 'me', text: 'Vaisa bhi mere aadat nai kuch yaad nai rheta muje' },
      { id: 'tg4-27', sender: 'her', text: 'Phir kya bolun bol galte hue jab sry nai tho kya bolna' },
      { id: 'tg4-28', sender: 'me', text: 'Dusrun k pass bolle Dailougs mere pass nakho' },
      { id: 'tg4-29', sender: 'her', text: 'Aur kon nai hai dusre\nYa Allah kya karun maih is ladke ka' },
      { id: 'tg4-30', sender: 'me', text: 'Aa sach hai' },
      { id: 'tg4-31', sender: 'her', text: 'Plzzzzz mere samne nakho' },
      { id: 'tg4-32', sender: 'me', text: 'Aur 12hrs' },
      { id: 'tg4-33', sender: 'her', text: 'Haan baa🥹\nI need u in diz time' },
      { id: 'tg4-34', sender: 'me', text: '12hrs samal\nYeh joke tha' },
      { id: 'tg4-35', sender: 'her', text: 'Uske badh Allah khayal raktha is ladke ka\nJunaiiddddd\nMaih bht kuch share karna samjhi thi aaj tere saath...\nBht plans thay\nKaiko aisa hora nai mlm' },
      { id: 'tg4-36', sender: 'me', text: 'Shayad close hain tho bhol na mushkil isliye' },
      { id: 'tg4-37', sender: 'her', text: 'Tu jaaaaaaa ab ready karle....' },
      { id: 'tg4-38', sender: 'me', text: 'Kya ready karun\nDimag kam ich nai karra\nWait 3sec\n2 bajhe si neend nai pura yech thought' },
      { id: 'tg4-39', sender: 'me', text: 'Chat sab delete karre tho kam karta' },
      { id: 'tg4-40', sender: 'her', text: 'Kaiko junaid\nNai karte maih\nMera chat muje hona' },
      { id: 'tg4-41', sender: 'me', text: 'Tera se delete karle muje nko kar\nAlso delete check ☑box remove kar muje\nTu delete kar\nMistake se bhi mera chat delete nko kar\nMuje mere life me memories hona' },
      { id: 'tg4-42', sender: 'me', text: 'Bye...' },
    ],
  },
]

function TelegramBubble({ message, index }: { message: TGMessage; index: number }) {
  const isMe = message.sender === 'me'
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.22, delay: index * 0.035 }}
      className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-1.5 px-3`}
    >
      <div className="relative max-w-[80%]">
        <div
          className="px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm"
          style={{
            background: isMe
              ? 'linear-gradient(135deg, #2ca5e0 0%, #1a7bba 100%)'
              : 'rgba(255,255,255,0.09)',
            border: isMe ? 'none' : '1px solid rgba(255,255,255,0.08)',
            borderTopRightRadius: isMe ? 4 : undefined,
            borderTopLeftRadius: isMe ? undefined : 4,
            color: '#fff',
          }}
        >
          <p className="whitespace-pre-wrap break-words font-sans text-[13px]">
            {message.text.split(/(love|trust|promise|anniversary|sorry|always with you|I'm nothing|missing you)/gi).map((part, i) => (
              <span
                key={i}
                className={/(love|trust|promise|anniversary|sorry|always with you|I'm nothing|missing you)/i.test(part) ? 'text-yellow-200 font-semibold' : ''}
              >
                {part}
              </span>
            ))}
          </p>
          <div className={`flex items-center gap-1 mt-1 ${isMe ? 'justify-end' : 'justify-start'}`}>
            {isMe && <span className="text-[10px] text-white/60">✓✓</span>}
          </div>
        </div>
        {message.reactions && message.reactions.length > 0 && (
          <div className={`flex gap-0.5 mt-0.5 ${isMe ? 'justify-end' : 'justify-start'}`}>
            {message.reactions.map((r, i) => (
              <span key={i} className="text-xs bg-white/10 rounded-full px-1.5 py-0.5 border border-white/10">{r}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function TelegramPage() {
  const [activeChapter, setActiveChapter] = useState(0)
  const chapter = telegramChapters[activeChapter]

  return (
    <section className="min-h-dvh py-8 px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <Link
          href="/memories/messages"
          className="inline-flex items-center gap-1.5 text-white/30 hover:text-white/60 text-xs font-sans mb-4 transition-colors"
        >
          ← Back to Messages
        </Link>
        <div className="flex items-center justify-center gap-3 mb-1">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2ca5e0] to-[#1a7bba] flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.13.58-.48.72-.97.45l-2.66-1.96-1.28 1.23c-.14.14-.26.26-.53.26l.19-2.71 4.93-4.45c.21-.19-.05-.29-.33-.1L7.41 13.19l-2.6-.82c-.56-.18-.57-.56.13-.83l10.15-3.91c.47-.17.88.11.55.17z" />
            </svg>
          </div>
          <h1
            className="font-heading text-4xl sm:text-5xl"
            style={{
              background: 'linear-gradient(135deg, #2ca5e0, #a8d8f0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Telegram
          </h1>
        </div>
        <p className="text-white/40 text-sm font-sans">Real words, real feelings ✈️</p>
      </motion.div>

      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          style={{
            background: '#17212b',
            boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(44,165,224,0.15)',
            border: '1px solid rgba(44,165,224,0.15)',
            height: '74vh',
            maxHeight: 680,
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center gap-3 shrink-0"
            style={{ background: '#1c2c3a', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
          >
            <Link href="/memories/messages" className="text-[#2ca5e0] text-lg mr-0.5">←</Link>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2ca5e0] to-[#1a7bba] flex items-center justify-center text-white font-bold shrink-0 shadow">
              M
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold truncate font-sans">〽️annu</p>
              <p className="text-[#2ca5e0] text-xs font-sans">Telegram Chat</p>
            </div>
            <div className="flex gap-3 text-[#2ca5e0]/70 shrink-0 text-lg">
              <span>📞</span>
              <span>⋯</span>
            </div>
          </div>

          {/* Chapter Tabs */}
          <div
            className="shrink-0 px-3 py-2 flex gap-2 overflow-x-auto border-b border-white/5"
            style={{ background: '#17212b', scrollbarWidth: 'none' }}
          >
            {telegramChapters.map((conv, i) => (
              <button
                key={i}
                id={`tg-chapter-${i}`}
                onClick={() => setActiveChapter(i)}
                className="whitespace-nowrap px-3 py-1.5 rounded-xl text-[10px] font-sans transition-all duration-200 shrink-0"
                style={{
                  background: activeChapter === i ? 'rgba(44,165,224,0.25)' : 'rgba(255,255,255,0.05)',
                  color: activeChapter === i ? '#2ca5e0' : 'rgba(255,255,255,0.5)',
                  border: activeChapter === i ? '1px solid rgba(44,165,224,0.4)' : '1px solid transparent',
                }}
              >
                {conv.title}
              </button>
            ))}
          </div>

          {/* Date badge */}
          <div className="flex justify-center pt-4 pb-1 shrink-0">
            <span
              className="px-3 py-1 rounded-full text-[10px] font-sans"
              style={{ background: 'rgba(44,165,224,0.15)', color: 'rgba(44,165,224,0.8)' }}
            >
              {chapter.date}
            </span>
          </div>

          {/* Messages */}
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
                  <TelegramBubble key={msg.id} message={msg} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Input bar */}
          <div
            className="px-4 py-3 flex items-center gap-3 shrink-0"
            style={{ background: '#1c2c3a', borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div
              className="flex-1 rounded-full px-4 py-2 text-white/20 text-sm font-sans"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              Message...
            </div>
            <div className="w-9 h-9 rounded-full bg-[#2ca5e0] flex items-center justify-center text-white shadow">
              ➤
            </div>
          </div>
        </motion.div>

        <p className="text-center text-white/20 text-xs font-sans mt-4">
          Real Telegram messages • {telegramChapters.length} chapters 💙
        </p>
      </div>
    </section>
  )
}
