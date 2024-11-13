/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, sans-serif',
    },
    extend: {
      screens: {
        xs: '380px',
      },
      colors: {
        softPeach: '#f6efef',
        paleDogwood: '#C5AFA4',
        oldRose: '#cc7e85',
        cerise: '#CF4D6F',
        mountpattenPink: '#A36D90',
        slateGray: '#76818e',
        // Midnight Blossom
        portGore: '#1c1f4a',
        jacarta: '#3c2d6c',
        strikemaster: '#a05a8c',
        wewak: '#f2abc3',
        classicRose: '#fbd0e1',
        // Jacarta Bliss
        butterflyBush: '#5d4a82',
        kimberly: '#7b6c9d',
        londonHue: '#bfa1c9',
        azalea: '#f2b5d4',
        froly: '#f06090',
        // Darke Mode
        steelGray: '#1e1e2f',
        ebonyClay: '#2b2b40',
        gunPowder: '#3c3c53',
        mulledWine: '#4d4d6a',
        gallery: '#f0f0f0',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('colorful', '.colorful &');
    }),
  ],
};
