const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'media',
  purge: {
    enabled: true,
    mode: 'all',
    content: ['./public/index.html'],
    preserveHtmlElements: false,
  },
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    typography: {
      default: {
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
          'pre code': {
            color: '#f4f4f5',
          },
          pre: {
            backgroundColor: '#27272a',
          },
          color: '#18181b',
          maxWidth: 'none',
          a: {
            color: '#18181b',
            textDecoration: 'none',
          },
        },
      },
    },
    screens: {
      sm: '667px',
      md: '1024px',
      lg: '1080px',
      xl: '2560px',
    },
    extend: {
      colors: {
        instagram: '#405de6',
        twitter: '#1da1f2',
        youtube: '#ff0000',
        dribbble: '#ea4c89',
      },
      borderRadius: {
        half: '50%',
      },
      boxShadow: {
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
    },
  },
  corePlugins: {},
  plugins: [require('@tailwindcss/typography')],
};
