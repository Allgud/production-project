import { Suspense } from 'react'

import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { AppRouter } from './providers/router'

import { classNames } from 'shared/lib/classNames'

import { Navbar } from 'widgets/Navbar'

import './styles/index.scss'
import { Sidebar } from 'widgets/Sidebar'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div className={classNames('content')}>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
