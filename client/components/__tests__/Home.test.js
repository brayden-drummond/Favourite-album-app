import React from 'react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import { fetchHomeContent } from '../../actions/home'

const mockHomeData = {
  name: 'mockName',
  imageUrl: 'mockImageUrl',
  description: 'mockDescription',
}

jest.mock('../../actions/home')

beforeEach(() => {
  jest.clearAllMocks()
})

const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => {
    return { home: mockHomeData }
  }),
}

describe('<Home />', () => {
  it('displays image, foodname and description from redux state.', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    )
    const movieName = screen.getByText(mockHomeData.name, { exact: false })
    const movieImage = screen.getByRole('img')
    expect(movieName).toBeTruthy()
    expect(movieImage.src).toMatch(mockHomeData.imageUrl)
  })
  it('has a link to the play button.', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/play')
  })
  it('dispatches the fetchHomeContent() thunk on useEffect()', () => {
    const mockReturn = () => 'mockReturnFunctionsReturnValue'
    fetchHomeContent.mockReturnValue(mockReturn)
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    )
    expect(fakeStore.dispatch).toHaveBeenCalledWith(mockReturn)
  })
})
