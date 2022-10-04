import { SET_MOVIES_CONTENT } from '../actions/movies'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_MOVIES_CONTENT:
      return payload
    default:
      return state
  }
}

export default reducer
