import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        'space-deep':  '#0a0010',
        'space-mid':   '#12001f',
        'space-surf':  '#1a0030',
        'rose-gold':   '#c9a96e',
        'blush':       '#ffb6c1',
        'lavender':    '#bf9fff',
        'wa-green':    '#005c4b',
        'wa-bg':       '#0b141a',
      },
      backgroundImage: {
        'space-gradient': 'radial-gradient(ellipse at top, #1a0030 0%, #0a0010 60%)',
        'love-gradient': 'linear-gradient(135deg, #c9a96e 0%, #bf9fff 50%, #ffb6c1 100%)',
      },
      animation: {
        'float-up': 'floatUp var(--duration,12s) var(--delay,0s) linear infinite',
        'bob': 'bob 3s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        floatUp: {
          '0%':   { transform: 'translateY(110vh) translateX(0)', opacity: '0' },
          '10%':  { opacity: '1' },
          '50%':  { transform: 'translateY(50vh) translateX(var(--sway,20px))' },
          '90%':  { opacity: '0.6' },
          '100%': { transform: 'translateY(-10vh) translateX(0)', opacity: '0' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%':      { transform: 'scale(1.15)' },
          '28%':      { transform: 'scale(1)' },
          '42%':      { transform: 'scale(1.1)' },
          '70%':      { transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(191,159,255,0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(191,159,255,0.6)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
