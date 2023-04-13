const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { validateRequest } = require('../middlewares/helper');
const { ownerSignup, signIn } = require('../controllers/owner-controller');
//admin register
router.post('/signup',
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
  ownerSignup)

//admin login
router.post('/signin', [check('email', 'Enter valid email').isEmail(),
check('password', 'Password should be at least 6 characters.').isLength({
  min: 6,
}),], signIn);

router.post('/addcourt', [
  check('court', 'Enter valid court name').isLength({
    min: 5
  }),
  check('password', 'Password should be at least 6 characters.').isLength()], signIn);
module.exports = router;
