/*
 * Main application context
 */
// SECTION Imports
import React from 'react'

// SECTION Exports
const ApplicationContext = React.createContext()

export const ApplicationContextProvider = ApplicationContext.Provider
export const ApplicationContextConsumer = ApplicationContext.Consumer

export default ApplicationContext
