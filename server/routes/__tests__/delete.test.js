const request = require('supertest')
const server = require('../../server')

const { deleteMovie } = require('../../db/delete')

jest.mock('../../db/delete')
jest.spyOn(console, 'error')

afterEach(() => {
  console.error.mockReset()
})

// const checkJwt = require('../../auth0')
// jest.mock('../../auth0')

// checkJwt.mockImplementation((req, res, next) => {
//   req.user = { sub: 'testAuth0Id' }
//   next()
// })

describe('DELETE /api/v1/delete', () => {
  it('passes res.body of 1 to deleteMovie db function', () => {
    deleteMovie.mockReturnValue(Promise.resolve(1))
    return request(server)
      .delete('/api/v1/delete')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toBe(1)
        return null
      })
  })
  it('return status 500 and consoles error when problem', () => {
    deleteMovie.mockImplementation(() => Promise.reject(new Error('fail')))
    console.error.mockImplementation(() => {})
    return request(server)
      .delete('/api/v1/delete')
      .then((res) => {
        expect(res.status).toBe(500)
        return null
      })
  })
})
