import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
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
    expect(images[0]).toHaveAttribute('src', mockMovies[0].imageUrl)
  })
  it('dispatches fetchPlayContent thunk on useEffect()', () => {
    const mockMoviesReturn = () => 'mockReturn'
    fetchPlayContent.mockReturnValue(mockMoviesReturn)
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <MovieTile />
        </BrowserRouter>
      </Provider>
    )
    expect(fakeStore.dispatch).toHaveBeenCalledWith(mockMoviesReturn)
  })
  it('deletes opposing image onClick when using button #1', () => {
    const deletePlayContentMockReturn = jest.fn()
    deletePlayContent.mockReturnValue(deletePlayContentMockReturn)
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <MovieTile />
        </BrowserRouter>
      </Provider>
    )
    const button = screen.getAllByRole('button')
    fireEvent.click(button[0])
    // expect(fakeDispatch).toHaveBeenCalledWith(deletePlayContentMockReturn)
    expect(deletePlayContent.mock.calls[0][0]).toBe(mockMovies[1].id)
  })
  it('deletes opposing image onClick when using button #2', () => {
    const deletePlayContentMockReturn = jest.fn()
    deletePlayContent.mockReturnValue(deletePlayContentMockReturn)
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <MovieTile />
        </BrowserRouter>
      </Provider>
    )
    const button = screen.getAllByRole('button')
    fireEvent.click(button[1])
    // expect(fakeDispatch).toHaveBeenCalledWith(deletePlayContentMockReturn)
    expect(deletePlayContent.mock.calls[0][0]).toBe(mockMovies[0].id)
  })
})
