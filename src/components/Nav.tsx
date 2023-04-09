import React from 'react'
import { useTheme } from '../hooks/useTheme'

const Nav: React.FC = () => {
  const theme = useTheme()

  return (
    <nav>
      <ul className="flex items-center space-x-4">
        <li>
          <a
            href="#section1"
            className={`${
              theme.mode === 'light' ? 'text-primary' : 'text-secondary'
            }`}
          >
            Section 1
          </a>
        </li>
        <li>
          <a
            href="#section2"
            className={`${
              theme.mode === 'light' ? 'text-primary' : 'text-secondary'
            }`}
          >
            Section 2
          </a>
        </li>
        <li>
          <a
            href="#section3"
            className={`${
              theme.mode === 'light' ? 'text-primary' : 'text-secondary'
            }`}
          >
            Section 3
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
