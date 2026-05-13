'use client'

import { useEffect, useState } from 'react'

interface TypewriterTextProps {
  text: string
  speed?: number
  className?: string
  onDone?: () => void
  cursor?: boolean
}

export default function TypewriterText({
  text,
  speed = 35,
  className = '',
  onDone,
  cursor = true,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    let i = 0
    const id = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(id)
        setDone(true)
        onDone?.()
      }
    }, speed)
    return () => clearInterval(id)
  }, [text, speed, onDone])

  return (
    <span className={className}>
      {displayed}
      {cursor && (
        <span
          className="inline-block w-0.5 h-[1em] bg-rose-gold ml-0.5 align-middle"
          style={{
            animation: done ? 'blink 1s step-end infinite' : 'none',
            opacity: done ? undefined : 1,
          }}
        />
      )}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  )
}
