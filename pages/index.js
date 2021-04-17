/*
 * [PAGE] Index page at averagedoods.dev
 */
// SECTION Imports
// Next
import Head from 'next/head'
// React
import { Component } from 'react'
// Chakra UI
import { Button } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'
// Cookies
import cookies from 'next-cookies'
// Prop types
import PropTypes from 'prop-types'
// Constants
import { themes } from '../src/constants/themes'
// Contexts
import ApplicationContext from '../src/contexts/ApplicationContext'

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

  // ANCHOR Render
  render() {
    // Constants
    const { theme } = this.state

    // Return statement
    return (
      <Flex minH="100%">
        <Head>
          <title>Average doods</title>
          <meta title="Average doods" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Flex background={theme.main} height="100%" width="100%" justify="center" align="center" flexDir="column">
          <Button onClick={this.changeTheme}>{theme.name}</Button>
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
