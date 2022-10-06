import request from 'superagent'

const rootUrl = '/api/v1'

export function deleteCharacterContent(character) {
  return request.delete(rootUrl + '/delete').send(character)
}
