import React from 'react'
import { useTheme } from '../hooks/useTheme'

const Hero: React.FC = () => {
  const theme = useTheme()

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h2
        className={`text-4xl font-semibold mb-4 ${
          theme.mode === 'light' ? 'text-primary' : 'text-secondary'
        }`}
      >
        Your Hero Title
      </h2>
      <p
        className={`text-lg text-center mb-8 ${
          theme.mode === 'light' ? 'text-primary' : 'text-secondary'
        }`}
      >
        Your hero description goes here.
      </p>
      <button
        className="bg-accent hover:bg-opacity-8 px-6 py-2 rounded ${
          theme.mode === 'light' ? 'text-primary' : 'text-secondary'
        }"
      >
        Call to Action
      </button>
    </section>
  )
}

export default Hero
