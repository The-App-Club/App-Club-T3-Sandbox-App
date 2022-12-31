import {Box, Divider, Typography} from '@mui/joy'

import Spacer from '@/components/ui/Spacer'

import type {UserData} from '@/features/user/types'

const Profile = ({data}: {data: UserData}) => {
  return (
    <Box>
      <Typography>{`id: ${data?.id}`}</Typography>
      <Typography>{`name: ${data?.name}`}</Typography>
      <Typography>{`email: ${data?.email}`}</Typography>
      <Spacer />
      <Divider />
    </Box>
  )
}

export default Profile
