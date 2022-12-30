/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import NextLink from 'next/link'

import {useForm} from 'react-hook-form'

import type {NextPage} from 'next'
import {Box, Button, TextField} from '@mui/joy'
import Spacer from '@/components/ui/Spacer'

import type {AxiosProgressEvent} from 'axios'
import axios from 'axios'

const FormPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm()
  const onSubmit = async (data: any) => {
    const [file] = [...watch('file')]
    const willUploadedData = {...data, file}
    console.log(willUploadedData)
    const formData = new FormData()
    formData.append('example', willUploadedData.example)
    formData.append('file', willUploadedData.file)

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
    if (!watch('file')) {
      return null
    }
    const [file] = [...watch('file')]
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
    <Box className={'Uppy'}>
      <Box
        css={css`
          width: 100%;
          max-width: 20rem;
          margin: 2rem auto 0;
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
            {...register('file')}
          />
        </Button>
        <Spacer />
        <Box>
          <Button variant={'solid'} type={'submit'}>
            Do
          </Button>
        </Box>
        <Box
          css={css`
            display: flex;
            justify-content: flex-end;
          `}
        >
          <NextLink href={'/'}>
            <a>Back to Home</a>
          </NextLink>
        </Box>
        <Box className="UppyInput-Progress"></Box>
      </Box>
    </Box>
  )
}

export default FormPage
