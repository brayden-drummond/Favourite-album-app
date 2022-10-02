import { SET_PLAY_CONTENT, DELETE_PLAY_CONTENT } from '../actions/play'
import { SET_RESULT } from '../actions/winner'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_PLAY_CONTENT:
      return payload
    case SET_RESULT:
      return []
    case DELETE_PLAY_CONTENT:
      return [...state]
        .filter((movie) => movie.id !== payload)
        .sort(() => 0.5 - Math.random())
    default:
      return state
  }
}

export default reducer
