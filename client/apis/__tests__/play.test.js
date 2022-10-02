import nock from 'nock'

import { getPlayContent } from '../play'

const mockMoviesData = [
  {
    id: 1,
    uploader_id: '1',
    name: 'Top Gun Maverick',
    description: 'Tom Cruise Placeholder',
    image_url: '/images/topgun-maverick.jpg',
  },
  {
    id: 2,
    uploader_id: '1',
    name: 'Bohemian Rhapsody',
    description: 'Queen Placeholder',
    image_url: '/images/bohemian-rhapsody.jpg',
  },
]

describe('GET /api/v1/play', () => {
  it('gets home page content', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/play')
      .reply(200, mockMoviesData)

    const homeContent = await getPlayContent()
    expect(homeContent).toEqual(mockMoviesData)
    scope.done()
  })
})
