'use strict'

const express = require('express')
const router = express.Router()


router.post('/send_application', require('../Controllers/appController').sending_application)
router.post('/getall',require('../Controllers/appController').getall)
router.get('/getAllmuslim', require('../Controllers/appController').getsome)


module.exports = router