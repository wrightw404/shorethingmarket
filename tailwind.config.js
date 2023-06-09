/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-green': '#00A650',
        'light-green': '#80C242',
        'yellow': '#FFD903',
        'white': '#FFFFFF',
        'dark-red': '#FF0000',
        'dark-blue': '#0000FF',
        'bask-orange': '#FF4D00',
        'sedona-orange': '#ea6624',
        'canyon-orange': '#ed7723',
        'clay-red': '#b54a44',
        'desert-red': '#83405e',
        'dusk-blue': '#604415d',
        'mountain-blue': '#1d1160',
        
      },
    },
  },
  plugins: [],
}
