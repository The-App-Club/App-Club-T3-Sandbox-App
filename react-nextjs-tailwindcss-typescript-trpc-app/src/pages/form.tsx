/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import NextLink from 'next/link'

import {useForm} from 'react-hook-form'

import type {NextPage} from 'next'
import {Box, Button, TextField} from '@mui/joy'
import Spacer from '@/components/ui/Spacer'

const FormPage: NextPage = () => {
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
    try {
      const response = await fetch('/api/upload', {
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
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
        {/* <input type="file" name="files[]" /> */}
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
