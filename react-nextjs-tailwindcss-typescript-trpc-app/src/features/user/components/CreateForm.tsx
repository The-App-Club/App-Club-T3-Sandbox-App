/** @jsxImportSource @emotion/react */

import {useRouter} from 'next/router'

import {css} from '@emotion/react'
import {zodResolver} from '@hookform/resolvers/zod'
import {Box, Button} from '@mui/joy'
import {useForm} from 'react-hook-form'

import BebopTextField from '@/components/ui/BebopTextfield'
import Spacer from '@/components/ui/Spacer'
import {UserFormSchema} from '@/features/user/domains/userForm'
import useToast from '@/libs/useToast'
import {createId} from '@/utils/bebopUtil'
import {merge} from '@/utils/mergeUtil'
import {trpc} from '@/utils/trpc'

import type {User} from '@/features/user/domains/user'
import type {UserForm} from '@/features/user/domains/userForm'
import type {Merge} from 'type-fest'

const CreateForm = () => {
  const router = useRouter()
  const {successToast, errorToast} = useToast()
  const {mutate, reset} = trpc.user.create.useMutation()
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors, isValid, isSubmitted},
  } = useForm({resolver: zodResolver(UserFormSchema)})

  const onSubmit = (data: any) => {
    setError('Do submit', {
      message: 'Thank you submit!',
      type: 'disabled',
    })
    const willPostedData = merge(data, {id: createId()}) as Merge<
      Pick<User, 'id'>,
      UserForm
    >
    mutate(willPostedData, {
      onSuccess: function (data, variables, context) {
        console.log(`[onSuccess]`)
        successToast('登録しました')
        router.push({
          pathname: '/users',
        })
      },
      onError: function (error, variables, context) {
        console.log(`[onError]`)
        errorToast('登録に失敗しました')
      },
      onSettled: function (data, error, variables, context) {
        console.log(`[onSettled]`)
        reset()
      },
    })
  }

  return (
    <Box
      component={'form'}
      css={css`
        max-width: 100%;
        width: 100%;
      `}
      onSubmit={handleSubmit(onSubmit)}
    >
      <BebopTextField
        autoFocus
        name={'name'}
        type={'text'}
        labelName={`お名前`}
        placeholder={`山田太郎`}
        required
        tooltipText="お名前のツールチップになります"
        defaultValue={``}
        register={register}
        errors={errors}
      />
      <Spacer />
      <BebopTextField
        name={'email'}
        type={'email'}
        labelName={`メールアドレス`}
        placeholder={`sample@example.com`}
        required
        tooltipText="メールアドレスのツールチップになります"
        defaultValue={``}
        register={register}
        errors={errors}
      />
      <Spacer height="2rem" />
      <Button
        disabled={!isValid}
        loading={isSubmitted}
        loadingPosition="end"
        variant="solid"
        color="primary"
        fullWidth
        type="submit"
      >
        登録する
      </Button>
    </Box>
  )
}

export default CreateForm
