const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true }, // نام قطعه
  description: { type: String }, // توضیحات
  price: { type: Number, required: true }, // قیمت
  stock: { type: Number, default: 0 }, // موجودی انبار
  images: [{ type: String }], // لینک تصاویر
  category: { type: String, required: true }, // دسته‌بندی
  model: { type: String, required: true }, // مدل ماشین
  createdAt: { type: Date, default: Date.now }, // تاریخ ایجاد
});

module.exports = mongoose.model('Product', productSchema);
