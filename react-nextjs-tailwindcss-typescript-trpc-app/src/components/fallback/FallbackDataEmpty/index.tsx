/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import {Box, Typography} from '@mui/joy'

import DataEmpty from '@/components/icon/DataEmpty'
import theme from '@/config/theme'

const FallbackDataEmpty = ({
  message = `まだデータがありません`,
  iconSize = 150,
}: {
  message?: string
  iconSize?: number
}) => {
  return (
    <Box
      css={css`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      `}
    >
      <DataEmpty width={iconSize} height={iconSize} />
      <Typography
        css={css`
          font-weight: 700;
          font-size: 0.875rem; /* 14px */
          line-height: 1.25rem; /* 20px */
          color: #6b7280; // https://tailwindcss.com/docs/customizing-colors
          font-family: ${theme.typography.display1.fontFamily};
        `}
      >
        {message}
      </Typography>
    </Box>
  )
}

export {FallbackDataEmpty}
