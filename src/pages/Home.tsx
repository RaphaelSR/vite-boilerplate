// Home.tsx
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { useTheme, useStyles } from '../hooks/useTheme'

const Home: React.FC = () => {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <div className={`${classes.bgPrimary} min-h-screen`}>
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default Home
