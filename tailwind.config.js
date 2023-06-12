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
        'sm': {'max':'536px'},
        'md': {'max':'718px'},
        'lg': {'max':'935px'},
      },

    },
  },
  plugins: [],
}

