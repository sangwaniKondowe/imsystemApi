'use strict'

const express = require('express')

const router = express.Router()

router.get('/getUsers', require('../Controllers/UserController').getUsers)

module.exports = router