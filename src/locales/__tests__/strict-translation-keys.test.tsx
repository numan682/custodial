import { Trans, useTranslation } from 'react-i18next'

describe('type-only test', () => {
  describe('translation keys are strictly typed using CustomTypeOptions', () => {
    it('correct usage', () => {
      function Component() {
        const { t } = useTranslation()
        return (
          <div>
            {t('menu.home')}
            {t('menu.home', 'Default')}
            {t('menu.does_not_exist_but_has_a_default', 'Default')}
            <Trans i18nKey="menu.home" t={t} />
            <Trans i18nKey="menu.home" t={t} defaults="Default" />
          </div>
        )
      }
      expect(<Component />).toBeDefined()
    })

    it('detect mistakes', () => {
      function Component() {
        const { t } = useTranslation()
        return (
          <>
            <div>
              {/* @ts-expect-error Expect typescript to detect incorrect key */}
              {t('menu.does_not_exist')}
            </div>
            <div>
              {/* @ts-expect-error Expect typescript to detect incorrect key */}
              <Trans i18nKey="menu.does_not_exist" t={t} />
            </div>
            <div>
              {/* @ts-expect-error Expect typescript to detect incorrect key */}
              <Trans i18nKey="menu.does_not_exist" t={t} defaults="Default" />
            </div>
          </>
        )
      }
      expect(<Component />).toBeDefined()
    })
  })
})
