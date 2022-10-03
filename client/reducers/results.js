import { SET_RESULTS_CONTENT } from '../actions/results'

const initialState = []

const results = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_RESULTS_CONTENT:
      return payload
    default:
      return state
  }
}

export default results
