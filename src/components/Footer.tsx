import React from 'react'
import { useTheme, useStyles } from '../hooks/useTheme'

const Footer: React.FC = () => {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <footer
      className={`flex flex-col items-center justify-center py-8 mt-8 ${
        theme.mode === 'light' ? classes.bgSecondary : classes.bgPrimary
      }`}
    >
      <div className="flex items-center space-x-4 mb-4">
        <a href="https://twitter.com" className={classes.textAccent}>
          Twitter
        </a>
        <a href="https://facebook.com" className={classes.textAccent}>
          Facebook
        </a>
        <a href="https://linkedin.com" className={classes.textAccent}>
          LinkedIn
        </a>
      </div>
      <p>Contact: contact@example.com</p>
    </footer>
  )
}

export default Footer
