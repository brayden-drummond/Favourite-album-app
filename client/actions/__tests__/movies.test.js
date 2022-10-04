import { fetchMoviesContent, SET_MOVIES_CONTENT } from '../movies'
import { getMoviesContent } from '../../apis/movies'

jest.mock('../../apis/movies')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

const mockMoviesContentData = [
  {
    id: 1,
    uploader_id: '1',
    name: 'Top Gun Maverick',
    description: 'Tom Cruise Placeholder',
    image_url: '/images/topgun-maverick.jpg',
  },
  {
    id: 2,
    uploader_id: '2',
    name: 'Top Gun Maverick',
    description: 'Tom Cruise Placeholder',
    image_url: '/images/topgun-maverick.jpg',
  },
]

describe('fetchMovieContent', () => {
  it('dispatches SET_MOVIES_CONTENT action', () => {
    getMoviesContent.mockReturnValue(Promise.resolve(mockMoviesContentData))
    return fetchMoviesContent()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_MOVIES_CONTENT,
        payload: mockMoviesContentData,
      })
    })
  })
  it('console.errors if api request fails', () => {
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    getMoviesContent.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return fetchMoviesContent()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('Something went wrong')
    })
  })
})
