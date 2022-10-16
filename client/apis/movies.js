import request from 'superagent'

const rootUrl = '/api/v1'

export function getMoviesContent(token) {
  return request
    .get(rootUrl + '/movies')
    .set('Authorization', `Bearer ${token}`)
    .then((res) => {
      return res.body
    })
}
