'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { loveLetters, LoveLetter } from '@/data/letters'

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 100 70" className="w-full h-full" fill="none">
      <rect x="2" y="2" width="96" height="66" rx="6" fill="rgba(201,169,110,0.1)" stroke="rgba(201,169,110,0.4)" strokeWidth="1.5" />
      <path d="M2 2 L50 40 L98 2" stroke="rgba(201,169,110,0.5)" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

export default function LettersPage() {
  const [openLetter, setOpenLetter] = useState<string | null>(null)

  return (
    <section className="min-h-dvh py-10 px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="font-heading text-4xl sm:text-6xl gradient-text mb-2">Love Letters</h1>
        <p className="text-white/40 text-sm font-sans">Words from the heart, sealed with love 💌</p>
      </motion.div>

      <div className="w-full max-w-2xl space-y-6">
        {loveLetters.map((letter, i) => (
          <LetterCard
            key={letter.id}
            letter={letter}
            index={i}
            isOpen={openLetter === letter.id}
            onToggle={() => setOpenLetter(openLetter === letter.id ? null : letter.id)}
          />
        ))}
      </div>
    </section>
  )
}

function LetterCard({ letter, index, isOpen, onToggle }: {
  letter: LoveLetter
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ transform: `rotate(${letter.rotation}deg)` }}
    >
      {/* Envelope closed state */}
      <motion.button
        onClick={onToggle}
        whileHover={{ scale: 1.01, rotate: 0 }}
        className="w-full parchment rounded-xl p-6 text-left cursor-pointer transition-all duration-300 relative"
        style={{
          outline: 'none',
          boxShadow: isOpen ? '0 20px 60px rgba(201,169,110,0.2)' : '0 10px 30px rgba(0,0,0,0.5)',
        }}
      >
        {/* Wax seal */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm"
          style={{ background: 'rgba(201,169,110,0.9)', boxShadow: '0 2px 8px rgba(201,169,110,0.4)' }}
        >
          {letter.mood}
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mt-2 mb-4">
          <div>
            <p className="text-rose-gold text-xs font-sans tracking-widest uppercase">
              {letter.from === 'junaid' ? 'From Junaid' : 'From 〽️annu'}
            </p>
            <p className="text-white/30 text-xs font-sans mt-0.5">{letter.date}</p>
          </div>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-white/30 text-lg"
          >
            ↓
          </motion.span>
        </div>

        <p className="font-heading italic text-rose-gold/80 text-lg">{letter.opening}</p>
        <p className="text-white/40 text-sm font-sans mt-1 line-clamp-2">
          {letter.body.split('\n')[0]}
        </p>

        {/* Expanded letter */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-6 pt-6 border-t border-rose-gold/10">
                <div className="space-y-4">
                  {letter.body.split('\n\n').map((para, i) => (
                    para.trim() && (
                      <p key={i} className="text-white/70 font-sans text-sm leading-relaxed whitespace-pre-wrap">
                        {para}
                      </p>
                    )
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-rose-gold/10 text-right">
                  <p className="font-heading italic text-rose-gold text-lg">{letter.signature}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <p className="text-white/20 text-xs font-sans mt-3 text-center">Tap to unfold 💌</p>
        )}
      </motion.button>
    </motion.div>
  )
}
