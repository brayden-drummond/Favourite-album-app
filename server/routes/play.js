const express = require('express')
const db = require('../db/play')
const router = express.Router()
// const checkJwt = require('../auth0')

//pass in checkJwt
router.get('/', (req, res) => {
  db.getMovies()
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
