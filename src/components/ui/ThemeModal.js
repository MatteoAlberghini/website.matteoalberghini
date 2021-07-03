/*
 * [COMPONENT - MACRO] Header wrapper
 */
// SECTION Imports
// Prop types
import PropTypes from 'prop-types'
// Constants
import { themes, themesArray } from '../../constants/themes'
// Chakra UI
import { Flex, Text } from '@chakra-ui/layout'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, CheckboxGroup } from '@chakra-ui/react'
import React from 'react'
import { fontS18L15S2W3, fontS35L13S2W3 } from '../../constants/font-sizes'
import { CloseIcon } from './icons/CloseIcon'
import { CodeButton } from './CodeButton'
import { TickIcon } from './icons/TickIcon'
import { motion } from 'framer-motion'
import { AnimatedLogo } from './Logo'

// SECTION Constants
const MotionFlex = motion(Flex)

// SECTION Main function
function ThemeModal({ theme = themes.standard, isOpen = false, onClose = () => {} }) {
  // ANCHOR Constants
  const [selectedColor, setSelectedColor] = React.useState(theme.possibleColors[0].name)
  const [selectedTheme, setSelectedTheme] = React.useState(themesArray[0].name)

  // ANCHOR Functions
  const setThemeColor = (e) => {
    setSelectedColor(e.name)
  }
  const setTheme = (e) => {
    setSelectedTheme(e.name)
  }

  // ANCHOR Return
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnEsc={true} closeOnOverlayClick={true} preserveScrollBarGap={true} isCentered={true}>
      <ModalOverlay />
      <ModalContent background={theme.main} borderRadius="0px" w="600px" maxW={['100%', '100%', '80%']}>
        <ModalBody paddingBottom="32px" paddingTop="32px" paddingStart="24px" paddingEnd="24px">
          <Flex
            borderWidth="1px"
            borderColor={theme.textPrimary}
            h="40px"
            w="40px"
            _hover={{ cursor: 'pointer' }}
            borderRadius="0px"
            onClick={onClose}
            align="center"
            justify="center"
          >
            <CloseIcon color={theme.textPrimary} height="6" width="6" />
          </Flex>
          <Text
            fontSize={[fontS35L13S2W3.sizeMobile, fontS35L13S2W3.sizeMobile, fontS35L13S2W3.size]}
            letterSpacing={fontS35L13S2W3.letterSpacing}
            fontWeight={fontS35L13S2W3.weight}
            lineHeight={[fontS35L13S2W3.lineHeight, fontS35L13S2W3.lineHeight, fontS35L13S2W3.lineHeight]}
            color={theme.textPrimary}
            w={['94%', '94%', '94%', '100%']}
            ms={['16px', '16px', '16px', '0%']}
            me={['16px', '16px', '16px', '0%']}
            mt="12px"
            textAlign="center"
            alignSelf="center"
          >
            {'Customize your preferences'}
          </Text>
          <Text
            fontSize={['15px', '15px', '17px']}
            mt="12px"
            letterSpacing={'1.8px'}
            fontWeight={fontS35L13S2W3.weight}
            lineHeight={[fontS35L13S2W3.lineHeight, fontS35L13S2W3.lineHeight, fontS35L13S2W3.lineHeight]}
            color={theme.textSecondary}
            w={['94%']}
          >
            {'You can change theme, change colors of the selected theme or change language :) '}
          </Text>

          {/* Color */}
          <Text
            fontSize={['15px', '15px', '17px']}
            mt="32px"
            letterSpacing={'1.8px'}
            fontWeight={fontS35L13S2W3.weight}
            lineHeight={[fontS35L13S2W3.lineHeight, fontS35L13S2W3.lineHeight, fontS35L13S2W3.lineHeight]}
            color={theme.textPrimary}
            w={['94%']}
            textTransform="uppercase"
          >
            {'Color [' + 'dark' + ']'}
          </Text>
          <Flex
            flexDir="row"
            flexWrap="wrap"
            background={theme.grey}
            paddingTop="6px"
            paddingBottom="16px"
            borderRadius="0px"
            mt="10px"
            justify="flex-start"
            align="center"
          >
            {theme.possibleColors.map((e) => (
              <Flex key={e.name} mt="10px" flexDir="column" ms="20px">
                <MotionFlex
                  h="46px"
                  w="46px"
                  alignSelf="center"
                  borderRadius="50%"
                  background={e.value}
                  borderWidth={'2px'}
                  borderColor={e.valueTick}
                  _hover={{
                    cursor: 'pointer',
                  }}
                  justify="center"
                  align="center"
                  onClick={() => setThemeColor(e)}
                  whileHover={{ scale: 1.1 }}
                  // boxShadow={'0 0 15px 1px' + e.valueTick + '60'}
                >
                  {e.name === selectedColor && <TickIcon color={e.valueTick} height="5" width="5" />}
                </MotionFlex>
              </Flex>
            ))}
          </Flex>

          {/* Theme */}
          <Text
            fontSize={['15px', '15px', '17px']}
            mt="24px"
            letterSpacing={'1.8px'}
            fontWeight={fontS35L13S2W3.weight}
            lineHeight={[fontS35L13S2W3.lineHeight, fontS35L13S2W3.lineHeight, fontS35L13S2W3.lineHeight]}
            color={theme.textPrimary}
            w={['94%']}
            textTransform="uppercase"
          >
            {'theme [' + theme.name + ']'}
          </Text>
          <Flex
            flexDir="row"
            flexWrap="wrap"
            background={theme.grey}
            paddingTop="6px"
            paddingBottom="16px"
            borderRadius="0px"
            mt="10px"
            justify="flex-start"
            align="center"
          >
            {themesArray.map((e) => (
              <MotionFlex
                key={e.name}
                height="64px"
                w="31%"
                alignSelf="center"
                ms="2%"
                background={e.background}
                mt="10px"
                _hover={{ cursor: 'pointer' }}
                onClick={() => setTheme(e)}
                justify="flex-start"
                align="center"
                borderWidth="1px"
                borderColor={theme.textPrimary}
                whileHover={{ scale: 1.05 }}
              >
                <Flex w="100%" alignSelf="center" align="center" justify="center">
                  <AnimatedLogo animated={false} color="#fff" width="40px" height="40px"/>
                </Flex>
              </MotionFlex>
            ))}
          </Flex>

          {/* Button */}
          <Flex align="center" justify="center" w="100%" flexDir="row" mt="50px">
            <CodeButton text="done" onClick={onClose} />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

// SECTION Export & Prop types
ThemeModal.propTypes = {
  theme: PropTypes.object,
  animated: PropTypes.bool,
  handleRef: PropTypes.func,
}
export default ThemeModal
