/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    screens: {
      'sm': '440px',
    },
    fontWeight:{
      'semibold': '600',
      'bold' : '700',
      'boldest' : '900'
    },
    extend: {},
  },
  plugins: [],
}
