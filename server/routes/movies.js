const express = require('express')

const { getMovies } = require('../db/home')
const router = express.Router()

//GET api/v1/movies
router.get('/', (req, res) => {
  return getMovies()
    .then((movies) => {
      res.json(movies)
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})
module.exports = router
