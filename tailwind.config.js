/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter':['Inter', 'Sans-Serif']
      },

      screens: {
        'lg': '1135px',
        'md': {'max': '875px'}
    
      },

    },
  },
  plugins: [],
}

