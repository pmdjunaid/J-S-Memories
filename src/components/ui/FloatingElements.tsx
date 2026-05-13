'use client'

import { Heart, Sparkles, Star, Flower2 } from 'lucide-react'

const ELEMENTS = [
  { icon: <Flower2 />, size: 18, color: '#ffb6c1' },
  { icon: <Heart />, size: 16, color: '#ff6b8a' },
  { icon: <Sparkles />, size: 14, color: '#bf9fff' },
  { icon: <Star />, size: 12, color: '#ffd700' },
  { icon: <Flower2 />, size: 22, color: '#ffb6c1' },
  { icon: <Sparkles />, size: 16, color: '#bf9fff' },
  { icon: <Heart />, size: 18, color: '#ff6b8a' },
  { icon: <Heart />, size: 14, color: '#ffb6c1' },
]

interface FloatItem {
  id: number
  icon: React.ReactNode
  size: number
  left: string
  duration: number
  delay: number
  sway: number
  opacity: number
  color: string
}

export default function FloatingElements() {
  const items: FloatItem[] = Array.from({ length: 8 }, (_, i) => {
    const el = ELEMENTS[i % ELEMENTS.length]
    return {
      id: i,
      icon: el.icon,
      size: el.size + Math.random() * 8,
      left: `${8 + i * 11 + Math.random() * 5}%`,
      duration: 12 + Math.random() * 10,
      delay: i * -2.5,
      sway: 20 + Math.random() * 30,
      opacity: 0.4 + Math.random() * 0.4,
      color: el.color,
    }
  })

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute bottom-0 select-none"
          style={{
            left: item.left,
            width: `${item.size}px`,
            height: `${item.size}px`,
            opacity: item.opacity,
            color: item.color,
            animation: `floatUp ${item.duration}s ${item.delay}s linear infinite`,
            ['--sway' as string]: `${item.sway}px`,
            filter: 'drop-shadow(0 0 6px rgba(201,169,110,0.6))',
          }}
        >
          {item.icon}
        </div>
      ))}
      <style jsx>{`
        @keyframes floatUp {
          0% { transform: translateY(110vh) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(50vh) translateX(var(--sway)); }
          90% { opacity: 0.6; }
          100% { transform: translateY(-10vh) translateX(0); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
