/*
 * Themes colors and settings declarations
 */
export const themes = {
  standard: {
    name: 'code',
    main: '#191919',
    grey: '#1B1B1B',
    textPrimary: '#FFF',
    textSecondary: '#999999',
    primary: '#7AFDD6',
    secondary: '#FFA400',
    error: '#DB2763',
    possibleColors: [
      {
        name: 'dark',
        value: '#191919',
        valueTick: '#FFFFFF',
      },
      {
        name: 'white',
        value: '#FFFFFF',
        valueTick: '#191919',
      },
    ],
  },
  light: {
    name: 'code-light',
    main: '#F8F8F8',
    grey: '#FFFFFF',
    textPrimary: '#1E1E1E',
    textSecondary: '#999999',
    primary: '#7AFDD6',
    secondary: '#DB2763',
    error: '#DB2763',
    possibleColors: [
      {
        name: 'dark',
        value: '#191919',
        valueTick: '#FFFFFF',
      },
      {
        name: 'white',
        value: '#FFFFFF',
        valueTick: '#191919',
      },
    ],
  },
}

export const themesArray = [
  {
    name: 'code',
    background: '#191919',
  },
]
