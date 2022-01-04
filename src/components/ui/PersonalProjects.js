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
import { fontS65H13S2W3, fontS18L15S2W3, fontS35L13S2W3, fontS22L13S2W3 } from '../../constants/font-sizes'
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
    <Flex flexDir="column" maxW="1300px" w="96%" alignSelf="center" pt={mt} justify="center" ref={(ref) => setRef(ref)}>
      <Text
        fontSize={[fontS35L13S2W3.sizeMobile, fontS35L13S2W3.sizeMobile, fontS35L13S2W3.size]}
        letterSpacing={fontS35L13S2W3.letterSpacing}
        fontWeight={fontS35L13S2W3.weight}
        lineHeight={[fontS35L13S2W3.lineHeight, fontS35L13S2W3.lineHeight, fontS35L13S2W3.lineHeight]}
        color={theme.textPrimary}
        w={['94%', '94%', '94%', '100%']}
        ms={['16px', '16px', '16px', '0%']}
        me={['16px', '16px', '16px', '0%']}
      >
        {title}
      </Text>
      <Text
        fontSize={['15px', '15px', fontS18L15S2W3.size]}
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

      <Flex
        flexDir="column"
        mt="28px"
        w={['90%', '90%', '100%']}
        ms={['5%', '5%', '0%']}
        me={['5%', '5%', '0%']}
        justify="center"
        alignItems="center"
      >
        {projects.map((e, index) => (
          <Flex
            key={e.id}
            paddingTop="10px"
            paddingBottom="10px"
            mt={index === 0 ? ['10px', '10px', '48px'] : ['50px', '50px', '64px']}
            flexDir={['column', 'column', 'row']}
          >
            <Flex width="100%" flexDir="column">
              <Flex flex="1" flexDir="column">
                <Text
                  fontSize={['21px', '21px', '24px']}
                  letterSpacing={fontS22L13S2W3.letterSpacing}
                  fontWeight={fontS22L13S2W3.weight}
                  lineHeight={[fontS22L13S2W3.lineHeight, fontS22L13S2W3.lineHeight, fontS22L13S2W3.lineHeight]}
                  color={theme.textPrimary}
                  w={['94%', '94%', '94%', '100%']}
                >
                  {e.id}
                </Text>
                <Flex mt="14px" flexDir={['column', 'column', 'row']}>
                  {e.tags.map((t, i) => (
                    <Flex key={t} justify="center" align="center" flexDir="row" ms={i === 0 ? '0px' : ['0px', '0px', '10px']}>
                      <Flex width="8px" height="8px" background={theme.textSecondary} borderRadius="50%" />
                      <Text
                        fontSize={['15px']}
                        letterSpacing={fontS18L15S2W3.letterSpacing}
                        fontWeight={fontS18L15S2W3.weight}
                        lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
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
                  mt="22px"
                  fontSize={['15px', '15px', '17px']}
                  letterSpacing={'1.5px'}
                  fontWeight={fontS18L15S2W3.weight}
                  lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
                  color={theme.textSecondary}
                  w={['94%']}
                >
                  {e.description}
                </Text>
                <AverageDoodsLink
                  fontSize={['15px', '15px', '17px']}
                  letterSpacing={fontS18L15S2W3.letterSpacing}
                  fontWeight={fontS18L15S2W3.weight}
                  lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
                  color={theme.textPrimary}
                  text="< VIEW PROJECT />"
                  mt={['28px']}
                  alignSelf="flex-start"
                  onClick={() => window.open(e.url)}
                />
              </Flex>
            </Flex>
            <Img src={e.image} maxH="270px" mt={['28px', '28px', '0px']} boxShadow="5px 9px 23px 5px #00000050" maxW="100%" alignSelf="center" />
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
