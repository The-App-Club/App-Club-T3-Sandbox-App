/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import {Box, Button, Divider, Typography} from '@mui/joy'

import Warning from '@/components/icon/Warning'
import {Spacer} from '@/components/ui/Spacer'

const FallbackWarning = ({
  status = 500,
  iconSize = 150,
  message = `Something went wrong. But maybe you can recover on your own...`,
  refetch,
}: {
  status?: number
  iconSize?: number
  message?: string
  refetch?: any
}) => {
  return (
    <Box
      css={css`
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
      `}
    >
      <Box
        css={css`
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        `}
      >
        <Warning width={iconSize} height={iconSize} />
        <Typography
          component={'strong'}
          css={css`
            font-weight: 700;
            font-size: 1.25rem; /* 20px */
            line-height: 1.75rem; /* 28px */
            color: #6b7280; // https://tailwindcss.com/docs/customizing-colors
          `}
        >
          {status}
        </Typography>
        <Typography
          css={css`
            font-weight: 700;
            font-size: 1.125rem; /* 18px */
            line-height: 1.75rem; /* 28px */
            color: #6b7280; // https://tailwindcss.com/docs/customizing-colors
          `}
        >
          {message}
        </Typography>
        <Spacer />
        <Typography
          css={css`
            font-weight: 700;
            font-size: 0.875rem; /* 14px */
            line-height: 1.25rem; /* 20px */
            color: #6b7280; // https://tailwindcss.com/docs/customizing-colors
          `}
        >
          原状回復の余地があります。リトライしてみてください。
        </Typography>
      </Box>
      <Spacer />
      <Divider />
      <Spacer />
      <Box
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <Button
          variant="solid"
          onClick={() => {
            if (refetch) {
              refetch()
            }
          }}
        >
          リトライ
        </Button>
      </Box>
    </Box>
  )
}

export {FallbackWarning}
