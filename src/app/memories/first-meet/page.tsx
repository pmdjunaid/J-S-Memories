'use client'

import { motion } from 'framer-motion'
import GravityCard from '@/components/ui/GravityCard'
import TypewriterText from '@/components/ui/TypewriterText'
import { coupleConfig } from '@/config/couple'

export default function FirstMeetPage() {
  return (
    <section className="min-h-dvh py-20 px-6 flex flex-col items-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        {/* Floating date badge */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-sans tracking-widest uppercase"
          style={{ background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.3)', color: '#c9a96e' }}
        >
          📅 August 5, 2023 · Chittoor
        </motion.div>

        <h1 className="font-heading text-4xl sm:text-6xl gradient-text text-glow mb-3">
          Our First Hello
        </h1>
        <p className="text-white/50 font-sans text-sm max-w-md mx-auto">
          A childhood friendship of 15 years — reconnected with one message.
        </p>
      </motion.div>

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-start">
        {/* Left: Polaroid */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -4 }}
          whileInView={{ opacity: 1, x: 0, rotate: -2 }}
          viewport={{ once: true }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="polaroid rounded-lg overflow-hidden mx-auto"
          style={{ maxWidth: 300, transform: 'rotate(-2deg)' }}
        >
          <div
            className="w-full bg-gradient-to-br from-[#1a0030] via-[#2a0050] to-[#0a0010] flex items-center justify-center"
            style={{ height: 320 }}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">💑</div>
              <p className="text-white/40 text-sm font-sans px-4">
                Add your photo here
              </p>
              <p className="text-white/20 text-xs font-sans mt-1 px-4">
                /public/images/first-meet.jpg
              </p>
            </div>
          </div>
          <div className="bg-[#fdfcfb] px-4 py-4">
            <p className="text-gray-700 text-sm font-sans text-center">
              Friendship Day, 2023 🌸
            </p>
            <p className="text-gray-400 text-xs font-sans text-center mt-1">
              {coupleConfig.location}
            </p>
          </div>
        </motion.div>

        {/* Right: Story */}
        <div className="space-y-6">
          <GravityCard glowColor="#c9a96e" className="p-6" delay={0.2}>
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-rose-gold text-sm font-sans">
                  {coupleConfig.person2.name} sent
                </span>
                <span className="text-white/20">·</span>
                <span className="text-white/40 text-xs font-sans">Friendship Day Eve</span>
              </div>

              <div className="text-white/80 font-sans text-sm leading-relaxed">
                <TypewriterText
                  text={`"Happy friendship day Junaid in advance..."\n\nThat was the message. Simple. Warm. After years of silence, she was the one who reached out first.\n\nFifteen years of growing up in the same world — and one message to change everything.`}
                  speed={20}
                />
              </div>
            </div>
          </GravityCard>

          {/* What I felt */}
          <GravityCard glowColor="#bf9fff" className="p-6" delay={0.4}>
            <h3 className="font-heading text-lg text-lavender mb-3">What he felt ✨</h3>
            <p className="text-white/70 font-sans text-sm leading-relaxed italic">
              "She remembered. She always remembered. And that one 'Hi' became the beginning of everything I'd been waiting for without knowing I was waiting."
            </p>
          </GravityCard>

          {/* Quote block — handwritten style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="parchment rounded-xl p-6 relative"
            style={{ transform: 'rotate(0.5deg)' }}
          >
            <span className="text-rose-gold/30 text-6xl font-heading absolute top-2 left-4">"</span>
            <p className="font-heading italic text-xl text-rose-gold/90 leading-relaxed pl-8 pt-4">
              Memories hai ☺️ Hona kya
            </p>
            <p className="text-right text-white/30 text-xs font-sans mt-3">— Junaid, Aug 5, 2023</p>
          </motion.div>

          {/* Memory pills */}
          <div className="flex flex-wrap gap-2">
            {[
              '💬 WhatsApp',
              '📅 Aug 5, 2023',
              '🕕 5:58 PM',
              '🤝 15yr friendship',
              '🎉 Friendship Day',
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-sans"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* First Gift Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 w-full max-w-5xl"
      >
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="font-heading text-4xl text-rose-gold text-glow">The First Gift 🎁</h2>
            <p className="text-white/70 font-sans leading-relaxed text-lg">
              It wasn't just an object; it was a piece of heart. A token of a friendship that was quietly blooming into something more beautiful.
            </p>
            <GravityCard glowColor="#c9a96e" className="p-6">
              <p className="text-white/60 text-sm italic">
                "Every time I look at it, I'm reminded of that day. The way you smiled, the way the air felt... and how lucky I am to have you in my life."
              </p>
            </GravityCard>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="polaroid p-3 bg-white rounded-sm shadow-2xl mx-auto"
            style={{ width: 320, transform: 'rotate(2deg)' }}
          >
             <div className="aspect-[4/5] relative overflow-hidden rounded-sm bg-zinc-900 flex items-center justify-center">
                <img 
                  src="/imgs/gift.jpg" 
                  alt="Our First Gift" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="pt-6 pb-2 text-center">
                <p className="text-gray-800 font-handwriting text-2xl">Our First Gift ✨</p>
                <p className="text-gray-400 text-xs font-sans mt-1">Wrapped with Love</p>
             </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Rose petals overlay gradient */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 20% 80%, rgba(255,182,193,0.05) 0%, transparent 60%)',
        }}
      />
    </section>
  )
}
