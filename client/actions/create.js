import { addNewMovie } from '../apis/create'
import { fetchMoviesContent } from '../actions/movies'

export const ADD_MOVIE = 'ADD_MOVIE'

export function addMovie(newMovie, token) {
  return (dispatch) => {
    return addNewMovie(newMovie, token).then(() => {
      dispatch(fetchMoviesContent(token))
      return null
    })
  }
}
