import Sample from '@/features/sample/components/Sample'
import {trpc} from '@/utils/trpc'

import {type NextPage} from 'next'
import AuthLayout from '@/layouts/AuthLayout'

import ErrorBoundary from '@/components/fallback/ErrorBoundary'
import {Suspense} from 'react'
import {Box} from '@mui/joy'
import {FallbackLoading} from '@/components/fallback/FallbackLoading'

const SamplePage: NextPage = () => {
  const hello = trpc.example.hello.useQuery({text: 'from tRPC'})
  console.log(hello)
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
          <Sample />
        </AuthLayout>
      </Suspense>
    </ErrorBoundary>
  )
}

export default SamplePage
