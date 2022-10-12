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
addUser.mockReturnValue(Promise.resolve({ id: 1, name: 'Fred' }))

describe('GET /api/v1/user', () => {
  it('gets the current user', () => {
    return request(server)
      .get('/api/v1/user')
      .then((res) => {
        expect(res.body.name).toBe('Fred')
      })
  })
})
