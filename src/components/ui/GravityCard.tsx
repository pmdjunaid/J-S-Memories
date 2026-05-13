'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface GravityCardProps {
  children: ReactNode
  className?: string
  floatIntensity?: number
  glowColor?: string
  delay?: number
  disableBob?: boolean
}

export default function GravityCard({
  children,
  className = '',
  floatIntensity = 8,
  glowColor = '#bf9fff',
  delay = 0,
  disableBob = false,
}: GravityCardProps) {
  const prefersReducedMotion = useReducedMotion()

  const bobAnimation: any = prefersReducedMotion || disableBob
    ? {}
    : {
        y: [0, -floatIntensity, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      animate={bobAnimation}
      className={`
        relative rounded-2xl border border-white/10 
        bg-white/5 backdrop-blur-md
        ${className}
      `}
      style={{
        boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06), 0 0 40px ${glowColor}22`,
      }}
    >
      {children}
    </motion.div>
  )
}
