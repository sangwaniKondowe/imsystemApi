'use strict'
const express =require("express")
const router = express.Router();
const { login, preAuthorize } = require('../Controllers/AuthController');
//const loginValidation = require('../middleware/loginValidation')

router.post('/login', login)

module.exports = router;