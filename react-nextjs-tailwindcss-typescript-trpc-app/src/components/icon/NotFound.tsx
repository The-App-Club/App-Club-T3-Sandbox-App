/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

const NotFound = ({
  width = 100,
  height = 100,
}: {
  width?: number
  height?: number
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={`${width}`}
      height={`${height}`}
      css={css`
        shape-rendering: geometricprecision;
      `}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        d="M51.538 70 39.616 81.922a9.228 9.228 0 0 1-13.078 0l-8.46-8.46a9.228 9.228 0 0 1 0-13.078L30 48.462M22.306 77.694 10 90M90 10 77.694 22.306M56.154 56.154l-9.232 9.23"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        css={css`
          stroke-width: 6px;
        `}
      />
      <path
        fill="#231f20"
        css={css`
          stroke-width: 6px;
        `}
        d="m56.154 56.154-9.232 9.23"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        css={css`
          stroke-width: 6px;
        `}
        d="m43.846 43.846-9.23 9.232"
      />
      <path
        fill="#231f20"
        css={css`
          stroke-width: 6px;
        `}
        d="m43.846 43.846-9.23 9.232"
      />
      <path
        d="m70 51.538 11.922-11.922a9.228 9.228 0 0 0 0-13.078l-8.46-8.46a9.228 9.228 0 0 0-13.078 0L48.462 30M45.384 26.922l27.694 27.694M26.922 45.384l27.694 27.694"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        css={css`
          stroke-width: 6px;
        `}
      />
    </svg>
  )
}

export default NotFound
