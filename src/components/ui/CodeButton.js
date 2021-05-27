/*
 * [BUTTON CODE THEME]
 */
// SECTION Imports
// React
import * as React from 'react'
// Constants
import { fontS16L15S2W3 } from '../../constants/font-sizes'
// Prop types
import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/button'

// SECTION Constant export
export const CodeButton = ({ text = '', color = '#FFFFFF', onClick = () => {}, mt = ['0px'], mb = ['0px'] }) => {
  // ANCHOR Return statement
  return (
    <Button
      width={['280px', '280px', '350px']}
      height="50px"
      border={'1px solid ' + color}
      cursor="pointer"
      align="center"
      justify="center"
      zIndex="0"
      transition="0.8s"
      borderRadius="0px"
      ms={['16px', '16px', '16px', '0px']}
      me={['16px', '16px', '16px', '0px']}
      mt={mt}
      mb={mb}
      background="#181818"
      _hover={{
        background: '#181818',
      }}
      _before={{
        position: 'absolute',
        background: '#181818',
        zIndex: '-1',
        transition: '0.8s',
        content: "''",
        height: '50px',
        width: ['260px', '260px', '330px'],
      }}
      _after={{
        position: 'absolute',
        background: '#181818',
        zIndex: '-1',
        transition: '0.8s',
        content: "''",
        width: ['280px', '280px', '350px'],
        height: '30px',
      }}
      _focus={{
        background: '#181818',
        boxShadow: 'none',
      }}
      _active={{
        background: '#181818',
        boxShadow: 'none',
      }}
      onClick={onClick}
      className="avdoods-code-button"
      textTransform="uppercase"
      lineHeight={fontS16L15S2W3.lineHeight}
      letterSpacing={fontS16L15S2W3.letterSpacing}
      fontWeight={fontS16L15S2W3.weight}
      fontSize={[fontS16L15S2W3.sizeMobile, fontS16L15S2W3.sizeMobile, fontS16L15S2W3.size]}
      color={color}
    >
      {text}
    </Button>
  )
}

// SECTION Prop types
CodeButton.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
}
