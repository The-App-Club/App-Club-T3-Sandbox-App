/** @jsxImportSource @emotion/react */

import {useMemo} from 'react'

import NextLink from 'next/link'
import {useRouter} from 'next/router'

import {css} from '@emotion/react'
import {zodResolver} from '@hookform/resolvers/zod'
import {Box, Button, Divider, Typography} from '@mui/joy'
import {ArrowLeft} from 'phosphor-react'
import {useForm} from 'react-hook-form'

import BebopTextField from '@/components/ui/BebopTextfield'
import Spacer from '@/components/ui/Spacer'
import {UserFormSchema} from '@/features/user/domains/userForm'
import useSidebar from '@/features/user/hooks/useSidebar'
import useToast from '@/libs/useToast'
import {merge} from '@/utils/mergeUtil'
import {trpc} from '@/utils/trpc'

import type {User} from '@/features/user/domains/user'
import type {UserForm} from '@/features/user/domains/userForm'
import type {Merge} from 'type-fest'

const EditUserPage = () => {
  const router = useRouter()
  const {activeSidebar} = useSidebar()
  const {successToast, errorToast} = useToast()
  const {mutate, reset} = trpc.user.update.useMutation()

  const {activeUser} = useMemo(() => {
    return {
      ...activeSidebar,
    }
  }, [activeSidebar])

  const {
    register,
    handleSubmit,
    setError,
    formState: {errors, isValid, isSubmitted},
  } = useForm({resolver: zodResolver(UserFormSchema), mode: 'all'})

  const onSubmit = (data: any) => {
    setError('Do submit', {
      message: 'Thank you submit!',
      type: 'disabled',
    })
    const willPostedData = merge(data, {id: activeUser?.id}) as Merge<
      Pick<User, 'id'>,
      UserForm
    >
    mutate(willPostedData, {
      onSuccess: function (data, variables, context) {
        console.log(`[onSuccess]`)
        successToast('更新しました')
        router.push({
          pathname: '/users',
        })
      },
      onError: function (error, variables, context) {
        console.log(`[onError]`)
        errorToast('更新に失敗しました')
      },
      onSettled: function (data, error, variables, context) {
        console.log(`[onSettled]`)
        reset()
      },
    })
  }

  return (
    <Box component={'section'} className={'mx-auto mt-24 w-full max-w-lg'}>
      <Box
        css={css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        `}
      >
        <NextLink href={'/users'} passHref>
          <ArrowLeft
            size={32}
            css={css`
              :hover {
                cursor: pointer;
              }
            `}
          />
        </NextLink>
        <Typography
          component={'h1'}
          level="h1"
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          Edit User
        </Typography>
      </Box>
      <Spacer />
      <Divider />
      <Spacer />
      <Box
        component={'form'}
        css={css`
          max-width: 100%;
          width: 100%;
        `}
        onSubmit={handleSubmit(onSubmit)}
      >
        <BebopTextField
          disabled={true}
          name={'id'}
          type={'text'}
          labelName={`ID`}
          placeholder={``}
          required
          tooltipText="IDのツールチップになります"
          defaultValue={activeUser?.id || ``}
          register={register}
          errors={errors}
        />
        <Spacer />
        <BebopTextField
          autoFocus
          name={'name'}
          type={'text'}
          labelName={`お名前`}
          placeholder={`山田太郎`}
          required
          tooltipText="お名前のツールチップになります"
          defaultValue={activeUser?.name || ``}
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
          defaultValue={activeUser?.email || ``}
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
          更新する
        </Button>
      </Box>
    </Box>
  )
}

export default EditUserPage
