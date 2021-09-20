const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new schema({
    name: { type: String },
    password: {type: String},
    email: {
        type: String,
        // // required: [true, 'Please add an email'],
        // // unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'],
    },
    mobileNumber: { 
        type: Number,
        required: [true, 'Please Mobile Number'],
       // unique: true,
    },
    accountType: {
        type: String,
        enum: ["reseller", "supplier", "admin"],
    },
    isActive: {
        type: Boolean,
        default: true
    },
    gstin: {
        type: Boolean
    },
    roleId: {
        type:ObjectId,
        ref:"roles"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("users", userSchema);