const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // کاربر
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true }, // تعداد
    },
  ],
  totalAmount: { type: Number, required: true }, // مبلغ کل
  shippingAddress: {
    province: { type: String },
    city: { type: String },
    street: { type: String },
    details: { type: String },
  },
  status: { type: String, default: 'Processing' }, // وضعیت سفارش
  paymentStatus: { type: String, default: 'Pending' }, // وضعیت پرداخت
  createdAt: { type: Date, default: Date.now }, // تاریخ ایجاد
});

module.exports = mongoose.model('Order', orderSchema);
