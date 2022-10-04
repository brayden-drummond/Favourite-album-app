import request from 'superagent'

const rootUrl = '/api/v1'

//pass in 'token
export function addNewMovie(newMovie) {
  return (
    request
      .post(rootUrl + '/create')
      // .set('Authorization', `Bearer ${token}`)
      .send(newMovie)
  )
}
