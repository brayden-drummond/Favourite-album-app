import request from 'superagent'

const rootUrl = '/api/v1'

export function deleteMovieContent(movie) {
  return request.delete(rootUrl + '/delete').send(movie)
}
