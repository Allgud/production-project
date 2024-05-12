import { FC, ButtonHTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames';

import s from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props

  return (
    <button
      className={classNames(s.root, [className, s[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}