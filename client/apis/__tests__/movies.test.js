import nock from 'nock'

import { getMoviesContent } from '../movies'

const mockHomeContentData = {
  id: 1,
  uploader_id: '1',
  name: 'Top Gun Maverick',
  description: 'Tom Cruise Placeholder',
  image_url: '/images/topgun-maverick.jpg',
}

describe('GET /api/v1/movies', () => {
  it('gets movies page content', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/movies')
      .reply(200, mockHomeContentData)

    const homeContent = await getMoviesContent()
    expect(homeContent).toEqual(mockHomeContentData)
    scope.done()
  })
})
