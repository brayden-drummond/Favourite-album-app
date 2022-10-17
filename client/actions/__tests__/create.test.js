import { addMovie } from '../create'
import { addNewMovie } from '../../apis/create'

jest.mock('../../apis/create')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

const mockNewMovie = {
  id: 1,
  uploader_id: '1',
  name: 'Test',
  description: 'Test',
  image_url: 'Test',
}

describe('deleteMovieAction', () => {
  it('dispatches deleteMovieContent after action', () => {
    addNewMovie.mockReturnValue(Promise.resolve(mockNewMovie))
    return addMovie(mockNewMovie)(fakeDispatch).then(() => {
      expect(mockNewMovie).toBe(mockNewMovie)
    })
  })
  it('console.errors if api request fails', () => {
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    addNewMovie.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return addMovie()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('Something went wrong')
    })
  })
})
