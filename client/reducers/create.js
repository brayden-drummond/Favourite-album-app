import { ADD_MOVIE } from '../actions/create'

const initialState = {}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_MOVIE:
      return payload
    default:
      return state
  }
}

export default reducer
