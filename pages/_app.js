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
// Prop types
import PropTypes from 'prop-types'
// Translation
import { appWithTranslation } from 'next-i18next'
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
  // ANCHOR Return statement
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <ToastContainer />
    </ChakraProvider>
  )
}

// SECTION Export & Translation
MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
}
export default appWithTranslation(MyApp)
