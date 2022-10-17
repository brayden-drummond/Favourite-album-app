const express = require('express')

const { getResultsByAuth0Id } = require('../db/results')

const checkJwt = require('../auth0')

const router = express.Router()

router.get('/', checkJwt, (req, res) => {
  const auth0Id = req.user?.sub
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
