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
jest.spyOn(console, 'error')

describe('updateLoggedInUser', () => {
  it('sets the logged in user to be the user', () => {
    expect(updateLoggedInUser(mockUser).type).toBe(UPDATE_LOGGED_IN_USER)
    expect(updateLoggedInUser(mockUser).payload).toBe(mockUser)
  })
})

describe('clearLoggedInUser', () => {
  it('clears the logged in user', () => {
    expect(clearLoggedInUser().type).toBe(CLEAR_LOGGED_IN_USER)
  })
})

describe('fetchUser', () => {
  it('fetches user after api call', () => {
    return fetchUser()(fakeDispatch).then(() => {
      const fakeDispatchAction = fakeDispatch.mock.calls[0][0]
      expect(fakeDispatchAction.type).toBe(UPDATE_LOGGED_IN_USER)
      expect(fakeDispatchAction.payload).toBe(mockUser)
    })
  })
  it('Should console.error if request fails', () => {
    console.error.mockImplementation(() => {})
    getUser.mockImplementation(() => Promise.reject(new Error('error')))
    return fetchUser()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('error')
    })
  })
})
