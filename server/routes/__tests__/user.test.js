const request = require('supertest')
const server = require('../../server')
const checkJwt = require('../../auth0')

const { userExists, getUser, addUser } = require('../../db/user')
jest.mock('../../db/user')
jest.mock('../../auth0')

jest.spyOn(console, 'error')

afterEach(() => {
  console.error.mockReset()
  jest.clearAllMocks()
})

checkJwt.mockImplementation((req, res, next) => {
  req.user = { sub: '1' }
  next()
})

getUser.mockReturnValue(Promise.resolve({ id: 1, name: 'Fred' }))
userExists.mockReturnValue(Promise.resolve(false))
addUser.mockReturnValue(Promise.resolve([4]))

describe('GET /api/v1/user', () => {
  it('gets the current user', () => {
    return request(server)
      .get('/api/v1/user')
      .then((res) => {
        expect(res.body.name).toBe('Fred')
      })
  })
  it('returns status 500 when get user fails', () => {
    getUser.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return request(server)
      .get('/api/v1/user')
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})

describe('POST /api/v1/user', () => {
  it('creates a new User and sends back the id of the user', () => {
    return request(server)
      .post('/api/v1/user')
      .send({ name: 'Fred' })
      .then((res) => {
        expect(res.status).toBe(201)
      })
  })
})
