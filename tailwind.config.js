const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      blue: colors.blue,
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
