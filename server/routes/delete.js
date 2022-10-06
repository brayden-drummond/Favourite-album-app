const express = require('express')

const { deleteMovie } = require('../db/delete')
const router = express.Router()

//delete api/v1/delete
router.delete('/', (req, res) => {
  const id = req.body.id
  return deleteMovie(id)
    .then((movies) => {
      res.json(movies)
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})
module.exports = router
