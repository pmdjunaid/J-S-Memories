'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  color: string
  originalVx: number
  originalVy: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const colors = ['#bf9fff', '#c9a96e', '#ffb6c1', '#d4b8ff', '#e8a0bf']

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    const init = () => {
      const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000))
      particlesRef.current = Array.from({ length: count }, () => {
        const vx = (Math.random() - 0.5) * 0.4
        const vy = -(Math.random() * 0.4 + 0.1)
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx,
          vy,
          radius: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          originalVx: vx,
          originalVy: vy,
        }
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(191,159,255,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 100) {
          const force = (100 - dist) / 100
          p.vx += (dx / dist) * force * 0.5
          p.vy += (dy / dist) * force * 0.5
        } else {
          // Restore original velocity
          p.vx += (p.originalVx - p.vx) * 0.02
          p.vy += (p.originalVy - p.vy) * 0.02
        }

        p.x += p.vx
        p.y += p.vy

        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width }
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color + Math.round(p.opacity * 255).toString(16).padStart(2, '0')
        ctx.fill()
      }

      animFrameRef.current = requestAnimationFrame(draw)
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      }
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}
