/*
 * [COMPONENT - MACRO] Header wrapper
 */
// SECTION Imports
import { Flex, Text } from '@chakra-ui/layout'
// Prop types
import PropTypes from 'prop-types'
// Constants
import { themes } from '../../constants/themes'
import { Default, Desktop, Mobile } from '../../constants/responsive'
import { fontS20H16L15W3, textFontSubtitle, textFontNav } from '../../constants/font-sizes'
// Chakra UI
import { Link } from '@chakra-ui/layout'
// UI
import { AnimatedLogo } from '../ui/Logo'
import NavigationLink from '../ui/NavigationLink'
import { ThemeChangeButton } from '../ui/ThemeChangeButton'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'

// SECTION File variables
const MotionFlex = motion(Flex)

// SECTION Main function
function Header({ theme = themes.standard, animated = false, handleRef = () => {}, projectsFunction = () => {}, contactFunction = () => {}}) {
  // ANCHOR Constants
  // Variants
  const variants = {
    rest: { y: -100, opacity: 0, transition: { duration: 0.3 } },
    exit: { y: -100, opacity: 0, transition: { duration: 0.3, delay: 0.15 } },
    enter: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  }
  // Motion
  const controls = useAnimation()

  // ANCHOR Function
  React.useEffect(() => {
    if (animated === true) {
      controls.start('exit')
    } else {
      controls.start('enter')
    }
  }, [animated])

  // ANCHOR Return
  return (
    <Flex
      position="fixed"
      top="0"
      paddingStart="30px"
      paddingEnd="30px"
      paddingTop="14px"
      paddingBottom="14px"
      align="center"
      justify="space-between"
      alignItems="center"
      alignContent="center"
      w="100%"
      ref={(ref) => handleRef(ref)}
      background={theme.grey}
      zIndex="20"
    >
      {/* Logo */}
      <Flex alignItems="flex-end" justify="flex-end" alignSelf="flex-end">
        <Default>
          <AnimatedLogo width="53" height="53" color={theme.textColor} />
        </Default>
        <Mobile>
          <AnimatedLogo width="42" height="42" color={theme.textColor} />
        </Mobile>
      </Flex>
      {/* Links */}
      <Desktop>
        <Flex flexDir="row" alignSelf="center" justify="center" mt="6px">
          <MotionFlex>
            <NavigationLink color={theme.textPrimary} text="< Projects />" onClick={projectsFunction} />
            <NavigationLink color={theme.textPrimary} text="< Resume />" ms={['24px']} />
            <NavigationLink color={theme.textPrimary} text="< Uncut & Raw />" ms={['24px']} />
            <NavigationLink color={theme.textPrimary} text="< Personal />" ms={['24px']} />
            <NavigationLink color={theme.textPrimary} text="< Contacts />" ms={['24px']} onClick={contactFunction} />
          </MotionFlex>
          <ThemeChangeButton theme={theme} ms={['34px']} />
        </Flex>
      </Desktop>
    </Flex>
  )
}

// SECTION Export & Prop types
Header.propTypes = {
  theme: PropTypes.object,
  animated: PropTypes.bool,
  handleRef: PropTypes.func,
}
export default Header
