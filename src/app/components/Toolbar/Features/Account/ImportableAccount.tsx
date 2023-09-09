import { Account } from './Account'
import { ImportAccountsListAccount } from '../../../../state/importaccounts/types'

export const ImportableAccount = ({
  account,
  onClick,
}: {
  account: ImportAccountsListAccount
  onClick: (address: string) => void
}) => {
  return (
    <Account
      address={account.address}
      balance={account.balance}
      onClick={onClick}
      isActive={account.selected}
      displayCheckbox={true}
      displayAccountNumber={true}
      displayDerivation={{
        type: account.type,
        pathDisplay: account.pathDisplay,
      }}
      path={account.path}
    />
  )
}
