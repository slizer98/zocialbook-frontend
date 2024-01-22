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
        'secondary': '#ffffff '
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

