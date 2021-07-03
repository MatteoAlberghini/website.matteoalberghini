/*
 * [BUTTON CODE THEME]
 */
// SECTION Imports
// React
import * as React from 'react'
// Prop types
import { Flex, Text } from '@chakra-ui/react'
import { themes } from '../../../constants/themes'
import { eduction, experience } from '../../../constants/resume'

// SECTION Constant export
export const ResumeEducation = ({ theme = themes.standard, setRef = () => {} }) => {
  // ANCHOR Return statement
  return (
    <Flex ref={(ref) => setRef(ref)} flexDir="row" maxW="1300px" mt="40px" alignSelf="center" w="100%" paddingStart="24px" paddingEnd="24px">
      <Flex flexDir="column" flex="1">
        <Text color={theme.textPrimary} fontSize={['18px', '18px', '20px']} letterSpacing="2px" textTransform="uppercase">
          Education
        </Text>
        {/* Experience */}
        {eduction.map((e, index) => (
          <Flex flexDir="row" w="100%" mt={index === 0 ? '15px' : '28px'} key={e.company}>
            <Flex w="30%">
              <Text color={theme.textSecondary} fontSize={['15px', '15px', '16px']} letterSpacing="2px" textTransform="uppercase">
                {e.date}
              </Text>
            </Flex>
            <Flex flexDir="column" w="70%">
              <Text color={theme.textPrimary} fontWeight="500" fontSize={['15px', '15px', '17px']} letterSpacing="2px" textTransform="uppercase">
                {e.name}
              </Text>
              <Text color={theme.textSecondary} fontSize={['15px', '15px', '16px']} mt="4px" letterSpacing="1.7px">
                {e.location}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}

// SECTION Prop types
ResumeEducation.propTypes = {}
