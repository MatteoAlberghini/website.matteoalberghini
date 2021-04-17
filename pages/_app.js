/*
 * [PAGE] First page to render
 */
// SECTION Imports
// Chakra imports
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
// Next
import Router from 'next/router'
// React
import React from 'react'
// Constants
import { colors } from '../src/constants/chakra-colors'
import { fonts } from '../src/constants/chakra-fonts'
import { components } from '../src/constants/chakra-components'
import { themes } from '../src/constants/themes'
// Contexts
import ApplicationContext from '../src/contexts/ApplicationContext'
// Prop types
import PropTypes from 'prop-types'
// Translation
import { appWithTranslation } from 'next-i18next'
// Cookies
import Cookies from 'js-cookie'
// Loading bar
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// Toasts
import { ToastContainer } from 'react-toastify'
// CSS
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'

// SECTION File constants
const theme = extendTheme({ colors, components, fonts })

// SECTION Binding events for NProgress
NProgress.configure({
  showSpinner: false,
})
//Binding events
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// SECTION Main class
function MyApp({ Component, pageProps }) {
  // ANCHOR Constants
  const [currentTheme, setCurrentTheme] = React.useState(Cookies.get('theme') ? Cookies.get('theme') : themes.standard)

  // ANCHOR Functions
  // Override setCurrentTheme function
  const overrideSetTheme = (theme) => {
    setCurrentTheme(theme)
    Cookies.set('theme', theme)
  }
  // Creates memo for context
  const applicationContext = React.useMemo(() => {
    return {
      currentTheme,
      overrideSetTheme,
    }
  }, [currentTheme])

  // ANCHOR Return statement
  return (
    <ChakraProvider theme={theme}>
      <ApplicationContext.Provider value={applicationContext}>
        <Component {...pageProps} />
        <ToastContainer />
      </ApplicationContext.Provider>
    </ChakraProvider>
  )
}

// SECTION Export & Translation
MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
}
export default appWithTranslation(MyApp)
