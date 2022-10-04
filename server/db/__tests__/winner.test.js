const knex = require('knex')
const config = require('../knexfile')
const testDb = knex(config.test)

const db = require('../winner')

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

describe('addResult', () => {
  const result = { name: 'test', description: 7, created: new Date(Date.now()) }
  it('adds new result and return correct results array', () => {
    return db
      .addResult(result, testDb)
      .then(() => {
        return testDb('results').select()
      })
      .then((res) => {
        expect(res).toHaveLength(7)
        return null
      })
  })
})
