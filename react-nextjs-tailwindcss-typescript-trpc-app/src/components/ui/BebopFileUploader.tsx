/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Tooltip,
  Typography,
} from '@mui/joy'
import {Asterisk} from 'phosphor-react'

import Spacer from '@/components/ui/Spacer'

import type {FieldValues, UseFormRegister, UseFormWatch} from 'react-hook-form'

const BebopFileUploader = ({
  name,
  labelName = `お名前`,
  tooltipText = `お名前のツールチップ`,
  required = true,
  watch,
  register,
  error,
}: {
  name: string
  labelName?: string
  tooltipText?: string
  required?: boolean
  watch: UseFormWatch<FieldValues>
  register: UseFormRegister<FieldValues>
  error: any
}) => {
  const renderPreview = () => {
    if (!watch(name)) {
      return null
    }
    const [file] = [...watch(name)]
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
    <FormControl>
      <Box
        css={css`
          display: flex;
          align-items: center;
          gap: 0.5rem;
        `}
      >
        <Tooltip title={tooltipText} arrow placement="top">
          <FormLabel
            css={css`
              font-weight: 700;
            `}
          >
            {labelName}
          </FormLabel>
        </Tooltip>
        {required && (
          <Asterisk
            color="red"
            size={14}
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          />
        )}
      </Box>
      <Spacer height="0.5rem" />
      {renderPreview()}
      <Spacer height="0.5rem" />
      <Typography
        component={'p'}
        css={css`
          font-size: 0.75rem; /* 12px */
          line-height: 1rem; /* 16px */
          color: #6b7280; // https://tailwindcss.com/docs/customizing-colors
        `}
      >
        {`Currently supported file extensions are png, jpeg, and jpg. The maximum file size is 2MB. Please select files with an aspect ratio of 3:4.`}
      </Typography>
      <Spacer height="0.5rem" />
      <Button variant="solid" component="label">
        ファイルを選択
        <input
          type="file"
          hidden
          {...register(name)}
          accept=".jpg,.png,.jpeg"
        />
      </Button>
      {error && (
        <FormControl error={error ? true : false}>
          <FormHelperText>{error.message}</FormHelperText>
        </FormControl>
      )}
    </FormControl>
  )
}

export default BebopFileUploader
