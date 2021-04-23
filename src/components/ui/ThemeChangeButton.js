/*
 * [THEME CHANGE BUTTON]
 */
// SECTION Imports
// React
import * as React from 'react'
// Framer motion
import { motion, useViewportScroll } from 'framer-motion'
// Prop types
import PropTypes from 'prop-types'
// Constants
import { themes } from '../../constants/themes'
// Chakra UI
import { Button } from '@chakra-ui/button'
import { Img } from '@chakra-ui/image'

// SECTION Constant export
export const ThemeChangeButton = ({ theme = themes.standard, onClick = () => {}, ms = ['0px'] }) => {
  // ANCHOR Return statement
  return (
    <Button
      width="40px"
      height="40px"
      border={'1px solid ' + theme.textPrimary}
      cursor="pointer"
      align="center"
      justify="center"
      zIndex="0"
      transition="0.8s"
      borderRadius="0px"
      padding="0"
      ms={ms}
      background="#1E1E1E"
      _hover={{
        background: '#1E1E1E',
      }}
      _before={{
        position: 'absolute',
        background: '#1E1E1E',
        zIndex: '-1',
        transition: '0.8s',
        content: "''",
        height: '40px',
        width: '20px',
      }}
      _after={{
        position: 'absolute',
        background: '#1E1E1E',
        zIndex: '-1',
        transition: '0.8s',
        content: "''",
        width: '40px',
        height: '25px',
      }}
      _focus={{}}
      onClick={onClick}
      className="avdoods-code-button"
    >
      {theme.name === 'standard' && <Img src="/images/logo-code.svg" width="25px" />}
    </Button>
  )
}

// SECTION Prop types
ThemeChangeButton.propTypes = {
  theme: PropTypes.object,
}
