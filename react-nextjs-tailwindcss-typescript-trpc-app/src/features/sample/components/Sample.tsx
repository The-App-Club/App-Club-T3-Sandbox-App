/** @jsxImportSource @emotion/react */

import NextLink from 'next/link'

import {css} from '@emotion/react'
import {Box, Divider, Typography} from '@mui/joy'
import {Cube, Heart, Horse} from 'phosphor-react'
import {ArrowLeft} from 'phosphor-react'

import Spacer from '@/components/ui/Spacer'

const SamplePage = () => {
  return (
    <Box component={'section'} className={'mx-auto mt-24 w-full max-w-lg'}>
      <Box
        css={css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        `}
      >
        <NextLink href={'/'} passHref>
          <ArrowLeft
            size={32}
            css={css`
              :hover {
                cursor: pointer;
              }
            `}
          />
        </NextLink>
        <Typography
          component={'h1'}
          level="h1"
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          サンプル
        </Typography>
      </Box>
      <Spacer />
      <Divider />
      <Spacer />
      <Horse />
      <Heart color="#AE2983" weight="fill" size={32} />
      <Cube color="teal" weight="duotone" />
    </Box>
  )
}

export default SamplePage
