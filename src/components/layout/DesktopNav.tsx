'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { coupleConfig } from '@/config/couple'

import { Home, Sparkles, MessageCircle, Mail, Calendar, Lock } from 'lucide-react'

const navItems = [
  { href: '/', icon: <Home size={18} />, label: 'Home' },
  { href: '/memories/gallery', icon: <Sparkles size={18} />, label: 'Memories' },
  { href: '/memories/messages', icon: <MessageCircle size={18} />, label: 'Messages' },
  { href: '/letters', icon: <Mail size={18} />, label: 'Letters' },
  { href: '/timeline', icon: <Calendar size={18} />, label: 'Timeline' },
  { href: '/secret', icon: <Lock size={18} />, label: 'Secret' },
]

export default function DesktopNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-8 py-4"
      style={{
        background: 'rgba(10,0,16,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <Link href="/" className="font-heading text-xl text-rose-gold">
        J <span className="text-white/30">&</span> S Memories
      </Link>
      <div className="flex items-center gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 rounded-full text-sm font-sans transition-all duration-200 flex items-center gap-1.5 ${
                isActive ? 'text-white' : 'text-white/50 hover:text-white/80'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="desktop-nav-bg"
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'rgba(191,159,255,0.12)', border: '1px solid rgba(191,159,255,0.2)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span>{item.icon}</span>
              <span className="relative z-10">{item.label}</span>
            </Link>
          )
        })}
      </div>
      <div className="text-xs text-white/30 font-sans">{coupleConfig.tagline}</div>
    </nav>
  )
}
