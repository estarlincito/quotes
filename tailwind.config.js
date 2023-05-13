const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    colors: {
      white: 'white',
      black: 'black',

      text: {
        light: {
          primary: 'rgba(0, 0, 0, 0.87)',
          secondary: 'rgba(0, 0, 0, 0.6)',
          disabled: 'rgba(0, 0, 0, 0.38)',
        },
        dark: {
          primary: 'rgb(255, 255, 255)',
          secondary: 'rgba(255, 255, 255, 0.7)',
          disabled: 'rgba(255, 255, 255, 0.5)',
        },
      },

      primary: {
        light: '#e3f2fd',
        main: '#90caf9',
        dark: '#42a5f5',
      },

      secondary: {
        light: '#f3e5f5',
        main: '#ce93d8',
        dark: '#ab47bc',
      },

      error: { light: '#e57373', main: '#f44336', dark: '#d32f2f' },

      danger: { light: '#ffb74d', main: '#ffa726', dark: '#f57c00' },

      info: { light: '#4fc3f7', main: '#29b6f6', dark: '#0288d1' },

      success: {
        light: '#81c784',
        main: '#66bb6a',
        dark: '#388e3c',
      },
    },

    fontSize: {
      title: '2.5rem',
      subtitle: '1.5rem',
      base: '1rem',
      small: '0.8rem',
      mini: '0.7rem',
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: '18px' },
        h1: { fontSize: '2.5rem' },
        h2: { fontSize: '2rem' },
        h3: { fontSize: '1.5rem' },
        h4: { fontSize: '1rem' },
        h5: { fontSize: '0.8rem' },
        h6: { fontSize: '0.7rem' },
        button: { fontSize: '0.8rem' },
        caption: { fontSize: '1.1rem' },
        summary: { fontSize: '0.8rem' },
      });
    }),
  ],
};
