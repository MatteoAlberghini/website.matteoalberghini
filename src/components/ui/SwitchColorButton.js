/*
 * [THEME CHANGE BUTTON]
 */
// SECTION Imports
// React
import * as React from 'react'
// Prop types
import PropTypes from 'prop-types'
// Constants
import { themes } from '../../constants/themes'
// Chakra UI
import { Button } from '@chakra-ui/button'
import { Img } from '@chakra-ui/image'
import ApplicationContext from '../../contexts/ApplicationContext'

// SECTION Constant export
export const SwitchColorButton = ({ propsTheme = themes.standard, swapClicked = () => {} }) => {
  // ANCHOR State
  const [currentColor, setCurrentColor] = React.useState('light-theme')
  const [theme, setTheme] = React.useState(propsTheme)
  const context = React.useContext(ApplicationContext)

  // ANCHOR Functions
  const switchColorTheme = () => {
    if (currentColor === 'light-theme') {
      context.overrideSetTheme(themes.standard)
      setTheme(themes.standard)
      setCurrentColor('dark-theme')
    } else {
      context.overrideSetTheme(themes.light)
      setTheme(themes.light)
      setCurrentColor('light-theme')
    }
  }

  // ANCHOR Return statement
  return (
    <Button id="switch-theme" className={currentColor} onClick={switchColorTheme}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 472.39 472.39">
        <g className="toggle-sun">
          <path d="M403.21,167V69.18H305.38L236.2,0,167,69.18H69.18V167L0,236.2l69.18,69.18v97.83H167l69.18,69.18,69.18-69.18h97.83V305.38l69.18-69.18Zm-167,198.17a129,129,0,1,1,129-129A129,129,0,0,1,236.2,365.19Z" />
        </g>
        <g className="toggle-circle">
          <circle className="cls-1" cx="236.2" cy="236.2" r="103.78" />
        </g>
      </svg>
    </Button>
  )
}

// SECTION Prop types
SwitchColorButton.propTypes = {
  propsTheme: PropTypes.object,
  swapClicked: PropTypes.func,
}
