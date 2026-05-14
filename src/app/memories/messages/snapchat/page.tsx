'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { conversations } from '@/data/messages'
import Link from 'next/link'

function SnapBubble({ message, index }: { message: { id: string; sender: string; text: string; time: string; reactions?: string[] }; index: number }) {
  const isMe = message.sender === 'me'
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22, delay: index * 0.05 }}
      className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-2 px-4`}
    >
      <div className="relative max-w-[75%]">
        {/* Sender label */}
        {!isMe && (
          <p className="text-[10px] text-[#FFFC00]/60 mb-0.5 ml-1 font-sans font-semibold">〽️annu</p>
        )}
        <div
          className="px-4 py-2.5 text-sm leading-relaxed shadow-lg"
          style={{
            background: isMe
              ? '#FFFC00'
              : 'rgba(255,252,0,0.12)',
            border: isMe ? 'none' : '1.5px solid rgba(255,252,0,0.3)',
            borderRadius: isMe ? '20px 20px 6px 20px' : '20px 20px 20px 6px',
            color: isMe ? '#1a1a00' : '#ffffff',
          }}
        >
          <p className="whitespace-pre-wrap break-words font-sans font-medium">
            {message.text.split(new RegExp(`(Anniversary|promise|trust|i love you|love you)`, 'gi')).map((part, i) => (
              <span
                key={i}
                className={/^(Anniversary|promise|trust|i love you|love you)$/i.test(part) ? (isMe ? 'underline font-bold' : 'text-[#FFFC00] font-bold') : ''}
              >
                {part}
              </span>
            ))}
          </p>
        </div>
        <div className={`flex items-center gap-1 mt-0.5 px-1 ${isMe ? 'justify-end' : 'justify-start'}`}>
          <span className="text-[9px] text-white/30 font-sans">{message.time}</span>
          {isMe && <span className="text-[10px] text-[#FFFC00]/50">✓✓</span>}
        </div>
        {message.reactions && message.reactions.length > 0 && (
          <div className={`flex gap-0.5 mt-0.5 ${isMe ? 'justify-end' : 'justify-start'}`}>
            {message.reactions.map((r, i) => (
              <span key={i} className="text-xs bg-black/30 rounded-full px-1.5 py-0.5 border border-[#FFFC00]/20">{r}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function SnapchatPage() {
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
          {/* Snapchat Ghost */}
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
          {/* Snapchat Header */}
          <div
            className="px-4 py-3 flex items-center gap-3 shrink-0"
            style={{ background: '#111111', borderBottom: '1px solid rgba(255,252,0,0.1)' }}
          >
            <button className="text-[#FFFC00]/70 text-lg">←</button>
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

          {/* Chapter selector */}
          <div
            className="shrink-0 px-3 py-2 flex gap-2 overflow-x-auto border-b border-[#FFFC00]/10"
            style={{ background: '#0a0a0a', scrollbarWidth: 'none' }}
          >
            {conversations.map((conv, i) => (
              <button
                key={i}
                id={`sc-chapter-${i}`}
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

          {/* Date badge */}
          <div className="flex justify-center pt-4 pb-2 shrink-0">
            <span className="px-3 py-1 rounded-full text-[10px] font-sans font-semibold" style={{ background: 'rgba(255,252,0,0.1)', color: 'rgba(255,252,0,0.6)', border: '1px solid rgba(255,252,0,0.2)' }}>
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
                  <SnapBubble key={msg.id} message={msg} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Input area */}
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
          {conversations.length} chapters • Snap memories 👻
        </p>
      </div>
    </section>
  )
}
