import { AlertBox } from 'app/components/AlertBox'
import { ModalHeader } from 'app/components/Header'
import { selectChainContext } from 'app/state/network/selectors'
import { transactionActions } from 'app/state/transaction'
import { selectTransaction } from 'app/state/transaction/selectors'
import { TransactionStep } from 'app/state/transaction/types'
import { selectAddress, selectBalance } from 'app/state/wallet/selectors'
import { Box } from 'grommet/es6/components/Box'
import { Button } from 'grommet/es6/components/Button'
import { Spinner } from 'grommet/es6/components/Spinner'
import { Text } from 'grommet/es6/components/Text'
import { Checkmark } from 'grommet-icons/es6/icons/Checkmark'
import { Close } from 'grommet-icons/es6/icons/Close'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { ResponsiveLayer } from '../ResponsiveLayer'
import { TransactionPreview } from '../TransactionPreview'

/**
 *
 * TransactionModal
 *
 * Takes a transaction payload as input - then through the modal:
 *
 * - Review the transaction (Display the raw body)
 * - Submit
 * - If ledger, display a loader and a message telling to sign on ledger
 * - Display transaction sent
 *
 */
export function TransactionModal() {
  const { t } = useTranslation()
  const { preview, step } = useSelector(selectTransaction)
  const walletAddress = useSelector(selectAddress)
  const balance = useSelector(selectBalance)
  const chainContext = useSelector(selectChainContext)

  if (!balance) {
    throw new Error('No balance found for wallet')
  }

  const dispatch = useDispatch()

  const abortTransaction = () => {
    dispatch(transactionActions.abortTransaction())
  }
  const confirmTransaction = () => {
    dispatch(transactionActions.confirmTransaction())
  }

  return (
    <ResponsiveLayer modal position="center" background="background-front">
      <Box pad="medium" gap="medium" width="800px">
        <Box>
          <ModalHeader>{t('transaction.step.preview', 'Preview transaction')}</ModalHeader>
          <Box margin={{ vertical: 'small' }}>
            <AlertBox status="warning">
              {t(
                'transaction.preview.warning',
                'Once you confirm this transaction you will not be able to cancel it. Carefully review it, and confirm once you are sure that you want to send it.',
              )}
            </AlertBox>
          </Box>
          {preview && (
            <TransactionPreview
              chainContext={chainContext}
              preview={preview}
              walletAddress={walletAddress!}
            />
          )}
          {step === TransactionStep.Preview && (
            <Box direction="row" gap="small" alignSelf="end" pad={{ top: 'large' }}>
              <Button
                secondary
                label={t('transaction.abort', 'Abort')}
                icon={<Close size="18px" />}
                onClick={abortTransaction}
              />
              <Button
                primary
                label={t('transaction.confirm', 'Confirm')}
                onClick={confirmTransaction}
                icon={<Checkmark size="18px" />}
                alignSelf="end"
              />
            </Box>
          )}
        </Box>
        {step === TransactionStep.Building && (
          <Box direction="row" align="center" gap="medium">
            <Spinner size="medium" />
            <Text size="large">{t('transaction.step.building', 'Building transaction')}</Text>
          </Box>
        )}
        {step === TransactionStep.Signing && (
          <Box direction="row" align="center" gap="medium">
            <Spinner size="medium" />
            <Text size="large">{t('transaction.step.signing', 'Signing transaction')}</Text>
          </Box>
        )}
        {step === TransactionStep.Submitting && (
          <Box direction="row" align="center" gap="medium">
            <Spinner size="medium" />
            <Text size="large">{t('transaction.step.submitting', 'Submitting transaction')}</Text>
          </Box>
        )}
      </Box>
    </ResponsiveLayer>
  )
}
