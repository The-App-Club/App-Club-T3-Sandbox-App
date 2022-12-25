/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

const NotAuth = ({
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
      id="dabahffc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="SvgjsG1007"
        transform="matrix(1.249993801147684,0,0,1.249993801147684,37.49998807913016,-27.01605035451713)"
        fill="#111"
      >
        <path
          fill="#111"
          d="M 32.764 78.431 C 30.542 80.085 27.879 80.724 25.151 80.837 C 22.027 80.967 18.881 80.863 15.756 80.866 C 11.922 80.868 8.088 80.861 4.256 80.88 C 2.337 80.89 0.417 80.898 -1.501 80.884 C -3.174 80.871 -4.863 80.908 -6.527 80.717 C -9.54 80.371 -12.272 79.171 -14.262 76.815 C -16.006 74.754 -17.124 72.183 -17.347 69.477 C -17.583 66.62 -16.785 63.701 -15.063 61.401 C -14.131 60.155 -13.013 59.078 -11.698 58.24 C -11.303 57.988 -10.898 57.745 -10.472 57.547 C -10.47 57.547 -10.469 57.546 -10.467 57.545 C -10.482 57.417 -10.497 57.289 -10.507 57.16 C -10.573 56.36 -10.525 55.544 -10.368 54.755 C -9.776 51.811 -7.705 49.254 -4.938 48.1 C -3.42 47.469 -1.709 47.258 -0.083 47.517 C 1.333 47.742 2.586 48.332 3.759 49.12 C 5.07 47.008 6.619 45.097 8.76 43.761 C 10.965 42.384 13.59 41.643 16.187 41.65 C 21.746 41.667 27.149 45.009 29.351 50.211 C 29.975 51.682 30.395 53.245 30.522 54.842 C 30.591 55.71 30.57 56.559 30.451 57.42 C 30.451 57.42 32.269 58.406 32.443 58.532 C 34.944 60.326 36.758 62.976 37.405 66.008 C 38.315 70.629 36.563 75.602 32.764 78.431 Z M -10.366 57.495 C -10.301 57.459 -10.325 57.461 -10.366 57.495 Z M 36.289 66.318 C 35.887 64.434 35.013 62.649 33.721 61.219 C 33.063 60.49 32.333 59.823 31.503 59.297 C 31.033 58.999 30.552 58.725 30.044 58.5 C 29.752 58.372 29.38 58.158 29.328 57.797 C 29.22 57.049 29.438 56.249 29.404 55.485 C 29.364 54.607 29.244 53.738 29.029 52.886 C 28.675 51.476 28.141 50.135 27.351 48.912 C 25.875 46.628 23.681 44.764 21.147 43.767 C 18.213 42.613 14.931 42.486 11.94 43.526 C 10.314 44.091 8.827 44.966 7.565 46.143 C 6.28 47.341 5.325 48.737 4.431 50.243 C 4.281 50.494 3.898 50.639 3.64 50.451 C 1.788 49.103 -0.317 48.265 -2.644 48.659 C -4.564 48.982 -6.286 49.924 -7.537 51.438 C -8.989 53.196 -9.504 55.298 -9.309 57.545 C -9.229 58.461 -10.118 58.629 -10.755 59.019 C -11.653 59.569 -12.491 60.21 -13.213 60.981 C -15.227 63.134 -16.388 66.022 -16.225 68.991 C -16.076 71.694 -14.984 74.385 -13.121 76.355 C -12.136 77.396 -10.951 78.313 -9.603 78.826 C -8.048 79.418 -6.411 79.62 -4.758 79.675 C -1.067 79.798 2.634 79.722 6.328 79.706 C 10.159 79.689 13.991 79.704 17.823 79.7 C 19.645 79.697 21.468 79.708 23.291 79.707 C 25.013 79.707 26.77 79.669 28.445 79.224 C 34.006 77.744 37.398 71.948 36.289 66.318 Z M -10.366 57.495 C -10.301 57.459 -10.325 57.461 -10.366 57.495 Z M 20.704 60.701 C 20.809 61.771 20.726 62.876 20.726 63.95 C 20.726 65.06 20.726 66.171 20.726 67.281 C 20.726 68.413 20.726 69.544 20.726 70.676 C 20.726 71.469 20.726 72.242 20.277 72.931 C 19.893 73.522 19.318 73.994 18.628 74.173 C 18.209 74.282 17.792 74.282 17.361 74.279 C 16.831 74.275 16.303 74.278 15.773 74.278 C 13.585 74.278 11.397 74.278 9.209 74.278 C 7.993 74.278 6.778 74.278 5.562 74.278 C 4.655 74.278 3.681 74.335 2.874 73.835 C 2.105 73.358 1.655 72.57 1.567 71.671 C 1.457 70.522 1.534 69.339 1.534 68.186 C 1.534 66.956 1.534 65.727 1.534 64.497 C 1.534 63.862 1.534 63.227 1.534 62.591 C 1.534 62.044 1.496 61.48 1.541 60.934 C 1.604 60.183 1.898 59.433 2.466 58.921 C 3.068 58.38 3.772 58.179 4.554 58.152 C 4.556 58.125 4.558 58.099 4.56 58.073 C 4.732 56.198 5.487 54.291 6.89 53.003 C 8.276 51.731 10.129 51.013 12.01 51.323 C 15.318 51.87 17.427 54.958 17.7 58.166 C 18.416 58.186 19.093 58.346 19.667 58.815 C 20.255 59.295 20.604 59.947 20.704 60.701 Z M 19.765 61.162 C 19.752 60.345 19.361 59.534 18.545 59.251 C 18.088 59.091 17.615 59.126 17.138 59.126 C 16.588 59.126 16.039 59.126 15.49 59.126 C 14.276 59.126 13.063 59.126 11.85 59.126 C 9.472 59.126 7.095 59.126 4.719 59.126 C 4.253 59.126 3.799 59.143 3.397 59.412 C 3.056 59.64 2.776 59.973 2.639 60.366 C 2.464 60.867 2.495 61.378 2.495 61.902 C 2.495 62.484 2.495 63.067 2.495 63.649 C 2.495 66.052 2.479 68.455 2.495 70.858 C 2.503 71.9 2.76 73.004 3.946 73.241 C 4.476 73.348 5.029 73.312 5.567 73.312 C 6.133 73.312 6.7 73.312 7.266 73.312 C 9.692 73.312 12.118 73.312 14.544 73.312 C 15.16 73.312 15.776 73.312 16.392 73.312 C 16.935 73.312 17.498 73.355 18.039 73.304 C 19.095 73.202 19.766 72.295 19.766 71.272 C 19.766 68.833 19.766 66.395 19.766 63.956 C 19.766 63.024 19.778 62.092 19.765 61.162 Z M 13.867 64.469 C 13.963 65.253 13.752 66.248 13.1 66.762 C 12.887 66.928 12.773 67.035 12.762 67.323 C 12.752 67.541 12.758 67.76 12.773 67.979 C 12.8 68.385 12.852 68.801 12.809 69.209 C 12.731 69.961 12.378 70.608 11.592 70.771 C 10.941 70.905 10.166 70.801 9.786 70.184 C 9.384 69.529 9.458 68.733 9.464 67.996 C 9.467 67.697 9.539 67.325 9.383 67.052 C 9.264 66.847 9.094 66.694 8.95 66.51 C 8.683 66.168 8.486 65.807 8.412 65.377 C 8.141 63.792 9.312 62.141 10.954 62.092 C 12.344 62.05 13.63 63.02 13.862 64.42 C 13.863 64.43 13.863 64.438 13.863 64.448 C 13.864 64.455 13.866 64.461 13.867 64.469 Z M 12.577 63.927 C 12.244 63.449 11.675 63.146 11.091 63.153 C 10.464 63.162 9.873 63.477 9.602 64.063 C 9.384 64.532 9.3 65.123 9.593 65.58 C 9.789 65.887 10.086 66.128 10.245 66.459 C 10.531 67.054 10.525 67.721 10.493 68.369 C 10.471 68.818 10.367 69.7 10.994 69.746 C 11.16 69.76 11.402 69.788 11.55 69.689 C 11.753 69.553 11.749 69.217 11.748 68.999 C 11.745 68.652 11.737 68.307 11.718 67.96 C 11.684 67.337 11.675 66.648 12.175 66.196 C 12.831 65.633 13.102 64.681 12.577 63.927 Z M 5.529 58.16 C 9.264 58.21 13.001 58.163 16.736 58.16 C 16.485 55.469 14.742 52.703 11.914 52.275 C 8.937 51.823 6.408 54.157 5.712 56.935 C 5.617 57.341 5.558 57.748 5.529 58.16 Z"
        ></path>
      </g>
    </svg>
  )
}

export default NotAuth
