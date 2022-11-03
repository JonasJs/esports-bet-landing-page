/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      backgroundImage: {
        app: 'url(/background-app.svg)'
      },
      colors: {
        gray: {
          950: '#09090a',
          900: '#121214',
          800: '#202024',
          600: '#323238',
          300: '#8d8d99',
          200: '#c4c4cc',
          100: '#E1E1E6',
        },
        purple: {
          700: '#301961',
          600: '#371D6B',
          500: '#482F75',
          400: '#4F2C8A',
          300: '#633BBC',
          200: '#8B5CF6',
          100: '#8148C9',
        },
        green: {
          500: '#047C3F'
        },
        yellow: {
          500: '#F7DD43',
          600: '#bba314'
        },
        red: {
          500: '#db4437'
        },
        white: '#ffffff'
      }
    },
  },
  plugins: [],
}
