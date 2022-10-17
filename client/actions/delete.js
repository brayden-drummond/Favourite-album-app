import { deleteMovieContent } from '../apis/delete'
import { fetchMoviesContent } from '../actions/movies'

export function deleteMovieAction(movie, token) {
  return (dispatch) => {
    return deleteMovieContent(movie, token)
      .then(() => {
        dispatch(fetchMoviesContent(token))
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}
