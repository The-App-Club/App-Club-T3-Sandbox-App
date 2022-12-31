/** @jsxImportSource @emotion/react */

import NextLink from 'next/link'
import {useRouter} from 'next/router'

import {css} from '@emotion/react'
import {Box, Button, Divider, Typography} from '@mui/joy'
import {Link} from '@mui/joy'
import {ArrowLeft} from 'phosphor-react'

import {FallbackDataEmpty} from '@/components/fallback/FallbackDataEmpty'
import {FallbackError} from '@/components/fallback/FallbackError'
import {FallbackLoading} from '@/components/fallback/FallbackLoading'
import Spacer from '@/components/ui/Spacer'
import {trpc} from '@/utils/trpc'

import type {UsersData} from '@/features/user/types'
import type {ErrorData} from '@/types/error'

const UsersPage = () => {
  const router = useRouter()
  const {data, error, refetch, isLoading, remove} = trpc.user.listUp.useQuery()

  const renderContent = ({
    data,
    error,
    isLoading,
  }: {
    data: UsersData
    error: ErrorData
    isLoading: boolean
  }) => {
    if (error) {
      return <FallbackError />
    }

    if (isLoading) {
      return <FallbackLoading />
    }

    if (data?.length === 0) {
      return <FallbackDataEmpty />
    }

    return (
      <>
        {data?.map((item, index) => {
          return (
            <NextLink key={index} href={`/users/${item?.id}`} passHref>
              <Link underline="none">{`${item?.name}`}</Link>
            </NextLink>
          )
        })}
      </>
    )
  }

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    router.push({
      pathname: '/user/create',
    })
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
        <Typography component={'h1'} level="h1">
          Users
        </Typography>
        <Button variant="solid" onClick={handleAdd}>
          Add
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

export default UsersPage
