import * as React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureAppStore } from 'store/configureStore'
import { NetworkState } from 'app/state/network/types'

import { AmountFormatter, AmountFormatterProps } from '..'

const renderComponent = (store: any, { amount, smallTicker }: AmountFormatterProps) =>
  render(
    <Provider store={store}>
      <AmountFormatter amount={amount} smallTicker={smallTicker} />
    </Provider>,
  )

describe('<AmountFormatter />', () => {
  let store: ReturnType<typeof configureAppStore>

  beforeEach(() => {
    store = configureAppStore({
      network: {
        ticker: 'ROSE',
      } as NetworkState,
    })
  })

  it('should render component', () => {
    const { container } = renderComponent(store, { amount: 456542341274n.toString(), smallTicker: false })

    expect(container).toMatchSnapshot()
  })

  it('should render component with small ticker', () => {
    const { container } = renderComponent(store, { amount: 456542341274n.toString(), smallTicker: true })

    expect(container).toMatchSnapshot()
  })

  it('should render without losing precision', () => {
    const { container } = renderComponent(store, { amount: 1563114365108133939632n.toString() })
    expect(container.textContent).toEqual('1,563,114,365,108.133939632 ROSE')
  })
})
