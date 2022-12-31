/** @jsxImportSource @emotion/react */
import NextLink from 'next/link'

import {css} from '@emotion/react'
import {zodResolver} from '@hookform/resolvers/zod'
import {Box, Button, Divider, Typography} from '@mui/joy'
import {ArrowLeft} from 'phosphor-react'
import {useForm} from 'react-hook-form'

import BebopFileUploader from '@/components/ui/BebopFileUploader'
import BebopTextField from '@/components/ui/BebopTextfield'
import Spacer from '@/components/ui/Spacer'
import {ExampleFormSchema} from '@/features/form/domains/exampleForm'
import {axios} from '@/libs/axios'

import type {AxiosProgressEvent} from 'axios'

const FormPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors, isValid, isSubmitted},
  } = useForm({resolver: zodResolver(ExampleFormSchema), mode: 'all'})
  const onSubmit = async (data: any) => {
    const [file] = data.avator
    const willUploadedData = {...data, avator: file}
    console.log(willUploadedData)
    const formData = new FormData()
    formData.append('example', willUploadedData.example)
    formData.append('avator', willUploadedData.avator)

    const response = await axios.post('/api/upload', formData, {
      headers: {'content-type': 'multipart/form-data'},
      onUploadProgress: (event: AxiosProgressEvent) => {
        if (!event.total) {
          return
        }
        console.log(
          `Current progress:`,
          Math.round((event.loaded * 100) / event.total)
        )
      },
    })
    console.log('response', response.data)
  }

  return (
    <Box component={'section'} className={'mx-auto mt-24 w-full max-w-lg'}>
      <Box
        css={css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        `}
      >
        <NextLink href={'/'} passHref>
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
          フォーム
        </Typography>
      </Box>
      <Spacer />
      <Divider />
      <Spacer />
      <Box
        css={css`
          width: 100%;
          max-width: 100%;
        `}
        component={'form'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <BebopTextField
          autoFocus
          name={'example'}
          type={'text'}
          labelName={`Example Field`}
          placeholder={`Something value`}
          required
          tooltipText="Example Fieldのツールチップになります"
          defaultValue={``}
          register={register}
          errors={errors}
        />
        <Spacer />
        <BebopFileUploader
          name="avator"
          labelName={`アバター画像`}
          required
          tooltipText="アバター画像のツールチップになります"
          register={register}
          watch={watch}
          error={errors['avator']}
        />
        <Spacer />
        <Divider />
        <Spacer height="3rem" />
        <Button
          variant="solid"
          color="primary"
          type={'submit'}
          fullWidth
          disabled={!isValid}
          loading={isSubmitted}
          loadingPosition="end"
        >
          送信する
        </Button>
      </Box>
    </Box>
  )
}

export default FormPage
