'use strict'

const express = require('express')
const router = express.Router()


router.post('/send_application', require('../Controllers/appController').sending_application)


module.exports = router