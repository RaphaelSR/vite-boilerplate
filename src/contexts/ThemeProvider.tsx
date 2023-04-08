import React, { useState } from 'react'
import { ThemeContext, ThemeContextType, ThemeMode } from './ThemeContext'

const themeConfig = {
  light: {
    backgroundPrimary: '#FFFFFF',
    backgroundSecondary: '#F3F4F6',
    textPrimary: '#1F2937',
    textSecondary: '#6B7280',
    textSubtitle: '#4B5563',
    accent: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    success: '#22C55E',
  },
  dark: {
    backgroundPrimary: '#1F2937',
    backgroundSecondary: '#4B5563',
    textPrimary: '#FFFFFF',
    textSecondary: '#D1D5DB',
    textSubtitle: '#D1D5DB',
    accent: '#34D399',
    error: '#F87171',
    warning: '#FBBF24',
    success: '#4ADE80',
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

  return (
    <ThemeContext.Provider value={{ ...themeConfig[mode], mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
