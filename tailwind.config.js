/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./formkit.config.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#70d19f' ,
        'secondary': '#f5f5f5',
        'primary-dark': '#5ab791',
      },
      padding: {
        'mxs': '0.5rem',
        'dxs': '1rem',
        'dmd': '2.5rem',
        'dlg': '5rem',
        'dxl': '10rem',
        'd2xl': ' 20rem',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      screens: {
        'xs': '420px',
      },
    },
  },
  plugins: [],
}

