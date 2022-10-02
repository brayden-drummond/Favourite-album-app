const request = require('supertest')
const server = require('../../server')

const { getAllMovies } = require('../../db/play')
jest.mock('../../db/play')

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
  it('should return status 200 and all movies from db if successful', () => {
    getAllMovies.mockReturnValue(Promise.resolve(mockMoviesData))
    return request(server)
      .get('/api/v1/play')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(mockMoviesData).toEqual(res.body)
      })
  })
  it('should return status 500 and an error message when database fails', () => {
    getAllMovies.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return request(server)
      .get('/api/v1/play')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('wrong')
      })
  })
})
