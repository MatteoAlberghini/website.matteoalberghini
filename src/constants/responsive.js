/*
 * SECTION Media queries
 */
import { useMediaQuery } from 'react-responsive'

// Desktop
export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1025 })
  return isDesktop ? children : null
}
// Tablet and Desktop
export const TabletAndDesktop = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 992 })
  return isTablet ? children : null
}
// Tablet
export const TabletAndMobile = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 991 })
  return isTablet ? children : null
}
// Mobile
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
// Default
export const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}
