/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'primary':'rgb(85, 81, 227)',
        'secondary':'#2b2d77'
      }
    },
    fontFamily:{
      'hero-1':'Lobster',
      'hero-2':'Teko',
    },
  },
  plugins: [],
}

