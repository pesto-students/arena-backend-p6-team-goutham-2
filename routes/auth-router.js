const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { signup, signIn } = require('../controllers/auth-controller');
const { validateRequest } = require('../middlewares/helper');
const { adminSignup } = require('../controllers/admin-controller');
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



//user information

// router.post('/userInfo',
//   [
//     check('address', 'Address should be at least 3 characters').isLength({
//       min: 10
//     }),
//     check('city', 'City should be at least 3 characters').isLength({
//       min: 3
//     }),
//     check('phone', 'Enter valid phone number').isLength({ min: 10, max: 10 }),
//     check('email', 'Enter valid email').isEmail(),
//     check('pincode', 'Pincode should be at least 5 characters.').isLength({
//       min: 5,
//     }),
//   ],
//   validateRequest,
//   userInfo)
module.exports = router;
