import React from 'react'
import { useTheme } from './hooks/useTheme'

const App: React.FC = () => {
  const theme = useTheme()

  const handleClick = () => {
    theme.toggleMode()
  }

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: theme.backgroundPrimary,
        color: theme.textPrimary,
      }}
    >
      <h1 className="text-4xl font-semibold">Welcome to Vite + React!</h1>
      <button
        className="bg-accent hover:bg-opacity-80 text-white px-4 py-2 rounded"
        onClick={handleClick}
      >
        Toggle Mode
      </button>
    </div>
  )
}

export default App
