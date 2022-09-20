import nock from 'nock'

import { getHomeContent } from '../home'

const mockHomeContentData = {
  id: 1,
  uploader_id: '1',
  name: 'Top Gun Maverick',
  description: 'Tom Cruise Placeholder',
  image_url: '/images/topgun-maverick.jpg',
}

describe('GET /api/v1/home', () => {
  it('gets home page content', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/home')
      .reply(200, mockHomeContentData)

    const homeContent = await getHomeContent()
    expect(homeContent).toEqual(mockHomeContentData)
    scope.done()
  })
})
