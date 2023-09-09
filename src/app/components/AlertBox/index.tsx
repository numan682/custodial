import { Box } from 'grommet/es6/components/Box'
import { Text } from 'grommet/es6/components/Text'
import { normalizeColor } from 'grommet/es6/utils'
import * as React from 'react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

export type AlertBoxStatus = 'error' | 'warning' | 'ok' | 'ok-weak' | 'info'

interface Props {
  status: AlertBoxStatus
  center?: boolean
  /** Example `icon={<Info size="20px" color="currentColor" />}` */
  icon?: React.ReactNode
  children: React.ReactNode
}

const mapStatus = {
  error: {
    color: 'alert-box-error',
    background: 'alert-box-error-background',
  },
  warning: {
    color: 'alert-box-warning',
    background: 'alert-box-warning-background',
  },
  ok: {
    color: 'alert-box-ok',
    background: 'alert-box-ok-background',
  },
  'ok-weak': {
    color: 'alert-box-ok-weak',
    background: 'alert-box-ok-weak-background',
  },
  info: {
    color: 'alert-box-info',
    background: 'alert-box-info-background',
  },
}

export function AlertBox(props: Props) {
  const theme = useContext(ThemeContext)
  // If we don't normalize upfront then grommet auto-detects darkness of background, and decides to use ['alert-box-warning'].dark with ['alert-box-warning-background'].dark
  const color = normalizeColor(mapStatus[props.status].color, theme)

  return (
    <Box
      border={{
        color: color,
        side: 'left',
        size: '3px',
      }}
      background={{ color: mapStatus[props.status].background }}
      pad={{ horizontal: 'small' }}
    >
      <Box direction="row" gap="small" align="center" justify={props.center ? 'center' : 'start'}>
        {props.icon && <Text color={color}>{props.icon}</Text>}
        <Text weight="bold" size="12px" style={{ marginTop: 10, marginBottom: 10 }}>
          {props.children}
        </Text>
      </Box>
    </Box>
  )
}
