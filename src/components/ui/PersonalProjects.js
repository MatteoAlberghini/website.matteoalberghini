/*
 * [UI - PERSONAL PROJECTS] List of all personal projects
 */
// SECTION Imports
// React
import React from 'react'
// Chakra UI
import { Img } from '@chakra-ui/image'
import { Flex, Text } from '@chakra-ui/layout'
// Prop types
import PropTypes from 'prop-types'
// Constants
import { fontS65H13S2W3, fontS18L15S2W3 } from '../../constants/font-sizes'
// UI
import { CodeButton } from './CodeButton'
import AverageDoodsLink from './Link'

// SECTION Main function
function PersonalProjects({
  imageMr = '0px',
  theme,
  title = '',
  description = '',
  projects = [],
  height = ['150px', '150px', '320px'],
  setRef = () => {},
  mt = ['0px'],
}) {
  // ANCHOR Constants
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  // ANCHOR Functions
  const openProjectURL = (url) => {
    window.open(url, '_blank')
  }
  const selectProject = (index) => {
    setSelectedIndex(index)
  }

  // ANCHOR Return
  return (
    <Flex flexDir="column" maxW="1300px" w="100%" alignSelf="center" pt={mt} justify="center" ref={(ref) => setRef(ref)}>
      <Text
        fontSize={['22px', '22px', '35px']}
        letterSpacing={fontS65H13S2W3.letterSpacing}
        fontWeight={fontS65H13S2W3.weight}
        lineHeight={[fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight]}
        color={theme.textPrimary}
        w={['94%', '94%', '94%', '100%']}
        ms={['16px', '16px', '16px', '0%']}
        me={['16px', '16px', '16px', '0%']}
      >
        {title}
      </Text>
      <Text
        fontSize={[fontS18L15S2W3.sizeMobile, fontS18L15S2W3.sizeMobile, fontS18L15S2W3.size]}
        letterSpacing={fontS18L15S2W3.letterSpacing}
        fontWeight={fontS18L15S2W3.weight}
        lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
        color={theme.textSecondary}
        mt="16px"
        w={['94%', '94%', '94%', '100%']}
        ms={['16px', '16px', '16px', '0%']}
        me={['16px', '16px', '16px', '0%']}
      >
        {description}
      </Text>

      <Flex flexDir="column" w="100%" mt="28px">
        {projects.map((e, index) => (
          <Flex
            backgroundImage="linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(#FFFFFF, #FFFFFF);"
            backgroundRepeat="no-repeat"
            backgroundSize="8px 1px"
            backgroundPosition="top left, bottom left"
            border="solid #FFFFFF"
            borderWidth="0 1px"
            padding="10px"
            paddingStart="24px"
            paddingEnd="24px"
            key={e.id}
            paddingTop="10px"
            paddingBottom="10px"
            mt={index === 0 ? '32px' : '64px'}
          >
            <Flex width="100%" flexDir="column">
              <Flex flex="1" flexDir="column">
                <Text
                  fontSize={['23px']}
                  letterSpacing={fontS65H13S2W3.letterSpacing}
                  lineHeight={[fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight]}
                  color={theme.textPrimary}
                  w={['94%', '94%', '94%', '100%']}
                  ms={['16px', '16px', '16px', '0%']}
                  me={['16px', '16px', '16px', '0%']}
                >
                  {e.id}
                </Text>
                <Flex mt="12px">
                  {e.tags.map((t, i) => (
                    <Flex flexDir="row" key={t} justify="center" align="center" ms={i === 0 ? '0px' : '10px'}>
                      <Flex width="8px" height="8px" background={theme.textSecondary} borderRadius="50%" />
                      <Text
                        fontSize={['15px']}
                        letterSpacing={fontS65H13S2W3.letterSpacing}
                        fontWeight={fontS65H13S2W3.weight}
                        lineHeight={[fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight]}
                        color={theme.textSecondary}
                        w={['94%', '94%', '94%', '100%']}
                        ms={['6px']}
                      >
                        {t}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
                <Text
                  fontSize={['17px']}
                  mt="16px"
                  letterSpacing={'1.9px'}
                  fontWeight={fontS65H13S2W3.weight}
                  lineHeight={[fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight]}
                  color={theme.textSecondary}
                  w={['94%']}
                >
                  {e.description}
                </Text>
                <AverageDoodsLink
                  fontSize={['17px']}
                  letterSpacing={fontS18L15S2W3.letterSpacing}
                  fontWeight={fontS18L15S2W3.weight}
                  lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
                  color={theme.textPrimary}
                  text="< VIEW PROJECT />"
                  mt={['24px']}
                  alignSelf="flex-start"
                />
              </Flex>
            </Flex>
            <Img src={e.image} height="290px" mt="" />
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}

// SECTION Export & Prop types
PersonalProjects.propTypes = {
  theme: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  projects: PropTypes.array,
  height: PropTypes.array,
}
export default PersonalProjects
