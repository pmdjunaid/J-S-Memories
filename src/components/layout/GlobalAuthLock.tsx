'use client'

import React, { useState, useEffect } from 'react'
import { LoginPassword } from '@/Animations/LoginPassword'

export default function GlobalAuthLock({ children }: { children: React.ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const unlocked = sessionStorage.getItem('js_memories_unlocked')
    if (unlocked === 'true') {
      setIsUnlocked(true)
    }
  }, [])

  if (!isMounted) return null // Prevent hydration mismatch

  if (!isUnlocked) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#0a0010]">
        <LoginPassword
          onUnlock={() => {
            sessionStorage.setItem('js_memories_unlocked', 'true')
            setIsUnlocked(true)
          }}
        />
      </div>
    )
  }

  return <>{children}</>
}
