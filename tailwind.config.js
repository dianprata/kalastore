module.exports = {
  important: true,
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#22292f',
      white: '#ffffff',
      grey: '#b8c2cc',
      'grey-light': '#dae1e7',
      primary: '#0f4c75',
      success: '#28C76F',
      danger: '#EA5455',
      warning: '#FF9F43',
      dark: '#1E1E1E',
    },
    textColor: (theme) => ({
      inherit: 'inherit',
      ...theme('colors'),
    }),
    backgroundColor: (theme) => theme('colors'),
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.vue',
    ],
  },
};
