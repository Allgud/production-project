import { useState } from "react"

import { classNames } from "shared/lib/classNames"

import { ThemeSwitcher } from "widgets/ThemeSwitcher"

import s from './Sidebar.module.scss'
import { LangSwitcher } from "widgets/LangSwitcher"

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const handleCollapsed = () => setCollapsed(prev => !prev)

  return (
    <div className={classNames(s.root, [className], { [s.collapsed]: collapsed })}>
      <button onClick={handleCollapsed}>colapse</button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}