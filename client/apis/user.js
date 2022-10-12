import request from 'superagent'

const rootUrl = 'api/v1'

export function getUser(token) {
  return request
    .get(`${rootUrl}/user`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
    .catch((err) => console.error(err.message))
}

export function addUser(user, token) {
  return request
    .post(`${rootUrl}/user`)
    .set('Authorization', `Bearer ${token}`)
    .send(user)
    .then((res) => res.body)
    .catch((err) => console.error(err.message))
}
