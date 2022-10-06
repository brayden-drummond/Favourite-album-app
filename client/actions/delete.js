import { deleteMovieContent } from '../apis/delete'
import { fetchMoviesContent } from '../actions/movies'

export function deleteMovieAction(movie) {
  return (dispatch) => {
    return deleteMovieContent(movie)
      .then(() => {
        dispatch(fetchMoviesContent())
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}
