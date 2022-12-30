import {type NextPage} from 'next'
import Fallback from '@/features/fallback/components/Fallback'
import AuthLayout from '@/layouts/AuthLayout'

import ErrorBoundary from '@/components/fallback/ErrorBoundary'
import {Suspense} from 'react'
import {Box} from '@mui/joy'
import {FallbackLoading} from '@/components/fallback/FallbackLoading'

const FallbackPage: NextPage = () => {
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
          <Fallback />
        </AuthLayout>
      </Suspense>
    </ErrorBoundary>
  )
}

export default FallbackPage
