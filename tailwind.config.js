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
      },
      borderRadius: {
        half: '50%',
      },
      boxShadow: {
        default: '0 0.7px 2.2px rgba(0, 0, 0, 0.017),0 0.9px 2.7px rgba(0, 0, 0, 0.024),0 0.9px 3px rgba(0, 0, 0, 0.03),0 0.9px 3.1px rgba(0, 0, 0, 0.036),0 1px 2.9px rgba(0, 0, 0, 0.043),0 1px 2px rgba(0, 0, 0, 0.06)',
        white: '4px 4px 0px 0px #FFFFFF',
        black: '4px 4px 0px 0px #161e2e',
        gray: '4px 4px 0px 0px #d2d6dc',
        light: 'inset 0 -0.125em #FFFFFF',
        lightHover: 'inset 0 -1.8em 0 #161e2e',
        dark: 'inset 0 -0.125em #161e2e',
        darkHover: 'inset 0 -1.8em 0 #FFFFFF',
      },
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
