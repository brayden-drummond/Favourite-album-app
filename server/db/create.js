const connection = require('./connection')

function addMovie(movie, db = connection) {
  return db('movies').insert(movie)
}

module.exports = { addMovie }
