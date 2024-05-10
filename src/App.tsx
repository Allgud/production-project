import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import { MainAsyncPage } from './pages/MainPage/MainPage.async'
import { AboutAsyncPage } from './pages/AboutPage/AboutPage.async'

import { useTheme } from './theme/useTheme'

import './styles/index.scss'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`app ${theme} `}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutAsyncPage />} />
          <Route path='/' element={<MainAsyncPage />} />
        </Routes>
      </Suspense>

    </div>

  )
}
