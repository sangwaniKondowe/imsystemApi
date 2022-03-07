'use strict'
const express =require("express")
const router = express.Router();
const { login } = require('../Controllers/AuthController')
const loginValidation = require('../middleware/loginValidation')

router.post('/login', loginValidation, login)

module.exports = router;