/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

const Logo = ({
  width = 100,
  height = 60,
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
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 50.052 20.208 C 48.238 20.686 46.44 22.037 46.238 24.141 L 41.826 26.567 C 41.514 26.736 41.391 27.165 41.572 27.463 L 42.636 29.236 L 30.875 38.652 C 30.639 38.846 30.572 39.207 30.727 39.467 L 34.818 46.252 C 34.977 46.518 35.349 46.646 35.648 46.538 L 38.099 45.681 L 38.099 46.783 L 20.244 46.783 C 19.923 46.85 19.692 47.121 19.69 47.435 L 19.69 71.564 C 19.69 72.614 19.88 73.458 20.5 74.05 C 21.118 74.643 22 74.825 23.099 74.825 L 25.187 74.825 C 25.532 77.749 28.133 80.043 31.28 80.043 C 34.428 80.043 37.029 77.749 37.375 74.825 L 62.005 74.825 C 62.351 77.749 64.952 80.043 68.099 80.043 C 71.247 80.043 73.847 77.749 74.193 74.825 L 76.281 74.825 C 77.379 74.825 78.283 74.643 78.902 74.05 C 79.521 73.458 79.69 72.615 79.69 71.564 L 79.69 64.981 C 79.69 64.329 79.253 63.876 78.753 63.514 C 76.943 62.367 74.73 61.769 72.744 61.273 L 69.676 51.837 L 72.339 51.327 C 72.644 51.255 72.862 50.997 72.872 50.696 C 72.872 49.229 72.265 48.161 71.422 47.557 C 70.581 46.953 69.576 46.783 68.781 46.783 L 55.826 46.783 L 55.826 41.423 L 56.507 41.056 C 57.54 41.826 58.986 41.916 59.895 41.117 C 60.759 40.331 61.016 39.006 60.897 37.571 C 61.573 37.715 62.285 37.769 62.986 37.469 C 64.26 36.764 64.431 35.766 64.328 34.535 C 65.831 34.215 66.87 33.473 67.353 32.456 C 67.905 31.296 68.004 29.979 68.227 28.686 C 68.45 27.392 68.773 26.153 69.654 25.119 C 70.536 24.086 71.994 23.185 74.661 22.695 C 74.955 22.633 75.186 22.366 75.197 22.079 C 75.2 21.783 75 21.519 74.704 21.431 C 71.858 20.753 69.685 20.047 67.353 20.106 C 65.216 20.161 62.959 21.019 60.173 22.878 C 59.737 21.936 59.268 21.192 58.744 20.738 C 58.089 20.168 57.316 19.975 56.636 20.065 C 55.714 20.237 54.972 20.742 54.27 21.166 C 53.18 19.881 51.5 19.92 50.052 20.207 L 50.052 20.208 Z M 53.568 22.53 L 56.21 26.913 L 57.381 26.261 L 54.995 22.287 C 55.544 21.854 56.186 21.574 56.828 21.369 C 57.169 21.325 57.423 21.363 57.829 21.716 C 58.234 22.068 58.747 22.785 59.235 24.04 C 59.387 24.412 59.944 24.565 60.279 24.325 C 63.313 22.16 65.379 21.461 67.396 21.411 C 68.821 21.374 70.374 21.737 72.126 22.165 C 70.609 22.729 69.364 23.4 68.611 24.284 C 67.499 25.586 67.1 27.095 66.863 28.462 C 66.626 29.829 66.515 31.088 66.117 31.926 C 65.758 32.681 65.263 33.167 64.029 33.373 L 61.196 28.665 L 60.023 29.317 L 63.006 34.269 C 63.195 35.171 63.063 35.768 62.432 36.287 C 61.927 36.502 61.018 36.391 60.492 36.144 C 60.033 35.934 59.42 36.403 59.534 36.879 C 59.895 38.382 59.485 39.701 58.958 40.18 C 58.026 40.78 57.113 39.934 56.614 39.364 L 47.602 24.406 C 47.678 22.847 48.957 21.835 50.414 21.451 C 52.122 21.25 52.823 21.31 53.568 22.53 Z M 50.031 41.485 L 51.118 43.278 C 51.301 43.571 51.748 43.679 52.055 43.502 L 54.463 42.177 L 54.463 46.783 L 39.462 46.783 L 39.462 45.193 L 50.031 41.485 Z M 21.054 48.088 L 68.781 48.088 C 69.349 48.088 70.069 48.222 70.591 48.596 C 71.011 48.896 71.284 49.419 71.401 50.166 C 69.35 50.564 67.297 50.955 65.244 51.348 C 64.923 51.415 64.692 51.686 64.69 52 L 64.69 61.783 C 64.69 62.124 65.015 62.435 65.372 62.435 L 72.126 62.435 C 74.284 62.883 76.781 63.457 78.326 64.981 L 78.326 71.564 C 78.326 72.471 78.176 72.91 77.944 73.134 C 77.71 73.357 77.228 73.521 76.281 73.521 L 74.193 73.521 C 73.847 70.597 71.247 68.304 68.099 68.304 C 64.952 68.304 62.351 70.597 62.005 73.521 L 60.598 73.521 L 60.598 54.608 C 60.598 54.267 60.275 53.956 59.917 53.956 L 52.29 53.956 C 51.969 54.024 51.738 54.294 51.735 54.608 L 51.735 73.521 L 37.375 73.521 C 37.029 70.597 34.428 68.304 31.28 68.304 C 28.133 68.304 25.532 70.597 25.187 73.521 L 23.099 73.521 C 22.152 73.521 21.692 73.357 21.459 73.134 C 21.224 72.91 21.054 72.471 21.054 71.564 L 21.054 48.087 L 21.054 48.088 Z M 25.698 52 C 25.377 52.067 25.147 52.338 25.144 52.653 L 25.144 65.044 C 25.144 65.383 25.469 65.695 25.826 65.695 L 47.644 65.695 C 48.002 65.695 48.326 65.384 48.326 65.044 L 48.326 52.652 C 48.326 52.311 48.002 52 47.644 52 L 25.698 52 Z M 31.28 56.218 C 31.791 57.181 32.764 57.87 34.009 57.87 C 35.247 57.87 36.224 57.177 36.735 56.219 C 37.245 57.181 38.22 57.87 39.462 57.87 C 40.701 57.87 41.678 57.177 42.19 56.219 C 42.7 57.181 43.674 57.87 44.917 57.87 C 45.678 57.873 46.41 57.596 46.963 57.094 L 46.963 64.39 L 26.507 64.39 L 26.507 57.094 C 27.059 57.598 27.792 57.875 28.553 57.87 C 29.792 57.87 30.769 57.177 31.28 56.219 L 31.28 56.218 Z M 31.28 69.608 C 33.925 69.608 36.053 71.644 36.053 74.173 C 36.053 76.702 33.925 78.738 31.28 78.738 C 28.636 78.738 26.507 76.702 26.507 74.173 C 26.507 71.644 28.636 69.608 31.28 69.608 Z M 68.099 69.608 C 70.744 69.608 72.872 71.644 72.872 74.173 C 72.872 76.702 70.744 78.738 68.099 78.738 C 65.455 78.738 63.327 76.702 63.327 74.173 C 63.327 71.644 65.455 69.608 68.099 69.608 Z M 27.871 74.173 C 27.871 76.683 30.712 78.252 32.986 76.996 C 35.258 75.741 35.258 72.604 32.986 71.348 C 32.467 71.062 31.879 70.912 31.28 70.912 C 29.235 70.878 27.913 72.792 27.871 74.173 Z M 64.69 74.173 C 64.69 76.683 67.53 78.252 69.803 76.996 C 72.076 75.741 72.076 72.604 69.803 71.348 C 69.286 71.062 68.697 70.912 68.099 70.912 C 66.053 70.878 64.73 72.792 64.69 74.173 Z"
        overflow="visible"
        xmlns="http://www.w3.org/2000/svg"
        fill="#111"
      ></path>
    </svg>
  )
}

export default Logo
