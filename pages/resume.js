/*
 * [PAGE] Resume page at /resume
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
// Contexts
import ApplicationContext from '../src/contexts/ApplicationContext'
// UI
import Header from '../src/components/macro/Header'
import AverageDoodsLink from '../src/components/ui/Link'
import Footer from '../src/components/macro/Footer'
import withRouter from 'next/dist/client/with-router'
import { ResumeHeader } from '../src/components/ui/resume/ResumeHeader'
import { fontS18L15S2W3 } from '../src/constants/font-sizes'
import { ResumeAbout } from '../src/components/ui/resume/ResumeAbout'
import { ResumeExperience } from '../src/components/ui/resume/ResumeExperience'
import { ResumeTech } from '../src/components/ui/resume/ResumeTech'
import { ResumeInterests } from '../src/components/ui/resume/ResumeInterests'
import { ResumeEducation } from '../src/components/ui/resume/ResumeEductation'

// SECTION Main class
class Resume extends Component {
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
  // Navigate to all projects in home
  navigateAllProjects = () => {
    const { router } = this.props
    router.push({
      pathname: '/',
      query: {
        to: 'projects',
      },
    })
  }
  // Navigate to contacts in footer
  navigateContacts = () => {
    if (this.footerRef) this.footerRef.scrollIntoView({ behavior: 'smooth' })
  }
  // Jump to about
  jumpAbout = () => {
    if (this.about) this.about.scrollIntoView({ behavior: 'smooth' })
  }
  // Jump to education
  jumpEducation = () => {
    if (this.education) this.education.scrollIntoView({ behavior: 'smooth' })
  }
  // Jump to experience
  jumpExperience = () => {
    if (this.experience) this.experience.scrollIntoView({ behavior: 'smooth' })
  }
  // Jump to interests
  jumpInterests = () => {
    if (this.interests) this.interests.scrollIntoView({ behavior: 'smooth' })
  }
  // Jump to tech
  jumpTech = () => {
    if (this.tech) this.tech.scrollIntoView({ behavior: 'smooth' })
  }
  // Navigate to home
  navigateHome = () => {
    const { router } = this.props
    router.push('/')
  }

  // ANCHOR Render
  render() {
    // Constants
    const { theme, headerButtonsShown } = this.state

    // Return
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
          homeFunction={this.navigateHome}
          currentPage="resume"
        />

        {/* BODY */}
        <Flex
          minH="100vh"
          alignSelf="center"
          w="100%"
          justify="flex-start"
          flexDir="column"
          paddingTop={['43px', '43px', '43px', '160px']}
          paddingBottom={['62px', '62px', '144px']}
        >
          {/* Header */}
          <ResumeHeader theme={theme} />
          {/* Jump to
          <Flex flexDir="row" maxW="1300px" mt="18px" alignSelf="center" w="100%" paddingStart="24px" paddingEnd="24px">
            <Text
              fontSize={[fontS18L15S2W3.sizeMobile, fontS18L15S2W3.sizeMobile, fontS18L15S2W3.size]}
              letterSpacing={fontS18L15S2W3.letterSpacing}
              fontWeight={fontS18L15S2W3.weight}
              lineHeight={[fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight, fontS18L15S2W3.lineHeight]}
              color={theme.textSecondary}
              w={['94%', '94%', '94%', '100%']}
              ms={['16px', '16px', '16px', '0%']}
              me={['16px', '16px', '16px', '0%']}
            >
              JUMP TO: <AverageDoodsLink reverted={false} text="About me" color={theme.textSecondary} onClick={this.jumpAbout} /> //{' '}
              <AverageDoodsLink reverted={false} text="Experience" color={theme.textSecondary} onClick={this.jumpExperience} /> //{' '}
              <AverageDoodsLink reverted={false} text="Tech & Programming languages" color={theme.textSecondary} onClick={this.jumpTech} /> //{' '}
              <AverageDoodsLink reverted={false} text="Interests" color={theme.textSecondary} onClick={this.jumpInterests} /> //{' '}
              <AverageDoodsLink reverted={false} text="Education" color={theme.textSecondary} onClick={this.jumpEducation} />
            </Text>
          </Flex>
          */}
          {/* About */}
          <ResumeAbout theme={theme} setRef={(ref) => (this.about = ref)} />
          {/* Experience */}
          <ResumeExperience theme={theme} setRef={(ref) => (this.experience = ref)} />
          {/* Tech */}
          <ResumeTech theme={theme} setRef={(ref) => (this.tech = ref)} />
          {/* Interests */}
          <ResumeInterests theme={theme} setRef={(ref) => (this.interests = ref)} />
          {/* Education */}
          <ResumeEducation theme={theme} setRef={(ref) => (this.education = ref)} />
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
Resume.propTypes = {
  locale: PropTypes.any,
  theme: PropTypes.object,
}
// Context type
Resume.contextType = ApplicationContext
// Export
export default withRouter(Resume)
