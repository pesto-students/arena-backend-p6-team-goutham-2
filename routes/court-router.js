const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { AddCourt, getCourts, AddTimeSlot, getCourt } = require('../controllers/court-controller');

router.post('/addcourt', [
    check('courtName', 'Enter valid court name').isLength({
        min: 5
    }),
    check('location', 'Enter location').isLength({
        min: 5
    }),
    check('address', 'Enter valid address').isLength({
        min: 5
    }),
    check('sports', 'Enter valid sport name').isLength({
        min: 5
    }),
    check('facility', 'Enter valid facility').isLength({
        min: 5
    }),
    check('price', 'Enter price').isNumeric({
        min: 2
    }),
], AddCourt);
router.post('/:court_id',

    [
        check('slotFrom', 'From').isDate({
            min: 5
        }),
        check('slotTo', 'To').isDate({
            min: 5
        }),

    ]
    , AddTimeSlot
);
router.route("/list").get(getCourts);
router.route("/:court_id").get(getCourt);

module.exports = router;
