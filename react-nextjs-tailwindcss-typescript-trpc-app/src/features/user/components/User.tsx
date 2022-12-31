/** @jsxImportSource @emotion/react */

import NextLink from 'next/link'
import {useRouter} from 'next/router'

import {css} from '@emotion/react'
import {Box, Button, Divider, Typography} from '@mui/joy'
import {ArrowLeft} from 'phosphor-react'

import {FallbackError} from '@/components/fallback/FallbackError'
import {FallbackLoading} from '@/components/fallback/FallbackLoading'
import Spacer from '@/components/ui/Spacer'
import Profile from '@/features/user/components/Profile'
import useSidebar from '@/features/user/hooks/useSidebar'
import {trpc} from '@/utils/trpc'

import type {UserData} from '@/features/user/types'
import type {ErrorData} from '@/types/error'

const UserPage = () => {
  const router = useRouter()
  const {setSidebar} = useSidebar()
  const {userId} = router.query
  const {data, error, refetch, isLoading, remove} = trpc.user.byId.useQuery({
    id: userId as string,
  })
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    router.push({
      pathname: '/user/edit',
    })
    setSidebar((prevState) => {
      return {
        ...prevState,
        activeUser: data,
      }
    })
  }

  const renderContent = ({
    data,
    error,
    isLoading,
  }: {
    data: UserData
    error: ErrorData
    isLoading: boolean
  }) => {
    if (error) {
      return <FallbackError />
    }

    if (isLoading) {
      return <FallbackLoading />
    }

    return <Profile data={data} />
  }
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
        <Button variant="solid" onClick={handleEdit}>
          Edit
        </Button>
      </Box>
      <Spacer />
      <Divider />
      <Spacer />
      <Button
        fullWidth
        color="neutral"
        variant="solid"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation()
          remove()
          refetch()
        }}
      >
        Refetch
      </Button>
      <Spacer />
      {renderContent({data, error, isLoading})}
    </Box>
  )
}

export default UserPage
