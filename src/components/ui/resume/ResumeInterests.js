/*
 * [BUTTON CODE THEME]
 */
// SECTION Imports
// React
import * as React from 'react'
// Prop types
import { Flex, Text } from '@chakra-ui/react'
import { themes } from '../../../constants/themes'
import { interests } from '../../../constants/resume'

// SECTION Constant export
export const ResumeInterests = ({ theme = themes.standard, setRef = () => {} }) => {
  // ANCHOR Return statement
  return (
    <Flex ref={(ref) => setRef(ref)} flexDir="row" maxW="1300px" mt="50px" alignSelf="center" w="100%" paddingStart="24px" paddingEnd="24px">
      <Flex flexDir="column" flex="1">
        <Text color={theme.textPrimary} fontSize={['18px', '18px', '20px']} letterSpacing="2px" textTransform="uppercase">
          oTHER INTERESTS
        </Text>
        {/* Experience */}
        {interests.map((e, index) => (
          <Flex flexDir={['column', 'column', 'column', 'column', 'row']} w="100%" mt={index === 0 ? '15px' : '28px'} key={e.label}>
            <Flex w={['100%', '100%', '100%', '100%', '30%']}>
              <Text color={theme.textSecondary} fontSize={['15px', '15px', '17px']} letterSpacing="2px" textTransform="uppercase">
                {e.label}
              </Text>
            </Flex>
            <Flex flexDir="column" w={['100%', '100%', '100%', '100%', '70%']} mt={['10px', '10px', '10px', '10px', '0px']}>
              {e.details.map((d, i) => (
                <Text key={i} color={theme.textPrimary} fontSize={['15px', '15px', '16px']} letterSpacing="2px" mt={i === 0 ? '0px' : '8px'}>
                  {d.label}
                </Text>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}

// SECTION Prop types
ResumeInterests.propTypes = {}
