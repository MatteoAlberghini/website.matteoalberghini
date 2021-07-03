/*
 * [TICK ICON]
 */
// SECTION Imports
// React
import React from 'react'
// Chakra UI
import { Icon } from '@chakra-ui/react'
// Prop types
import PropTypes from 'prop-types'

// SECTION Icon
export const TickIcon = ({ height, width, color = '#fff' }) => (
  <Icon
    width={width}
    height={height}
    viewBox="0 0 511.999 511.999"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    justifyContent="center"
    alignSelf="center"
    xmlSpace="preserve"
  >
    <path
      d="M506.231,75.508c-7.689-7.69-20.158-7.69-27.849,0l-319.21,319.211L33.617,269.163c-7.689-7.691-20.158-7.691-27.849,0
			c-7.69,7.69-7.69,20.158,0,27.849l139.481,139.481c7.687,7.687,20.16,7.689,27.849,0l333.133-333.136
			C513.921,95.666,513.921,83.198,506.231,75.508z"
      fill={color}
    />
  </Icon>
)

// SECTION Prop types
TickIcon.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
}
