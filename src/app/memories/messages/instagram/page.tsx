'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { conversations } from '@/data/messages'
import Link from 'next/link'

function InstaBubble({ message, index }: { message: { id: string; sender: string; text: string; time: string; reactions?: string[] }; index: number }) {
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
            {message.text.split(new RegExp(`(Anniversary|promise|trust|i love you|love you)`, 'gi')).map((part, i) => (
              <span
                key={i}
                className={/^(Anniversary|promise|trust|i love you|love you)$/i.test(part) ? 'text-pink-200 font-bold drop-shadow-sm' : ''}
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
  const chapter = conversations[activeChapter]

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
          {/* Instagram gradient icon */}
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
        <p className="text-white/40 text-sm font-sans">DMs full of love & late nights 💜</p>
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
          {/* Instagram DM Header */}
          <div
            className="px-4 py-3 flex items-center gap-3 shrink-0"
            style={{
              background: '#000000',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <Link href="/memories/messages" className="text-white/60 text-lg hover:text-white transition-colors">←</Link>
            {/* Avatar with story ring */}
            <div className="relative shrink-0">
              <div
                className="absolute inset-0 rounded-full p-[2px]"
                style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', borderRadius: '50%' }}
              />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-700 to-pink-500 flex items-center justify-center text-white text-base font-bold relative z-10 m-[2px]">
                M
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-bold truncate font-sans">〽️annu</p>
              <p className="text-white/40 text-xs font-sans">Active now</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button className="text-white/60 text-xl">📞</button>
              <button className="text-white/60 text-xl">📹</button>
            </div>
          </div>

          {/* Profile card */}
          <div className="flex flex-col items-center py-5 shrink-0 border-b border-white/5" style={{ background: '#000' }}>
            <div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-2xl font-black mb-2 shadow-lg"
              style={{ boxShadow: '0 0 0 3px #000, 0 0 0 5px', outline: '3px solid', outlineColor: '#833ab4' }}
            >
              M
            </div>
            <p className="text-white font-bold text-sm font-sans">〽️annu</p>
            <p className="text-white/40 text-xs font-sans">Instagram • Direct Message</p>
          </div>

          {/* Chapter selector */}
          <div
            className="shrink-0 px-3 py-2 flex gap-2 overflow-x-auto border-b border-white/5"
            style={{ background: '#0a0a0a', scrollbarWidth: 'none' }}
          >
            {conversations.map((conv, i) => (
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

          {/* Messages */}
          <div className="flex-1 overflow-y-auto py-3" style={{ scrollbarWidth: 'none', background: '#000' }}>
            {/* Date */}
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

          {/* Input Bar */}
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
          {conversations.length} chapters • Instagram DM memories 💜
        </p>
      </div>
    </section>
  )
}
