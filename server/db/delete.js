const connection = require('./connection')

function deleteMovie(id, db = connection) {
  return db('movies').delete().where('id', id)
}

function userCanEdit(movieId, auth0Id, db = connection) {
  return db('movies')
    .where('id', movieId)
    .first()
    .then((movie) => {
      if (movie.uploader_id != auth0Id) {
        throw new Error('Unauthorized')
      }
    })
}
//change seed data to include auth0Id for movies

module.exports = { deleteMovie, userCanEdit }
