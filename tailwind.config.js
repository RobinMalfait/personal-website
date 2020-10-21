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
      },
      borderRadius: {
        half: '50%',
      },
      boxShadow: {
        DEFAULT: '0 0.7px 2.2px rgba(0, 0, 0, 0.017),0 0.9px 2.7px rgba(0, 0, 0, 0.024),0 0.9px 3px rgba(0, 0, 0, 0.03),0 0.9px 3.1px rgba(0, 0, 0, 0.036),0 1px 2.9px rgba(0, 0, 0, 0.043),0 1px 2px rgba(0, 0, 0, 0.06)',
        white: '4px 4px 0px 0px #FFFFFF',
        black: '4px 4px 0px 0px #18181b',
        gray: '4px 4px 0px 0px #d4d4d8',
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
    boxShadow: ({ after }) => after(['dark']),
  },
  corePlugins: {},
  plugins: [require('@tailwindcss/typography')],
};
