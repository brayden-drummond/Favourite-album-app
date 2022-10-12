const express = require('express')
const checkJwt = require('../auth0')

const router = express.Router()

const db = require('../db/user')

router.post('/', checkJwt, (req, res) => {
  const auth0_id = req.user?.sub
  const { name } = req.body
  const user = { auth0_id, name }
  db.userExists(auth0_id)
    .then((userExists) => {
      if (userExists) {
        return db.getUser(auth0_id)
      } else {
        return db.addUser(user)
      }
    })
    .then((user) => res.json(user))
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
