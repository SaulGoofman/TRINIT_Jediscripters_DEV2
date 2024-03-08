const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true, default: Date.now },
  subscriptionPlan: { type: String, required: true }, // e.g., 'monthly', 'yearly'
  status: { type: String, enum: ['pending', 'successful', 'failed'], default: 'pending' },
  paymentMethod: String
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;