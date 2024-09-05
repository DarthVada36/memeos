/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      'darkGray': '#272525',
      'midGray': '#4D4C47',
      'bronze': '#9C7E41',
      'lightGray': '#D3C9BE',
      'white': '#EDE7E1',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Libre Bodoni', 'serif'],
      },
  plugins: [],
    },
  },
}