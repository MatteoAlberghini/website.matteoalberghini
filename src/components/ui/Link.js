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
import { motion } from 'framer-motion'

// SECTION File variables
// Motion overrides
const MotionLink = motion(Link)

// SECTION Main function
function AverageDoodsLink({ color = '#FFFFFF', text = '', ms = ['0px'], mt = ['0px'], onClick = () => {}, reverted = false}) {
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
      w="auto"
      whiteSpace="nowrap"
      _hover={{
        cursor: 'pointer',
      }}
      whileHover={'hover'}
      whileTap={'hover'}
      onClick={onClick}
      color={color}
      fontSize={[fontS18L15S2W3.sizeMobile, fontS18L15S2W3.sizeMobile, fontS18L15S2W3.size]}
      lineHeight={fontS18L15S2W3.lineHeight}
      letterSpacing={fontS18L15S2W3.letterSpacing}
      boxShadow="none"
      ms={ms}
      mt={mt}
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
AverageDoodsLink.propTypes = {
  ms: PropTypes.array,
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
}
export default AverageDoodsLink
