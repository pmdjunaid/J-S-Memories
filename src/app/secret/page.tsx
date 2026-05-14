'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { coupleConfig } from '@/config/couple'

const SECRET_PIN = coupleConfig.secretPin

const KEYS = [
  ['1','2','3'],
  ['4','5','6'],
  ['7','8','9'],
  ['❤️','0','⌫'],
]

function HeartBurst() {
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    angle: (i / 20) * 360,
    distance: 80 + Math.random() * 120,
    size: 12 + Math.random() * 20,
    emoji: ['❤️','💕','💖','💗','💓','✨'][Math.floor(Math.random() * 6)],
  }))
  return (
    <div className="fixed inset-0 pointer-events-none z-[200] flex items-center justify-center">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
          animate={{
            x: Math.cos((h.angle * Math.PI) / 180) * h.distance,
            y: Math.sin((h.angle * Math.PI) / 180) * h.distance,
            scale: [0, 1, 0.5],
            opacity: [1, 1, 0],
          }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute"
          style={{ fontSize: h.size }}
        >
          {h.emoji}
        </motion.div>
      ))}
    </div>
  )
}

export default function SecretPage() {
  const [pin, setPin] = useState('')
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle')
  const [unlocked, setUnlocked] = useState(false)
  const [showBurst, setShowBurst] = useState(false)

  const handleKey = (key: string) => {
    if (status === 'correct') return
    if (key === '⌫') {
      setPin(p => p.slice(0, -1))
      setStatus('idle')
    } else if (key === '❤️') {
      // Easter egg
      setPin(p => p + '❤')
    } else if (pin.length < 4) {
      const newPin = pin + key
      setPin(newPin)
      if (newPin.length === 4) {
        if (newPin === SECRET_PIN) {
          setStatus('correct')
          setShowBurst(true)
          setTimeout(() => setUnlocked(true), 1500)
        } else {
          setStatus('wrong')
          setTimeout(() => { setPin(''); setStatus('idle') }, 800)
        }
      }
    }
  }

  return (
    <section className="min-h-dvh flex flex-col items-center justify-center px-6">
      {showBurst && <HeartBurst />}

      <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.div
            key="lock"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xs"
          >
            {/* Lock icon */}
            <motion.div
              className="text-center mb-8"
              animate={status === 'wrong' ? { x: [-8, 8, -8, 8, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <span className="text-5xl">🔐</span>
              <h1 className="font-heading text-3xl gradient-text mt-3 mb-1">Secret Place</h1>
              <p className="text-white/30 text-sm font-sans">Enter your 4-digit PIN</p>
            </motion.div>

            {/* PIN dots */}
            <div className="flex justify-center gap-4 mb-8">
              {Array.from({ length: 4 }, (_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: pin.length > i ? 1.2 : 1,
                    backgroundColor: 
                      status === 'correct' ? 'rgba(34,197,94,0.8)' :
                      status === 'wrong' ? 'rgba(239,68,68,0.8)' :
                      pin.length > i ? 'rgba(201,169,110,0.9)' : 'rgba(255,255,255,0.1)',
                    borderColor:
                      status === 'correct' ? 'rgba(34,197,94,0.8)' :
                      status === 'wrong' ? 'rgba(239,68,68,0.8)' :
                      pin.length > i ? 'rgba(201,169,110,0.8)' : 'rgba(255,255,255,0.2)',
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4 rounded-full border"
                />
              ))}
            </div>

            {/* Keypad */}
            <div className="grid grid-cols-3 gap-3">
              {KEYS.flat().map((key) => (
                <motion.button
                  key={key}
                  onClick={() => handleKey(key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-14 rounded-2xl text-lg font-sans flex items-center justify-center transition-all duration-200 ${
                    key === '⌫' ? 'text-white/40' : key === '❤️' ? 'text-pink-400' : 'text-white'
                  }`}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    minHeight: 44,
                  }}
                >
                  {key}
                </motion.button>
              ))}
            </div>

            {status === 'wrong' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-xs text-center mt-4 font-sans"
              >
                Wrong PIN. Try again 💔
              </motion.p>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="secret"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="w-full max-w-lg text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: 3, duration: 0.4 }}
              className="text-6xl mb-6"
            >
              💖
            </motion.div>

            <h1 className="font-heading text-4xl gradient-text mb-4">For You, Always</h1>

            <div className="parchment rounded-2xl p-8 text-left mb-6"
              style={{ boxShadow: '0 20px 60px rgba(201,169,110,0.15)' }}
            >
              <p className="font-heading italic text-rose-gold/80 text-xl mb-4">
                My dearest 〽️annu,
              </p>
              <p className="text-white/70 font-sans text-sm leading-relaxed">
                If you're reading this, it means you trusted me 🥺.
              </p>
              <br />
              <p className="text-white/70 font-sans text-sm leading-relaxed">
                You said "First nd last aameen" — and I've been holding those words 
                ever since. Every single day. Like a prayer I didn't know I needed.
              </p>
              <br />
              <p className="text-white/70 font-sans text-sm leading-relaxed">
                Whatever tomorrow brings — know that somewhere in this world, 
                Junaid is thinking about you. Praying for you. Waiting patiently, 
                with a heart full of everything he can't always say.
              </p>
              <br />
              <p className="text-white/60 font-sans text-sm leading-relaxed italic">
                "Mere mama ka hath kabhi bhi nai chod tha until I die" — that's how I feel about you. 
                My 〽️annu.
              </p>
              <div className="mt-6 text-right">
                <p className="font-heading italic text-rose-gold text-xl">Yours always, Junaid 💫</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {['💕', '🌸', '✨', '💫', '🤗', '💖', '🥰', '❤️'].map((e, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1, type: 'spring' }}
                  className="text-2xl heartbeat"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {e}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
