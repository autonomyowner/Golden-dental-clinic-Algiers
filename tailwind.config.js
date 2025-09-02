/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'golden-amber': '#f59e0b', // amber-500
        'golden-slate': '#0f172a',
        'golden-amber-light': '#fbbf24', // amber-400 for highlights
        'golden-amber-dark': '#d97706', // amber-600 for darker accents
      },
      backgroundImage: {
        'gradient-golden': 'linear-gradient(to bottom right, #0f172a, #f59e0b, #0f172a)', // slate-900, amber-500, slate-900
      }
    },
  },
  plugins: [],
} 