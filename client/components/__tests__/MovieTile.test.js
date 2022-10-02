import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import MovieTile from '../MovieTile'
import { fetchPlayContent, deletePlayContent } from '../../actions/play'

const mockMovies = [
  {
    id: 3,
    uploaderId: '4',
    name: 'Mock name',
    description: 'Mock description',
    imageUrl: 'Mock image',
  },
  {
    id: 4,
    uploaderId: '5',
    name: 'Fake name',
    description: 'Fake description',
    imageUrl: 'Fake image',
  },
]

const fakeDispatch = jest.fn()
jest.mock('../../actions/play')

const fakeFunction = jest.fn()
fetchPlayContent.mockReturnValue(fakeFunction)

const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => {
    return { play: mockMovies }
  }),
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('<MovieTile />', () => {
  it('displays movie images', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <MovieTile />
        </BrowserRouter>
      </Provider>
    )
    const images = screen.getAllByRole('img', { exact: false })
    expect(images).toBeTruthy()
  })
})
