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
                color: '#d4d4d8',
              },
              h2: {
                color: '#d4d4d8',
              },
              p: {
                color: '#d4d4d8',
              },
              a: {
                color: '#d4d4d8',
              },
            },
            h1: {
              color: '#18181b',
            },
            h2: {
              color: '#18181b',
            },
            color: '#18181b',
            maxWidth: 'none',
            a: {
              textDecoration: 'none',
            },
          },
        },
      },
      borderRadius: {
        half: '50%',
      },
      boxShadow: {
        white: '4px 4px 0px 0px #FFFFFF',
        black: '4px 4px 0px 0px #18181b',
        light: 'inset 0 -0.125em #FFFFFF',
        lightHover: 'inset 0 -1.8em 0 #18181b',
        dark: 'inset 0 -0.125em #18181b',
        darkHover: 'inset 0 -1.8em 0 #FFFFFF',
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
