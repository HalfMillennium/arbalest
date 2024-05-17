module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 2s ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
