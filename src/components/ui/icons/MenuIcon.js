/*
 * [MENU ICON]
 */
// SECTION Imports
// React
import React from 'react'
// Chakra UI
import { Icon } from '@chakra-ui/react'
// Prop types
import PropTypes from 'prop-types'

// SECTION Icon
export const MenuIcon = ({ height, width, color = '#fff' }) => (
  <Icon
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    justifyContent="center"
    alignSelf="center"
    xmlSpace="preserve"
  >
    <path fill={color} d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/>
  </Icon>
)

// SECTION Prop types
MenuIcon.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
}
