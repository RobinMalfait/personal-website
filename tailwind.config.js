const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    mode: 'all',
    content: ['./public/index.html'],
    preserveHtmlElements: false,
  },
  darkMode: 'media',
  theme: {
    screens: {
      sm: '667px',
      md: '1024px',
      lg: '1080px',
      xl: '2560px',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '@media (prefers-color-scheme: dark)': {
              h1: {
                color: '#e5e7eb',
              },
              h2: {
                color: '#e5e7eb',
              },
              a: {
                color: '#e5e7eb',
              },
              color: '#e5e7eb',
            },
            color: '#111827',
            maxWidth: 'none',
            a: {
              textDecoration: 'none',
            },
          },
        },
      },
      boxShadow: {
        light: 'inset 0 -0.125em #FFFFFF',
        lightHover: 'inset 0 -1.8em 0 #111827',
        dark: 'inset 0 -0.125em #111827',
        darkHover: 'inset 0 -1.8em 0 #e5e7eb',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  corePlugins: {},
  plugins: [require('@tailwindcss/typography')],
};
