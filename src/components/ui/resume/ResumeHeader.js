/*
 * [BUTTON CODE THEME]
 */
// SECTION Imports
// React
import * as React from 'react'
// Prop types
import PropTypes from 'prop-types'
import AverageDoodsLink from '../Link'
import { Flex, Text } from '@chakra-ui/react'
import { fontS17L15S2W3, fontS18L15S2W3 } from '../../../constants/font-sizes'
import { themes } from '../../../constants/themes'

// SECTION Constant export
export const ResumeHeader = ({ theme = themes.standard }) => {
  // ANCHOR Functions
  const openURL = (url) => {
    window.open(url, 'blank')
  }

  // ANCHOR Return statement
  return (
    <Flex
      flexDir={['column', 'column', 'column', 'row']}
      maxW="1300px"
      alignSelf="center"
      w="100%"
      mt={['63px', '63px', '63px', '0']}
      paddingStart="24px"
      paddingEnd="24px"
    >
      <Flex flexDir="column" flex="1">
        <AverageDoodsLink
          fontSize={['17px']}
          alignSelf="flex-start"
          letterSpacing={fontS18L15S2W3.letterSpacing}
          fontWeight={fontS18L15S2W3.weight}
          lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
          color={theme.textSecondary}
          text="DOWNLOAD MY CV"
          reverted={true}
          onClick={() => openURL('https://media.publit.io/file/AvdoodsWebsite/Files/Matteo-Alberghini-Resume-EN-0.pdf')}
        />
        <Text color={theme.textPrimary} mt={['10px']} fontSize={['34px']} letterSpacing="2px">
          Matteo Alberghini
        </Text>
        <Text color={theme.textPrimary} fontSize={['22px']} letterSpacing="2px">
          Software developer
        </Text>
      </Flex>
      <Flex flexDir="column" textAlign={['left', 'left', 'left', 'left', 'right']} justify="flex-end" mt={['10px']}>
        <Text
          fontSize={[fontS17L15S2W3.size]}
          letterSpacing={fontS18L15S2W3.letterSpacing}
          fontWeight={fontS18L15S2W3.weight}
          lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
          color={theme.textPrimary}
        >
          www.matteoalberghini.com
        </Text>
        <Text
          fontSize={[fontS17L15S2W3.size]}
          letterSpacing={fontS18L15S2W3.letterSpacing}
          fontWeight={fontS18L15S2W3.weight}
          lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
          color={theme.textPrimary}
        >
          alberghini.matteo.96@gmail.com
        </Text>
        <Text
          fontSize={['16px']}
          letterSpacing={fontS18L15S2W3.letterSpacing}
          fontWeight={fontS18L15S2W3.weight}
          lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
          color={theme.textPrimary}
          mt="2px"
        >
          (+39) 375 5284721
        </Text>
      </Flex>
    </Flex>
  )
}

// SECTION Prop types
ResumeHeader.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
}
