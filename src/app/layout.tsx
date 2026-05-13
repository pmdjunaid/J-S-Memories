import type { Metadata } from 'next'
import Image from 'next/image'
import './globals.css'
import FloatingElements from '@/components/ui/FloatingElements'
import BottomNav from '@/components/layout/BottomNav'
import DesktopNav from '@/components/layout/DesktopNav'
import ParticleBackground from '@/components/ui/ParticleBackground'
import GlobalAuthLock from '@/components/layout/GlobalAuthLock'

export const metadata: Metadata = {
  title: 'J & S Memories — Our Little Universe 💫',
  description: 'A romantic memory website for Junaid & 〽️annu. Every moment, saved forever.',
  keywords: ['love', 'memories', 'romantic', 'junaid', 'annu'],
  openGraph: {
    title: 'J & S Memories 💫',
    description: 'Every moment, saved forever. A love story.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'J & S Memories' }],
  },
  manifest: '/manifest.json',
}

export const viewport = {
  themeColor: '#0a0010',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <GlobalAuthLock>
          {/* Persistent background layers */}
          <div className="fixed inset-0 z-0 bg-[#0a0010]">
            <Image
              src="/bg-main.png"
              alt="Background"
              fill
              priority
              quality={90}
              className="object-cover object-center opacity-60"
              sizes="100vw"
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0010]/80 via-transparent to-[#0a0010]/90" />
          </div>
          <ParticleBackground />
          <FloatingElements />

          {/* Navigation */}
          <DesktopNav />
          <BottomNav />

          {/* Page content */}
          <main className="relative z-20 min-h-dvh pb-nav">
            {children}
          </main>
        </GlobalAuthLock>
      </body>
    </html>
  )
}
