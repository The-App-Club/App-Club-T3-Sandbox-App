/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

const Warning = ({
  width = 100,
  height = 100,
}: {
  width?: number
  height?: number
}) => {
  return (
    <svg
      css={css`
        shape-rendering: geometricprecision;
        background: transparent;
      `}
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      id="hdbdbdba"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs id="SvgjsDefs1001"></defs>
      <g
        id="SvgjsG1007"
        transform="matrix(0.914372, 0, 0, 0.957844, 6.639944, 4.703768)"
        fill="#111"
      >
        <g
          fill="none"
          stroke="black"
          fontFamily="Times New Roman"
          fontSize="16"
          transform="scale(1 -1)"
        >
          <g transform="translate(0 -96)">
            <g>
              <path
                d="M 21.633,34.925 C 24.973,46.855 40.837,53.71 46.922,66.223 C 49.866,72.279 48.49,83.461 43.464,87.939 C 43.197,88.178 42.09,90.326 43.217,89.521 C 54.416,81.327 63.521,70.509 59.309,60.068 C 53.464,45.577 38.409,38.34 38.519,23.585 C 38.566,17.447 43.088,12.523 48.838,7.375 L 49.073,6.299 C 34.143,10.56 17.742,21.028 21.633,34.925 Z M 59.314,18.723 C 67.987,26.524 73.282,31.263 71.043,40.298 C 73.766,36.119 76.295,30.323 74.135,25.806 C 72.203,21.769 70.28,18.956 63.244,15.02 C 59.515,12.935 56.712,10.677 54.37,6.898 C 54.248,10.853 55.011,14.852 59.314,18.723 Z M 49.686,32.153 C 53.003,38.255 57.845,42.622 62.538,48.882 C 65.869,53.325 68.92,60.704 65.731,66.728 L 65.937,67.016 C 70.824,61.556 71.028,52.654 69.495,46.059 C 67.086,35.69 58.5,31.5 53.511,23.918 C 51.557,20.948 50.446,17.311 51,13.5 C 45.461,18.021 46.717,26.69 49.686,32.153 Z"
                strokeLinejoin="miter"
                strokeLinecap="round"
                stroke="none"
                strokeWidth="0.75"
                fill="#111"
                markerStart="none"
                markerEnd="none"
                strokeMiterlimit="79.8403193612775"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Warning
