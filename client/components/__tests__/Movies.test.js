import React from 'react'
import '@testing-library/jest-dom'
import { useSelector, useDispatch } from 'react-redux'
import { screen, render } from '@testing-library/react'
import Movies from '../Movies'

const moviesContentMockData = [
  {
    name: 'Queen',
    createDate: new Date(Date.now()),
    description: 'Test',
    imageUrl: 'test',
  },
  {
    name: 'Test',
    createDate: new Date(Date.now()),
    description: 'Test',
    imageUrl: 'test',
  },
]

jest.mock('../../actions/movies')
jest.mock('react-redux')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('<Movies />', () => {
  it('list all images from redux state', () => {
    const fakeDispatch = jest.fn()
    useSelector.mockReturnValue(moviesContentMockData)
    useDispatch.mockReturnValue(fakeDispatch)
    render(<Movies />)

    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(2)
  })
})
