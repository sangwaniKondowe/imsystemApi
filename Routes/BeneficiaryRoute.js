const express = require('express')
const router = express.Router()


router.get('/getBeneficiary/:uuid', require('../Controllers/benController').getBeneficiary)
router.get('/showBeneficiary', require('../Controllers/benController').showBeneficiary)


module.exports = router;