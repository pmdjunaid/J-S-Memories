'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CountdownTimer from '@/components/ui/CountdownTimer'
import { coupleConfig } from '@/config/couple'
import { Sparkles, MessageCircle, Lock } from 'lucide-react'

const titleLetters = "Our Story".split('')

export default function HeroPage() {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Radial glow behind hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(191,159,255,0.12) 0%, transparent 70%)',
        }}
      />



      {/* Animated Title */}
      <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl mb-4 leading-tight" aria-label="Our Story">
        {titleLetters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 0.5,
              delay: 0.5 + i * 0.07,
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
            className="inline-block gradient-text text-glow"
            style={{ marginRight: letter === ' ' ? '0.3em' : undefined }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.4 }}
        className="font-heading italic text-xl sm:text-2xl text-white/60 mb-3 flex items-center justify-center gap-2"
      >
        Every moment, saved forever <Sparkles size={20} className="text-lavender" />
      </motion.p>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.7 }}
        className="text-sm text-white/30 font-sans mb-10 tracking-widest uppercase"
      >
        {coupleConfig.tagline}
      </motion.p>

      {/* Countdown Timer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 2 }}
        className="mb-12"
      >
        <CountdownTimer startDate={coupleConfig.startDate} />
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 2.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          href="/memories/gallery"
          id="cta-memories"
          className="group relative overflow-hidden px-8 py-3.5 rounded-full text-sm font-sans font-medium text-white transition-all duration-300 min-h-[44px] flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #c9a96e 0%, #bf9fff 100%)',
            boxShadow: '0 0 30px rgba(191,159,255,0.3)',
          }}
        >
          <span className="relative z-10 flex items-center gap-2">
            <Sparkles size={16} /> Our Memories
          </span>
          <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
        </Link>

        <Link
          href="/memories/messages"
          id="cta-messages"
          className="group px-8 py-3.5 rounded-full text-sm font-sans font-medium transition-all duration-300 min-h-[44px] flex items-center justify-center gap-2"
          style={{
            border: '1px solid rgba(201,169,110,0.4)',
            color: 'rgba(201,169,110,0.9)',
            background: 'rgba(201,169,110,0.05)',
          }}
        >
          <MessageCircle size={16} /> Read Our Messages
        </Link>

        <Link
          href="/secret"
          id="cta-secret"
          className="group px-8 py-3.5 rounded-full text-sm font-sans font-medium transition-all duration-300 min-h-[44px] flex items-center justify-center gap-2"
          style={{
            border: '1px solid rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          <Lock size={16} /> Secret
        </Link>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/20 text-xs font-sans flex flex-col items-center gap-1"
        >
          <span>scroll</span>
          <span>↓</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
