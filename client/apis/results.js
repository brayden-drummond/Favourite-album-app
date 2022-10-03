import request from 'superagent'

const rootUrl = '/api/v1'

//Auth0 to go here .set('authorization', `Bearer ${token}`)
//Token to go inside function below

//GET api/v1/results
export function getResultsContent() {
  return request.get(rootUrl + '/results').then((res) => {
    return res.body
  })
}
