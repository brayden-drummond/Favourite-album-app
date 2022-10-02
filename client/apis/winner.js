import request from 'superagent'

const rootUrl = '/api/v1'

//pass in 'token
export function addNewResult(newResult) {
  return (
    request
      .post(rootUrl + '/winner')
      // .set('Authorization', `Bearer ${token}`)
      .send({ food_id: newResult.id })
  )
}
