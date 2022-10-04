import { addNewMovie } from '../apis/create'

export const SET_RESULT = 'SET_RESULT'

export function addMovie(newMovie) {
  return {
    type: SET_RESULT,
    payload: newMovie,
  }
}

export function fetchAddNewMovie(newMovie, token) {
  return (dispatch) => {
    return addNewMovie(newMovie, token).then(() => {
      dispatch(addMovie(newMovie))
      return null
    })
  }
}
