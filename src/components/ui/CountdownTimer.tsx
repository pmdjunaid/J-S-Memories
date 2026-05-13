'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CountdownTimerProps {
  startDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function CountdownTimer({ startDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [prev, setPrev] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const tick = () => {
      const start = new Date(startDate).getTime()
      const now = Date.now()
      const diff = now - start
      const d = Math.floor(diff / (1000 * 60 * 60 * 24))
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((diff % (1000 * 60)) / 1000)
      setPrev(prev => ({ ...prev }))
      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [startDate])

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-lavender/70 text-sm tracking-widest uppercase font-sans">
        Together for
      </p>
      <div className="flex gap-3 sm:gap-5">
        {units.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <div className="relative overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm px-3 py-2 sm:px-5 sm:py-3 min-w-[56px] sm:min-w-[70px] text-center">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={value}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="block text-2xl sm:text-3xl font-heading text-rose-gold tabular-nums"
                >
                  {pad(value)}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="text-xs text-white/40 mt-1 font-sans tracking-wide">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
