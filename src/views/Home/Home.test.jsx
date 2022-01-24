import { render, screen } from '@testing-library/react'
import App from '../../App'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

//  motto
//  list of user likes

test('Should render the user profile', async () => {
  render(<App />)

  const name = await screen.findByText(/vonta/i)
  const heading = await screen.findByAltText(/header/i)
  const heading2 = await screen.findByAltText(/avatar/i)
  const name2 = await screen.findByText(/interests/i)
  const color = await screen.findByText(/color/i)
  const motto = await screen.findByLabelText(/motto/i)

  // const interest = await screen.findByText(/react/i)
  // this passed, but i realized it was looking for just the word 'react' and i didnt like that

  const int = await screen.findAllByRole('listitem')
  expect(int).toHaveLength(6)

  expect(name).toBeInTheDocument()
  expect(heading).toBeInTheDocument()
  expect(heading2).toBeInTheDocument()
  expect(name2).toBeInTheDocument()
  expect(color).toBeInTheDocument()
  expect(motto).toBeInTheDocument()

  // expect(interest).toBeInTheDocument()
  // this was the call for the commented out test above
})
