const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // نام کاربری
  email: { type: String, required: true, unique: true }, // ایمیل
  password: { type: String, required: true }, // رمز عبور
  address: {
    province: { type: String }, // استان
    city: { type: String }, // شهر
    street: { type: String }, // خیابان
    details: { type: String }, // آدرس دقیق
  },
  orderHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }], // تاریخچه سفارشات
  isAdmin: { type: Boolean, default: false }, // وضعیت مدیر
  createdAt: { type: Date, default: Date.now }, // تاریخ ایجاد
});

module.exports = mongoose.model('User', userSchema);
