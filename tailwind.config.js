/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'comfortaa': ['"Comfortaa"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

