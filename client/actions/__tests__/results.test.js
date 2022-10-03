import { fetchResultsContent, SET_RESULTS_CONTENT } from '../results'
import { getResultsContent } from '../../apis/results'

jest.mock('../../apis/results')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

const mockResultsData = [
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

describe('fetchResultsContent', () => {
  it('dispatches SET_HOME_CONTENT action', () => {
    getResultsContent.mockReturnValue(Promise.resolve(mockResultsData))
    return fetchResultsContent()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_RESULTS_CONTENT,
        payload: mockResultsData,
      })
    })
  })
  it('console.errors if api request fails', () => {
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    getResultsContent.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return fetchResultsContent()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('Something went wrong')
    })
  })
})
