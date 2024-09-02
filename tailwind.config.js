/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
    },
    extend: {
      screens: {
        md: '862px',
      },
      spacing: {
        33: '8.25rem',
      },
      colors: {
        levelup: {
          50: '#000000',
          100: '#111111',
          200: '#191919',
          300: '#222222',
          400: '#5E5E5E',
          500: '#A1A1A1',
          600: '#DDDDDD',
          700: '#E6E6E6',
          800: '#EEEEEE',
          900: '#FFFFFF',
        },
        yelevelup: {
          50: '#FCC85D',
          100: '#B58A00',
        },
      },
    },
  },
  plugins: [],
};
