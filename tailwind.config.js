/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        satisfy: ['Satisfy', 'cursive'],
        'eb-garamond': ['"EB Garamond"', 'serif'], // Corrected the quote here
        'outfit': ['"Outfit"', 'sans-serif'],
      },
      screens: {
        'custom-sm': { 'min': '320px', 'max': '395px' },
        'custom-m': { 'min': '396px', 'max': '639px' }
        
      },
    },
  },
  plugins: [],
}

