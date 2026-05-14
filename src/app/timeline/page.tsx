'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { timelineMilestones } from '@/data/memories'

import { 
  MessageCircle, 
  Users, 
  Moon, 
  Gem, 
  Sparkles, 
  Heart, 
  Smile, 
  Bird, 
  Timer,
  Calendar,
  Music,
  Pause,
  Play
} from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle size={20} />,
  Users:         <Users size={20} />,
  Moon:          <Moon size={20} />,
  Gem:           <Gem size={20} />,
  Sparkles:      <Sparkles size={20} />,
  Heart:         <Heart size={20} />,
  Smile:         <Smile size={20} />,
  Bird:          <Bird size={20} />,
  Timer:         <Timer size={20} />,
}

const typeColors: Record<string, string> = {
  meet:    '#ffb6c1',
  message: '#bf9fff',
  special: '#c9a96e',
  love:    '#ff6b8a',
  trip:    '#7ec8e3',
  birthday:'#ffd700',
}

export default function TimelinePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // Initialize audio
    const audio = new Audio('Music/Chal Diye Tum Kahan (PenduJatt.Com.Se).mp3')
    audio.loop = true
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ""
    }
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="min-h-dvh py-10 px-6" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="font-heading text-4xl sm:text-6xl gradient-text mb-2">Our Timeline</h1>
        <p className="text-white/40 text-sm font-sans">Every chapter of our story 📖</p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 timeline-line hidden sm:block" />

        {/* Mobile left line */}
        <div className="absolute left-6 top-0 bottom-0 w-px timeline-line sm:hidden" />

        <div className="space-y-12">
          {timelineMilestones.map((milestone, i) => (
            <TimelineCard key={milestone.id} milestone={milestone} index={i} />
          ))}
        </div>
      </div>

      {/* Floating Music Control */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="fixed bottom-24 right-8 md:bottom-8 z-[60] p-4 rounded-full glass border border-white/10 shadow-2xl hover:bg-white/10 transition-all group"
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <Pause size={24} className="text-pink-400" />
          ) : (
            <Play size={24} className="text-white/60" />
          )}
          {/* Animated rings when playing */}
          {isPlaying && (
            <>
              <div className="absolute inset-0 rounded-full border border-pink-400/50 animate-ping" />
              <motion.div
                animate={{ 
                  y: [-2, -8, -2],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-3 -right-3"
              >
                <Music size={14} className="text-pink-300" />
              </motion.div>
            </>
          )}
        </div>
      </motion.button>
    </section>
  )
}

function TimelineCard({ milestone, index }: { milestone: typeof timelineMilestones[0]; index: number }) {
  const isLeft = milestone.side === 'left'
  const color = typeColors[milestone.type] ?? '#bf9fff'

  return (
    <div className={`relative flex ${isLeft ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-start gap-6`}>
      {/* Desktop: spacer column */}
      <div className="hidden sm:block flex-1" />

      {/* Center dot (desktop) */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
        className="hidden sm:flex absolute left-1/2 top-4 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center text-xl z-10 shadow-lg"
        style={{ background: `${color}22`, border: `2px solid ${color}66`, boxShadow: `0 0 20px ${color}44` }}
      >
        {iconMap[milestone.icon] || <Calendar size={20} />}
      </motion.div>

      {/* Mobile dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', delay: 0.1 }}
        className="sm:hidden flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl z-10 ml-1"
        style={{ background: `${color}22`, border: `2px solid ${color}66` }}
      >
        {iconMap[milestone.icon] || <Calendar size={20} />}
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: index * 0.05 }}
        className="flex-1 glass rounded-xl p-5 relative group hover:glass-strong transition-all duration-300"
        style={{
          borderColor: `${color}22`,
          boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px ${color}11`,
        }}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: `0 0 40px ${color}18`, background: `${color}04` }}
        />

        <div className="flex items-start gap-3">
          <div className="flex-1">
            <span
              className="inline-block text-xs font-sans tracking-wider mb-2 px-2 py-0.5 rounded-full"
              style={{ background: `${color}18`, color }}
            >
              {milestone.date}
            </span>
            <h3 className="font-heading text-xl text-white mb-2">{milestone.title}</h3>
            <p className="text-white/60 text-sm font-sans leading-relaxed">{milestone.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
