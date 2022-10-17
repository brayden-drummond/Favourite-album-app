const express = require('express')
const { getAllMovies } = require('../db/play')
const router = express.Router()

const checkJwt = require('../auth0')

//pass in checkJwt
router.get('/', checkJwt, (req, res) => {
  return getAllMovies()
    .then((movies) => {
      res.json(movies)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
