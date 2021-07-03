/*
 * [UI - HOME PROJECTS] List of title with projects
 */
// SECTION Imports
// React
import React from 'react'
// Chakra UI
import { Img } from '@chakra-ui/image'
import { Flex, Text, Link } from '@chakra-ui/layout'
// Prop types
import PropTypes from 'prop-types'
// Constants
import { fontS65H13S2W3, fontS18L15S2W3, fontS22L13S2W3, fontS35L13S2W3 } from '../../constants/font-sizes'
// UI
import { CodeButton } from './CodeButton'
import { GithubIcon } from './icons/GithubIcon'
import AverageDoodsLink from './Link'

// SECTION Main function
function ScriptsNRepositories({
  imageMr = '0px',
  theme,
  title = '',
  description = '',
  projects = [],
  height = ['150px', '150px', '320px'],
  setRef = () => {},
  mt = ['0px'],
}) {
  // ANCHOR Functions
  const openProjectURL = (url) => {
    window.open(url, '_blank')
  }

  // ANCHOR Return
  return (
    <Flex flexDir="column" maxW="1300px" w="96%" alignSelf="center" pt={mt} justify="center" ref={(ref) => setRef(ref)}>
      <Text
        fontSize={[fontS35L13S2W3.sizeMobile, fontS35L13S2W3.sizeMobile, fontS35L13S2W3.size]}
        letterSpacing={fontS35L13S2W3.letterSpacing}
        fontWeight={fontS35L13S2W3.weight}
        lineHeight={[fontS35L13S2W3.lineHeight]}
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

      <Flex flexDir="column" w="100%" mt={['14px', '14px', '28px']}>
        {projects.map((e, index) => (
          <Flex
            key={e.id}
            backgroundImage="linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(#FFFFFF, #FFFFFF);"
            backgroundRepeat="no-repeat"
            backgroundSize="8px 1px"
            backgroundPosition="top left, bottom left"
            border="solid #FFFFFF"
            borderWidth="0 1px"
            padding="10px"
            paddingStart="24px"
            paddingEnd="24px"
            mt={index === 0 ? ['25px', '25px', '32px'] : ['30px', '30px', '54px']}
            w={['90%', '90%', '100%']}
            ms={['5%', '5%', '0%']}
            me={['5%', '5%', '0%']}
            onClick={() => openProjectURL(e.url)}
            _hover={{
              cursor: 'pointer',
            }}
          >
            <Flex w="100%" flexDir="column">
              <Flex w="100%" flexDir={['column', 'column', 'row']} align={['flex-start', 'flex-start', 'center']}>
                <Flex flex="1" maxW="100%" overflowWrap="break-word" flexWrap="wrap">
                  <Text
                    fontSize={[fontS22L13S2W3.sizeMobile, fontS22L13S2W3.sizeMobile, fontS22L13S2W3.size]}
                    letterSpacing={fontS22L13S2W3.letterSpacing}
                    fontWeight={fontS22L13S2W3.weight}
                    lineHeight={[fontS22L13S2W3.lineHeight, fontS22L13S2W3.lineHeight, fontS22L13S2W3.lineHeight]}
                    color={theme.textPrimary}
                    wordBreak="break-word"
                    w={['100%', '100%', 'max-content']}
                  >
                    {e.id}
                  </Text>
                </Flex>
                <Text
                  fontSize={[fontS18L15S2W3.sizeMobile, fontS18L15S2W3.sizeMobile, fontS18L15S2W3.size]}
                  letterSpacing={fontS18L15S2W3.letterSpacing}
                  fontWeight={fontS18L15S2W3.weight}
                  lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
                  color={e.type === 'repository' ? theme.secondary : theme.primary}
                  alignSelf={['flex-start', 'flex-start', 'flex-end']}
                  mt={['10px', '10px', '5px']}
                  ms={['0px', '0px', '12px']}
                >
                  {e.type === 'repository' ? '// Repository //' : '// Script //'}
                </Text>
              </Flex>
              <Flex mt={['10px', '10px', '8px']} w="100%" justify="space-between" flexDir={['column', 'column', 'row']}>
                <Flex flexDir={['column', 'column', 'row']}>
                  {e.tags.map((t, i) => (
                    <Flex key={t} justify="center" align="center" ms={i === 0 ? '0px' : ['0px', '0px', '13px']}>
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
                <Flex alignSelf={['flex-start', 'flex-start', 'flex-end']} mt={['20px', '20px', '0px']}>
                  <AverageDoodsLink fontSize="15px" letterSpacing="2.1px" text="< VIEW ON GITHUB />" onClick={() => openProjectURL(e.url)} />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}

// SECTION Export & Prop types
ScriptsNRepositories.propTypes = {
  theme: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  projects: PropTypes.array,
  height: PropTypes.array,
}
export default ScriptsNRepositories
