import { render } from '@testing-library/react'
import * as React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styles/theme/ThemeProvider'
import { configureAppStore } from 'store/configureStore'

import { Toolbar } from '..'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}))

const renderComponent = (store: any) =>
  render(
    <Provider store={store}>
      <ThemeProvider>
        <Toolbar />
      </ThemeProvider>
    </Provider>,
  )

describe('<Toolbar  />', () => {
  let store: ReturnType<typeof configureAppStore>

  beforeEach(() => {
    store = configureAppStore()
  })

  it('should match snapshot', () => {
    const page = renderComponent(store)

    expect(page.container.firstChild).toMatchSnapshot()
  })
})
