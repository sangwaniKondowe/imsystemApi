
const express = require('express')
const router = express.Router()


router.post('/scholarDetails', require('../Controllers/scholarController').scholarDetails)
router.get('/allScholarships', require('../Controllers/scholarController').allScholarships)


module.exports = router;