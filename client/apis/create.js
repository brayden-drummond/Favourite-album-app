import request from 'superagent'

const rootUrl = '/api/v1'

export function addNewMovie(newMovie, token) {
  return request
    .post(rootUrl + '/create')
    .set('Authorization', `Bearer ${token}`)
    .send(newMovie)
}
