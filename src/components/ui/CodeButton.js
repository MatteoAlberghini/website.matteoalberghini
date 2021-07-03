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
export const CodeButton = ({
  text = '',
  color = '#FFFFFF',
  onClick = () => {},
  mt = ['0px'],
  mb = ['0px'],
  w = ['280px', '280px', '350px'],
  beforeW = ['260px', '260px', '330px'],
  background = '#181818',
  ms = ['2%', '2%', '2%', '0px'],
  me = ['2%', '2%', '2%', '0px'],
  h = '50px',
  afterH = '30px',
  fontSize = [fontS16L15S2W3.sizeMobile, fontS16L15S2W3.sizeMobile, fontS16L15S2W3.size],
  lineHeight = [fontS16L15S2W3.lineHeight],
  fontWeight = [fontS16L15S2W3.weight],
  letterSpacing = [fontS16L15S2W3.letterSpacing],
  as = Button,
}) => {
  // ANCHOR Return statement
  return (
    <Button
      as={as}
      width={w}
      height={h}
      border={'1px solid ' + color}
      cursor="pointer"
      align="center"
      justify="center"
      zIndex="0"
      transition="0.8s"
      borderRadius="0px"
      userSelect="none"
      ms={ms}
      me={me}
      mt={mt}
      mb={mb}
      background={background}
      _hover={{
        background: background,
      }}
      _before={{
        position: 'absolute',
        background: background,
        zIndex: '-1',
        transition: '0.8s',
        content: "''",
        height: h,
        width: beforeW,
      }}
      _after={{
        position: 'absolute',
        background: background,
        zIndex: '-1',
        transition: '0.8s',
        content: "''",
        width: w,
        height: afterH,
      }}
      _focus={{
        background: background,
        boxShadow: 'none',
      }}
      _active={{
        background: background,
        boxShadow: 'none',
      }}
      onClick={onClick}
      className="avdoods-code-button"
      textTransform="uppercase"
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      fontWeight={fontWeight}
      fontSize={fontSize}
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
