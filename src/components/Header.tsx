import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import ThemeToggle from './ThemeToggle'
import { useTheme, useStyles } from '../hooks/useTheme'

const Header: React.FC = () => {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <header
      className={`flex flex-wrap items-center justify-between p-4 ${classes.bgSecondary}`}
    >
      <Logo />
      <Nav />
      <ThemeToggle />
    </header>
  )
}

export default Header
