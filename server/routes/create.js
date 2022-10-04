const express = require('express')

const { addMovie } = require('../db/create')
const { getMovies } = require('../db/home')
//require in dotenv
//require in ./lib
const router = express.Router()

module.exports = router
