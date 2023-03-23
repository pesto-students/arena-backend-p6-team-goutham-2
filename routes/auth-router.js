const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { signup, signIn, adminSignup, userInfo } = require('../controllers/auth-controller');
const { validateRequest } = require('../middlewares/helper');
//user register
router.post(
  '/signup',
  [
    check('name', 'Name should be at least 3 characters').isLength({
      min: 3,
    }),
    check('email', 'Enter valid email').isEmail(),
    check('phone', 'Enter valid phone number').isLength({ min: 10 }),
    check('password', 'Password should be at least 6 characters.').isLength({
      min: 6,
    }),
  ],
  validateRequest,
  signup
);

//user login

router.post('/signin', [check('email', 'Enter valid email').isEmail(),
check('password', 'Password should be at least 6 characters.').isLength({
  min: 6,
}),], signIn);

//admin signup
router.post('/admin/signup',
  [
    check('name', 'Name should be at least 3 characters').isLength({
      min: 3,
    }),
    check('phone', 'Enter valid phone number').isLength({ min: 10, max: 10 }),
    check('email', 'Enter valid email').isEmail(),
    check('password', 'Password should be at least 6 characters.').isLength({
      min: 6,
    }),
  ],
  validateRequest,
  adminSignup)

//user information

router.post('/userInfo',
  [
    check('address', 'Address should be at least 3 characters').isLength({
      min: 10
    }),
    check('city', 'City should be at least 3 characters').isLength({
      min: 3
    }),
    check('phone', 'Enter valid phone number').isLength({ min: 10, max: 10 }),
    check('email', 'Enter valid email').isEmail(),
    check('pincode', 'Pincode should be at least 5 characters.').isLength({
      min: 5,
    }),
  ],
  validateRequest,
  userInfo)
module.exports = router;
