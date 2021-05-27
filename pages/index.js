/*
 * [PAGE] Index page at /
 */
// SECTION Imports
// Next
import Head from 'next/head'
// React
import { Component } from 'react'
// Chakra UI
import { Flex, Text } from '@chakra-ui/layout'
// Cookies
import cookies from 'next-cookies'
// Prop types
import PropTypes from 'prop-types'
// Constants
import { themes } from '../src/constants/themes'
import { fontS65H13S2W3, fontS18L15S2W3 } from '../src/constants/font-sizes'
import { TabletAndDesktop } from '../src/constants/responsive'
import { projectMobile, projectWebsites, projectsMiscellaneous, projectsScripts } from '../src/constants/projects'
// Contexts
import ApplicationContext from '../src/contexts/ApplicationContext'
// UI
import Header from '../src/components/macro/Header'
import AverageDoodsLink from '../src/components/ui/Link'
import { ScrollDownArrow } from '../src/components/ui/DownArrow'
import { CodeButton } from '../src/components/ui/CodeButton'
import HomeProjects from '../src/components/ui/HomeProjects'
import PersonalProjects from '../src/components/ui/PersonalProjects'
import ScriptsNRepositories from '../src/components/ui/ScriptsNRepositories'
import Footer from '../src/components/macro/Footer'

// SECTION Main class
class Home extends Component {
  // ANCHOR Constructor
  constructor(props) {
    super(props)
    const { theme } = props
    this.state = {
      theme,
      headerButtonsShown: false,
    }
  }

  // ANCHOR Override
  // Mount
  componentDidMount() {
    window.addEventListener('scroll', this.scrolling)
  }
  // Unmount
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrolling)
  }
  // Scroll callback
  scrolling = () => {
    // Init constants
    let offset = 0
    if (this.headerRef !== null && this.headerRef !== undefined) {
      offset = this.headerRef.offsetTop
    }
    const { headerButtonsShown } = this.state
    if (window.pageYOffset > offset) {
      // Header is sticky
      if (!headerButtonsShown) {
        this.setState({ headerButtonsShown: true })
      }
    } else {
      // Header not sticky
      if (headerButtonsShown) {
        this.setState({ headerButtonsShown: false })
      }
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
  navigateAllProjects = () => {
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
  // Navigate to personal projects
  navigateToPersonalProjects = () => {
    if (this.personalProjectsRef) this.personalProjectsRef.scrollIntoView({ behavior: 'smooth' })
  }
  // Navigate to scripts
  navigateToScripts = () => {
    if (this.scriptsRef) this.scriptsRef.scrollIntoView({ behavior: 'smooth' })
  }
  // Navigate to contacts
  navigateContacts = () => {
    if (this.footerRef) this.footerRef.scrollIntoView({ behavior: 'smooth' })
  }
  // Open project on blank
  openProjectURL = (url) => {
    window.open(url, '_blank')
  }

  // ANCHOR Render
  render() {
    // Constants
    const { theme, headerButtonsShown } = this.state

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
        <Header
          handleRef={(ref) => (this.headerRef = ref)}
          theme={theme}
          animated={headerButtonsShown}
          contactFunction={this.navigateContacts}
          projectsFunction={this.navigateAllProjects}
        />

        {/* BODY */}
        <Flex minH="100vh" alignSelf="center" w="100%" justify="center" flexDir="column" paddingTop={['43px', '43px', '43px', '0']}>
          {/* Text section & Buttons */}
          <Flex flexDir="column" maxW="1300px" w="94%" alignSelf="center" justify="center">
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
              alignSelf="center"
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
              <CodeButton text="Learn more about my tech stack" onClick={this.navigateAllProjects} />
              <CodeButton text="Check out some of my work" onClick={this.navigateAllProjects} mt={['24px', '24px', '0px']} />
            </Flex>
          </Flex>

          {/* Scroll down bar, if user clicks on entire bar it will scroll down */}
          <TabletAndDesktop>
            <ScrollDownArrow width="30" height="30" onClick={this.navigateAllProjects} />
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
          paddingBottom={['62px', '62px', '144px']}
        >
          {/* Projects title */}
          <Flex flexDir="column" maxW="1300px" w="100%" alignSelf="center" justify="center">
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
              Works && Personal Projects
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
              <AverageDoodsLink reverted={false} text="Mobile Apps" color={theme.textSecondary} onClick={this.navigateToProjectsMobile} /> //{' '}
              <AverageDoodsLink reverted={false} text="Personal Projects" color={theme.textSecondary} onClick={this.navigateToPersonalProjects} /> //{' '}
              <AverageDoodsLink reverted={false} text="Scripts && Repositories" color={theme.textSecondary} onClick={this.navigateToScripts} />
            </Text>
          </Flex>

          {/* Web */}
          <HomeProjects
            projects={projectWebsites}
            theme={theme}
            setRef={(ref) => (this.webRef = ref)}
            title={'< Websites />'}
            description={
              'A sample size of the websites I worked on. Using Wordpress, React, Node & Django. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }
            mt={['128px']}
            height={['340px']}
          />

          {/* Mobile */}
          <HomeProjects
            projects={projectMobile}
            theme={theme}
            setRef={(ref) => (this.mobileRef = ref)}
            title={'< Mobile Apps />'}
            description={
              "Some of the apps I made. I can work on native android & ios, using kotlin, java, swift or objc. I've also knoledge of different frameworks such as React, Xamarin & Flutter."
            }
            height={['420px']}
            mt={['128px']}
            imageMr={['120px']}
          />

          {/* Personal Projects */}
          <PersonalProjects
            projects={projectsMiscellaneous}
            theme={theme}
            setRef={(ref) => (this.personalProjectsRef = ref)}
            title={'< Personal Projects />'}
            description={
              "Some of the apps I made. I can work on native android & ios, using kotlin, java, swift or objc. I've also knoledge of different frameworks such as React, Xamarin & Flutter."
            }
            mt={['128px']}
          />

          {/* Scripts & Repositories */}
          <ScriptsNRepositories
            projects={projectsScripts}
            theme={theme}
            setRef={(ref) => (this.scriptsRef = ref)}
            title={'< Scripts && Repositories />'}
            description={
              "Some of the apps I made. I can work on native android & ios, using kotlin, java, swift or objc. I've also knoledge of different frameworks such as React, Xamarin & Flutter."
            }
            mt={['128px']}
          />
        </Flex>

        {/* FOOTER */}
        <Footer theme={theme} footerRef={(ref) => (this.footerRef = ref)} />
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
