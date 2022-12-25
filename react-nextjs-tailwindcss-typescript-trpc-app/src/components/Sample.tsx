import {Box} from '@mui/joy'
import NextLink from 'next/link'

const Sample = () => {
  return (
    <Box className={'mx-auto w-full max-w-7xl'}>
      <h2>Sample</h2>
      <NextLink href={'/'} passHref>
        <a>Back to Home</a>
      </NextLink>
    </Box>
  )
}

export default Sample
