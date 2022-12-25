import {User} from '@/domains/user'
import {trpc} from '@/utils/trpc'
import {Box, Button, Typography} from '@mui/joy'
import NextLink from 'next/link'
import {FallbackLoading} from '@/components/fallback/FallbackLoading'
import {FallbackError} from '@/components/fallback/FallbackError'
import {FallbackDataEmpty} from './fallback/FallbackDataEmpty'

const Home = () => {
  const {data, error, refetch, isLoading, remove} = trpc.users.listUp.useQuery()

  if (error) {
    return <FallbackError />
  }

  if (isLoading) {
    return <FallbackLoading />
  }

  return (
    <Box className={'mx-auto w-full max-w-7xl'}>
      <NextLink href={'/sample'}>
        <a>Sample</a>
      </NextLink>
      <NextLink href={'/fallback'}>
        <a>Fallback</a>
      </NextLink>
      <FallbackDataEmpty />
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
      {data?.map((item, index) => {
        return <Typography key={index}>{item.name}</Typography>
      })}
    </Box>
  )
}

export default Home
