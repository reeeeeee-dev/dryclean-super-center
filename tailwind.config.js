/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif']
      }
    }
  }
}
