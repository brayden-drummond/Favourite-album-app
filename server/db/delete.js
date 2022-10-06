const connection = require('./connection')

function deleteMovie(id, db = connection) {
  return db('movies').delete().where('id', id)
}

module.exports = { deleteMovie }
