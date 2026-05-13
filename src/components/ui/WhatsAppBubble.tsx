'use client'

import { motion } from 'framer-motion'
import { Message } from '@/data/messages'

interface WhatsAppBubbleProps {
  message: Message
  index: number
}

export default function WhatsAppBubble({ message, index }: WhatsAppBubbleProps) {
  const isMe = message.sender === 'me'

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, y: 20 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 24,
        delay: index * 0.06,
      }}
      className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-1.5 px-2`}
    >
      <div className="relative max-w-[78%] sm:max-w-[60%]">
        {/* Bubble */}
        <div
          className={`
            relative px-3.5 py-2 rounded-2xl text-sm leading-relaxed shadow-md
            ${isMe
              ? 'rounded-tr-sm bg-gradient-to-br from-[#005c4b] to-[#00443a] text-white'
              : 'rounded-tl-sm bg-[#1f2c34]/90 text-white/90 border border-white/5'
            }
          `}
        >
          {/* Tail */}
          <div
            className={`absolute top-0 w-2.5 h-2.5 ${
              isMe
                ? '-right-1.5 bg-[#005c4b] rounded-bl-lg clip-tail-right'
                : '-left-1.5 bg-[#1f2c34] rounded-br-lg'
            }`}
            style={{
              clipPath: isMe ? 'polygon(0 0, 0 100%, 100% 0)' : 'polygon(100% 0, 0 0, 100% 100%)',
            }}
          />

          <p className="whitespace-pre-wrap break-words">
            {message.text.split(new RegExp(`(Anniversary|promise|trust|i love you|love you)`, 'gi')).map((part, i) => (
              <span 
                key={i} 
                className={/^(Anniversary|promise|trust|i love you|love you)$/i.test(part) ? "text-rose-300 font-bold drop-shadow-[0_0_8px_rgba(255,182,193,0.8)]" : ""}
              >
                {part}
              </span>
            ))}
          </p>

          {/* Bottom row */}
          <div className={`flex items-center gap-1 mt-0.5 ${isMe ? 'justify-end' : 'justify-start'}`}>
            <span className="text-[10px] text-white/40">{message.time}</span>
            {isMe && (
              <span className="text-[11px] text-[#53bdeb]">✓✓</span>
            )}
          </div>
        </div>

        {/* Reactions */}
        {message.reactions && message.reactions.length > 0 && (
          <motion.div
            initial={{ scale: 0, y: 8 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: index * 0.06 + 0.3, type: 'spring' }}
            className={`absolute -bottom-4 ${isMe ? 'right-2' : 'left-2'} 
              bg-[#1f2c34] border border-white/10 rounded-full px-1.5 py-0.5 text-xs shadow-lg flex gap-0.5`}
          >
            {message.reactions.map((r, i) => (
              <span key={i}>{r}</span>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
