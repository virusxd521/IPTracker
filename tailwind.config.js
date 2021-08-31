module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'road-pattern': "url(./pattern-bg.png)"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
