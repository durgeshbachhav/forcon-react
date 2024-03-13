/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tienne': ['Tienne', 'serif'],
      },
      colors: {
        primary: '#104e69',
        secondary: '#03759b'
      },
    },
  },
  plugins: [],
}
