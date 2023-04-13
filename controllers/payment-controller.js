const Payment = require("../models/payment");

exports.PaymentDetails = async (req, res) => {
    try {
        console.log(req,"req");
      const payment = new Payment(req.body);
      // New payment slot object will be created.
      payment.save(payment).then((payment) => {
        res.json({
            id:payment._id,
            name:payment.name,
            email:payment.email,
            amount:payment.amount,
            payment_id:payment.razorpay_payment_id,
            order_id:payment.razorpay_order_id,
            signature:payment.razorpay_signature,
            courtName:payment.courtName,
            location:payment.location,
            date:payment.date,
        });
      });
    } catch (error) {
      console.log(error, "err");
    }
  };

  exports.getPaymentHistory = async (req, res) => {
    try {
      const payments = await Payment.find();
      res.json({ data: payments, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };