import request from 'superagent'

const rootUrl = '/api/v1'

export function getPlayContent(token) {
  return request
    .get(rootUrl + '/play')
    .set('Authorization', `Bearer ${token}`)
    .then((res) => {
      return res.body
    })
}
