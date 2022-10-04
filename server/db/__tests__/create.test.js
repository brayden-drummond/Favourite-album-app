import { addMovie } from '../create'
const knex = require('knex')
const config = require('../knexfile')
const testDb = knex(config.test)

const db = require('../create')

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

describe('addMovie', () => {
  const movie = { name: 'test', description: 'test' }
  it('adds new movie to the movies db', () => {
    return db
      .addMovie(movie, testDb)
      .then(() => {
        return testDb('movies').select()
      })
      .then((res) => {
        expect(res).toHaveLength(5)
        return null
      })
  })
})
