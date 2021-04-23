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

// SECTION Main function
function Header({ theme = themes.standard }) {
  return (
    <Flex
      position="fixed"
      top="0"
      paddingStart="20px"
      paddingEnd="25px"
      paddingTop="10px"
      align="center"
      justify="space-between"
      alignItems="center"
      alignContent="center"
      w="100%"
    >
      {/* Logo */}
      <Flex alignItems="flex-end" justify="flex-end" alignSelf="flex-end">
        <Default>
          <AnimatedLogo width="55" height="55" color={theme.textColor} />
        </Default>
        <Mobile>
          <AnimatedLogo width="42" height="42" color={theme.textColor} />
        </Mobile>
      </Flex>
      {/* Links */}
      <Desktop>
        <Flex flexDir="row" alignSelf="center" justify="center" mt="4px">
          <NavigationLink color={theme.textPrimary} text="{ Projects }" />
          <NavigationLink color={theme.textPrimary} text="{ Resume }" ms={['24px']} />
          <NavigationLink color={theme.textPrimary} text="{ Uncut & Raw }" ms={['24px']} />
          <NavigationLink color={theme.textPrimary} text="{ Personal }" ms={['24px']} />
          <NavigationLink color={theme.textPrimary} text="{ Contacts }" ms={['24px']} />
          <ThemeChangeButton theme={theme} ms={['34px']} />
        </Flex>
      </Desktop>
    </Flex>
  )
}

// SECTION Export & Prop types
Header.propTypes = {
  theme: PropTypes.object,
}
export default Header
