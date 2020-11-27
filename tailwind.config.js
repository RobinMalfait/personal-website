const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
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
                color: '#d1d5db',
              },
              h2: {
                color: '#d1d5db',
              },
              a: {
                color: '#d1d5db',
              },
              color: '#d1d5db',
            },
            color: '#111827',
            a: {
              textDecoration: 'none',
            },
            maxWidth: 'none',
          },
        },
      },
      borderRadius: {
        half: '50%',
      },
      boxShadow: {
        white: '4px 4px 0px 0px #FFFFFF',
        gray: '4px 4px 0px 0px #d1d5db',
        black: '4px 4px 0px 0px #111827',
        light: 'inset 0 -0.125em #FFFFFF',
        lightHover: 'inset 0 -1.8em 0 #111827',
        dark: 'inset 0 -0.125em #111827',
        darkHover: 'inset 0 -1.8em 0 #d1d5db',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
      transitionTimingFunction: ['hover'],
    },
  },
  corePlugins: {},
  plugins: [require('@tailwindcss/typography')],
};
