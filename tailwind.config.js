module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 2s ease-in-out',
      },
      colors: {
        transparent: 'transparent',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
      spacing: {
        '32rem': '32rem',
        '36rem': '36rem',
        '48rem' : '48rem',
        '64rem': '64rem',
        '72rem': '72rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
