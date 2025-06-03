/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e60000',
        secondary: '#333333',
        light: '#f5f5f5',
      },
    },
  },
  plugins: [],
}