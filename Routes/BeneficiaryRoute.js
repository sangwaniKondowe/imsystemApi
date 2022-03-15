const express = require('express')
const router = express.Router()


router.post('/getBeneficiary/:beneficiaryUUID', require('../Controllers/benController').getBeneficiary)
router.get('/showBeneficiary', require('../Controllers/benController').showBeneficiary)
router.post('/overrideSelection/:applicationUuid', require('../Controllers/benController').overrideSelection)


module.exports = router;