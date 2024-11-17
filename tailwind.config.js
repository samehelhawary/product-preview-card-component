/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F2EAE2',
        'aurometal-saurus': '#6C7289',
        'gunmetal': '#1C232B',
        'deep-aquamarine': '#3D8168',
        'deep-aquamarine-hover': '#1A4032'
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        serif: ['Fraunces', ...defaultTheme.fontFamily.serif],
      },  
      screens: {
        'sm': '375px',
        'lg': '1440px'
      },  
    },
  },
  plugins: [],
}

