// const colors = require('tailwindcss/colors')

module.exports = {
  // mode: "jit",
  // content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      primary: {
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      'gray': {
        50: '#777777',
        100: '#D9D9D9',
        200: '#00000033',
        300: '#747474',
        400: ' #868685',
        // 500: '#6b7280',
        // 600: '#4b5563',
        // 700: '#374151',
        // 800: '#1f2937',
        // 900: '#111827',
      },
      slate: {
        200: "#e2e8f0",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
      },
      blue: {
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
      },
      red: {
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
      },
      'green': {
        100: '#0F6140',
        200: '#163300',
        300: '#EDEFEB',
        400: '#126E49',
        500: '#062B1C',
        600: '#346853',
        700: '#1E3D30',
        800: '#D5DAD1',
        900: '#185039',
      },
      'yellow': {
        100: '#fef9c3',
        200: '#fef08a',
        300: '#fde047',
        400: '#facc15',
        500: '#eab308',
        600: '#ca8a04',
        700: '#a16207',
        800: '#854d0e',
        900: '#713f12',
        910: '#EDC843',
      },
      orange: {
        500: "#f97316",
      },
      purple: {
        500: "#a855f7",
      },
      pink: {
        500: "#ec4899",
      },
      golden: {
        500: "#ec4899",
      },
      "of-white": {
        500: "#FAF9F6",
        100: '#E8DFD0',
      },
      olive: {
        500: "#808000",
      },
      navy: {
        500: "#000080",
      },
    },
    extend: {
      fontDisplay: {
        sans: "swap", // Use 'swap', 'block', 'fallback', or 'optional'
      },
      'offwhite': {
        100: '#E8DFD0',
        200: ' #ABA08F',
      },
      'brown': {
        500: '#5F5035',
      },
    },
    extend: {
      borderWidth: ['responsive', 'focus'],
      width: {
        '46': 'calc(100%/2 - 24px)'
      },
      padding: {
        '15': '6px',
      },
      borderRadius: {
        '100': '100px'
      },
      fontFamily: {
        'sans-en': '"Roboto"',
        'sans-ar': '"Baloo Bhaijaan 2"',
      },
    },
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
  plugins: [require("@tailwindcss/aspect-ratio")],
  future: {
    unstable_tailwind: true,
  },
  daisyui: {
    darkTheme: false,
  },
};
