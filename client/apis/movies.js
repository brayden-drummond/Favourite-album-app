import request from 'superagent'

const rootUrl = '/api/v1'

export function getMoviesContent() {
  return request.get(rootUrl + '/movies').then((res) => {
    return res.body
  })
}
