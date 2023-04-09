import React from 'react'
import Home from './pages/Home'
import { ThemeProvider } from './contexts/ThemeProvider'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App
