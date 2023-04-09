import React from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'

const ThemeToggle: React.FC = () => {
  const theme = useTheme()

  const handleClick = () => {
    theme.toggleMode()
  }

  return (
    <button
      className="bg-accent hover:bg-opacity-80 text-black p-2 rounded"
      onClick={handleClick}
      aria-label="Toggle Theme"
    >
      {theme.mode === 'light' ? (
        <FiMoon size={20} color="darkblue" />
      ) : (
        <FiSun size={20} color="orange" />
      )}
    </button>
  )
}

export default ThemeToggle
