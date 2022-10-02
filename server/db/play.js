const connection = require('./connection')

function getAllMovies(db = connection) {
  return db('movies').select(
    'id',
    'uploader_id as uploaderId',
    'name',
    'description',
    'image_url as imageUrl'
  )
}

module.exports = { getAllMovies }
