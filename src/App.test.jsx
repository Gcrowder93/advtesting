import { render, screen } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
  render(<App />)

  const heading = screen.getByAltText(/Alchemy Logo/i)
  const name = screen.getByText(/meet/i)
  const actname = await screen.findByText(/vonta/i)

  expect(heading).toBeInTheDocument()
  expect(name).toBeInTheDocument()
  expect(actname).toBeInTheDocument()
})
