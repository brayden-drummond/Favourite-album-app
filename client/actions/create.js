import { addNewMovie } from '../apis/create'

export const ADD_MOVIE = 'ADD_MOVIE'

export function addMovie(newMovie) {
  return {
    type: ADD_MOVIE,
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
