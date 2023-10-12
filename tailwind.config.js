module.exports = {
  purge: ['./**/*.html'],  
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
       'main': ['Castoro']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  // ... other config options

  theme: {
    extend: {
      maxWidth: {
        'xs': '20rem',  // Adjust the value as needed
      },
    },
  },
};
