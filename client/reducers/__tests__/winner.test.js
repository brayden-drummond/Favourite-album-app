import winner from '../winner'
import { SET_RESULT } from '../../actions/winner'

const mockResult = {
  movie_id: 11,
}

describe('winner reducer', () => {
  it('sets the action payload for the type SET_RESULT', () => {
    const action = {
      type: SET_RESULT,
      payload: mockResult,
    }
    const initialState = {}
    const expectedState = mockResult
    const outputState = winner(initialState, action)

    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toBe(initialState)
  })
  it('returns default initial state if undefined.', () => {
    const expectedState = {}
    const outputState = winner(undefined, {})

    expect(outputState).toEqual(expectedState)
  })
})
