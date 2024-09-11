
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Corregido
    './pages/**/*.{js,ts,jsx,tsx}', // Asegura que soporte todos los archivos relevantes
    './components/**/*.{js,ts,jsx,tsx}', // Corregido
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#272525',
      'secondary': '#4D4C47',
      'bronze': '#9C7E41',
      'gray': '#D3C9BE',
      'milk': '#EDE7E1'  
    },
    fontFamily: {
      'raleway': ["Raleway", 'sans-serif'],
      'bodoni': ["Libre Bodoni", 'serif'],
    }
  },
  plugins: [],
}
