const express = require('express');
const router = express.Router();
const { PaymentDetails, getPaymentHistory } = require('../controllers/payment-controller');

//storing payment details
router.post('/paymentdata',
  [],
  PaymentDetails)
//get payment history

router.route("/paymentlist").get(getPaymentHistory);


module.exports = router;
