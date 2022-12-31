import {Box, Divider, Typography} from '@mui/joy'

import Spacer from '@/components/ui/Spacer'

import type {UserData} from '@/features/home/types'

const Profile = ({item}: {item: UserData}) => {
  return (
    <Box>
      <Typography>{`id: ${item?.id}`}</Typography>
      <Typography>{`name: ${item?.name}`}</Typography>
      <Typography>{`email: ${item?.email}`}</Typography>
      <Spacer />
      <Divider />
    </Box>
  )
}

export default Profile
