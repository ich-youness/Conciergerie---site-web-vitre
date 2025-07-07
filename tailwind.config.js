/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Enhanced gold palette with mixed tones
        gold: {
          50: '#fefdf8',
          100: '#fef7e0',
          200: '#fdecc8',
          300: '#fbd288',
          400: '#f9b94f',
          500: '#f7a316',
          600: '#e8940c',
          700: '#c1760a',
          800: '#9c5d0e',
          900: '#7e4c0f',
        },
        // Enhanced beige with warmer mixed tones
        beige: {
          50: '#faf9f7',
          100: '#f5f2ed',
          200: '#ebe4d9',
          300: '#ddd1c0',
          400: '#cbb89e',
          500: '#b8a082',
          600: '#a08968',
          700: '#857155',
          800: '#6d5d48',
          900: '#5a4e3d',
        },
        // New mixed color palettes
        champagne: {
          50: '#fefcf7',
          100: '#fdf6e8',
          200: '#faedc4',
          300: '#f6e09c',
          400: '#f0cc6b',
          500: '#e8b547',
          600: '#d49d2a',
          700: '#b17f1f',
          800: '#8f651c',
          900: '#75531b',
        },
        bronze: {
          50: '#faf8f5',
          100: '#f3ede3',
          200: '#e6d7c3',
          300: '#d4bb9a',
          400: '#c19b6e',
          500: '#b08050',
          600: '#9d6b42',
          700: '#835638',
          800: '#6b4632',
          900: '#573a2b',
        },
        cream: {
          50: '#fefefe',
          100: '#fdfcfa',
          200: '#faf7f0',
          300: '#f5f0e6',
          400: '#ede5d6',
          500: '#e3d7c3',
          600: '#d4c4a8',
          700: '#bfa888',
          800: '#a08968',
          900: '#857155',
        },
        charcoal: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4a4a4a',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #f7a316 0%, #e8940c 50%, #c1760a 100%)',
        'gradient-champagne': 'linear-gradient(135deg, #f6e09c 0%, #e8b547 50%, #d49d2a 100%)',
        'gradient-bronze': 'linear-gradient(135deg, #d4bb9a 0%, #b08050 50%, #9d6b42 100%)',
        'gradient-cream': 'linear-gradient(135deg, #faf7f0 0%, #e3d7c3 50%, #d4c4a8 100%)',
        'gradient-mixed': 'linear-gradient(135deg, #fef7e0 0%, #f6e09c 25%, #e8b547 50%, #c1760a 75%, #6a6a6a 100%)',
        'gradient-warm': 'linear-gradient(135deg, #fefcf7 0%, #f5f0e6 25%, #e8b547 75%, #9d6b42 100%)',
      }
    },
  },
  plugins: [],
};