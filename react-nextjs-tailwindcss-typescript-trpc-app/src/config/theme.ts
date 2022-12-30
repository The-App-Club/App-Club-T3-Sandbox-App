import {extendTheme} from '@mui/joy/styles'
import '@fontsource/inter'
import '@fontsource/radio-canada'
import '@fontsource/noto-sans-jp'

const theme = extendTheme({
  fontFamily: {
    body: 'Inter, serif',
  },
  components: {
    JoyLink: {
      styleOverrides: {
        root: {
          display: 'block',
          color: '#000000',
          fontFamily: '"Noto Sans JP", sans-serif',
        },
      },
    },
    JoyTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Noto Sans JP", sans-serif',
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: '1.5rem' /* 24px */,
      lineHeight: '2rem' /* 32px */,
    },
    h2: {
      fontSize: '1.25rem' /* 20px */,
      lineHeight: '1.75rem' /* 28px */,
    },
    h3: {
      fontSize: '1.125rem' /* 18px */,
      lineHeight: '1.75rem' /* 28px */,
    },
    display1: {
      fontFamily: '"Noto Sans JP", sans-serif',
    },
    display2: {
      fontFamily: '"Radio Canada", sans-serif',
    },
  },
})

export default theme
