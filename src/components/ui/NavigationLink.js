/*
 * [COMPONENT - MACRO] Header wrapper
 */
// SECTION Imports
// Prop types
import PropTypes from 'prop-types'
// Constants
import { fontS20H16L15W3, textFontSubtitle, textFontNav } from '../../constants/font-sizes'
// Chakra UI
import { Link } from '@chakra-ui/layout'
// Framer motion
import { motion } from 'framer-motion'

// SECTION File variables
// Motion overrides
const MotionLink = motion(Link)

// SECTION Main function
function NavigationLink({ color = '#FFFFFF', text = '', ms = ['0px'], onClick = () => {} }) {
  // ANCHOR Constants
  // Variants
  const spanVariants = {
    rest: { width: 0, transition: { duration: 0.25 } },
    hover: { width: '100%', transition: { duration: 0.25 } },
  }

  // ANCHOR Return statement
  return (
    <MotionLink
      w="auto"
      position="relative"
      initial="rest"
      animate="rest"
      whiteSpace="nowrap"
      alignSelf="center"
      _hover={{
        cursor: 'pointer',
      }}
      whileHover={'hover'}
      whileTap={'hover'}
      onClick={onClick}
      color={color}
      fontSize={'16px'}
      textTransform="uppercase"
      lineHeight={textFontNav.lineHeight}
      letterSpacing={'2px'}
      boxShadow="none"
      ms={ms}
    >
      {text}
      <motion.span
        style={{
          position: 'absolute',
          height: '0.5px',
          background: color,
          top: '100%',
          left: 0,
        }}
        variants={spanVariants}
      ></motion.span>
    </MotionLink>
  )
}

// SECTION Export & Prop types
NavigationLink.propTypes = {
  ms: PropTypes.array,
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
}
export default NavigationLink
