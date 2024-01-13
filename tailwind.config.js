/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verde-pastel': '#9DBC98',
        'melocoton-pastel': '#EBD9B4',
        'verde-oscuro': '#638889',
        'beige-claro': '#F9EFDB'
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

