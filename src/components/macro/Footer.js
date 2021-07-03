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
import { fontS20H16L15W3, textFontSubtitle, textFontNav, fontS18L15S2W3, fontS17L15S2W3 } from '../../constants/font-sizes'
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
  // Jumps to top = 0
  const jumpTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }
  // Open URL
  const openURL = (url) => {
    window.open(url, 'blank')
  }
  // Send email
  const sendEmail = (email) => {
    window.open('mailto:' + email, 'blank')
  }
  // Start a call
  const startCall = (phone) => {
    window.open('tel:' + phone, 'blank')
  }

  // ANCHOR Return
  return (
    <Flex
      bottom="0"
      paddingStart="30px"
      paddingEnd="30px"
      paddingTop="16px"
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
          fontSize={['16px', '16px', fontS17L15S2W3.size]}
          letterSpacing={fontS18L15S2W3.letterSpacing}
          fontWeight={fontS18L15S2W3.weight}
          lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
          color={theme.textSecondary}
          text="JUMP TOP "
          reverted={true}
          onClick={jumpTop}
        />
      </Flex>
      <Flex justify="space-between" w="100%" mt={['20px', '20px', '20px', '20px', '10px']} flexDir={['column', 'column', 'row']}>
        <Text
          fontSize={['16px', '16px', fontS17L15S2W3.size]}
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
          alignSelf={['flex-start', 'flex-start', 'flex-end']}
          textAlign={['left', 'left', 'right']}
          mt={['15px', '15px', '0px']}
          fontSize={['16px', '16px', fontS17L15S2W3.size]}
          letterSpacing={fontS17L15S2W3.letterSpacing}
          fontWeight={fontS17L15S2W3.weight}
          lineHeight={[fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight]}
          color={theme.textSecondary}
          wordBreak="break-word"
        >
          <AverageDoodsLink
            fontSize={['16px', '16px', fontS17L15S2W3.size]}
            letterSpacing={fontS17L15S2W3.letterSpacing}
            fontWeight={fontS17L15S2W3.weight}
            lineHeight={[fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight]}
            color={theme.textSecondary}
            text="Privacy Policy "
          />
          {'//'}
          <AverageDoodsLink
            fontSize={['16px', '16px', fontS17L15S2W3.size]}
            letterSpacing={fontS17L15S2W3.letterSpacing}
            fontWeight={fontS17L15S2W3.weight}
            lineHeight={[fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight]}
            color={theme.textSecondary}
            text=" Cookie Policy "
          />
          {'//'}
          <AverageDoodsLink
            fontSize={['16px', '16px', fontS17L15S2W3.size]}
            letterSpacing={fontS17L15S2W3.letterSpacing}
            fontWeight={fontS17L15S2W3.weight}
            lineHeight={[fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight]}
            color={theme.textSecondary}
            text=" Thank me with a Book :) "
            onClick={() => openURL('https://buymeacoffee.com/AverageDoods')}
          />
        </Text>
      </Flex>
      <Flex flexDir="row" mt={['15px', '15px', '2px']} w="100%" alignSelf="center" justify="center" align="center" alignItems="center">
        <Text
          fontSize={['16px', '16px', fontS17L15S2W3.size]}
          letterSpacing={fontS18L15S2W3.letterSpacing}
          fontWeight={fontS18L15S2W3.weight}
          lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
          color={theme.textPrimary}
          flex="1"
          alignSelf="flex-start"
        >
          <AverageDoodsLink
            text="info@averagedoods.com"
            fontSize={['16px', '16px', fontS17L15S2W3.size]}
            letterSpacing={fontS18L15S2W3.letterSpacing}
            fontWeight={fontS18L15S2W3.weight}
            lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
            color={theme.textPrimary}
            alignSelf="flex-start"
            onClick={() => sendEmail('info@averagedoods.com')}
          />
          {' // '}
          <AverageDoodsLink
            text="alberghini.matteo.96@gmail.com"
            fontSize={['16px', '16px', fontS17L15S2W3.size]}
            letterSpacing={fontS18L15S2W3.letterSpacing}
            fontWeight={fontS18L15S2W3.weight}
            lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
            color={theme.textPrimary}
            alignSelf="flex-start"
            onClick={() => sendEmail('alberghini.matteo.96@gmail.com')}
          />
        </Text>
      </Flex>
      <Flex flexDir="row" mt={['3px']} ms="-2px" w="100%" alignSelf="center" justify="flex-start" align="flex-start" alignItems="center">
        <AverageDoodsLink
          text="(+39) 375 5284721"
          fontSize={['15px', '15px', '16px']}
          letterSpacing={fontS18L15S2W3.letterSpacing}
          fontWeight={fontS18L15S2W3.weight}
          lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
          color={theme.textPrimary}
          alignSelf="flex-start"
          onClick={() => startCall('+393755284721')}
        />
      </Flex>
      <Flex flexDir="row" mt={['20px', '20px', '32px']} w="100%" alignSelf="center" justify="center" align="center" alignItems="center">
        <Text
          flex="1"
          fontSize={[fontS17L15S2W3.sizeMobile, fontS17L15S2W3.sizeMobile, fontS17L15S2W3.size]}
          letterSpacing={fontS17L15S2W3.letterSpacing}
          fontWeight={fontS17L15S2W3.weight}
          lineHeight={[fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight]}
          color={theme.textSecondary}
          textAlign={['left', 'left', 'center']}
        >
          *{' '}
          <AverageDoodsLink
            fontSize={[fontS17L15S2W3.sizeMobile, fontS17L15S2W3.sizeMobile, fontS17L15S2W3.size]}
            letterSpacing={fontS17L15S2W3.letterSpacing}
            fontWeight={fontS17L15S2W3.weight}
            lineHeight={[fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight]}
            color={theme.textSecondary}
            text="TWITTER"
            onClick={() => openURL('https://twitter.com/0x4d61646f')}
          />{' '}
          *{' '}
          <AverageDoodsLink
            fontSize={[fontS17L15S2W3.sizeMobile, fontS17L15S2W3.sizeMobile, fontS17L15S2W3.size]}
            letterSpacing={fontS17L15S2W3.letterSpacing}
            fontWeight={fontS17L15S2W3.weight}
            lineHeight={[fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight]}
            color={theme.textSecondary}
            text="LIKEDIN"
            onClick={() => openURL('https://www.linkedin.com/in/matteo-alberghini-averagedoods/')}
          />{' '}
          *{' '}
          <AverageDoodsLink
            fontSize={[fontS17L15S2W3.sizeMobile, fontS17L15S2W3.sizeMobile, fontS17L15S2W3.size]}
            letterSpacing={fontS17L15S2W3.letterSpacing}
            fontWeight={fontS17L15S2W3.weight}
            lineHeight={[fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight]}
            color={theme.textSecondary}
            text="GITHUB"
            onClick={() => openURL('https://github.com/MatteoAlberghini')}
          />{' '}
          *{' '}
          <AverageDoodsLink
            fontSize={[fontS17L15S2W3.sizeMobile, fontS17L15S2W3.sizeMobile, fontS17L15S2W3.size]}
            letterSpacing={fontS17L15S2W3.letterSpacing}
            fontWeight={fontS17L15S2W3.weight}
            lineHeight={[fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight]}
            color={theme.textSecondary}
            text="STACKOVERFLOW"
            onClick={() => openURL('https://stackoverflow.com/users/10657078/matteo-alberghini')}
          />{' '}
          *{' '}
          <AverageDoodsLink
            fontSize={[fontS17L15S2W3.sizeMobile, fontS17L15S2W3.sizeMobile, fontS17L15S2W3.size]}
            letterSpacing={fontS17L15S2W3.letterSpacing}
            fontWeight={fontS17L15S2W3.weight}
            lineHeight={[fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight, fontS17L15S2W3.lineHeight]}
            color={theme.textSecondary}
            text="PAYPAL"
            onClick={() => openURL('https://paypal.me/MatteoAlberghini')}
          />{' '}
          *{' '}
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
