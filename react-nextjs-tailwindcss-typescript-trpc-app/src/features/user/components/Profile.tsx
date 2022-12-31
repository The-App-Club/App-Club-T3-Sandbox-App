/** @jsxImportSource @emotion/react */

import {css} from '@emotion/react'
import {Box, Button, Divider, Typography} from '@mui/joy'

import Spacer from '@/components/ui/Spacer'
import useDeleteConfirmDialog from '@/features/user/hooks/useDeleteConfirmDialog'

import type {UserData} from '@/features/user/types'

const Profile = ({data}: {data: UserData}) => {
  const {
    isOpen,
    open: openDialog,
    close,
    yesDelete,
    noDelete,
    DeleteConfirmDialog,
  } = useDeleteConfirmDialog({user: data})

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    openDialog()
  }

  return (
    <>
      <DeleteConfirmDialog
        isOpen={isOpen}
        handleClose={close}
        handleNo={noDelete}
        handleYes={yesDelete}
        user={data}
      />
      <Box>
        <Typography>{`id: ${data?.id}`}</Typography>
        <Typography>{`name: ${data?.name}`}</Typography>
        <Typography>{`email: ${data?.email}`}</Typography>
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
        <Button
          variant="solid"
          fullWidth
          color="danger"
          type="button"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Box>
    </>
  )
}

export default Profile
