const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getMovies } = require('../home')

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
  it('gets the movies from the database', () => {
    return getMovies(testDb).then((movies) => {
      expect(movies[0].name).toBe('Top Gun Maverick')
      expect(movies).toHaveLength(4)
    })
  })
})
