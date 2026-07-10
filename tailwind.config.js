/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core dark palette — charcoal/navy background, never pure black
        base: {
          DEFAULT: '#0D0D1A',
          light: '#161629',
          card: '#14141F',
        },
        gold: {
          DEFAULT: '#B8962E',
          light: '#D4B65A',
        },
        lavender: {
          DEFAULT: '#AFA9EC',
          light: '#C9C5F5',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'drift': 'drift 60s linear infinite',
        'bounce-slow': 'bounceSlow 2.4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        drift: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
          '100%': { transform: 'translateY(0) translateX(0)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)', opacity: 0.6 },
          '50%': { transform: 'translateY(8px)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
