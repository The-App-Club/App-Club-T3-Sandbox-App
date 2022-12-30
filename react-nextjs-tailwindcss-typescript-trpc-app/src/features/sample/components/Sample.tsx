/** @jsxImportSource @emotion/react */


import NextLink from 'next/link'

import {Box, Divider, Typography} from '@mui/joy'
import {Cube, Heart, Horse} from 'phosphor-react'

import Spacer from '@/components/ui/Spacer'

const Sample = () => {
  return (
    <Box component={'section'} className={'mx-auto mt-24 w-full max-w-7xl'}>
      <NextLink href={'/'} passHref>
        <a>Back to Home</a>
      </NextLink>
      <Typography component={'h1'} level="h1">
        サンプル
      </Typography>
      <Spacer />
      <Divider />
      <Spacer />
      <Horse />
      <Heart color="#AE2983" weight="fill" size={32} />
      <Cube color="teal" weight="duotone" />
    </Box>
  )
}

export default Sample
