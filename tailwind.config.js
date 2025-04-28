/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-blue': '#1e3a8a',
        'cosmic-blue-light': '#3b82f6',
        'cosmic-purple': '#4c1d95',
        'cosmic-purple-light': '#8b5cf6',
        'cosmic-red': '#991b1b',
        'cosmic-red-light': '#ef4444',
        'cosmic-orange': '#c2410c',
        'cosmic-orange-light': '#f97316',
        'cosmic-black': '#0f172a',
        'cosmic-gray': '#1e293b',
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
          '0%': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6' },
          '100%': { textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0073e6, 0 0 40px #0073e6' },
        }
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(to bottom, #0f172a, #1e293b)',
        'cosmic-grid': 'radial-gradient(#3b82f6 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

