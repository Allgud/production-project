import { Theme, useTheme } from "app/providers/ThemeProvider"

import { Button } from 'shared/ui/Button'
import { ThemeButton } from "shared/ui/Button/ui/Button"
import { classNames } from "shared/lib/classNames"
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'

import s from './ThemeSwitcher.module.scss'


interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={classNames(s.root, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>)
}