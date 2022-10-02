import {
  deletePlayContent,
  DELETE_PLAY_CONTENT,
  fetchPlayContent,
  SET_PLAY_CONTENT,
} from '../play'
import { getPlayContent } from '../../apis/play'

jest.mock('../../apis/play')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

const mockMoviesData = [
  {
    id: 1,
    uploader_id: '1',
    name: 'Top Gun Maverick',
    description: 'Tom Cruise Placeholder',
    image_url: '/images/topgun-maverick.jpg',
  },
  {
    id: 2,
    uploader_id: '1',
    name: 'Bohemian Rhapsody',
    description: 'Queen Placeholder',
    image_url: '/images/bohemian-rhapsody.jpg',
  },
]

describe('deletePlayContent', () => {
  it('deletes the result by Id from play content', () => {
    expect(deletePlayContent(1).type).toBe(DELETE_PLAY_CONTENT)
    expect(deletePlayContent(1).payload).toBe(1)
  })
})

describe('fetchHPlayContent', () => {
  it('dispatches SET_PLAY_CONTENT action', () => {
    getPlayContent.mockReturnValue(Promise.resolve(mockMoviesData))
    return fetchPlayContent()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_PLAY_CONTENT,
        payload: mockMoviesData,
      })
    })
  })
  it('console.errors if api request fails', () => {
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    getPlayContent.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return fetchPlayContent()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('Something went wrong')
    })
  })
})
