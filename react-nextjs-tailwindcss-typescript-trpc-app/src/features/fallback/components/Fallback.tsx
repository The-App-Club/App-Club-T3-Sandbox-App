import AuthLayout from '@/layouts/AuthLayout'
import {FallbackNotMatch} from '@/components/fallback/FallbackNotMatch'
import {FallbackError} from '@/components/fallback/FallbackError'
import {FallbackNotFound} from '@/components/fallback/FallbackNotFound'
import {FallbackNotAuth} from '@/components/fallback/FallbackNotAuth'
import {FallbackDataEmpty} from '@/components/fallback/FallbackDataEmpty'
import {FallbackLoading} from '@/components/fallback/FallbackLoading'

import NextLink from 'next/link'
import {Box} from '@mui/joy'

const FallbackPage = () => {
  return (
    <Box>
      <NextLink href={'/'} passHref>
        <a>Back to Home</a>
      </NextLink>
      <FallbackLoading iconSize={120} />
      <FallbackDataEmpty iconSize={120} />
      <FallbackNotAuth iconSize={120} />
      <FallbackNotFound iconSize={120} />
      <FallbackNotMatch iconSize={120} />
      <FallbackError iconSize={120} />
    </Box>
  )
}

export default FallbackPage
