'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { Home, Sparkles, MessageCircle, Mail, Calendar } from 'lucide-react'

const navItems = [
  { href: '/', icon: <Home size={20} />, label: 'Home' },
  { href: '/memories/gallery', icon: <Sparkles size={20} />, label: 'Memories' },
  { href: '/memories/messages', icon: <MessageCircle size={20} />, label: 'Messages' },
  { href: '/letters', icon: <Mail size={20} />, label: 'Letters' },
  { href: '/timeline', icon: <Calendar size={20} />, label: 'Timeline' },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: 'linear-gradient(to top, rgba(10,0,16,0.98) 0%, rgba(10,0,16,0.92) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-0.5 min-w-[44px] min-h-[44px] justify-center relative"
            >
              {isActive && (
                <motion.div
                  layoutId="bottom-nav-indicator"
                  className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #bf9fff, #c9a96e)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <motion.span
                animate={isActive ? { y: -3 } : { y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="text-xl"
              >
                {item.icon}
              </motion.span>
              <span
                className={`text-[10px] font-sans transition-colors duration-200 ${
                  isActive ? 'text-lavender font-medium' : 'text-white/40'
                }`}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
