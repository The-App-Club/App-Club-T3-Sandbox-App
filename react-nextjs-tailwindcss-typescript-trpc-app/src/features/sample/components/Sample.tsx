import {Box} from '@mui/joy'
import NextLink from 'next/link'
import {Horse, Heart, Cube} from 'phosphor-react'

const Sample = () => {
  return (
    <Box className={'mx-auto w-full max-w-7xl'}>
      <h2>Sample</h2>
      <Horse />
      <Heart color="#AE2983" weight="fill" size={32} />
      <Cube color="teal" weight="duotone" />
      <NextLink href={'/'} passHref>
        <a>Back to Home</a>
      </NextLink>
    </Box>
  )
}

export default Sample
