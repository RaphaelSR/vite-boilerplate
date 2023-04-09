import { useContext } from 'react'
import { ThemeContext, ThemeContextType } from '../contexts/ThemeContext'

export const useTheme = (): ThemeContextType => {
  const theme = useContext(ThemeContext)
  return theme
}

export const useStyles = (theme: ThemeContextType) => {
  return {
    textAccent: theme.accent,
    bgPrimary: theme.backgroundPrimary,
    bgSecondary: theme.backgroundSecondary,
    textPrimary: theme.textPrimary,
    textSecondary: theme.textSecondary,
    textSubtitle: theme.textSubtitle,
  }
}
