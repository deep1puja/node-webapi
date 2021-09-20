const mongoose = require('mongoose');
const schema = mongoose.Schema;

const faqSchema = new schema({
  faqQuestion: {type: String},
  faqAnswer: { type: String },
  isActive: { type: Boolean, default: true },
  faqType:{
    type: String,
    enum: ["re-seller", "supplier"],
  }
},{
  timestamps:true,
});

module.exports = mongoose.model('FAQs', faqSchema);