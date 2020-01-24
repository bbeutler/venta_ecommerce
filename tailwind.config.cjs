/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       ' redRose': ['Red Rose', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns:{
        'sm': 'repeat(2, minmax(110px, 1fr))',
        
      },

      backgroundColor:{
        "text-show": "rgba(0,0,0,0.5)"
      }
    },

  },
  plugins: [],
}
