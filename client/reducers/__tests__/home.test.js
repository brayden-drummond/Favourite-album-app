import { SET_HOME_CONTENT } from '../../actions/home'
import home from '../home'

const mockHomeContentData = {
  id: 1,
  uploader_id: '1',
  name: 'Top Gun Maverick',
  description: 'Tom Cruise Placeholder',
  image_url: '/images/topgun-maverick.jpg',
}

describe('home reducer', () => {
  it('returns action payload for the type SET_HOME_CONTENT', () => {
    const action = {
      type: SET_HOME_CONTENT,
      payload: mockHomeContentData,
    }
    const initialState = {}
    const expectedState = mockHomeContentData
    const outputState = home(initialState, action)
    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toEqual(initialState)
  })
  it('returns the default initial state for an undefined state and no action type.', () => {
    const expectedState = {}
    const outputState = home(undefined, {})

    expect(outputState).toEqual(expectedState)
  })
})
