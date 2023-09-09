import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { networkActions } from 'app/state/network'
import * as React from 'react'
import { Provider } from 'react-redux'
import { configureAppStore } from 'store/configureStore'

import { NetworkSelector } from '..'

const renderComponent = (store: any) =>
  render(
    <Provider store={store}>
      <NetworkSelector />
    </Provider>,
  )

describe('<NetworkSelector  />', () => {
  let store: ReturnType<typeof configureAppStore>

  beforeEach(() => {
    store = configureAppStore()
  })

  it('should match snapshot', () => {
    const component = renderComponent(store)
    expect(component.container.firstChild).toMatchSnapshot()
  })

  it('should allow switching network', async () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch')
    const component = renderComponent(store)
    expect(component.getByTestId('active-network')).toContainHTML('toolbar.networks.local')
    await userEvent.click(screen.getByTestId('network-selector'))

    expect(await screen.findByText('toolbar.networks.testnet')).toBeInTheDocument()
    await userEvent.click(screen.getByText('toolbar.networks.testnet'))

    expect(dispatchSpy).toHaveBeenCalledWith({
      payload: 'testnet',
      type: 'network/selectNetwork',
    } as ReturnType<typeof networkActions.selectNetwork>)
  })
})
