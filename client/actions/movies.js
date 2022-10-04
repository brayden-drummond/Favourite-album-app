import { getMoviesContent } from '../apis/movies'

export const SET_MOVIES_CONTENT = 'SET_MOVIES_CONTENT'

export function setMoviesContent(moviesContent) {
  return {
    type: SET_MOVIES_CONTENT,
    payload: moviesContent,
  }
}

//pass in token in function
export function fetchMoviesContent() {
  return (dispatch) => {
    return getMoviesContent()
      .then((moviesContent) => {
        dispatch(setMoviesContent(moviesContent))
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}
