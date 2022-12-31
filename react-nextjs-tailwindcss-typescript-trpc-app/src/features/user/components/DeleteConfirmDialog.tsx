/** @jsxImportSource @emotion/react */
import {memo} from 'react'

import {css} from '@emotion/react'
import {Box, Divider, Typography} from '@mui/joy'
import Button from '@mui/joy/Button'
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'

import Spacer from '@/components/ui/Spacer'

import type {UserData} from '@/features/user/types'

const DeleteConfirmDialog = ({
  isOpen,
  handleClose,
  handleNo,
  handleYes,
  user,
}: {
  isOpen: boolean
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void
  handleNo: (e: React.MouseEvent<HTMLButtonElement>) => void
  handleYes: (e: React.MouseEvent<HTMLButtonElement>) => void
  user: UserData
}): JSX.Element | null => {
  if (!user) {
    return null
  }

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      // onClick={(e) => {
      //   e.stopPropagation()
      // }}
    >
      <ModalDialog>
        <Typography
          component={'h2'}
          level={'h2'}
          css={css`
            font-weight: 700;
            font-size: 1.5rem; /* 24px */
            line-height: 2rem; /* 32px */
          `}
        >
          {'削除確認'}
        </Typography>
        <Spacer />
        <Typography
          component={'p'}
          css={css`
            font-weight: 600;
            font-size: 1rem; /* 16px */
            line-height: 1.5rem; /* 24px */
            color: #6b7280;
          `}
        >
          {`"${user.name}"を削除しますか？この操作は取り消せません。`}
        </Typography>
        <Spacer />
        <Divider />
        <Spacer />
        <Box
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 3rem;
          `}
        >
          <Button
            fullWidth
            variant="solid"
            color="info"
            onClick={handleNo}
            autoFocus
            type="button"
          >
            いいえ
          </Button>
          <Button
            fullWidth
            variant="solid"
            color="danger"
            onClick={handleYes}
            type="button"
          >
            はい
          </Button>
        </Box>
      </ModalDialog>
    </Modal>
  )
}

export default memo(DeleteConfirmDialog)
