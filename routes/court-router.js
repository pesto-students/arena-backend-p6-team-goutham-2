const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { AddCourt, getCourts } = require('../controllers/court-controller');

router.post('/addcourt', [
    check('courtName', 'Enter valid court name').isLength({
        min: 5
    }),
    check('location', 'Enter valid court name').isLength({
        min: 5
    }),
    check('sports', 'Enter valid sport name').isLength({
        min: 5
    }),
    check('facility', 'Enter valid facility').isLength({
        min: 5
    }),
    check('time', 'Enter valid time').isDate(),
    check('price', 'Enter valid court name').isNumeric({
        min: 2
    }),
], AddCourt);

router.route("/courts").get(getCourts);
module.exports = router;
