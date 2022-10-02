import React from 'react'
import '@testing-library/jest-dom'
import { useDispatch, useSelector } from 'react-redux'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Winner from '../Winner'
import { fetchResult } from '../../actions/winner'

const mockResult = [
  {
    id: 3,
    uploader_id: '4',
    name: 'Mint choc chip icecream',
    description: 'Delicious mint choc chip icecream',
    image_url: 'placeholder',
  },
]

jest.mock('../../actions/winner')
jest.mock('react-redux')
const fakeDispatch = jest.fn()
const fakeFunction = jest.fn()
useDispatch.mockReturnValue(fakeDispatch)

useSelector.mockReturnValue(mockResult)

fetchResult.mockReturnValue(fakeFunction)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('<Winner', () => {
  it('dispatches Result thunk if length is 1', () => {
    expect.assertions(1)
    render(
      <BrowserRouter>
        <Winner />
      </BrowserRouter>
    )
    expect(fakeDispatch).toHaveBeenCalledWith(fakeFunction)
  })
})
