/*
 * [EYE ICON]
 */
// SECTION Imports
// React
import React from 'react'
// Chakra UI
import { Icon } from '@chakra-ui/react'
// Prop types
import PropTypes from 'prop-types'

// SECTION Icon
export const EyeIcon = ({ height, width }) => (
  <Icon
    width={width}
    height={height}
    viewBox="0 0 495.778 495.778"
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    justifyContent="center"
    alignSelf="center"
    xmlSpace="preserve"
  >
    <g>
      <g>
        <path d="m499.4,250.8c-51-86.3-143.6-140.4-243.4-140.4s-192.5,54.1-243.4,140.4c-2.1,3.1-2.1,7.3 5.32907e-15,10.4 51,86.3 143.6,140.4 243.4,140.4s192.5-54.1 243.4-140.4c2.1-3.1 2.1-7.3 0-10.4zm-243.4,130c-90.5,0-174.8-47.8-221.6-124.8 46.8-77 131.1-124.8 221.6-124.8s174.8,47.8 221.6,124.8c-46.8,77-131.1,124.8-221.6,124.8z" />
        <path d="m256,162.4c-52,0-93.6,41.6-93.6,93.6 0,52 41.6,93.6 93.6,93.6s93.6-41.6 93.6-93.6c0-52-41.6-93.6-93.6-93.6zm0,166.4c-40.6,0-72.8-32.3-72.8-72.8s32.3-72.8 72.8-72.8 72.8,32.3 72.8,72.8-32.2,72.8-72.8,72.8z" />
        <path d="m256,214.4v20.8c11.4,0 20.8,9.4 20.8,20.8s-9.4,20.8-20.8,20.8-20.8-9.4-20.8-20.8h-20.8c0,22.9 18.7,41.6 41.6,41.6 22.9,0 41.6-18.7 41.6-41.6s-18.7-41.6-41.6-41.6z" />
      </g>
    </g>
  </Icon>
)

// SECTION Prop types
EyeIcon.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}
