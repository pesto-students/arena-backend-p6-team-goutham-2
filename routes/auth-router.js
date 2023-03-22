const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { signup, signIn, adminSignup } = require('../controllers/auth-controller');
const { validateRequest } = require('../middlewares/helper');

router.post(
  '/signup',
  [
    check('name', 'Name should be at least 3 characters').isLength({
      min: 3,
    }),
    check('email', 'Enter valid email').isEmail(),
    check('password', 'Password should be at least 6 characters.').isLength({
      min: 6,
    }),
  ],
  validateRequest,
  signup
);

router.post('/signin', [check('email', 'Enter valid email').isEmail()], signIn);

//admin signup
router.post('/admin/signup',
  [
    check('name', 'Name should be at least 3 characters').isLength({
      min: 3,
    }),
    check('email', 'Enter valid email').isEmail(),
    check('password', 'Password should be at least 6 characters.').isLength({
      min: 6,
    }),
  ],
  validateRequest,
  adminSignup)
module.exports = router;
