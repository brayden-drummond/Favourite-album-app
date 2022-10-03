import React from 'react'
import '@testing-library/jest-dom'
import { useSelector, useDispatch } from 'react-redux'
import { screen, render } from '@testing-library/react'
import Results from '../Results'

const resultsContentMockData = [
  {
    movieName: 'Queen',
    createDate: new Date(Date.now()),
    movieDescription: 'Test',
    image: 'test',
  },
  {
    movieName: 'Top Gun',
    createDate: new Date(Date.now()),
    movieDescription: 'Test',
    image: 'test',
  },
]

jest.mock('../../actions/results')
jest.mock('react-redux')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('<Results />', () => {
  it('list all images from redux state', () => {
    const fakeDispatch = jest.fn()
    useSelector.mockReturnValue(resultsContentMockData)
    useDispatch.mockReturnValue(fakeDispatch)
    render(<Results />)

    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(2)
  })
})
