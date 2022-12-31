/** @jsxImportSource @emotion/react */

import NextLink from 'next/link'
import {useRouter} from 'next/router'

import {css} from '@emotion/react'
import {Box, Button, Divider, Typography} from '@mui/joy'
import {ArrowLeft} from 'phosphor-react'

import Spacer from '@/components/ui/Spacer'
import Profile from '@/features/home/components/Profile'
import {trpc} from '@/utils/trpc'

const UserPage = () => {
  const router = useRouter()
  const {userId} = router.query
  const {data, error, refetch, isLoading, remove} = trpc.users.byId.useQuery({
    id: userId as string,
  })

  return (
    <Box component={'section'} className={'mx-auto mt-24 w-full max-w-lg'}>
      <Box
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
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
        <Typography component={'h1'} level="h1" css={css``}>
          Focused User
        </Typography>
        <Button variant="solid">Edit</Button>
      </Box>
      <Spacer />
      <Divider />
      <Spacer />
      <Profile data={data} />
      <Spacer height="3rem" />
      <Divider />
      <Spacer />
      <Typography
        component={'p'}
        css={css`
          font-weight: 700;
        `}
      >
        Danger Zone
      </Typography>
      <Spacer />
      <Button variant="solid" fullWidth color="danger">
        Delete
      </Button>
    </Box>
  )
}

export default UserPage
