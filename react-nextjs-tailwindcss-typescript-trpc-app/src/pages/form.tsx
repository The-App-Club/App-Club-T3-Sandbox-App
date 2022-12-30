import {type NextPage} from 'next'
import AuthLayout from '@/layouts/AuthLayout'

import ErrorBoundary from '@/components/fallback/ErrorBoundary'
import {lazy, Suspense} from 'react'
import {Box} from '@mui/joy'
import {FallbackLoading} from '@/components/fallback/FallbackLoading'

const Form = lazy(() => import('@/features/form/components/Form'))

const FormPage: NextPage = () => {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <Box
            className={
              'mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-7xl items-center justify-center'
            }
          >
            <FallbackLoading />
          </Box>
        }
      >
        <AuthLayout>
          <Form />
        </AuthLayout>
      </Suspense>
    </ErrorBoundary>
  )
}

export default FormPage
