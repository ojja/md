const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   // primary: "blue",
    //   // transparent: 'transparent',
    //   // current: 'currentColor',
    //   // black: colors.black,
    //   // white: colors.white,
    //   // gray: colors.gray,
    //   // emerald: colors.emerald,
    //   // indigo: colors.indigo,
    //   // yellow: colors.yellow,
    // },
    extend: {},
    // maxWidth: {
    //   '1/4': '25%',
    //   '1/2': '50%',
    //   '3/4': '75%',
    //   '90': '90%',
    //  },
    //  maxHeight: {
    //   '1/4': '25%',
    //   '1/2': '50%',
    //   '3/4': '75%',
    //   '90': '90%',
    //  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
