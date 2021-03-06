/*
 * [THEME CHANGE BUTTON]
 */
// SECTION Imports
// React
import * as React from 'react'
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
      width="43px"
      height="43px"
      border={'1px solid ' + theme.textPrimary}
      // cursor="pointer"
      align="center"
      justify="center"
      zIndex="0"
      transition="0.8s"
      borderRadius="0px"
      padding="0"
      ms={ms}
      background="#1B1B1B"
      _hover={{
        background: '#1B1B1B',
      }}
      _before={{
        position: 'absolute',
        background: '#1B1B1B',
        zIndex: '-1',
        transition: '0.8s',
        content: "''",
        height: '43px',
        width: '21.5px',
      }}
      _after={{
        position: 'absolute',
        background: '#1B1B1B',
        zIndex: '-1',
        transition: '0.8s',
        content: "''",
        width: '43px',
        height: '20px',
      }}
      _focus={{
        boxShadow: 'none',
      }}
      _active={{
        boxShadow: 'none',
      }}
      onClick={onClick}
      className="avdoods-code-button"
    >
      {theme.name === 'code' && <Img src="/images/logo-code.svg" width="30px" />}
    </Button>
  )
}

// SECTION Prop types
ThemeChangeButton.propTypes = {
  theme: PropTypes.object,
}
