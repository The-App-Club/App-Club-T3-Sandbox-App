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
      id="hegeecdf"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="SvgjsG1007"
        transform="matrix(0.545547, 0, 0, 0.545518, -2.57785, -4.432826)"
        fill="#111"
      >
        <path d="M149.069,80.073c-0.354-0.873-0.741-1.737-1.143-2.591c7.788-14.021,9.177-24.166,3.966-29.378  c-5.21-5.21-15.354-3.823-29.374,3.964c-0.856-0.402-1.72-0.786-2.596-1.141c-3.159-1.281-6.461-2.259-9.813-2.908  c-6.644-1.286-13.578-1.285-20.218,0c-3.353,0.649-6.654,1.627-9.813,2.909c-3.219,1.305-6.318,2.937-9.214,4.848  c-2.97,1.961-5.764,4.243-8.304,6.782c-2.537,2.539-4.819,5.332-6.781,8.303c-1.913,2.898-3.544,5.998-4.848,9.213  c-1.28,3.157-2.259,6.458-2.909,9.813c-0.643,3.321-0.969,6.723-0.969,10.109s0.326,6.788,0.969,10.109  c0.65,3.355,1.629,6.656,2.909,9.813c0.355,0.875,0.738,1.739,1.141,2.595c-7.787,14.018-9.176,24.162-3.964,29.374  c2.074,2.074,4.927,3.106,8.494,3.106c5.746-0.001,13.347-2.678,22.525-7.99c0.006-0.003,0.011-0.007,0.017-0.01  c0.017-0.01,0.034-0.02,0.05-0.03c11.793-6.835,25.189-17.5,37.731-30.043c10.547-10.546,19.758-21.694,26.49-31.989  c0.709,2.049,1.278,4.154,1.69,6.283c0.558,2.886,0.841,5.84,0.841,8.78s-0.283,5.895-0.841,8.779  c-0.563,2.91-1.412,5.774-2.522,8.512c-1.13,2.786-2.544,5.474-4.203,7.987c-1.701,2.577-3.684,5.003-5.892,7.211  c-2.202,2.204-4.628,4.186-7.21,5.89c-2.511,1.659-5.197,3.072-7.986,4.203c-2.739,1.11-5.604,1.96-8.513,2.522  c-3.139,0.607-6.348,0.879-9.56,0.836c-1.909-0.073-3.526,1.506-3.56,3.438c-0.034,1.933,1.505,3.526,3.438,3.56  c0.3,0.006,0.601,0.008,0.901,0.008c3.387,0,6.788-0.326,10.109-0.969c3.354-0.649,6.655-1.628,9.813-2.908  c3.217-1.305,6.317-2.936,9.214-4.849c2.975-1.964,5.768-4.246,8.303-6.782c2.54-2.54,4.822-5.333,6.783-8.304  c1.914-2.899,3.545-5.999,4.848-9.213c1.28-3.156,2.259-6.457,2.909-9.813c0.643-3.322,0.968-6.724,0.968-10.108  s-0.325-6.786-0.968-10.109C151.328,86.532,150.349,83.231,149.069,80.073z M53.058,146.939c-1.889-1.889-1.448-7.831,3.136-17.211  c1.867,2.744,3.998,5.339,6.367,7.707c2.364,2.364,4.958,4.496,7.708,6.367C60.888,148.386,54.948,148.828,53.058,146.939z   M111.976,111.972c-11.55,11.55-23.787,21.412-34.672,27.974c-0.877-0.499-1.744-1.017-2.582-1.571  c-2.581-1.704-5.007-3.687-7.21-5.89c-2.208-2.208-4.189-4.635-5.891-7.21c-1.659-2.515-3.073-5.202-4.203-7.988  c-1.11-2.737-1.959-5.602-2.522-8.512c-0.559-2.884-0.842-5.838-0.842-8.779s0.283-5.896,0.842-8.779  c0.563-2.91,1.412-5.774,2.522-8.512c1.131-2.788,2.545-5.475,4.203-7.987c1.702-2.579,3.685-5.005,5.89-7.21  c2.207-2.206,4.633-4.188,7.211-5.89c2.51-1.657,5.197-3.072,7.987-4.203c2.74-1.111,5.604-1.96,8.513-2.523  c5.768-1.116,11.79-1.117,17.558,0c2.908,0.563,5.772,1.411,8.513,2.522c2.791,1.132,5.478,2.546,7.987,4.204  c1.938,1.279,3.801,2.725,5.535,4.295c1.433,1.297,3.646,1.188,4.943-0.244c1.298-1.433,1.188-3.646-0.244-4.944  c-1.816-1.646-3.76-3.165-5.778-4.537c9.379-4.583,15.317-5.023,17.207-3.135c2.227,2.227,1.237,10.068-5.993,22.563  C134.412,86.914,124.123,99.825,111.976,111.972z"></path>
      </g>
    </svg>
  )
}

export default Warning
