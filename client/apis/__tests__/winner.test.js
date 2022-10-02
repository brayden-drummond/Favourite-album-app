import nock from 'nock'
import { addNewResult } from '../winner'

describe('addNewResult', () => {
  const newResult = { movie_id: 9 }
  it('posts result to server', () => {
    const scope = nock('http://localhost')
      .post('/api/v1/winner')
      .reply(200, newResult)
    return addNewResult(newResult).then(() => {
      expect(newResult.movie_id).toBe(9)
      expect(scope.isDone()).toBe(true)
    })
  })
})
