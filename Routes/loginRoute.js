'use strict'
const express =require("express")
const router = express.Router();
const { login } = require('../Controllers/AuthController');
const { authPage } = require("../middleware/loginValidation");
//const loginValidation = require('../middleware/loginValidation')

router.post('/login', login)

module.exports = router;