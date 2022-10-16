import request from 'superagent'

const rootUrl = '/api/v1'

export function addNewResult(newResult, token) {
  return request
    .post(rootUrl + '/winner')
    .set('Authorization', `Bearer ${token}`)
    .send({ movies_id: newResult.id })
}
