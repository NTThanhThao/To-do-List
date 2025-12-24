/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: { sans: ['Poppins', 'sans-serif'] },
      animation: {
        'bounce-slow': 'bounce 2.5s infinite',
      },
    },
  },
  plugins: [],
}