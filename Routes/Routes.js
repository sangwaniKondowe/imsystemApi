'use strict'

const express = require('express')
const router = express.Router()


router.post('/send_application', require('../Controllers/appController').sending_application)
router.get('/getall',require('../Controllers/appController').getall)
router.get('/getAllmuslim', require('../Controllers/appController').getsome)
//router.get('/change-status/:uuid', require('../Controllers/appController').changestatus)
router.get('/markComplete/:uuid', require('../Controllers/appController').markComplete)
router.get('/statusComplete', require('../Controllers/appController').statusComplete)
router.get('/statusPending', require('../Controllers/appController').statusPending)
//router.get('/allApplications', require('../Controllers/appController').allApplications)

module.exports = router