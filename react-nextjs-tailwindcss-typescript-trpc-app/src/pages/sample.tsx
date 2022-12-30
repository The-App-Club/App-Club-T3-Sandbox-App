import {lazy, Suspense} from 'react'

import {Box} from '@mui/joy'
import {type NextPage} from 'next'

import ErrorBoundary from '@/components/fallback/ErrorBoundary'
import {FallbackLoading} from '@/components/fallback/FallbackLoading'
import {trpc} from '@/utils/trpc'

const Sample = lazy(() => import('@/features/sample/components/Sample'))

const SamplePage: NextPage = () => {
  const hello = trpc.example.hello.useQuery({text: 'from tRPC'})
  console.log(hello)
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
        <Sample />
      </Suspense>
    </ErrorBoundary>
  )
}

export default SamplePage
