const colors = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  // purge: [
  //   './src/**/*.html',
  //   './src/**/*.vue',
  //   './src/**/*.js',
  //   './src/**/*.css',
  // ],
  darkMode: false, // or 'media' or 'class'
  content: [
    './src/**/*.vue',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins']
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: '#09AB5D',
      blue: '#16B2D4',
      primary: {
        light: '#2ED47A',
        DEFAULT: '#09AB5D',
        dark: '#056235',
      },
      secondary: {
        light: '#a5e7f6',
        DEFAULT: '#16B2D4',
        dark: '#0a6c9f', 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
