/** @jsxImportSource @emotion/react */

import NextLink from 'next/link'

import {css} from '@emotion/react'
import {Box, Divider, Typography} from '@mui/joy'
import {ArrowLeft} from 'phosphor-react'

import Spacer from '@/components/ui/Spacer'
import CreateForm from '@/features/user/components/CreateForm'

const CreateUserPage = () => {
  return (
    <Box component={'section'} className={'mx-auto mt-24 w-full max-w-lg'}>
      <Box
        css={css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        `}
      >
        <NextLink href={'/users'} passHref>
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
          Create User
        </Typography>
      </Box>
      <Spacer />
      <Divider />
      <Spacer />
      <CreateForm />
    </Box>
  )
}

export default CreateUserPage
