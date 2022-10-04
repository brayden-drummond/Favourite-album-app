import nock from 'nock'
import { addNewMovie } from '../create'

describe('addNewMovie', () => {
  const mockMovie = {
    name: 'test',
    description: 'test',
    image_url: 'test',
  }
  it('posts result to server', () => {
    const scope = nock('http://localhost')
      .post('/api/v1/create')
      .reply(200, mockMovie)
    return addNewMovie(mockMovie).then(() => {
      expect(mockMovie.name).toBe('test')
      expect(scope.isDone()).toBe(true)
    })
  })
})
