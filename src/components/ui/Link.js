/*
 * [COMPONENT - MACRO] Header wrapper
 */
// SECTION Imports
// Prop types
import PropTypes from 'prop-types'
// Constants
import { fontS18L15S2W3 } from '../../constants/font-sizes'
// Chakra UI
import { Link } from '@chakra-ui/layout'
// Framer motion
import { motion, useAnimation } from 'framer-motion'
import React from 'react'

// SECTION File variables
// Motion overrides
const MotionLink = motion(Link)

// SECTION Main function
function AverageDoodsLink({
  animated = true,
  w = ['auto'],
  color = '#FFFFFF',
  text = '',
  ms = ['0px'],
  mt = ['0px'],
  onClick = () => {},
  reverted = false,
  fontSize = [fontS18L15S2W3.sizeMobile, fontS18L15S2W3.sizeMobile, fontS18L15S2W3.size],
  lineHeight = fontS18L15S2W3.lineHeight,
  letterSpacing = fontS18L15S2W3.letterSpacing,
  fontWeight = '300',
  alignSelf = 'center',
  wordBreak = undefined,
  flex = undefined,
}) {
  // ANCHOR Constants
  // Variants
  const spanVariants = {
    rest: { width: reverted ? '100%' : 0, transition: { duration: 0.25 } },
    hover: { width: reverted ? 0 : '100%', transition: { duration: 0.25 } },
  }

  // ANCHOR Return statement
  return (
    <MotionLink
      position="relative"
      initial="rest"
      animate="rest"
      w={w}
      maxW={w}
      h="min-content"
      whiteSpace="nowrap"
      _hover={{
        cursor: 'pointer',
      }}
      whileHover={animated ? 'hover' : ''}
      whileTap={animated ? 'hover' : ''}
      onClick={onClick}
      color={color}
      fontSize={fontSize}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      fontWeight={fontWeight}
      boxShadow="none"
      alignSelf={alignSelf}
      ms={ms}
      mt={mt}
      wordBreak={wordBreak}
      flex={flex}
    >
      {text}
      <motion.span
        style={{
          position: 'absolute',
          height: '100%',
          background: color,
          top: '0%',
          left: 0,
          opacity: 0.5,
        }}
        variants={spanVariants}
      ></motion.span>
    </MotionLink>
  )
}

// SECTION Export & Prop types
AverageDoodsLink.propTypes = {
  ms: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  mt: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  w: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  animated: PropTypes.bool,
  reverted: PropTypes.bool,
  fontSize: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  lineHeight: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  letterSpacing: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  fontWeight: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  alignSelf: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  wordBreak: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  flex: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
}
export default AverageDoodsLink
