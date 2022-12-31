/** @jsxImportSource @emotion/react */
import NextLink from 'next/link'

import {css} from '@emotion/react'
import {Box, Button, Divider, TextField, Typography} from '@mui/joy'
import axios from 'axios'
import {ArrowLeft} from 'phosphor-react'
import {useForm} from 'react-hook-form'

import Spacer from '@/components/ui/Spacer'

import type {AxiosProgressEvent} from 'axios'

const FormPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm()
  const onSubmit = async (data: any) => {
    const [file] = [...watch('avator')]
    const willUploadedData = {...data, file}
    console.log(willUploadedData)
    const formData = new FormData()
    formData.append('example', willUploadedData.example)
    formData.append('avator', willUploadedData.file)

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

  const renderPreview = () => {
    if (!watch('avator')) {
      return null
    }
    const [file] = [...watch('avator')]
    if (!file) {
      return null
    }
    const preview = window.URL.createObjectURL(file)
    return (
      <picture>
        <source srcSet={preview} type={`image/png`} />
        <img
          src={preview}
          alt={'cover'}
          css={css`
            width: 100%;
            display: block;
            object-fit: contain;
          `}
        />
      </picture>
    )
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
          max-width: 20rem;
        `}
        component={'form'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField defaultValue="test" {...register('example')} />
        <Spacer />
        {renderPreview()}
        <Button variant="solid" component="label">
          ファイルを選択
          <input
            type="file"
            hidden
            accept=".jpg,.png,.jpeg"
            {...register('avator')}
          />
        </Button>
        <Spacer />
        <Button variant={'solid'} type={'submit'}>
          Do
        </Button>
      </Box>
    </Box>
  )
}

export default FormPage
