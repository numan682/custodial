import { Grommet } from 'grommet/es6/components/Grommet'
import { grommet, ThemeType } from 'grommet/es6/themes'
import { deepMerge } from 'grommet/es6/utils'
import * as React from 'react'
import { createTheme as dataTableCreateTheme } from 'react-data-table-component'
import { useSelector } from 'react-redux'

import { selectTheme } from './slice/selectors'
import { dataTableTheme } from './dataTableTheme'

/**
 * React-data-table by default sets its own background and text colors
 * we make sure that they do not override grommet's
 */
dataTableCreateTheme('blank', dataTableTheme)

const grommetCustomTheme: ThemeType = {
  button: {
    primary: {
      background: {
        dark: 'red',
        light: 'green',
      },
    },
    border: {
      radius: '4px',
    },
    badge: {
      size: { medium: '20px' },
      container: {
        extend: `
          margin-top: -10px;
          margin-right: -10px;
        `,
      },
    },
  },
  tip: {
    content: {
      // Default background is background-contrast, but we made that one transparent
      background: 'background-front',
      border: 'all',
      elevation: 'none',
    },
  },
  select: {
    options: {
      container: {
        // Remove padding to match ParaTimeOption when displayed as value and as option
        pad: 'none',
      },
    },
  },
  global: {
    colors: {
      oasisIndigo: '#310081',
      oasisMinty: '#4CD4A9',
      oasisLightGray: '#ececec',
      brand: {
        dark: '#0092f6bb',
        light: '#0092f6',
      },
      oasisBlue2: '#4db3f9',
      oasisBlue3: '#26a2f8',
      'status-ok': '#2ad5ab',
      'status-warning': {
        dark: '#f3d45e',
        light: '#e1a809',
      },
      'status-error': '#d24c00',

      'alert-box-info': {
        dark: '#0092f6',
        light: '#d4ebff',
      },
      'alert-box-info-background': {
        dark: '#d4ebff',
        light: '#0092f6',
      },
      'alert-box-ok-weak': {
        dark: '#2ad5ab',
        light: '#2ad5ab',
      },
      'alert-box-ok-weak-background': {
        dark: '#17464b',
        light: '#c2f5ea',
      },
      'alert-box-ok': {
        dark: '#2ad5ab',
        light: '#c2f5ea',
      },
      'alert-box-ok-background': {
        dark: '#c2f5ea',
        light: '#2ad5ab',
      },
      'alert-box-warning': {
        dark: '#f3d45e',
        light: '#f0e8cb',
      },
      'alert-box-warning-background': {
        dark: '#f0e8cb',
        light: '#f3d45e',
      },
      'alert-box-error': {
        dark: '#f26111',
        light: '#ffe7d9',
      },
      'alert-box-error-background': {
        dark: '#ffe7d9',
        light: '#f26111',
      },

      'background-oasis-blue': {
        dark: '#0f477b',
        light: '#0092f6',
      },
      lightText: '#a3a3a3',
      neutral: {
        dark: '#310081FF',
        light: '#310081FF',
      },
      'neutral-2': {
        dark: '#0092f6bb',
        light: '#0092f6bb',
      },
      'background-back': {
        dark: '#1A1A2e',
        light: '#EFEFEF',
      },
      'background-front': {
        dark: '#16213e',
        light: '#FFFFFF',
      },
      'background-front-lighter': {
        dark: '#222938',
        light: '#FFFFFF',
      },
      'background-front-border': {
        dark: '#111111',
        light: '#EDEDED',
      },
      'background-contrast': {
        dark: '#FFFFFF08',
        light: '#11111108',
      },
      'background-contrast-2': {
        dark: '#FFFFFF33',
        light: '#11111133',
      },
      'background-custom': {
        dark: '#0E5265',
        light: '#00C8FF',
      },
      'component-toolbar': {
        dark: '#0f346088',
        light: '#26a2f844',
      },
      'component-sidebar': {
        dark: '#16213e',
        light: '#fafafa',
      },
      'successful-label': {
        dark: '#6FFFB0',
        light: '#3fa900',
      },

      text: {
        dark: '#F8F8F8',
        light: '#16213E',
      },
    },
    font: {
      family: 'Rubik',
    },
  },
  notification: {
    toast: {
      time: 2000,
      container: {
        border: 'all',
        elevation: 'none',
      },
    },
  },
}
export const ThemeProvider = (props: { children: React.ReactChild }) => {
  const theme = deepMerge(grommet, grommetCustomTheme)
  const mode = useSelector(selectTheme)

  return (
    <Grommet theme={theme} themeMode={mode} style={{ minHeight: '100vh' }}>
      {React.Children.only(props.children)}
    </Grommet>
  )
}
