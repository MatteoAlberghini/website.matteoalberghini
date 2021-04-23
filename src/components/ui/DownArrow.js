/*
 * [SCROLL DOWN ARROW]
 */
// SECTION Imports
// React
import * as React from 'react'
import { useState } from 'react'
// Framer motion
import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion'
// Prop types
import PropTypes from 'prop-types'
import { Flex } from '@chakra-ui/layout'

// SECTION File constants
const MotionFlex = motion(Flex)

// SECTION Constant export
export const ScrollDownArrow = ({ width = '0', height = '0', color = '#FFFFFF', onClick = () => {} }) => {
  // ANCHOR Return statement
  return (
    <Flex
      flexDir="row"
      align="center"
      alignSelf="center"
      onClick={onClick}
      w="100%"
      position="absolute"
      justify="center"
      height="40px"
      minH="40px"
      bottom="0"
      _hover={{
        cursor: 'pointer',
      }}
    >
      <MotionFlex
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: [0, 1, 0], y: 0 }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        position="absolute"
        alignSelf="center"
      >
        <motion.svg width={width} height={height} viewBox="0 0 240.811 240.811" xmlSpace="preserve">
          <motion.g>
            <motion.path
              fill={color}
              d="M220.088,57.667l-99.671,99.695L20.746,57.655c-4.752-4.752-12.439-4.752-17.191,0
		c-4.74,4.752-4.74,12.451,0,17.203l108.261,108.297l0,0l0,0c4.74,4.752,12.439,4.752,17.179,0L237.256,74.859
		c4.74-4.752,4.74-12.463,0-17.215C232.528,52.915,224.828,52.915,220.088,57.667z"
            />
          </motion.g>
        </motion.svg>
      </MotionFlex>
      <MotionFlex
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: [0, 1, 0], y: 0 }}
        transition={{ repeat: Infinity, duration: 2.5, delay: 1.25 }}
        position="absolute"
      >
        <motion.svg width={width} height={height} viewBox="0 0 240.811 240.811" xmlSpace="preserve">
          <motion.g>
            <motion.path
              fill={color}
              d="M220.088,57.667l-99.671,99.695L20.746,57.655c-4.752-4.752-12.439-4.752-17.191,0
		c-4.74,4.752-4.74,12.451,0,17.203l108.261,108.297l0,0l0,0c4.74,4.752,12.439,4.752,17.179,0L237.256,74.859
		c4.74-4.752,4.74-12.463,0-17.215C232.528,52.915,224.828,52.915,220.088,57.667z"
            />
          </motion.g>
        </motion.svg>
      </MotionFlex>
    </Flex>
  )
}

// SECTION Prop types
ScrollDownArrow.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
}
