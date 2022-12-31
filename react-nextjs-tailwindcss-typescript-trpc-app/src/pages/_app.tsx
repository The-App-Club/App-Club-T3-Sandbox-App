import {useCallback, useEffect} from 'react'

import type {AppProps} from 'next/app'
import {useRouter} from 'next/router'

import {CacheProvider} from '@emotion/react'
import {CssBaseline} from '@mui/joy'
import {CssVarsProvider} from '@mui/joy/styles'
import NextNProgress from 'nextjs-progressbar'
import {Toaster} from 'react-hot-toast'
import {RecoilRoot} from 'recoil'

import createEmotionCache from '@/config/createEmotionCache'
import {matchedActivePage} from '@/config/routes'
import theme from '@/config/theme'
import AuthLayout from '@/layouts/AuthLayout'
import useHeaderMenu from '@/libs/useHeaderMenu'
import {trpc} from '@/utils/trpc'

import type {EmotionCache} from '@emotion/react'
import '@/styles/globals.css'

const BebopApp = (props: AppProps) => {
  return (
    <RecoilRoot>
      <NextNProgress
        color={`#4338ca`}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Toaster position="bottom-left" reverseOrder={false} />
      <MyApp {...props} />
    </RecoilRoot>
  )
}

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = (props: MyAppProps) => {
  const {Component, pageProps, emotionCache = createEmotionCache()} = props
  const router = useRouter()
  const {setHeaderMenu} = useHeaderMenu()

  const handleRouteChangeStart = useCallback(
    (e: string) => {
      const matchedItem = matchedActivePage(e)
      if (matchedItem) {
        setHeaderMenu({
          activeName: matchedItem.headerMenuName,
        })
      } else {
        setHeaderMenu({
          activeName: null,
        })
      }
    },
    [setHeaderMenu]
  )

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart)
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
    }
  }, [handleRouteChangeStart, router])

  return (
    <CacheProvider value={emotionCache}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      </CssVarsProvider>
    </CacheProvider>
  )
}

export default trpc.withTRPC(BebopApp)
