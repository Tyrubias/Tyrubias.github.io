module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Recursive'],
    },
    extend: {
      gridTemplateColumns: {
        'page': '1fr 1.75fr 1fr'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
