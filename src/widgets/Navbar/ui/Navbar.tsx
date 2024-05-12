import { classNames } from "shared/lib/classNames"

import { AppLink } from "shared/ui/AppLink"

import s from './Navbar.module.scss'
import { AppLinkTheme } from "shared/ui/AppLink/ui/AppLink"

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(s.navbar, [className])}>
      <div className={s.links}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>О нас</AppLink>
      </div>
    </div>
  )
}