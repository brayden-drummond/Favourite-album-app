const express = require('express')
const checkJwt = require('../auth0')

const router = express.Router()

const db = require('../db/user')

router.get('/', checkJwt, (req, res) => {
  const auth0_id = req.user?.sub
  if (!auth0_id) {
    res.send(null)
  } else {
    db.getUser(auth0_id)
      .then((user) => {
        res.json(user ? user : null)
      })
      .catch((err) => {
        console.error(err.message)
        res.status(500).json({ message: 'Something went wrong' })
      })
  }
})

router.post('/', checkJwt, (req, res) => {
  const auth0_id = req.user?.sub
  const { name } = req.body
  const user = { auth0_id, name }
  db.userExists(name)
    .then((usernameTaken) => {
      if (usernameTaken) throw new Error('Username Taken')
    })
    .then(() => db.addUser(user))
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.error(err.message)
      if (err.message === 'Username Taken') {
        res.status(403).send('Username Taken')
      }
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
