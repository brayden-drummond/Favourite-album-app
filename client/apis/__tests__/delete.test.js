import nock from 'nock'
import { deleteMovieContent } from '../delete'

describe('addNewMovie', () => {
  const mockMovie = {
    id: 1,
    name: 'test',
    description: 'test',
    image_url: 'test',
  }
  it('sends delete movie to server', () => {
    const scope = nock('http://localhost')
      .delete('/api/v1/delete')
      .reply(200, mockMovie)
    return deleteMovieContent(mockMovie).then(() => {
      expect(mockMovie.name).toBe('test')
      expect(scope.isDone()).toBe(true)
    })
  })
})
