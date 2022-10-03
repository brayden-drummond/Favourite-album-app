const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getResultsByAuth0Id } = require('../results')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getMovies', () => {
  it('gets Movies out of database', () => {
    const auth0Id = 1
    return getResultsByAuth0Id(auth0Id, testDb).then((results) => {
      expect(results).toHaveLength(3)
      expect(results[0].movieName).toBe('Top Gun Maverick')
    })
  })
})
