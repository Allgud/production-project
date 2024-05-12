import { ReactNode } from "react"
import { Link, LinkProps } from "react-router-dom"

import { classNames } from "shared/lib/classNames"

import s from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string,
  theme?: AppLinkTheme
}

export const AppLink = ({ children, className, to, theme = AppLinkTheme.PRIMARY, ...props }: AppLinkProps) => {
  return (
    <Link to={to} className={classNames(s.appLink, [className, s[theme]])} {...props}>{children}</Link>
  )
}