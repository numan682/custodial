import 'dotenv/config'
import 'react-app-polyfill/stable'

// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom'
import 'jest-styled-components'

// Init i18n for the tests needing it
import 'locales/i18n'

process.env.REACT_APP_LOCALNET = '1'

global.TextEncoder = require('util').TextEncoder
global.TextDecoder = require('util').TextDecoder
window.TextDecoder = global.TextDecoder
window.TextEncoder = global.TextEncoder

global.window.scrollTo = () => {}
