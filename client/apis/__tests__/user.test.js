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
})
