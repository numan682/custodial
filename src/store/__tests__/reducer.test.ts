import { createPersistedRootReducer } from '../reducers'
import { Reducer } from '@reduxjs/toolkit'

describe('reducer', () => {
  it('should define app reducers', () => {
    const reducer = createPersistedRootReducer() as Reducer<any, any>
    const newState = reducer({ theme: { selected: 'dark' } }, '')
    expect(newState).toHaveProperty('account')
    expect(newState).toHaveProperty('createWallet')
    expect(newState).toHaveProperty('fiatOnramp')
    expect(newState).toHaveProperty('fatalError')
    expect(newState).toHaveProperty('importAccounts')
    expect(newState).toHaveProperty('network')
    expect(newState).toHaveProperty('paraTimes')
    expect(newState).toHaveProperty('staking')
    expect(newState).toHaveProperty('theme')
    expect(newState).toHaveProperty('transaction')
    expect(newState).toHaveProperty('wallet')
    expect(newState).toHaveProperty('persist')
  })
})
