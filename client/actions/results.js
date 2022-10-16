import { getResultsContent } from '../apis/results'

export const SET_RESULTS_CONTENT = 'SET_RESULTS_CONTENT'

export function setResultsContent(resultsContent) {
  return {
    type: SET_RESULTS_CONTENT,
    payload: resultsContent,
  }
}

//pass in token in function
export function fetchResultsContent(token) {
  return (dispatch) => {
    return getResultsContent(token)
      .then((resultsContent) => {
        dispatch(setResultsContent(resultsContent))
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}
