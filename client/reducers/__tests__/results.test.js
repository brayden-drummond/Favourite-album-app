import { SET_RESULTS_CONTENT } from '../../actions/results'
import results from '../results'

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

describe('results reducer', () => {
  it('returns action payload for the type SET_RESULTS_CONTENT', () => {
    const action = {
      type: SET_RESULTS_CONTENT,
      payload: mockResultsData,
    }
    const initialState = []
    const expectedState = mockResultsData
    const outputState = results(initialState, action)
    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toEqual(initialState)
  })
  it('returns the default initial state for an undefined state and no action type.', () => {
    const expectedState = []
    const outputState = results(undefined, [])

    expect(outputState).toEqual(expectedState)
  })
})
