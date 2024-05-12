import { useTranslation } from "react-i18next"

import { Button } from "shared/ui/Button"
import { ThemeButton } from "shared/ui/Button/ui/Button"

import s from './LangSwitcher.module.scss'

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation()

  const handleToggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return <Button theme={ThemeButton.CLEAR} onClick={handleToggleLanguage}>{t('Language')}</Button>
}