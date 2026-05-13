'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, ChevronLeft, ChevronRight, X, Sparkles, Heart, Moon, Book, Timer, Smile } from 'lucide-react'
import { memories } from '@/data/memories'

// Placeholder gallery items (add real photos to /public/images/gallery/)
const galleryItems = [
  { id: 'g1', src: null, title: 'First Hello', date: 'Aug 2023', location: 'Chittoor', icon: <Smile size={48} />, mood: '😊', rotation: -2 },
  { id: 'g1.5', src: '/imgs/gift.jpg', title: 'First Gift', date: 'Aug 2023', location: 'Chittoor', icon: <Heart size={48} />, mood: '🎁', rotation: 3 },
  { id: 'g2', src: null, title: 'Friendship Day', date: 'Aug 2023', location: 'Chittoor', icon: <Heart size={48} />, mood: '🥰', rotation: 1 },
  { id: 'g3', src: null, title: 'Late Night Chats', date: 'Sep 2023', location: 'Home', icon: <Moon size={48} />, mood: '🌙', rotation: -1 },
  { id: 'g4', src: null, title: 'Study Break', date: 'Oct 2023', location: 'Tirupati', icon: <Book size={48} />, mood: '📚', rotation: 2 },
  { id: 'g5', src: null, title: 'Something Changed', date: 'May 2024', location: '♾️', icon: <Sparkles size={48} />, mood: '💫', rotation: -3 },
  { id: 'g6', src: null, title: '"Little Bit Love"', date: 'Jun 2024', location: 'Our Universe', icon: <Heart size={48} />, mood: '❤️', rotation: 1.5 },
  { id: 'g7', src: null, title: 'First nd Last', date: 'Jan 2025', location: '∞', icon: <Heart size={48} />, mood: '💖', rotation: -1 },
  { id: 'g8', src: null, title: 'Always Waiting', date: 'Feb 2026', location: 'Forever', icon: <Timer size={48} />, mood: '⏳', rotation: 2 },
]

const months = Array.from(new Set(galleryItems.map(g => g.date.split(' ')[1] + ' ' + g.date.split(' ')[0])))

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<typeof galleryItems[0] | null>(null)
  const [lightboxIdx, setLightboxIdx] = useState(0)

  const openLightbox = (item: typeof galleryItems[0], idx: number) => {
    setLightbox(item)
    setLightboxIdx(idx)
  }

  const nextPhoto = () => {
    const next = (lightboxIdx + 1) % galleryItems.length
    setLightbox(galleryItems[next])
    setLightboxIdx(next)
  }

  const prevPhoto = () => {
    const prev = (lightboxIdx - 1 + galleryItems.length) % galleryItems.length
    setLightbox(galleryItems[prev])
    setLightboxIdx(prev)
  }

  return (
    <section className="min-h-dvh py-10 px-5">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="font-heading text-4xl sm:text-6xl gradient-text mb-2">Memory Gallery</h1>
        <p className="text-white/40 text-sm font-sans flex items-center justify-center gap-2">
          Every picture, a whole world <Camera size={16} />
        </p>
        <p className="text-white/20 text-xs font-sans mt-1">Add photos to /public/images/gallery/ to display here</p>
      </motion.div>

      {/* Masonry grid */}
      <div className="max-w-5xl mx-auto columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40, rotate: item.rotation - 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: item.rotation }}
            viewport={{ once: true, margin: '-30px' }}
            whileHover={{ scale: 1.04, rotate: 0, zIndex: 10 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            onClick={() => openLightbox(item, i)}
            className="break-inside-avoid mb-4 cursor-pointer relative group"
            style={{ transform: `rotate(${item.rotation}deg)` }}
          >
            {/* Animated Background Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            <div
              className="relative w-full bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-3 flex flex-col h-full shadow-2xl overflow-hidden"
            >
              {/* Photo placeholder */}
              <div
                className="w-full relative flex items-center justify-center rounded-3xl overflow-hidden"
                style={{
                  height: i % 3 === 0 ? 200 : i % 3 === 1 ? 160 : 240,
                  background: `linear-gradient(135deg, ${
                    i % 2 === 0 ? '#1a0030, #2a0050' : '#0a0010, #1a0030'
                  })`,
                }}
              >
                {item.src ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-4">
                    <div className="mb-2 text-lavender flex justify-center">
                      {item.icon}
                    </div>
                    <p className="text-white/30 text-xs font-sans">
                      {item.title}
                    </p>
                  </div>
                )}

                {/* Caption overlay */}
                <motion.div
                  initial={{ y: '100%' }}
                  whileHover={{ y: '0%' }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-3 pt-6"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}
                >
                  <p className="text-white text-xs font-sans font-medium">{item.title}</p>
                  <p className="text-white/50 text-[10px] font-sans">{item.date} · {item.location}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-lg w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Full photo */}
              <div
                className="w-full flex items-center justify-center"
                style={{
                  height: '60vh',
                  background: 'linear-gradient(135deg, #1a0030, #2a0050)',
                }}
              >
                {lightbox.src ? (
                  <img
                    src={lightbox.src}
                    alt={lightbox.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-center">
                    <div className="mb-4 text-lavender flex justify-center scale-[2]">
                      {lightbox.icon}
                    </div>
                    <p className="text-white/40 text-sm font-sans">
                      {lightbox.title}
                    </p>
                  </div>
                )}
              </div>

              {/* Caption */}
              <div className="p-4 bg-[#0a0010]">
                <p className="text-white font-heading text-xl">{lightbox.title}</p>
                <p className="text-white/50 text-sm font-sans mt-1">{lightbox.date} · {lightbox.location}</p>
              </div>

              {/* Navigation */}
              <button onClick={prevPhoto} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"><ChevronLeft size={24} /></button>
              <button onClick={nextPhoto} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"><ChevronRight size={24} /></button>
              <button onClick={() => setLightbox(null)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white/60 flex items-center justify-center hover:text-white transition-colors"><X size={18} /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
