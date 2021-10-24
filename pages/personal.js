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
// Contexts
import ApplicationContext from '../src/contexts/ApplicationContext'
// UI
import Header from '../src/components/macro/Header'
import Footer from '../src/components/macro/Footer'
import ScriptsNRepositories from '../src/components/ui/ScriptsNRepositories'
import { projectsScripts } from '../src/constants/projects'

// SECTION Main class
class Personal extends Component {
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
  navigateCurrentJob = () => {
    window.open('https://themobilecompany.com/', '_blank')
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
          <link rel="preload" href="/fonts/DailyChallenge.otf" as="font" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/PleaseWriteMeASong.ttf" as="font" crossOrigin="anonymous" />
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
          <meta charSet="utf-8" />
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
        <Flex minH="100vh" alignSelf="center" w="100%" justify="flex-start" flexDir="column" paddingTop={['250px', '250px', '250px', '0']}>

          {/* Scripts & Repositories */}
          <ScriptsNRepositories
            projects={projectsScripts}
            theme={theme}
            setRef={(ref) => (this.scriptsRef = ref)}
            title={'~ Have fun looking around ~'}
            description={'A list of subpages with ideas, projects and random facts.'}
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
Personal.propTypes = {
  locale: PropTypes.any,
  theme: PropTypes.object,
  to: PropTypes.string,
  router: PropTypes.any,
}
// Context type
Personal.contextType = ApplicationContext
// Export
export default withRouter(Personal)
