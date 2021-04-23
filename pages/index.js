/*
 * [PAGE] Index page at averagedoods.dev
 */
// SECTION Imports
// Next
import Head from 'next/head'
// React
import { Component } from 'react'
// Chakra UI
import { Img } from '@chakra-ui/image'
import { Flex, Text } from '@chakra-ui/layout'
// Cookies
import cookies from 'next-cookies'
// Prop types
import PropTypes from 'prop-types'
// Constants
import { themes } from '../src/constants/themes'
import { fontS65H13S2W3, fontS18L15S2W3 } from '../src/constants/font-sizes'
import { TabletAndDesktop } from '../src/constants/responsive'
import { projectMobile, projectWebsites } from '../src/constants/projects'
// Contexts
import ApplicationContext from '../src/contexts/ApplicationContext'
// Scrollable view
import ScrollContainer from 'react-indiana-drag-scroll'
// UI
import Header from '../src/components/macro/Header'
import AverageDoodsLink from '../src/components/ui/Link'
import { ScrollDownArrow } from '../src/components/ui/DownArrow'
import { CodeButton } from '../src/components/ui/CodeButton'

// SECTION Main class
class Home extends Component {
  // ANCHOR Constructor
  constructor(props) {
    super(props)
    const { theme } = props
    this.state = {
      theme,
    }
  }

  // ANCHOR Functions
  // Change themes
  changeTheme = () => {
    const { theme } = this.state
    if (theme.name === themes.standard.name) {
      this.context.overrideSetTheme(themes.test)
      this.setState({ theme: themes.test })
      return
    }
    this.context.overrideSetTheme(themes.standard)
    this.setState({ theme: themes.standard })
  }
  // ANCHOR Navigation
  // Navigate genuino.world
  navigateGenuino = () => {
    window.open('https://www.genuino.world', '_blank')
  }
  // Navigate down from home
  navigateDownFromHome = () => {
    if (this.portfolioRef) this.portfolioRef.scrollIntoView({ behavior: 'smooth' })
  }
  // Navigate to web projects
  navigateToProjectsWeb = () => {
    if (this.webRef) this.webRef.scrollIntoView({ behavior: 'smooth' })
  }
  // Navigate to mobile projects
  navigateToProjectsMobile = () => {
    if (this.mobileRef) this.mobileRef.scrollIntoView({ behavior: 'smooth' })
  }
  // Navigate to miscellaneous projects
  navigateToProjectsMisc = () => {
    if (this.miscRef) this.miscRef.scrollIntoView({ behavior: 'smooth' })
  }
  // Open project on blank
  openProjectURL = (url) => {
    window.open(url, '_blank')
  }

  // ANCHOR Render
  render() {
    // Constants
    const { theme } = this.state

    // Return statement
    return (
      <Flex minH="100%" flexDir="column">
        {/* HEAD */}
        <Head>
          {/* Title & Responsive */}
          <title>Average doods</title>
          <meta title="Average doods" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Favicon */}
          {/* Meta tags */}
        </Head>

        {/* HEADER */}
        <Header theme={theme} />

        {/* BODY */}
        <Flex minH="100vh" alignSelf="center" w="100%" justify="center" flexDir="column" paddingTop={['43px', '43px', '43px', '0px']}>
          {/* Text section & Buttons */}
          <Flex flexDir="column" maxW="900px" alignSelf="center" justify="center">
            {/* Title */}
            <Text
              fontSize={[fontS65H13S2W3.sizeMobile, fontS65H13S2W3.sizeMobile, fontS65H13S2W3.size]}
              letterSpacing={fontS65H13S2W3.letterSpacing}
              fontWeight={fontS65H13S2W3.weight}
              lineHeight={[fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight]}
              color={theme.textPrimary}
              w={['94%', '94%', '94%', '100%']}
              ms={['16px', '16px', '16px', '0%']}
              me={['16px', '16px', '16px', '0%']}
            >
              Hello, I'm Matteo Alberghini :)
            </Text>
            {/* Subtitle */}
            <Text
              fontSize={[fontS18L15S2W3.sizeMobile, fontS18L15S2W3.sizeMobile, fontS18L15S2W3.size]}
              letterSpacing={fontS18L15S2W3.letterSpacing}
              fontWeight={fontS18L15S2W3.weight}
              lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
              color={theme.textSecondary}
              mt="24px"
              w={['94%', '94%', '94%', '100%']}
              ms={['16px', '16px', '16px', '0%']}
              me={['16px', '16px', '16px', '0%']}
            >
              Developer currently based in Bologna, Italy. Mainly working on Web, Mobile & Videogames. Writer, avid reader and tech enthusiast.
              Currently main frontend developer for{' '}
              <AverageDoodsLink text="Genuino Blockchain Technologies." color={theme.textSecondary} onClick={this.navigateGenuino} />
            </Text>
            {/* Button / link to portfolio */}
            <Flex flexDir={['column', 'column', 'row']} justify="space-between" w="96%" mt="32px">
              <CodeButton text="Learn more about my tech stack" onClick={this.navigateDownFromHome} />
              <CodeButton text="Check out some of my work" onClick={this.navigateDownFromHome} mt={['24px', '24px', '0px']} />
            </Flex>
          </Flex>

          {/* Scroll down bar, if user clicks on entire bar it will scroll down */}
          <TabletAndDesktop>
            <ScrollDownArrow width="30" height="30" onClick={this.navigateDownFromHome} />
          </TabletAndDesktop>
        </Flex>

        {/* PORTFOLIO */}
        <Flex
          minH="100vh"
          w="100%"
          justify="center"
          align="center"
          flexDir="column"
          ref={(ref) => (this.portfolioRef = ref)}
          paddingTop={['62px', '62px', '144px']}
        >
          {/* Web */}
          <Flex flexDir="column" maxW="900px" w="100%" alignSelf="center" justify="center" ref={(ref) => (this.webRef = ref)}>
            <Text
              fontSize={[fontS65H13S2W3.sizeMobile, fontS65H13S2W3.sizeMobile, fontS65H13S2W3.size]}
              letterSpacing={fontS65H13S2W3.letterSpacing}
              fontWeight={fontS65H13S2W3.weight}
              lineHeight={[fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight]}
              color={theme.textPrimary}
              w={['94%', '94%', '94%', '100%']}
              ms={['16px', '16px', '16px', '0%']}
              me={['16px', '16px', '16px', '0%']}
            >
              My projects portfolio
            </Text>
            <Text
              fontSize={[fontS18L15S2W3.sizeMobile, fontS18L15S2W3.sizeMobile, fontS18L15S2W3.size]}
              letterSpacing={fontS18L15S2W3.letterSpacing}
              fontWeight={fontS18L15S2W3.weight}
              lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
              color={theme.textSecondary}
              mt="8px"
              w={['94%', '94%', '94%', '100%']}
              ms={['16px', '16px', '16px', '0%']}
              me={['16px', '16px', '16px', '0%']}
            >
              JUMP TO: <AverageDoodsLink reverted={false} text="Websites" color={theme.textSecondary} onClick={this.navigateToProjectsWeb} /> //{' '}
              <AverageDoodsLink reverted={false} text="Mobile apps" color={theme.textSecondary} onClick={this.navigateToProjectsMobile} /> //{' '}
              <AverageDoodsLink reverted={false} text="Miscellaneous" color={theme.textSecondary} onClick={this.navigateToProjectsMisc} />
            </Text>
            <Text
              fontSize={['22px', '22px', '30px']}
              letterSpacing={fontS65H13S2W3.letterSpacing}
              fontWeight={fontS65H13S2W3.weight}
              lineHeight={[fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight]}
              color={theme.textPrimary}
              mt="32px"
              w={['94%', '94%', '94%', '100%']}
              ms={['16px', '16px', '16px', '0%']}
              me={['16px', '16px', '16px', '0%']}
            >
              [ Websites ]
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
              A sample size of the websites I worked on. Using Wordpress, React, Node & Django. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
          </Flex>

          <ScrollContainer horizontal={true} vertical={false}>
            <Flex flexDir="row" alignSelf="center" mt="47px" cursor="grab">
              {projectWebsites.map((e) => (
                <Img
                  key={e.id}
                  src={e.image}
                  ms={['32px']}
                  height={['150px', '150px', '300px']}
                  onClick={() => this.openProjectURL(e.url)}
                  _hover={{ cursor: 'pointer' }}
                />
              ))}
            </Flex>
          </ScrollContainer>

          {/* Mobile */}
          <Flex flexDir="column" maxW="900px" w="100%" alignSelf="center" justify="center" mt="64px" ref={(ref) => (this.mobileRef = ref)}>
            <Text
              fontSize={['17px', '17px', '30px']}
              letterSpacing={fontS65H13S2W3.letterSpacing}
              fontWeight={fontS65H13S2W3.weight}
              lineHeight={[fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight]}
              color={theme.textPrimary}
              w={['94%', '94%', '94%', '100%']}
              ms={['16px', '16px', '16px', '0%']}
              me={['16px', '16px', '16px', '0%']}
            >
              [ Mobile Apps ]
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
              Some of the apps I made. I can work on native android & ios, using kotlin, java, swift or objc. I've also knoledge of different
              frameworks such as React, Xamarin & Flutter.
            </Text>
          </Flex>
          <ScrollContainer horizontal={true} vertical={false}>
            <Flex flexDir="row" alignSelf="center" mt="47px" cursor="grab" mb="32px">
              {projectMobile.map((e) => (
                <Img
                  key={e.id}
                  src={e.image}
                  height={['150px', '150px', '400px']}
                  ms={['80px']}
                  onClick={() => this.openProjectURL(e.url)}
                  _hover={{ cursor: 'pointer' }}
                />
              ))}
            </Flex>
          </ScrollContainer>

          {/* Misc */}
          <Flex flexDir="column" maxW="900px" w="100%" alignSelf="center" justify="center" mt="64px" ref={(ref) => (this.miscRef = ref)}>
            <Text
              fontSize={['17px', '17px', '30px']}
              letterSpacing={fontS65H13S2W3.letterSpacing}
              fontWeight={fontS65H13S2W3.weight}
              lineHeight={[fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight]}
              color={theme.textPrimary}
              w={['94%', '94%', '94%', '100%']}
              ms={['16px', '16px', '16px', '0%']}
              me={['16px', '16px', '16px', '0%']}
            >
              [ Miscellaneous ]
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
              Different projects and code examples or challenges. Links go to my personal github account, for more info feel free to contact me in
              private.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    )
  }
}

// SECTION Export & Props
// Server side props
export const getServerSideProps = async (ctx) => {
  const { locale } = ctx
  let { theme } = cookies(ctx)
  if (!theme) theme = themes.standard
  return {
    props: {
      // ...(await serverSideTranslations(locale, ['common', 'auth'])),
      locale,
      theme,
    },
  }
}
// Prop types
Home.propTypes = {
  locale: PropTypes.any,
  theme: PropTypes.object,
}
// Context type
Home.contextType = ApplicationContext
// Export
export default Home
