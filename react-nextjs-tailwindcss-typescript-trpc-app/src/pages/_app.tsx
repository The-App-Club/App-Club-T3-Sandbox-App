import type {AppProps} from 'next/app'

import {trpc} from '@/utils/trpc'

import '@/styles/globals.css'
import {CssVarsProvider} from '@mui/joy/styles'
import theme from '@/config/theme'
import {CssBaseline} from '@mui/joy'
import NextNProgress from 'nextjs-progressbar'
import {RecoilRoot} from 'recoil'
import type {EmotionCache} from '@emotion/react'
import {CacheProvider} from '@emotion/react'
import createEmotionCache from '@/config/createEmotionCache'
import {useRouter} from 'next/router'
import useHeaderMenu from '@/libs/useHeaderMenu'
import {useCallback, useEffect} from 'react'
import {matchedActivePage} from '@/config/routes'

import AuthLayout from '@/layouts/AuthLayout'

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
