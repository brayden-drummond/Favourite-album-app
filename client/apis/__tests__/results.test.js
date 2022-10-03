import nock from 'nock'

import { getResultsContent } from '../results'

const mockResults = [
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

describe('GET /api/v1/results', () => {
  it('gets home page content', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/results')
      .reply(200, mockResults)

    const homeContent = await getResultsContent()
    expect(homeContent).toEqual(mockResults)
    scope.done()
  })
})
