import create from '../create'
import { ADD_MOVIE } from '../../actions/create'

const mockMovie = {
  name: 'test',
  description: 'test',
  image_url: 'test',
}

describe('create reducer', () => {
  it('sets the action payload for the type ADD_MOVIE', () => {
    const action = {
      type: ADD_MOVIE,
      payload: mockMovie,
    }
    const initialState = {}
    const expectedState = mockMovie
    const outputState = create(initialState, action)

    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toBe(initialState)
  })
  it('returns default initial state if undefined.', () => {
    const expectedState = {}
    const outputState = create(undefined, {})

    expect(outputState).toEqual(expectedState)
  })
})
