const mongoose = require('mongoose');
const schema = mongoose.Schema;

const paymentSchema = new schema(
    {
        id: {
            type: String,
            trim: true,
        },
        name: {
            type: String,
            trim: true,
        },
        courtName: {
            type: String,
            trim: true,
        },
        date: {
            type: String,
            trim: true,
        },
        location: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: false,
        },
        razorpay_payment_id: {
            type: String,
            trim: true,
        },
        razorpay_order_id: {
            type: String,
            trim: true,
        },
        razorpay_signature: {
            type: String,
            trim: true,
        },
        amount:{
            type: Number,
            trim: true
        }
    },
    { timestamp: true }
);


module.exports = mongoose.model('payments', paymentSchema);
