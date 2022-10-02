const request = require('supertest')
const server = require('../../server')

const { addResult } = require('../../db/winner')

jest.mock('../../db/winner')
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

describe('POST /api/v1/winner', () => {
  it('post result to results array', () => {
    addResult.mockReturnValue(Promise.resolve([7]))
    return request(server)
      .post('/api/v1/winner')
      .send({ movies_id: 4 })
      .then((res) => {
        expect(res.status).toBe(204)
        expect(addResult.mock.calls[0][0].movies_id).toBe(4)
        return null
      })
  })
  it('return status 500 and consoles error when problem', () => {
    addResult.mockImplementation(() => Promise.reject(new Error('fail')))
    console.error.mockImplementation(() => {})
    return request(server)
      .post('/api/v1/winner')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('fail')
        return null
      })
  })
})
