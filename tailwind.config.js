module.exports = {
  dark: 'media',
  experimental: 'all',
  future: 'all',
  purge: {
    enabled: true,
    mode: 'all',
    content: ['./public/index.html'],
    preserveHtmlElements: false,
  },
  target: 'relaxed',
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    typography: {
      default: {
        css: {
          '@media (prefers-color-scheme: dark)': {
            h1: {
              color: '#d2d6dc',
            },
            h2: {
              color: '#d2d6dc',
            },
            h3: {
              color: '#d2d6dc',
            },
            p: {
              color: '#d2d6dc',
            },
            a: {
              color: '#d2d6dc',
            },
          },
          h1: {
            color: '#161e2e',
          },
          h2: {
            color: '#161e2e',
          },
          h3: {
            color: '#161e2e',
          },
          'pre code': {
            color: '#f4f5f7',
          },
          pre: {
            backgroundColor: '#252f3f',
          },
          color: '#161e2e',
          maxWidth: 'none',
          '[class~="lead"]': {
            color: '#161e2e',
          },
          a: {
            color: '#161e2e',
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
        hashnode: '#2962ff',
      },
      borderRadius: {
        half: '50%',
      },
    },
    boxShadow: {
      xs: '0 0px 0px rgba(0, 0, 0, 0.014),0 0px 0.1px rgba(0, 0, 0, 0.02),0 0px 0.1px rgba(0, 0, 0, 0.025),0 0px 0.2px rgba(0, 0, 0, 0.03),0 0px 0.4px rgba(0, 0, 0, 0.036),0 0px 1px rgba(0, 0, 0, 0.05)',
      sm: '0 0px 0.1px rgba(0, 0, 0, 0.014),0 0.1px 0.1px rgba(0, 0, 0, 0.02),0 0.1px 0.3px rgba(0, 0, 0, 0.025),0 0.2px 0.4px rgba(0, 0, 0, 0.03),0 0.4px 0.8px rgba(0, 0, 0, 0.036),0 1px 2px rgba(0, 0, 0, 0.05)',
      default: '0 0.7px 2.2px rgba(0, 0, 0, 0.017),0 0.9px 2.7px rgba(0, 0, 0, 0.024),0 0.9px 3px rgba(0, 0, 0, 0.03),0 0.9px 3.1px rgba(0, 0, 0, 0.036),0 1px 2.9px rgba(0, 0, 0, 0.043),0 1px 2px rgba(0, 0, 0, 0.06)',
      md: '0 2.2px 4.3px -1px rgba(0, 0, 0, 0.017),0 2.7px 5.5px -1px rgba(0, 0, 0, 0.024),0 3px 6px -1px rgba(0, 0, 0, 0.03),0 3.1px 6.2px -1px rgba(0, 0, 0, 0.036),0 2.9px 5.9px -1px rgba(0, 0, 0, 0.043),0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 0.9px 1.3px -2px rgba(0, 0, 0, 0.014),0 1.8px 2.9px -2px rgba(0, 0, 0, 0.02),0 2.5px 4.4px -2px rgba(0, 0, 0, 0.025),0 3px 5.4px -2px rgba(0, 0, 0, 0.03),0 3.5px 5.9px -2px rgba(0, 0, 0, 0.036),0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 10.8px 10.8px -5px rgba(0, 0, 0, 0.011),0 13.7px 13.7px -5px rgba(0, 0, 0, 0.016),0 15.1px 15.1px -5px rgba(0, 0, 0, 0.02),0 15.4px 15.4px -5px rgba(0, 0, 0, 0.024),0 14.7px 14.7px -5px rgba(0, 0, 0, 0.029),0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 0.7px 1.4px -12px rgba(0, 0, 0, 0.07),0 1.7px 3.3px -12px rgba(0, 0, 0, 0.101),0 3.1px 6.3px -12px rgba(0, 0, 0, 0.125),0 5.6px 11.2px -12px rgba(0, 0, 0, 0.149),0 10.4px 20.9px -12px rgba(0, 0, 0, 0.18),0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
      white: '4px 4px 0px 0px #FFFFFF',
      black: '4px 4px 0px 0px #161e2e',
      gray: '4px 4px 0px 0px #d2d6dc',
      light: 'inset 0 -0.125em #FFFFFF',
      lightHover: 'inset 0 -1.8em 0 #161e2e',
      dark: 'inset 0 -0.125em #161e2e',
      darkHover: 'inset 0 -1.8em 0 #FFFFFF',
    },
    fontFamily: {
      sans: ['Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
  },
  variants: {
    textColor: ({ after }) => after(['group-hover']),
    boxShadow: ({ after }) => after(['dark']),
  },
  corePlugins: {},
  plugins: [require('@tailwindcss/typography')],
};
