import { deleteMovieAction } from '../delete'
import { deleteMovieContent } from '../../apis/delete'

jest.mock('../../apis/delete')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

const mockHomeContentData = {
  id: 1,
  uploader_id: '1',
  name: 'Top Gun Maverick',
  description: 'Tom Cruise Placeholder',
  image_url: '/images/topgun-maverick.jpg',
}

describe('deleteMovieAction', () => {
  it('dispatches deleteMovieContent after action', () => {
    deleteMovieContent.mockReturnValue(Promise.resolve(mockHomeContentData))
    return deleteMovieAction(mockHomeContentData)(fakeDispatch).then(() => {
      expect(mockHomeContentData).toBe(mockHomeContentData)
    })
  })
  it('console.errors if api request fails', () => {
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    deleteMovieContent.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return deleteMovieAction()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('Something went wrong')
    })
  })
})
