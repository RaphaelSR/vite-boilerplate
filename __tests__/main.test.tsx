import React from 'react'
import { render, waitFor } from '@testing-library/react'
import App from '../src/App'

describe('Main', () => {
  it('renders without crashing', async () => {
    const { getByRole } = render(<App />)
    await waitFor(() => {
      expect(getByRole('heading')).toBeInTheDocument()
    })
  })
})
