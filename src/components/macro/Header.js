/*
 * [COMPONENT - MACRO] Header wrapper
 */
// SECTION Imports
import { Flex, Text } from '@chakra-ui/layout'
import { Button, Tooltip, useDisclosure } from '@chakra-ui/react'
// Prop types
import PropTypes from 'prop-types'
// Constants
import { themes } from '../../constants/themes'
import { Default, Desktop, Mobile, TabletAndMobile } from '../../constants/responsive'
// UI
import { AnimatedLogo } from '../ui/Logo'
import NavigationLink from '../ui/NavigationLink'
import { ThemeChangeButton } from '../ui/ThemeChangeButton'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import ThemeModal from '../ui/ThemeModal'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { CodeButton } from '../ui/CodeButton'
import { useRouter } from 'next/dist/client/router'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { CloseIcon } from '../ui/icons/CloseIcon'
import { fontS17L15S2W3, fontS18L15S2W3 } from '../../constants/font-sizes'
import AverageDoodsLink from '../ui/Link'
import { SwitchColorButton } from '../ui/SwitchColorButton'

// SECTION File variables
const MotionFlex = motion(Flex)

// SECTION Main function
function Header({
  theme = themes.standard,
  handleRef = () => {},
  projectsFunction = () => {},
  contactFunction = () => {},
  resumeFunction = () => {},
  homeFunction = () => {},
  personalFunction = () => {},
  currentPage = '',
}) {
  // ANCHOR Constants
  const [isThemeChangeOpen, setThemeChangeOpen] = React.useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  // ANCHOR Functions
  const openThemeModal = () => {
    // setThemeChangeOpen(true)
  }
  const closeThemeModal = () => {
    setThemeChangeOpen(false)
  }
  const navigateHome = () => {
    router.push('/')
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
    <>
      <ThemeModal isOpen={isThemeChangeOpen} onClose={closeThemeModal} />
      <Flex
        position="fixed"
        top="0"
        paddingStart={['20px', '20px', '20px', '30px']}
        paddingEnd={['17px', '17px', '17px', '35px']}
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
        <Flex alignItems="flex-end" justify="flex-end" alignSelf="flex-end" _hover={{ cursor: 'pointer' }} onClick={navigateHome}>
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
              <NavigationLink color={theme.textPrimary} text="< Home />" onClick={homeFunction} />
              <NavigationLink color={theme.textPrimary} text="< Projects />" ms={['24px']} onClick={projectsFunction} />
              <NavigationLink color={theme.textPrimary} text="< Resume />" ms={['24px']} onClick={resumeFunction} />
              <NavigationLink color={theme.textPrimary} text="< Contacts />" ms={['24px']} onClick={contactFunction} />
              <NavigationLink color={theme.textPrimary} text="< Personal />" ms={['24px']} onClick={personalFunction} />
              {/*}
              <NavigationLink color={theme.textPrimary} text="< Uncut & Raw />" ms={['24px']} />
              <NavigationLink color={theme.textPrimary} text="< Personal />" ms={['24px']} />
              {*/}
            </MotionFlex>
            {/* Button to change theme 
            <ThemeChangeButton theme={theme} ms={['34px']} onClick={openThemeModal} />
            */}
          </Flex>
        </Desktop>
        <TabletAndMobile>
          <CodeButton
            fontSize={['14px']}
            w={['137px']}
            beforeW={['117px']}
            background={theme.grey}
            h="35px"
            afterH="15px"
            text={'< ' + currentPage + ' />'}
            onClick={onOpen}
          />
          <Modal isOpen={isOpen} onClose={onClose} isCentered size={'full'}>
            <ModalOverlay margin="0" padding="0" />
            <ModalContent margin="0" padding="0" paddingTop="8px" background={theme.main}>
              <ModalBody h="100%" as={Flex} flexDir="column">
                <Flex flexDir="column" flex="1" h="100%" w="100%">
                  <Flex w="100%" justify="flex-end">
                    <Flex
                      w="max-content"
                      padding="7px"
                      borderWidth="1px"
                      borderColor={theme.textPrimary}
                      justify="center"
                      align="center"
                      alignSelf="flex-end"
                      background={'transparent'}
                      onClick={onClose}
                    >
                      <CloseIcon color={theme.textPrimary} width="6" height="6" />
                    </Flex>
                  </Flex>
                  <AnimatedLogo animated={false} width="55" height="55" mt={['10px']} color={theme.textColor} />
                  <Flex flexDir="column" flex="1" mt="36px">
                    <MotionFlex flexDir="column" w="100%" justify="flex.start">
                      <NavigationLink
                        color={theme.textPrimary}
                        text="< Home />"
                        alignSelf="flex-start"
                        onClick={() => {
                          homeFunction()
                        }}
                      />
                      <NavigationLink
                        color={theme.textPrimary}
                        text="< Projects />"
                        mt={['16px']}
                        alignSelf="flex-start"
                        onClick={() => {
                          projectsFunction()
                        }}
                      />
                      <NavigationLink
                        color={theme.textPrimary}
                        text="< Resume />"
                        mt={['16px']}
                        alignSelf="flex-start"
                        onClick={() => {
                          resumeFunction()
                        }}
                      />
                      <NavigationLink
                        color={theme.textPrimary}
                        text="< Contacts />"
                        mt={['16px']}
                        alignSelf="flex-start"
                        onClick={() => {
                          contactFunction()
                        }}
                      />
                      {/*}
              <NavigationLink color={theme.textPrimary} text="< Uncut & Raw />" ms={['24px']} />
              <NavigationLink color={theme.textPrimary} text="< Personal />" ms={['24px']} />
              {*/}
                    </MotionFlex>
                    {/* Button to change theme 
            <ThemeChangeButton theme={theme} ms={['34px']} onClick={openThemeModal} />
            */}
                  </Flex>
                  <Flex flexDir="row" w="100%" alignSelf="center" justify="center" align="center" alignItems="center">
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
                  <Flex flexDir="row" mb="16px" w="100%" alignSelf="center" justify="flex-start" align="flex-start" alignItems="center">
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
                  <Flex mb="16px" alignSelf="flex-end" flexDir="row" w="100%" justify="center" align="center" alignItems="center">
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
              </ModalBody>
            </ModalContent>
          </Modal>
        </TabletAndMobile>
      </Flex>
    </>
  )
}

// SECTION Export & Prop types
Header.propTypes = {
  theme: PropTypes.object,
  animated: PropTypes.bool,
  handleRef: PropTypes.func,
  projectsFunction: PropTypes.func,
  contactFunction: PropTypes.func,
  resumeFunction: PropTypes.func,
  homeFunction: PropTypes.func,
  currentPage: PropTypes.string,
}
export default Header
