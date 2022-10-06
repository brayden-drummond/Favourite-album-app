const knex = require('knex')
const config = require('../knexfile')
const testDb = knex(config.test)

const db = require('../delete')

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

describe('deleteMovie', () => {
  it('deletes a movie from the movies array', () => {
    return db
      .deleteMovie(1, testDb)
      .then(() => {
        return testDb('movies').select()
      })
      .then((res) => {
        expect(res).toHaveLength(3)
        return null
      })
  })
})
