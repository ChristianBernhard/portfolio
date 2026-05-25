const typographyPlugin = require('@tailwindcss/typography')

const typographyStyles = require('./typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  plugins: [typographyPlugin],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(0.6rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'cta-invite': {
          '0%, 100%': {
            boxShadow:
              '0 1px 2px 0 rgb(28 25 23 / 0.05), 0 0 0 1px rgb(28 25 23 / 0.06)',
          },
          '50%': {
            boxShadow:
              '0 6px 16px -4px rgb(28 25 23 / 0.12), 0 0 0 1px rgb(28 25 23 / 0.1)',
          },
        },
        'cta-invite-dark': {
          '0%, 100%': {
            boxShadow:
              '0 1px 2px 0 rgb(0 0 0 / 0.2), 0 0 0 1px rgb(255 255 255 / 0.06)',
          },
          '50%': {
            boxShadow:
              '0 6px 16px -4px rgb(0 0 0 / 0.35), 0 0 0 1px rgb(255 255 255 / 0.12)',
          },
        },
        'cta-arrow-nudge': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(0.35rem)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.65s cubic-bezier(0.22, 1, 0.36, 1) both',
        'cta-invite': 'cta-invite 3.5s ease-in-out infinite',
        'cta-invite-dark': 'cta-invite-dark 3.5s ease-in-out infinite',
        'cta-arrow-nudge': 'cta-arrow-nudge 1.6s ease-in-out infinite',
      },
    },
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: typographyStyles,
  },
}
