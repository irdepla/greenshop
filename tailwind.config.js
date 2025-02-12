/**@type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      desktop: "1152px",
    },
    extend: {
      colors: {
        main: 'var(--main-color)',
        text__color: 'var(--text-color)',
        secondary__text__color: 'var(--secondary-color)',
        error: 'var(--error-color)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "24px"
      },
      width: {
        DEFAULT: "100%",
        desktop: "1120px"
      },
      minWidth: {
        DEFAULT: "375px",
      }
    },
    
  },
  plugins: [],
};
