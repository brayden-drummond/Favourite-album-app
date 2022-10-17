const express = require('express')

const { deleteMovie, userCanEdit } = require('../db/delete')

const checkJwt = require('../auth0')

const router = express.Router()

//delete api/v1/delete
//pass in the db userCanEdit function
router.delete('/', checkJwt, (req, res) => {
  const id = req.body.id
  const auth0Id = req.user?.sub
  console.log(id)

  return userCanEdit(id, auth0Id)
    .then(() => deleteMovie(id))
    .then((movies) => {
      res.json(movies)
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})
module.exports = router
