/*
 * [UI - HOME PROJECTS] List of title with projects
 */
// SECTION Imports
// React
import React from 'react'
// Chakra UI
import { Image } from '@chakra-ui/image'
import { Flex, Text } from '@chakra-ui/layout'
// Prop types
import PropTypes from 'prop-types'
// Constants
import { fontS65H13S2W3, fontS18L15S2W3, fontS35L13S2W3 } from '../../constants/font-sizes'
// UI
import AverageDoodsLink from './Link'
import { Desktop } from '../../constants/responsive'

// SECTION Main function
function HomeProjects({
  theme,
  title = '',
  description = '',
  projectsWeb = [],
  projectsMobile = [],
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
  const selectProject = (e) => {
    // setSelectedIndex(index)
    window.open(e.url, 'blank')
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

      <Flex flexDir={['column', 'column', 'row']} w="100%" justify="space-between" mt={['20px', '20px', '55px']}>
        <Flex
          flexDir="column"
          ms={['8px', '8px', '8px', '0%']}
          align={['center', 'center', 'center', 'center', 'flex-start']}
          mt={['20px', '20px', '0px']}
          flex="1"
        >
          <Text
            fontSize={[fontS18L15S2W3.sizeMobile, fontS18L15S2W3.sizeMobile, fontS18L15S2W3.size]}
            letterSpacing={fontS18L15S2W3.letterSpacing}
            fontWeight={fontS18L15S2W3.weight}
            lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
            color={theme.textSecondary}
            w={['94%', '94%', '94%', '100%']}
            textTransform="uppercase"
          >
            Websites
          </Text>
          <Flex flexDir="column" w={['94%', '94%', '94%', '100%']} mt={['10px']} align={['flex-start']}>
            {projectsWeb.map((e, index) => (
              <Flex flexDir="row" justify={['flex-start']} w="100%" align="center" key={e.id}>
                <AverageDoodsLink
                  selected={index === selectedIndex}
                  w="min-content"
                  text={'< ' + e.id + ' />'}
                  mt={['8px']}
                  onClick={() => selectProject(e)}
                />
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex
          flexDir="column"
          ms={['8px', '8px', '8px', '0%']}
          align={['center', 'center', 'center', 'center', 'flex-start']}
          mt={['40px', '40px', '0px']}
          flex="1"
        >
          <Text
            fontSize={[fontS18L15S2W3.sizeMobile, fontS18L15S2W3.sizeMobile, fontS18L15S2W3.size]}
            letterSpacing={fontS18L15S2W3.letterSpacing}
            fontWeight={fontS18L15S2W3.weight}
            lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
            color={theme.textSecondary}
            w={['94%', '94%', '94%', '100%']}
            textTransform="uppercase"
          >
            Mobile applications
          </Text>
          <Flex flexDir="column" w={['94%', '94%', '94%', '100%']} mt={['10px']} align={['flex-start']}>
            {projectsMobile.map((e, index) => (
              <Flex flexDir="row" justify={['flex-start']} w="100%" align="center" key={e.id}>
                <AverageDoodsLink
                  selected={index === selectedIndex}
                  w="min-content"
                  text={'< ' + e.id + ' />'}
                  mt={['8px']}
                  onClick={() => selectProject(e)}
                />
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex flexDir="column" align={['flex-start']} mr="20px" mt={['30px', '30px', '0px']} flex="1" />
      </Flex>
    </Flex>
  )
}

// SECTION Export & Prop types
HomeProjects.propTypes = {
  theme: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  projects: PropTypes.array,
  height: PropTypes.array,
}
export default HomeProjects

/*

    <Flex flexDir="column" maxW="1300px" w="100%" alignSelf="center" pt={mt} justify="center" ref={(ref) => setRef(ref)}>
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

      <Flex
        flexDir={['column', 'column', 'row']}
        w="100%"
        justify="space-between"
        mt={['20px', '20px', '55px']}
        padding="10px"
        paddingStart="24px"
        paddingEnd="24px"
      >
        <Flex flex="1" justify="center" align="center">
          <Desktop>
            <Image
              onClick={() => openProjectURL(projects[selectedIndex].url)}
              position="absolute"
              _hover={{ cursor: 'pointer' }}
              mr={['0px', '0px', imageMr]}
              src={projects[0].baseImage}
              height={height}
            />
          </Desktop>
          <Image
            onClick={() => openProjectURL(projects[selectedIndex].url)}
            _hover={{ cursor: 'pointer' }}
            mr={['0px', '0px', imageMr]}
            src={projects[selectedIndex].image}
            height={height}
          />
        </Flex>
        <Flex flexDir="column" align={['flex-start', 'flex-start', 'flex-end']} mr="20px" mt={['30px', '30px', '0px']}>
          <Text
            fontSize={[fontS18L15S2W3.sizeMobile, fontS18L15S2W3.sizeMobile, fontS18L15S2W3.size]}
            letterSpacing={fontS18L15S2W3.letterSpacing}
            fontWeight={fontS18L15S2W3.weight}
            lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
            color={theme.textSecondary}
            w={['94%', '94%', '94%', '100%']}
            textTransform="uppercase"
            textAlign={['left', 'left', 'right']}
          >
            Select a project
          </Text>
          <Flex flexDir="column" mt={['10px']} align={['flex-end']}>
            {projects.map((e, index) => (
              <Flex flexDir="row" justify={['flex-start', 'flex-start', 'flex-end']} w="100%" align="center" key={e.id}>
                <AverageDoodsLink
                  selected={index === selectedIndex}
                  w="min-content"
                  text={'< ' + e.id + ' />'}
                  mt={['8px']}
                  onClick={() => selectProject(index)}
                />
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
*/
