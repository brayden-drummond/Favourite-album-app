import { SET_PLAY_CONTENT } from '../actions/play'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_PLAY_CONTENT:
      return payload
    default:
      return state
  }
}

export default reducer
