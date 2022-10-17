const express = require('express')

const db = require('../db/winner')

const checkJwt = require('../auth0')

const router = express.Router()

router.post('/', checkJwt, (req, res) => {
  const movies_id = req.body.movies_id
  const auth0_id = req.user?.sub
  const created = new Date(Date.now())
  db.addResult({ movies_id, auth0_id, created })
    .then(() => {
      res.sendStatus(204)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
