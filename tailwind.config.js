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
        primary: '#04364a',
        secondary: '#057999',
        uicolor: "#0098be",
        tableheadcolor: "#d42a4d",
        tablesubheadingcolor: "#e84b64",
        navitemprimary: "#5356FF",
        navitemsecondary: "#16f1af"
      },

    },
  },
  plugins: [],
}
