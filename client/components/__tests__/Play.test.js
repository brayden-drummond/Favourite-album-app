import React from 'react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Play from '../Play'
import MovieTile from '../MovieTile'

jest.mock('../MovieTile')

const mockHeading = {
  heading: 'Please select your favourite movie!',
}

MovieTile.mockImplementation(() => {
  return <div data-testId='testId'>Test Component</div>
})

const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => {
    return { play: mockHeading }
  }),
}

describe('<Play />', () => {
  it('renders play heading', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Play />
        </BrowserRouter>
      </Provider>
    )
    const heading = screen.getByRole('heading')
    expect(heading).toHaveTextContent('Please select your favourite movie!')
  })
  it('renders FoodTile component', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Play />
        </BrowserRouter>
      </Provider>
    )
    const heading = screen.getByTestId('testId')
    expect(heading).toHaveTextContent('Test Component')
  })
})
