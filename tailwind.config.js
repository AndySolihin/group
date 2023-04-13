/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {},
    colors:{
      'blue-dark':'#3e436d',
      'white':'#FFFFFF',
      'gray':'#D9D9D9',
      'black':'#000000',
      'blue':'#DDEBF7',
      'gray-dark':'#5b5b5b',
    }
  },
  plugins: [],
}
