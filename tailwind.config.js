// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: 'hsl(180, 45%, 35%)',
          50: 'hsl(180, 45%, 95%)',
          100: 'hsl(180, 45%, 90%)',
          200: 'hsl(180, 45%, 80%)',
          300: 'hsl(180, 45%, 70%)',
          400: 'hsl(180, 45%, 60%)',
          500: 'hsl(180, 45%, 50%)',
          600: 'hsl(180, 45%, 40%)',
          700: 'hsl(180, 45%, 30%)',
          800: 'hsl(180, 45%, 25%)',
          900: 'hsl(180, 45%, 20%)',
        },
        amber: {
          DEFAULT: 'hsl(45, 100%, 55%)',
          50: 'hsl(45, 100%, 95%)',
          100: 'hsl(45, 100%, 90%)',
          200: 'hsl(45, 100%, 80%)',
          300: 'hsl(45, 100%, 70%)',
          400: 'hsl(45, 100%, 60%)',
          500: 'hsl(45, 100%, 50%)',
          600: 'hsl(45, 100%, 40%)',
          700: 'hsl(45, 100%, 30%)',
          800: 'hsl(45, 100%, 25%)',
          900: 'hsl(45, 100%, 20%)',
        },
        neutral: {
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['Figtree', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
