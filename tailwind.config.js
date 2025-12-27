/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
     primary: '#121212',   // Cinza Carvão (Fundo principal)
        surface: '#1C1C1C',   // Cinza Ônix (Cards e Header)
        accent: '#2B2B2B',    // Cinza Pedra (Divisores)
        secondary: '#C5A059', // Dourado Metálico
        light: '#ffffff', 
      },
      fontFamily: {
        serif: ['"Libre Bodoni"', 'serif'],
        sans: ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}