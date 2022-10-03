const express = require('express')

const { getResultsByAuth0Id } = require('../db/results')

const router = express.Router()
//do checkJwt

//pass in checkJwt and auth0id
router.get('/', (req, res) => {
  const auth0Id = 'brayden'
  return getResultsByAuth0Id(auth0Id)
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})
module.exports = router
