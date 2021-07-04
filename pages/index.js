/*
 * [PAGE] Index page at /
 */
// SECTION Imports
// Next
import Head from 'next/head'
import withRouter from 'next/dist/client/with-router'
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
    // Check redirects
    const { to } = this.props
    if (to !== null && to !== undefined) {
      if (to === 'projects') {
        setTimeout(() => {
          this.navigateAllProjects()
        }, 1000)
      }
    }
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
  // Navigate to resume
  navigateResume = () => {
    const { router } = this.props
    router.push('/resume')
  }
  // Scroll back to top
  scrollTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
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
          {/* Preload font */}
          <link rel="preload" href="/fonts/Dosis-VariableFont_wght.ttf" as="font" crossOrigin="anonymous" />
          {/* Title & Responsive */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#1E1E1E" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
          {/* Chrome, Firefox OS and Opera */}
          <meta name="theme-color" content="#1E1E1E" />
          {/* Windows phone */}
          <meta name="msapplication-navbutton-color" content="#1E1E1E" />
          {/* iOS Safari */}
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          {/* Common tags */}
          <meta charset="utf-8" />
          <title>{'Matteo Alberghini -- Software Developer'}</title>
          {/* Search engine */}
          <meta
            name="description"
            content="I'm a developer mainly focused on web & mobile development, with game development knowledge. Writer, book worm and tech enthusiast. Currently looking for jobs outside of Italy, my home country."
          />
          <meta name="image" content="https://media.publit.io/file/AvdoodsWebsite/MetaTags/preview_website.png" />
          <meta itemProp="name" content="Matteo Alberghini -- Software Developer" />
          <meta
            itemProp="description"
            content="I'm a developer mainly focused on web & mobile development, with game development knowledge. Writer, book worm and tech enthusiast. Currently looking for jobs outside of Italy, my home country."
          />
          <meta itemProp="image" content="https://media.publit.io/file/AvdoodsWebsite/MetaTags/preview_website.png" />
          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Matteo Alberghini -- Software Developer" />
          <meta
            name="twitter:description"
            content="I'm a developer mainly focused on web & mobile development, with game development knowledge. Writer, book worm and tech enthusiast. Currently looking for jobs outside of Italy, my home country."
          />
          <meta name="twitter:site" content="@0x4d61646f" />
          <meta name="twitter:creator" content="@0x4d61646f" />
          <meta name="twitter:image:src" content="https://media.publit.io/file/AvdoodsWebsite/MetaTags/preview_website.png" />
          {/* Open Graph general (Facebook, Pinterest & Google+) */}
          <meta name="og:title" content="Matteo Alberghini -- Software Developer" />
          <meta
            name="og:description"
            content="I'm a developer mainly focused on web & mobile development, with game development knowledge. Writer, book worm and tech enthusiast. Currently looking for jobs outside of Italy, my home country."
          />
          <meta name="og:image" content="https://media.publit.io/file/AvdoodsWebsite/MetaTags/preview_website.png" />
          <meta name="og:url" content="https://averagedoods.dev" />
          <meta name="og:site_name" content="Matteo Alberghini -- Software Developer" />
          <meta name="og:locale" content="en_US" />
          <meta name="og:type" content="website" />
        </Head>

        {/* HEADER */}
        <Header
          handleRef={(ref) => (this.headerRef = ref)}
          theme={theme}
          animated={headerButtonsShown}
          contactFunction={this.navigateContacts}
          projectsFunction={this.navigateAllProjects}
          resumeFunction={this.navigateResume}
          homeFunction={this.scrollTop}
          currentPage="projects"
        />

        {/* BODY */}
        <Flex minH="100vh" alignSelf="center" w="100%" justify="center" flexDir="column" paddingTop={['43px', '43px', '43px', '0']}>
          {/* Text section & Buttons */}
          <Flex flexDir="column" maxW="1300px" w="96%" alignSelf="center" justify="center">
            {/* Title */}
            <Text
              fontSize={['30px', '30px', fontS65H13S2W3.size]}
              letterSpacing={fontS65H13S2W3.letterSpacing}
              fontWeight={fontS65H13S2W3.weight}
              lineHeight={[fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight, fontS65H13S2W3.lineHeight]}
              color={theme.textPrimary}
              w={['94%', '94%', '94%', '100%']}
              ms={['16px', '16px', '16px', '0%']}
              me={['16px', '16px', '16px', '0%']}
              mt={['30px', '30px', '30px', '0px']}
            >
              Hello, I'm Matteo Alberghini :)
            </Text>
            {/* Subtitle */}
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
              I'm a developer based in Modena, Italy. Mainly focused on Web, Mobile & Videogame development. Writer, book worm and tech enthusiast.
              Currently main frontend developer for{' '}
              <AverageDoodsLink
                text="Genuino Blockchain Technologies."
                fontSize={['15px', '15px', fontS18L15S2W3.size]}
                color={theme.textSecondary}
                onClick={this.navigateGenuino}
              />{' '}
              Looking for a new job in the European area.
            </Text>
            {/* Button / link to portfolio */}
            <Flex
              flexDir={['column', 'column', 'row']}
              justify="space-between"
              me={['16px', '16px', '16px', '0%']}
              ms={['16px', '16px', '16px', '0%']}
              w="94%"
              mt="32px"
            >
              <CodeButton text="Have a look at my resume" onClick={this.navigateResume} />
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
          <Flex flexDir="column" maxW="1300px" w="96%" alignSelf="center" justify="center" mt={['30px', '30px', '30px', '0px']}>
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
              JUMP TO:{' '}
              <AverageDoodsLink
                fontSize={['15px', '15px', fontS18L15S2W3.size]}
                reverted={false}
                text="Work Projects"
                color={theme.textSecondary}
                onClick={this.navigateToProjectsWeb}
              />{' '}
              //{' '}
              <AverageDoodsLink
                reverted={false}
                text="Personal Projects"
                fontSize={['15px', '15px', fontS18L15S2W3.size]}
                color={theme.textSecondary}
                onClick={this.navigateToPersonalProjects}
              />{' '}
              //{' '}
              <AverageDoodsLink
                fontSize={['15px', '15px', fontS18L15S2W3.size]}
                reverted={false}
                text="Scripts && Repositories"
                color={theme.textSecondary}
                onClick={this.navigateToScripts}
              />
            </Text>
          </Flex>

          {/* Web */}
          <HomeProjects
            projectsWeb={projectWebsites}
            projectsMobile={projectMobile}
            theme={theme}
            setRef={(ref) => (this.webRef = ref)}
            title={'< Work Projects />'}
            description={
              "Some of my work projects are listed here. Not all of them are open source. If you're interested in code snippets or examples feel free to contact me."
            }
            mt={['70px', '70px', '128px']}
            height={['auto', 'auto', '340px']}
          />

          {/* Personal Projects */}
          <PersonalProjects
            projects={projectsMiscellaneous}
            theme={theme}
            setRef={(ref) => (this.personalProjectsRef = ref)}
            title={'< Personal Projects />'}
            description={
              "All my personal projects are listed here. The entire codebase is available on github. As you're reading this I'm probably working on something else, feel free to contact me to know more!"
            }
            mt={['70px', '70px', '128px']}
          />

          {/* Scripts & Repositories */}
          <ScriptsNRepositories
            projects={projectsScripts}
            theme={theme}
            setRef={(ref) => (this.scriptsRef = ref)}
            title={'< Scripts && Repositories />'}
            description={'A list of my repositories and useful script or code snippets. Feel free to copy and modify them. More are coming.'}
            mt={['70px', '70px', '128px']}
          />
        </Flex>

        {/* FOOTER */}
        <Footer theme={theme} footerRef={(ref) => (this.footerRef = ref)} />
      </Flex>
    )
  }
}

// SECTION Export & Props
// Check if user has been redirected from another page
const checkRedirect = (ctx) => {
  const { to } = ctx.query
  if (to === undefined || to === null) return null
  return to
}
// Server side props
export const getServerSideProps = async (ctx) => {
  const { locale } = ctx
  let { theme } = cookies(ctx)
  if (!theme) theme = themes.standard
  const to = checkRedirect(ctx)
  return {
    props: {
      // ...(await serverSideTranslations(locale, ['common', 'auth'])),
      locale,
      theme,
      to,
    },
  }
}
// Prop types
Home.propTypes = {
  locale: PropTypes.any,
  theme: PropTypes.object,
  to: PropTypes.string,
  router: PropTypes.any,
}
// Context type
Home.contextType = ApplicationContext
// Export
export default withRouter(Home)
