/**
 *
 * AccountDetails
 *
 */
import { Box } from 'grommet/es6/components/Box'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { SendTransaction } from '../SendTransaction'
import { TransactionHistory } from '../TransactionHistory'
import { selectIsAddressInWallet } from 'app/state/selectIsAddressInWallet'

interface Props {}

export const AccountDetails = memo((props: Props) => {
  const isAddressInWallet = useSelector(selectIsAddressInWallet)

  return (
    <Box direction="row-responsive" gap="small">
      {isAddressInWallet && (
        <Box flex basis="1/4" width={{ min: '300px' }}>
          <SendTransaction isAddressInWallet={isAddressInWallet} />
        </Box>
      )}
      <Box flex basis="3/4">
        <TransactionHistory />
      </Box>
    </Box>
  )
})
