import {lazy, Suspense} from 'react'

import {Box} from '@mui/joy'
import {type NextPage} from 'next'

import ErrorBoundary from '@/components/fallback/ErrorBoundary'
import {FallbackLoading} from '@/components/fallback/FallbackLoading'

const UserCreate = lazy(() => import('@/features/user/components/UserCreate'))

const UserCreatePage: NextPage = () => {
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
        <UserCreate />
      </Suspense>
    </ErrorBoundary>
  )
}

export default UserCreatePage
