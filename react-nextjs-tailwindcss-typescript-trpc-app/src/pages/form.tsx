import {type NextPage} from 'next'
import Form from '@/features/form/components/Form'
import AuthLayout from '@/layouts/AuthLayout'

import ErrorBoundary from '@/components/fallback/ErrorBoundary'
import {Suspense} from 'react'
import {Box} from '@mui/joy'
import {FallbackLoading} from '@/components/fallback/FallbackLoading'

const FormPage: NextPage = () => {
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
          <Form />
        </AuthLayout>
      </Suspense>
    </ErrorBoundary>
  )
}

export default FormPage
