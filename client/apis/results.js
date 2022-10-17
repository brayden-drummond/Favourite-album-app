import request from 'superagent'

const rootUrl = '/api/v1'

export function getResultsContent(token) {
  return request
    .get(rootUrl + '/results')
    .set('Authorization', `Bearer ${token}`)
    .then((res) => {
      return res.body
    })
}
