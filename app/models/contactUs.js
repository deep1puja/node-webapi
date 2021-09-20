const mongoose = require('mongoose');
const schema = mongoose.Schema;

const contactSchema = new schema({
    name: {type: String},
    email: { type: String },
    mobileNumber: { type: String },
    message: { type: String },
    contactType:{
        type:String,
        enum:["Query", "Complain", "Feedback", "Enquiry"]
    },
    isActive: { type: Boolean, default: true },
    isRegistered : { type: Boolean, default: false },
    
  },{
    timestamps:true
  });
  
module.exports = mongoose.model('contactUs', contactSchema);