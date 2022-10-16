import request from 'superagent'

const rootUrl = '/api/v1'

export function deleteMovieContent(movie, token) {
  return request
    .delete(rootUrl + '/delete')
    .set('Authorization', `Bearer ${token}`)
    .send(movie)
}
