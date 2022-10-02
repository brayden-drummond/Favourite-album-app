import { addNewResult } from '../apis/winner'

export const SET_RESULT = 'SET_RESULT'

export function setResult(result) {
  return {
    type: SET_RESULT,
    payload: result,
  }
}

export function fetchResult(newResult, token) {
  return (dispatch) => {
    return addNewResult(newResult, token).then(() => {
      dispatch(setResult(newResult))
      return null
    })
  }
}
