const connection = require('./connection')

function userExists(auth0_id, db = connection) {
  return db('users')
    .where('auth0_id', auth0_id)
    .then((usersFound) => usersFound.length > 0)
}

function getUser(id, db = connection) {
  return db('users').select().where('auth0_id', id).first()
}

function addUser(user, db = connection) {
  return db('users')
    .insert(user)
    .then(() => getUser(user.auth0_id, db))
}

module.exports = { userExists, getUser, addUser }
