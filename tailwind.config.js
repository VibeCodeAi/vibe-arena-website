/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-blue': '#2B5DFF',
        'cosmic-blue-light': '#5E82FF',
        'cosmic-orange': '#FF6C11',
        'cosmic-orange-light': '#FF8C42',
        'cosmic-red': '#D0302F',
        'cosmic-red-light': '#E35755',
        'cosmic-purple': '#5D3AFF',
        'cosmic-purple-light': '#806DFF',
        'cosmic-black': '#1C1B29',
        'cosmic-gray': '#3F3F4D',
        'cosmic-white': '#F4F4F9',
        'cosmic-green': '#37F289',
        'cosmic-yellow': '#F7D633',
        'cosmic-stone': '#7A7A87',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'cyber': ['Orbitron', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #2B5DFF, 0 0 20px #2B5DFF' },
          '100%': { textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #2B5DFF, 0 0 40px #2B5DFF' },
        }
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(to bottom, #1C1B29, #2A2940)',
        'cosmic-grid': 'radial-gradient(#3F3F4D 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

