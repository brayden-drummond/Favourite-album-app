const express = require('express')

const { deleteMovie, userCanEdit } = require('../db/delete')

const checkJwt = require('../auth0')

const router = express.Router()

//delete api/v1/delete
//pass in the db userCanEdit function
router.delete('/', checkJwt, (req, res) => {
  const id = req.body.id
  const auth0Id = req.user?.sub

  return userCanEdit(id, auth0Id)
    .then(() => deleteMovie(id))
    .then((movies) => {
      res.json(movies)
    })
    .catch((err) => {
      console.error(err)
      if (err.message === 'Unauthorized') {
        res
          .status(403)
          .send('Unauthorized. Only the user who added the movie may delete it')
      } else {
        res.status(500).send(err.message)
      }
    })
})
module.exports = router
