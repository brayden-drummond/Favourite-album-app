const connection = require('./connection')

function addResult(result, db = connection) {
  return db('results').insert(result)
}

module.exports = { addResult }
