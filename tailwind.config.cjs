/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(252, 237, 33)',
        secondary:'',
        ramaBlack:'#222',
        ramaWhite:'#ddd',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        'lg': '930px',
      },
    },
  },
  plugins: [],
}
