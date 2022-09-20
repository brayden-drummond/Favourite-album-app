import { fetchHomeContent, SET_HOME_CONTENT } from '../home'
import { getHomeContent } from '../../apis/home'

jest.mock('../../apis/home')

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

describe('fetchHomeContent', () => {
  it('dispatches SET_HOME_CONTENT action', () => {
    getHomeContent.mockReturnValue(Promise.resolve(mockHomeContentData))
    return fetchHomeContent()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_HOME_CONTENT,
        payload: mockHomeContentData,
      })
    })
  })
  it('console.errors if api request fails', () => {
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    getHomeContent.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return fetchHomeContent()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('Something went wrong')
    })
  })
})
