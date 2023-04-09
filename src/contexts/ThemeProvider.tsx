import React, { useState } from 'react'
import { ThemeContext, ThemeContextType, ThemeMode } from './ThemeContext'

const themeConfig = {
  light: {
    backgroundPrimary: 'bg-white',
    backgroundSecondary: 'bg-gray-200',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-600',
    textSubtitle: 'text-gray-700',
    accent: 'text-green-500',
    error: 'text-red-500',
    warning: 'text-yellow-500',
    success: 'text-green-500',
  },
  dark: {
    backgroundPrimary: 'bg-gray-900',
    backgroundSecondary: 'bg-gray-700',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    textSubtitle: 'text-gray-300',
    accent: 'text-green-500',
    error: 'text-red-500',
    warning: 'text-yellow-500',
    success: 'text-green-500',
  },
}
interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light')

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const themeValue: ThemeContextType = {
    ...themeConfig[mode],
    mode,
    toggleMode,
  }

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  )
}
