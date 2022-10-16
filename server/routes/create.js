const express = require('express')
require('dotenv').config()

const { addMovie } = require('../db/create')
// const { getMovies } = require('../db/home')
// const { getSignedPutUrl } = require('./lib')

const checkJwt = require('../auth0')

const router = express.Router()

//Fix AWS setup issue
//pass in checkJwt after auth0
// router.get('/', (req, res) => {
//   return getSignedPutUrl()
//     .then((url) => {
//       res.json(url)
//     })
//     .catch((err) => {
//       res.status(500).send(err.message)
//     })
// })

//POST api/v1/create
router.post('/', checkJwt, (req, res) => {
  const uploader_id = '1'
  const { name, description, image_url } = req.body
  addMovie({ uploader_id, name, description, image_url })
    .then(() => {
      res.sendStatus(204)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
