import { SET_MOVIES } from '../actions/play'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_MOVIES:
      return payload
    default:
      return state
  }
}

export default reducer
