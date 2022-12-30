import {Box, Button, Divider, Typography} from '@mui/joy'

import {FallbackDataEmpty} from '@/components/fallback/FallbackDataEmpty'
import {FallbackError} from '@/components/fallback/FallbackError'
import {FallbackLoading} from '@/components/fallback/FallbackLoading'
import Spacer from '@/components/ui/Spacer'
import {trpc} from '@/utils/trpc'

import type {UsersData} from '@/features/home/types'
import type {ErrorData} from '@/types/error'

const Home = () => {
  const {data, error, refetch, isLoading, remove} = trpc.users.listUp.useQuery()

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
          return <Typography key={index}>{item?.name}</Typography>
        })}
      </>
    )
  }

  return (
    <Box component={'section'} className={'mx-auto mt-24 w-full max-w-7xl'}>
      <Typography component={'h1'} level="h1">
        ホーム
      </Typography>
      <Spacer />
      <Divider />
      <Spacer />
      <Button
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

export default Home
