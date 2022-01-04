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
import { fontS18L15S2W3, fontS65H13S2W3 } from '../../../constants/font-sizes'
import { themes } from '../../../constants/themes'

// SECTION Constant export
export const ResumeAbout = ({ theme = themes.standard, setRef = () => {} }) => {
  // ANCHOR Return statement
  return (
    <Flex ref={(ref) => setRef(ref)} flexDir="row" maxW="1300px" mt="40px" alignSelf="center" w="100%" paddingStart="24px" paddingEnd="24px">
      <Flex flexDir="column" flex="1">
        <Text color={theme.textPrimary} fontSize={['18px', '18px', '20px']} letterSpacing="2px" textTransform="uppercase">
          About me
        </Text>
        <Text
          color={theme.textSecondary}
          fontSize={['15px', '15px', fontS18L15S2W3.size]}
          letterSpacing={fontS65H13S2W3.letterSpacing}
          fontWeight={fontS65H13S2W3.weight}
          lineHeight={[1.45, 1.45, fontS65H13S2W3.lineHeight]}
          mt="10px"
        >
          {
            "I've been working in tech since 2018, both as a freelancer and as an employee. I mainly worked on mobile apps & websites but I've been doing videogames development as an hobby since I was 16. I've gathered knowledge of many different frameworks and technologies since I started programming. I'm looking for work opportunities in React and React Native. Currently working for the mobile company as native mobile developer."
          }
        </Text>
      </Flex>
    </Flex>
  )
}

// SECTION Prop types
ResumeAbout.propTypes = {}
