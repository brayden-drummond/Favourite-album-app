import { SET_RESULT } from '../actions/winner'

const initialState = {}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_RESULT:
      return payload
    default:
      return state
  }
}

export default reducer
