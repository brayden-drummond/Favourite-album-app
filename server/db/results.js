const connection = require('./connection')

function getResultsByAuth0Id(auth0Id, db = connection) {
  return db('results')
    .join('movies', 'movies_id', 'id')
    .where('results.auth0_id', auth0Id)
    .select(
      'movies.name as movieName',
      'results.created as createdDate',
      'movies.description as movieDescription'
      // 'movies.image_url, as movieImage'
    )
}

module.exports = { getResultsByAuth0Id }
