/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        star: 'rgb(var(--color-star) / <alpha-value>)',
        'on-accent': 'rgb(var(--color-on-accent) / <alpha-value>)',
        terracotta: {
          DEFAULT: '#C8643E',
          soft: '#D98A68',
        },
        mustard: {
          DEFAULT: '#D4A82A',
          soft: '#E4C45E',
        },
        teal: {
          DEFAULT: '#4E928F',
          soft: '#73AAA7',
        },
        'brand-teal': '#4E928F',
        'brand-cream': '#F6F0E0',
        olive: {
          DEFAULT: '#5C6B3C',
          soft: '#859468',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        label: '0.12em',
        wide2: '0.18em',
      },
      maxWidth: {
        studio: '1320px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'float-pet': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'spin-slow': 'spin-slow 16s linear infinite',
        'float-pet': 'float-pet 3s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
