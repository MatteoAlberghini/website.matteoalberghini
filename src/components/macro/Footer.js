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
import { fontS20H16L15W3, textFontSubtitle, textFontNav, fontS18L15S2W3 } from '../../constants/font-sizes'
// Chakra UI
import { Link } from '@chakra-ui/layout'
// UI
import { AnimatedLogo } from '../ui/Logo'
import NavigationLink from '../ui/NavigationLink'
import { ThemeChangeButton } from '../ui/ThemeChangeButton'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import AverageDoodsLink from '../ui/Link'

// SECTION File variables
const MotionFlex = motion(Flex)

// SECTION Main function
function Footer({ theme = themes.standard, footerRef = () => {} }) {
  // ANCHOR Functions
  const jumpTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }

  // ANCHOR Return
  return (
    <Flex
      bottom="0"
      paddingStart="30px"
      paddingEnd="30px"
      paddingTop="10px"
      paddingBottom="30px"
      justify="space-between"
      w="100%"
      ref={(ref) => footerRef(ref)}
      background={theme.grey}
      flexDir="column"
    >
      <Flex flexDir="row" mt="2px" w="100%" justify="space-between">
        <AnimatedLogo animated={false} width="55" height="55" />
        <AverageDoodsLink
          fontSize={['17px']}
          letterSpacing={fontS18L15S2W3.letterSpacing}
          fontWeight={fontS18L15S2W3.weight}
          lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
          color={theme.textSecondary}
          text="JUMP TOP "
          reverted={true}
          onClick={jumpTop}
        />
      </Flex>
      <Flex justify="space-between" w="100%" mt="10px">
        <Text
          fontSize={[fontS18L15S2W3.sizeMobile, fontS18L15S2W3.sizeMobile, fontS18L15S2W3.size]}
          letterSpacing={fontS18L15S2W3.letterSpacing}
          fontWeight={fontS18L15S2W3.weight}
          lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
          color={theme.textPrimary}
          flex="1"
          alignSelf="flex-start"
        >
          Matteo Alberghini a.k.a <Link _hover={{ cursor: 'text' }}>Average Doods</Link>
        </Text>
        <Text
          flex="1"
          alignSelf="flex-end"
          textAlign="right"
          fontSize={['17px']}
          letterSpacing={fontS18L15S2W3.letterSpacing}
          fontWeight={fontS18L15S2W3.weight}
          lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
          color={theme.textSecondary}
        >
          <AverageDoodsLink
            fontSize={['17px']}
            letterSpacing={fontS18L15S2W3.letterSpacing}
            fontWeight={fontS18L15S2W3.weight}
            lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
            color={theme.textSecondary}
            text="Privacy Policy "
          />
          //
          <AverageDoodsLink
            fontSize={['17px']}
            letterSpacing={fontS18L15S2W3.letterSpacing}
            fontWeight={fontS18L15S2W3.weight}
            lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
            color={theme.textSecondary}
            text=" Cookie Policy "
          />
          //
          <AverageDoodsLink
            fontSize={['17px']}
            letterSpacing={fontS18L15S2W3.letterSpacing}
            fontWeight={fontS18L15S2W3.weight}
            lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
            color={theme.textSecondary}
            text=" Thank me with a Book :) "
          />
        </Text>
      </Flex>
      <Flex flexDir="row" mt="2px" w="100%" alignSelf="center" justify="center" align="center" alignItems="center">
        <Text
          fontSize={[fontS18L15S2W3.sizeMobile, fontS18L15S2W3.sizeMobile, fontS18L15S2W3.size]}
          letterSpacing={fontS18L15S2W3.letterSpacing}
          fontWeight={fontS18L15S2W3.weight}
          lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
          color={theme.textPrimary}
          flex="1"
          alignSelf="flex-start"
        >
          <AverageDoodsLink
            text="info@averagedoods.com"
            fontSize={[fontS18L15S2W3.sizeMobile, fontS18L15S2W3.sizeMobile, fontS18L15S2W3.size]}
            letterSpacing={fontS18L15S2W3.letterSpacing}
            fontWeight={fontS18L15S2W3.weight}
            lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
            color={theme.textPrimary}
            alignSelf="flex-start"
          />
          {' '}//{' '}
          <AverageDoodsLink
            text="alberghini.matteo.96@gmail.com"
            fontSize={[fontS18L15S2W3.sizeMobile, fontS18L15S2W3.sizeMobile, fontS18L15S2W3.size]}
            letterSpacing={fontS18L15S2W3.letterSpacing}
            fontWeight={fontS18L15S2W3.weight}
            lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
            color={theme.textPrimary}
            alignSelf="flex-start"
          />
        </Text>
      </Flex>
      <Flex flexDir="row" mt="24px" w="100%" alignSelf="center" justify="center" align="center" alignItems="center">
        <Text
          flex="1"
          fontSize={['17px']}
          letterSpacing={fontS18L15S2W3.letterSpacing}
          fontWeight={fontS18L15S2W3.weight}
          lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
          color={theme.textSecondary}
          textAlign="center"
        >
          *{' '}
          <AverageDoodsLink
            fontSize={['17px']}
            letterSpacing={fontS18L15S2W3.letterSpacing}
            fontWeight={fontS18L15S2W3.weight}
            lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
            color={theme.textSecondary}
            text="TWITTER"
          />
          {' '}*{' '}
          <AverageDoodsLink
            fontSize={['17px']}
            letterSpacing={fontS18L15S2W3.letterSpacing}
            fontWeight={fontS18L15S2W3.weight}
            lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
            color={theme.textSecondary}
            text="LIKEDIN"
          />
          {' '}*{' '}
          <AverageDoodsLink
            fontSize={['17px']}
            letterSpacing={fontS18L15S2W3.letterSpacing}
            fontWeight={fontS18L15S2W3.weight}
            lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
            color={theme.textSecondary}
            text="GITHUB"
          />
          {' '}*{' '}
          <AverageDoodsLink
            fontSize={['17px']}
            letterSpacing={fontS18L15S2W3.letterSpacing}
            fontWeight={fontS18L15S2W3.weight}
            lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
            color={theme.textSecondary}
            text="STACKOVERFLOW"
          />
          {' '}*{' '}
          <AverageDoodsLink
            fontSize={['17px']}
            letterSpacing={fontS18L15S2W3.letterSpacing}
            fontWeight={fontS18L15S2W3.weight}
            lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
            color={theme.textSecondary}
            text="PAYPAL"
          />
          {' '}*{' '}
        </Text>
      </Flex>
    </Flex>
  )
}

// SECTION Export & Prop types
Footer.propTypes = {
  theme: PropTypes.object,
  animated: PropTypes.bool,
  handleRef: PropTypes.func,
}
export default Footer
