'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GroupedVirtuoso, VirtuosoHandle } from 'react-virtuoso'
import WhatsAppBubble from '@/components/ui/WhatsAppBubble'
import { pinnedMessages, Message } from '@/data/messages'
import { coupleConfig } from '@/config/couple'

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const virtuosoRef = useRef<VirtuosoHandle>(null)

  useEffect(() => {
    fetch('/data/all_messages.json')
      .then((res) => res.json())
      .then((data) => {
        setMessages(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to load messages', err)
        setLoading(false)
      })
  }, [])

  // Process groups for Virtuoso
  const { groups, groupLabels } = useMemo(() => {
    if (!messages.length) return { groups: [], groupLabels: [] }

    const g: number[] = []
    const gl: string[] = []
    let currentGroupCount = 0
    let currentDate = null

    for (const msg of messages) {
      if (msg.date !== currentDate) {
        if (currentDate !== null) {
          g.push(currentGroupCount)
        }
        currentDate = msg.date
        gl.push(currentDate as string)
        currentGroupCount = 1
      } else {
        currentGroupCount++
      }
    }
    g.push(currentGroupCount)

    return { groups: g, groupLabels: gl }
  }, [messages])

  // Extract unique months for quick jump
  const monthsMap = useMemo(() => {
    const map = new Map<string, number>()
    groupLabels.forEach((date, groupIndex) => {
      // Date format is M/D/YY or M/D/YYYY
      const parts = date.split('/')
      if (parts.length === 3) {
        const month = parseInt(parts[0], 10)
        const year = parts[2].length === 2 ? `20${parts[2]}` : parts[2]
        const monthName = new Date(parseInt(year), month - 1).toLocaleString('default', { month: 'short' })
        const label = `${monthName} ${year}`
        if (!map.has(label)) {
          map.set(label, groupIndex)
        }
      }
    })
    return Array.from(map.entries()) // [label, groupIndex]
  }, [groupLabels])

  return (
    <section className="min-h-dvh py-8 px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h1 className="font-heading text-4xl sm:text-5xl gradient-text mb-2">Our Messages</h1>
        <p className="text-white/40 text-sm font-sans">Every word, saved forever 💬</p>
      </motion.div>

      <div className="w-full max-w-md">
        {/* WhatsApp Phone Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          style={{
            boxShadow: '0 30px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)',
            height: '70vh',
            maxHeight: 650,
          }}
        >
          {/* WhatsApp Header */}
          <div
            className="px-4 py-3 flex items-center gap-3 shrink-0 relative z-10"
            style={{ background: '#1f2c34' }}
          >
            <button className="text-white/50 text-xl mr-1">←</button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lavender to-rose-gold flex items-center justify-center text-lg shrink-0">
              〽️
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{coupleConfig.whatsAppName}</p>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                <span className="text-green-400 text-xs">online</span>
              </div>
            </div>
            <div className="flex gap-3 text-white/40 shrink-0">
              <span>📞</span>
              <span>⋮</span>
            </div>
          </div>

          {/* Pinned Message */}
          <div
            className="px-3 py-2 flex items-center gap-2 border-b border-white/5 shrink-0 relative z-10"
            style={{ background: '#192028' }}
          >
            <span className="text-red-400 text-xs">❤️</span>
            <div className="flex-1 min-w-0">
              <p className="text-white/30 text-[10px] font-sans">Pinned message</p>
              <p className="text-white/60 text-xs truncate font-sans">{pinnedMessages[0].text}</p>
            </div>
          </div>

          {/* Jump to Month Selector */}
          <div className="shrink-0 bg-[#0b141a] px-3 py-2 border-b border-white/5 flex gap-2 overflow-x-auto scrollbar-hide relative z-10" style={{ scrollbarWidth: 'none' }}>
            {monthsMap.map(([label, groupIndex]) => (
              <button
                key={label}
                onClick={() => {
                  virtuosoRef.current?.scrollToIndex({
                    index: groupIndex,
                    align: 'start',
                    behavior: 'smooth'
                  })
                }}
                className="whitespace-nowrap px-3 py-1 rounded-full text-[10px] font-sans"
                style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)' }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Chat area (Virtualized) */}
          <div className="wa-chat-bg flex-1 overflow-hidden relative">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-lavender border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <GroupedVirtuoso
                ref={virtuosoRef}
                style={{ height: '100%' }}
                groupCounts={groups}
                groupContent={(index) => (
                  <div className="flex justify-center py-4">
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-sans shadow-md"
                      style={{ background: '#1f2c34', color: 'rgba(255,255,255,0.6)' }}
                    >
                      {groupLabels[index]}
                    </span>
                  </div>
                )}
                itemContent={(index, groupIndex) => {
                  const message = messages[index]
                  return <WhatsAppBubble key={message.id || index} message={message} index={0} />
                }}
              />
            )}
          </div>
        </motion.div>

        {/* Message count */}
        {!loading && (
          <p className="text-center text-white/20 text-xs font-sans mt-4">
            Viewing all {messages.length.toLocaleString()} real messages 💌
          </p>
        )}
      </div>
    </section>
  )
}
