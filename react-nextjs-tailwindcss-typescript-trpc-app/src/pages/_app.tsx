import {type AppType} from 'next/app'

import {trpc} from '@/utils/trpc'

import '@/styles/globals.css'
import {CssVarsProvider} from '@mui/joy/styles'
import theme from '@/config/theme'
import {CssBaseline} from '@mui/joy'
import NextNProgress from 'nextjs-progressbar'

const MyApp: AppType = ({Component, pageProps}) => {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <NextNProgress
        color={`#4338ca`}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </CssVarsProvider>
  )
}

export default trpc.withTRPC(MyApp)
