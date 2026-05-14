'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const platforms = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    emoji: '💬',
    description: 'Our first hello & every word since',
    href: '/memories/messages/whatsapp',
    gradient: 'from-[#00a884] to-[#005c4b]',
    bgGlow: 'rgba(0, 168, 132, 0.3)',
    borderColor: 'rgba(0, 168, 132, 0.4)',
    badge: '47,235 msgs',
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8">
        <path d="M16 2C8.28 2 2 8.28 2 16c0 2.44.65 4.72 1.78 6.7L2 30l7.5-1.75A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm7.42 19.42c-.3.85-1.77 1.62-2.42 1.72-.6.09-1.38.13-2.23-.14-.51-.16-1.17-.38-2-.74-3.53-1.52-5.83-5.07-6.01-5.31-.18-.24-1.46-1.94-1.46-3.7 0-1.76.92-2.63 1.25-2.99.33-.36.72-.45.96-.45.24 0 .48.01.69.01.22 0 .52-.08.81.62.3.72 1.02 2.48 1.11 2.66.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.37.47-.53.63-.18.18-.36.37-.16.73.2.36.9 1.49 1.93 2.41 1.33 1.18 2.44 1.55 2.8 1.72.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.09.99 2.45 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.72z"/>
      </svg>
    ),
  },
  {
    id: 'telegram',
    name: 'Telegram',
    emoji: '✈️',
    description: 'Quick voice notes & midnight talks',
    href: '/memories/messages/telegram',
    gradient: 'from-[#2ca5e0] to-[#1a7bba]',
    bgGlow: 'rgba(44, 165, 224, 0.3)',
    borderColor: 'rgba(44, 165, 224, 0.4)',
    badge: 'Sweet memories',
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8">
        <path d="M16 2C8.28 2 2 8.28 2 16s6.28 14 14 14 14-6.28 14-14S23.72 2 16 2zm6.93 9.54-2.3 10.84c-.17.76-.63.95-1.27.59l-3.5-2.58-1.69 1.63c-.19.19-.34.34-.7.34l.25-3.56 6.47-5.84c.28-.25-.06-.39-.43-.14L8.93 17.6l-3.42-1.07c-.74-.23-.76-.74.16-1.1l13.36-5.15c.62-.22 1.16.15.9 1.26z"/>
      </svg>
    ),
  },
  {
    id: 'snapchat',
    name: 'Snapchat',
    emoji: '👻',
    description: 'Snaps that made us smile forever',
    href: '/memories/messages/snapchat',
    gradient: 'from-[#FFFC00] to-[#f0e000]',
    bgGlow: 'rgba(255, 252, 0, 0.25)',
    borderColor: 'rgba(255, 252, 0, 0.4)',
    badge: 'Best moments',
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8 text-black">
        <path d="M16.07 2c-.37 0-3.66.1-5.32 3.38-.5.99-.44 2.67-.38 4.06v.04c-.38.22-1.13.17-1.64-.06-.27-.13-.57-.05-.72.18-.16.24-.1.56.13.76.04.04 1 .9 2.28.9.08 0 .17 0 .25-.01.28 1.08.87 2.7 2.2 4.1-1.12.5-3.29 1.18-6.5 1.18-.28 0-.5.2-.5.47 0 1.38 3.34 2.21 5.6 2.58.08.48.19 1.56-.15 2.12-.12.19-.06.45.14.57.78.47 3.04.6 4.15.6.32 0 .52-.01.52-.01s.2.01.52.01c1.11 0 3.37-.13 4.15-.6.2-.12.26-.38.14-.57-.34-.56-.23-1.64-.15-2.12 2.26-.37 5.6-1.2 5.6-2.58 0-.27-.22-.47-.5-.47-3.22 0-5.39-.68-6.5-1.18 1.33-1.4 1.92-3.02 2.2-4.1.08.01.17.01.25.01 1.28 0 2.24-.86 2.28-.9.23-.2.29-.52.13-.76-.15-.23-.45-.31-.72-.18-.51.23-1.27.28-1.64.06v-.04c.06-1.39.12-3.07-.38-4.06C19.73 2.1 16.44 2 16.07 2z"/>
      </svg>
    ),
  },
  {
    id: 'instagram',
    name: 'Instagram',
    emoji: '💜',
    description: 'DMs full of love & late night vibes',
    href: '/memories/messages/instagram',
    gradient: 'from-[#833ab4] via-[#fd1d1d] to-[#fcb045]',
    bgGlow: 'rgba(131, 58, 180, 0.3)',
    borderColor: 'rgba(131, 58, 180, 0.4)',
    badge: 'DM memories',
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8">
        <path d="M16 4.9c3.7 0 4.1.01 5.6.08 1.35.06 2.09.29 2.57.48.65.25 1.11.55 1.6 1.03.48.49.78.95 1.03 1.6.19.48.42 1.22.48 2.57.07 1.5.08 1.94.08 5.6s-.01 4.1-.08 5.6c-.06 1.35-.29 2.09-.48 2.57-.25.65-.55 1.11-1.03 1.6-.49.48-.95.78-1.6 1.03-.48.19-1.22.42-2.57.48-1.5.07-1.94.08-5.6.08s-4.1-.01-5.6-.08c-1.35-.06-2.09-.29-2.57-.48-.65-.25-1.11-.55-1.6-1.03a4.27 4.27 0 0 1-1.03-1.6c-.19-.48-.42-1.22-.48-2.57C4.91 20.1 4.9 19.66 4.9 16s.01-4.1.08-5.6c.06-1.35.29-2.09.48-2.57.25-.65.55-1.11 1.03-1.6A4.27 4.27 0 0 1 8.09 5.2c.48-.19 1.22-.42 2.57-.48C12 4.91 12.44 4.9 16 4.9M16 3c-3.76 0-4.23.02-5.71.08-1.48.07-2.49.31-3.37.65a6.8 6.8 0 0 0-2.46 1.6A6.8 6.8 0 0 0 2.87 7.8c-.34.88-.58 1.89-.65 3.37C2.16 12.65 2.14 13.12 2.14 16s.02 3.35.08 4.83c.07 1.48.31 2.49.65 3.37a6.8 6.8 0 0 0 1.6 2.46 6.8 6.8 0 0 0 2.46 1.6c.88.34 1.89.58 3.37.65 1.48.07 1.95.08 4.71.08s3.23-.01 4.71-.08c1.48-.07 2.49-.31 3.37-.65a6.8 6.8 0 0 0 2.46-1.6 6.8 6.8 0 0 0 1.6-2.46c.34-.88.58-1.89.65-3.37.07-1.48.08-1.95.08-4.83s-.01-3.35-.08-4.83c-.07-1.48-.31-2.49-.65-3.37a6.8 6.8 0 0 0-1.6-2.46A6.8 6.8 0 0 0 24.17 3.65C23.29 3.31 22.28 3.07 20.8 3 19.32 2.93 18.85 2.91 16 2.91z"/>
        <circle cx="16" cy="16" r="4.4"/>
        <circle cx="21.3" cy="10.7" r="1.15"/>
      </svg>
    ),
  },
]

export default function MessagesPage() {
  return (
    <section className="min-h-dvh py-8 px-4 flex flex-col items-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="font-heading text-4xl sm:text-5xl gradient-text mb-2">Our Messages</h1>
        <p className="text-white/40 text-sm font-sans">Every word, saved forever 💬</p>
      </motion.div>

      {/* Platform Grid */}
      <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-5">
        {platforms.map((platform, i) => (
          <motion.div
            key={platform.id}
            initial={{ opacity: 0, y: 40, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: i * 0.1, type: 'spring', stiffness: 200 }}
          >
            <Link href={platform.href} id={`platform-${platform.id}`}>
              <div
                className="group relative rounded-3xl p-6 cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${platform.borderColor}`,
                  boxShadow: `0 8px 32px ${platform.bgGlow}, inset 0 1px 0 rgba(255,255,255,0.07)`,
                }}
              >
                {/* Glow blob */}
                <div
                  className="absolute -top-6 -right-6 w-28 h-28 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle, ${platform.bgGlow}, transparent)` }}
                />

                {/* Icon row */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <span className={platform.id === 'snapchat' ? 'text-black' : 'text-white'}>
                      {platform.icon}
                    </span>
                  </div>
                  <span
                    className="text-[10px] font-sans px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.55)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {platform.badge}
                  </span>
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h2 className="text-white font-semibold text-lg mb-1 font-sans">{platform.name}</h2>
                  <p className="text-white/45 text-sm font-sans leading-snug">{platform.description}</p>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-5 right-5 text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all duration-200 text-lg">
                  →
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Romantic footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-white/20 text-xs font-sans text-center"
      >
        Every platform, one love story 💌
      </motion.p>
    </section>
  )
}
