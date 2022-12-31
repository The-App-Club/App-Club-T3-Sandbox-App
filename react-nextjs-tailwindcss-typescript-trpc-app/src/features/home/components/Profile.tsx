import {Box, Typography} from '@mui/joy'

import type {UserData} from '@/features/home/types'

const Profile = ({data}: {data: UserData}) => {
  return (
    <Box>
      <Typography>{`id: ${data?.id}`}</Typography>
      <Typography>{`name: ${data?.name}`}</Typography>
      <Typography>{`email: ${data?.email}`}</Typography>
    </Box>
  )
}

export default Profile
