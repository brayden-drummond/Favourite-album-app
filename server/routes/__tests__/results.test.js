const request = require('supertest')
const server = require('../../server')

const { getResultsByAuth0Id } = require('../../db/results')
jest.mock('../../db/results')

const checkJwt = require('../../auth0')
jest.mock('../../auth0')

checkJwt.mockImplementation((req, res, next) => {
  req.user = { sub: 'testAuth0Id' }
  next()
})

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
  it('should return status 200 and all movies from db if successful', () => {
    getResultsByAuth0Id.mockReturnValue(Promise.resolve(mockResults))
    return request(server)
      .get('/api/v1/results')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(mockResults).toEqual(res.body)
      })
  })
  it('should return status 500 and an error message when database fails', () => {
    getResultsByAuth0Id.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return request(server)
      .get('/api/v1/results')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('wrong')
      })
  })
})
