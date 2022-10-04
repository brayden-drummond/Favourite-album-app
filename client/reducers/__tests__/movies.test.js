import { SET_MOVIES_CONTENT } from '../../actions/home'
import home from '../home'

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

describe('movies reducer', () => {
  it('returns action payload for the type SET_MOVIES_CONTENT', () => {
    const action = {
      type: SET_MOVIES_CONTENT,
      payload: mockMoviesContentData,
    }
    const initialState = []
    const expectedState = mockMoviesContentData
    const outputState = home(initialState, action)
    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toEqual(initialState)
  })
  it('returns the default initial state for an undefined state and no action type.', () => {
    const expectedState = []
    const outputState = home(undefined, [])

    expect(outputState).toEqual(expectedState)
  })
})
