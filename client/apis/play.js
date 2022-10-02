import request from 'superagent'

const rootUrl = '/api/v1'

//GET api/v1/play
export function getPlayContent() {
  return request.get(rootUrl + '/play').then((res) => {
    return res.body
  })
}
