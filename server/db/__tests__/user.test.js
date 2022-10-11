const knex = require('knex')
const config = require('../knexfile')
const testCon = knex(config.test)

const { userExists, getUser, addUser } = require('../user')

beforeAll(() => {
  return testCon.migrate.latest()
})

beforeEach(() => {
  return testCon.seed.run()
})

afterAll(() => {
  return testCon.destroy()
})

describe('userExists', () => {
  it('checks if the user exists in database', () => {
    return userExists('1', testCon).then((res) => {
      expect(res).toBe(true)
    })
  })
})

describe('getUser', () => {
  it('gets a user based on auth_0 id', () => {
    return getUser(1, testCon).then((user) => {
      expect(user.name).toBe('Food')
    })
  })
})

describe('addUser', () => {
  it('adds a user to the database', () => {
    const newUser = {
      auth0_id: 4,
      name: 'Billie',
    }
    return addUser(newUser, testCon).then((user) => {
      expect(user.name).toBe('Billie')
    })
  })
})
