import {
  updateLoggedInUser,
  UPDATE_LOGGED_IN_USER,
  clearLoggedInUser,
  CLEAR_LOGGED_IN_USER,
  fetchUser,
} from '../user'

import { getUser } from '../../apis/user'

const mockUser = {
  auth0_id: 4,
  name: 'Brad',
}

jest.mock('../../apis/user')

getUser.mockReturnValue(Promise.resolve(mockUser))

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

describe('updateLoggedInUser', () => {
  it('sets the logged in user to be the user', () => {
    expect(updateLoggedInUser(mockUser).type).toBe(UPDATE_LOGGED_IN_USER)
    expect(updateLoggedInUser(mockUser).payload).toBe(mockUser)
  })
})
