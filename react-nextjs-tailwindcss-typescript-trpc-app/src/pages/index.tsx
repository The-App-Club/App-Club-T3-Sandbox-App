import {type NextPage} from 'next'
import Home from '@/features/home/components/Home'
import AuthLayout from '@/layouts/AuthLayout'

import ErrorBoundary from '@/components/fallback/ErrorBoundary'
import {Suspense} from 'react'
import {Box} from '@mui/joy'
import {FallbackLoading} from '@/components/fallback/FallbackLoading'

const HomePage: NextPage = () => {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <Box className={'mx-auto w-full max-w-7xl'}>
            <FallbackLoading />
          </Box>
        }
      >
        <AuthLayout>
          <Home />
        </AuthLayout>
      </Suspense>
    </ErrorBoundary>
  )
}

export default HomePage
