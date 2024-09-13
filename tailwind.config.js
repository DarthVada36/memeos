/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Corregido
    './pages/**/*.{js,ts,jsx,tsx}', // Asegura que soporte todos los archivos relevantes
    './components/**/*.{js,ts,jsx,tsx}', // Corregido
  ],
  theme: {
    extend: {
      transform: {
        'rotate-y-180': 'rotateY(180deg)', // Rotación en el eje Y para el efecto flip
        'rotate-y-0': 'rotateY(0deg)', // Estado inicial
      },
      perspective: {
        '1000': '1000px', // Perspectiva para efecto 3D
      },
      colors: {
        'primary': '#272525',
        'secondary': '#4D4C47',
        'bronze': '#9C7E41',
        'gray': '#D3C9BE',
        'milk': '#EDE7E1',
      },
      fontFamily: {
        'raleway': ["Raleway", 'sans-serif'],
        'bodoni': ["Libre Bodoni", 'serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.backface-hidden': {
          'backface-visibility': 'hidden', // Esconder la parte trasera
        },
        '.transform-style-3d': {
          'transform-style': 'preserve-3d', // Mantener el efecto 3D
        },
        '.perspective-1000': {
          perspective: '1000px', // Perspectiva 3D para el efecto de giro
        },
      });
    },
  ],
}

