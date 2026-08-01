/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm cream base — never stark white, keeps the nostalgic "old browser game" feel
        cream: {
          DEFAULT: '#FFF8EF',
          card: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#3A2E4D',
          soft: '#6E5F82',
        },
        bubblegum: {
          DEFAULT: '#FF8FAB',
          dark: '#E8628C',
          light: '#FFD9E4',
        },
        lavender: {
          DEFAULT: '#B3A0F7',
          dark: '#8C74E0',
          light: '#E6DEFF',
        },
        mint: {
          DEFAULT: '#6FE0C2',
          dark: '#3FBE9C',
          light: '#D2F7EC',
        },
        sun: {
          DEFAULT: '#FFD25E',
          dark: '#F0AE1F',
          light: '#FFF1C7',
        },
        sky: {
          DEFAULT: '#7FCFFF',
          dark: '#4CA9EA',
          light: '#DBF2FF',
        },
      },
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
        body: ['Quicksand', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      boxShadow: {
        chunky: '0 4px 0 0 var(--tw-shadow-color)',
        'chunky-lg': '0 6px 0 0 var(--tw-shadow-color)',
        'chunky-sm': '0 2px 0 0 var(--tw-shadow-color)',
        panel: '6px 6px 0 0 var(--tw-shadow-color)',
      },
      borderRadius: {
        blob: '42% 58% 63% 37% / 41% 45% 55% 59%',
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-slower': 'float 9s ease-in-out infinite',
        wiggle: 'wiggle 2.4s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 2.4s ease-in-out infinite',
        twinkle: 'twinkle 2.2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) translateX(6px) rotate(4deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)', opacity: 0.6 },
          '50%': { transform: 'translateY(8px)', opacity: 1 },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(0.9)' },
          '50%': { opacity: 1, transform: 'scale(1.15)' },
        },
      },
    },
  },
  plugins: [],
}
