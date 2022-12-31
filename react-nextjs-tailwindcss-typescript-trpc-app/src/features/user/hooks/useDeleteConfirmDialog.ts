import {useCallback, useState} from 'react'

import {useRouter} from 'next/router'

import DeleteConfirmDialog from '@/features/user/components/DeleteConfirmDialog'
import useToast from '@/libs/useToast'
import {trpc} from '@/utils/trpc'

import type {UserData} from '@/features/user/types'

const useDeleteConfirmDialog = ({user}: {user: UserData}) => {
  const router = useRouter()
  const {successToast, errorToast} = useToast()
  const [isOpen, setOpen] = useState<boolean>(false)
  const {mutate, reset} = trpc.user.delete.useMutation()

  const open = useCallback(() => {
    setOpen(true)
  }, [])

  const close = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setOpen(false)
  }, [])

  const yesDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setOpen(false)
    if (user) {
      mutate(
        {id: user.id},
        {
          onSuccess: function (data, variables, context) {
            console.log(`[onSuccess]`)
            successToast('削除しました')
            router.push({
              pathname: '/users',
            })
          },
          onError: function (error, variables, context) {
            console.log(`[onError]`)
            errorToast('削除に失敗しました')
          },
          onSettled: function (data, error, variables, context) {
            console.log(`[onSettled]`)
            reset()
          },
        }
      )
    }
  }

  const noDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setOpen(false)
  }

  return {isOpen, open, close, yesDelete, noDelete, DeleteConfirmDialog}
}

export default useDeleteConfirmDialog
