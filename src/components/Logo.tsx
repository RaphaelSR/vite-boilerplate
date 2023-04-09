import React from 'react'
import { useTheme } from '../hooks/useTheme'

const Logo: React.FC = () => {
  const theme = useTheme()

  return (
    <div
      className={`text-2xl font-semibold underline ${
        theme.mode === 'light' ? 'text-primary' : 'text-secondary'
      }`}
    >
      YourLogo
    </div>
  )
}

export default Logo
