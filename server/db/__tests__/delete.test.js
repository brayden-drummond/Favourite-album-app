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

describe('userCanEdit', () => {
  it('allows user to edit based on auth0id', () => {
    const auth0Id = '1'
    return db
      .userCanEdit(1, auth0Id, testDb)
      .then(() => {
        return testDb('movies').select()
      })
      .then((res) => {
        expect(res).toHaveLength(4)
        expect(res[0].uploader_id).toEqual(auth0Id)
        return null
      })
  })
})
