import NextLink from 'next/link'

import {Box, Divider, Typography} from '@mui/joy'

import {FallbackDataEmpty} from '@/components/fallback/FallbackDataEmpty'
import {FallbackError} from '@/components/fallback/FallbackError'
import {FallbackLoading} from '@/components/fallback/FallbackLoading'
import {FallbackNotAuth} from '@/components/fallback/FallbackNotAuth'
import {FallbackNotFound} from '@/components/fallback/FallbackNotFound'
import {FallbackNotMatch} from '@/components/fallback/FallbackNotMatch'
import Spacer from '@/components/ui/Spacer'

const FallbackPage = () => {
  return (
    <Box component={'section'} className={'mx-auto mt-24 w-full max-w-7xl'}>
      <NextLink href={'/'} passHref>
        <a>Back to Home</a>
      </NextLink>
      <Typography component={'h1'} level="h1">
        フォールバック
      </Typography>
      <Spacer />
      <Divider />
      <Spacer />
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
