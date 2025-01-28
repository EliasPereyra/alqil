/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['open-sans-400', 'sans-serif'],
        'opensans-bold': ['open-sans-700', 'sans-serif'],
        'opensans-extrabold': ['open-sans-800', 'sans-serif'],
        'opensans-semibold': ['open-sans-600', 'sans-serif'],
        'opensans-medium': ['open-sans-500', 'sans-serif'],
        'opensans-light': ['open-sans-300', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#F9FCF3',
          100: '#F4F9E7',
          200: '#E9F2CE',
          300: '#DEECB6',
          400: '#D3E69E',
          500: '#C8E087',
          600: '#AED14D',
          700: '#89AA2C',
          800: '#5B711D',
          900: '#2E390F',
          950: '#171C07'
        },
        blackblue: {
          100: '#020708',
          200: '#010304',
          300: '#000000'
        }
      }
    }
  },
  plugins: []
}
