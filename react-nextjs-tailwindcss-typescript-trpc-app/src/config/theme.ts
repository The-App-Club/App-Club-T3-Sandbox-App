import {extendTheme} from '@mui/joy/styles'
import '@fontsource/inter'
import '@fontsource/radio-canada'
import '@fontsource/noto-sans-jp'

const theme = extendTheme({
  fontFamily: {
    body: 'Inter, serif',
  },
  typography: {
    display1: {
      fontFamily: '"Noto Sans JP", sans-serif',
    },
    display2: {
      fontFamily: '"Radio Canada", sans-serif',
    },
  },
})

export default theme
