const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        dark: {
          1: '#131321',
          2: '#212035',
          3: '#474759',
          4: '#171727',
        },
        'custom-gray': {
          1: '#FBFDFD'
        },
        primary: '#50F9AC'
      },

      boxShadow: {
        'custom-white': '0px 2px 74px -4px rgba(255, 255, 255, 0.15)'
      },

      fontFamily: {
        'peyda': 'peyda',
      },
    },
  },
  plugins: [],
}
