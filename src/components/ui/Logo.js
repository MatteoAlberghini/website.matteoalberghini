/*
 * [LOGO SVG ANIMATION]
 */
// SECTION Imports
// React
import * as React from 'react'
// Framer motion
import { motion, useViewportScroll } from 'framer-motion'
// Prop types
import PropTypes from 'prop-types'
// Chakra UI
import { Flex } from '@chakra-ui/layout'

// SECTION Constant export
export const AnimatedLogo = ({ width = '0', height = '0', color = '#FFFFFF', animated = true, mt = ['0px'] }) => {
  // ANCHOR Constants
  const { scrollY } = useViewportScroll()

  // ANCHOR Functions
  const scrollToTop = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }

  // ANCHOR Return statement
  return (
    <Flex onClick={scrollToTop} _hover={{ cursor: 'pointer' }} mt={mt}>
      <motion.svg viewBox="0 0 230.795 230.795" width={width} height={height} xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink">
        <motion.g style={{ rotate: animated ? scrollY : undefined }}>
          <motion.path
            fill={color}
            d="M60.357,63.289c-2.929-2.929-7.678-2.93-10.606-0.001L2.197,110.836C0.79,112.243,0,114.151,0,116.14
        c0,1.989,0.79,3.896,2.196,5.303l47.348,47.35c1.465,1.465,3.384,2.197,5.304,2.197c1.919,0,3.839-0.732,5.303-2.196
        c2.93-2.929,2.93-7.678,0.001-10.606L18.107,116.14l42.25-42.245C63.286,70.966,63.286,66.217,60.357,63.289z"
          />
          <motion.path
            fill={color}
            d="M228.598,110.639l-47.355-47.352c-2.928-2.928-7.677-2.929-10.606,0.001c-2.929,2.929-2.929,7.678,0.001,10.607
        l42.051,42.048l-42.249,42.243c-2.93,2.929-2.93,7.678-0.001,10.606c1.465,1.465,3.384,2.197,5.304,2.197
        c1.919,0,3.839-0.732,5.303-2.196l47.554-47.547c1.407-1.406,2.197-3.314,2.197-5.304
        C230.795,113.954,230.005,112.046,228.598,110.639z"
          />
          <motion.path
            fill={color}
            d="M155.889,61.302c-3.314-2.484-8.017-1.806-10.498,1.51l-71.994,96.184c-2.482,3.316-1.807,8.017,1.51,10.498
        c1.348,1.01,2.925,1.496,4.488,1.496c2.282,0,4.537-1.038,6.01-3.006L157.398,71.8C159.881,68.484,159.205,63.784,155.889,61.302z"
          />
        </motion.g>
      </motion.svg>
    </Flex>
  )
}

// SECTION Prop types
AnimatedLogo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
}
