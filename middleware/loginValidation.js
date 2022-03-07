'use strict'


const {check, validationResult} = require('express-validator');

const loginValidation = [
  check('email')
    .trim()
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage('Invalid email address!')
    .bail(),

  check('password')
    .not()
    .isEmpty()
    .withMessage('Password cannot be empty')
    .isLength({min: 8})
    .withMessage('Password must have atleast 8 characters'),

(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(422).json({errors: errors.array()});
  next();
  },
];

module.exports = loginValidation;