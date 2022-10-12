import nock from 'nock'

import { getUser, addUser } from '../user'

const mockUser = { auth0_id: 4, name: 'Bill' }

jest.spyOn(console, 'error')
const errorMessage = 'fail'

afterEach(() => {
  console.error.mockReset()
})

describe('GET /api/v1/user', () => {
  it('gets user that is logged in', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/user')
      .reply(200, mockUser)

    const user = await getUser()
    expect(user).toEqual(mockUser)
    scope.done()
  })
  it('returns error message if it fails', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/user')
      .replyWithError(errorMessage)
    return getUser().then(() => {
      expect(console.error).toHaveBeenCalledWith(errorMessage)
      scope.done()
    })
  })
})

describe('addUser', () => {
  it('posts new user back', () => {
    const scope = nock('http://localhost')
      .post('/api/v1/user')
      .reply(200, mockUser)

    return addUser(mockUser).then((result) => {
      expect(result).toStrictEqual(mockUser)
      scope.done()
    })
  })
})
