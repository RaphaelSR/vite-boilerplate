import React from 'react'

export type ThemeMode = 'light' | 'dark'

export interface Theme {
  backgroundPrimary: string
  backgroundSecondary: string
  textPrimary: string
  textSecondary: string
  textSubtitle: string
  accent: string
  error: string
  warning: string
  success: string
}

export interface ThemeContextType extends Theme {
  mode: ThemeMode
  toggleMode: () => void
}

export const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType,
)
