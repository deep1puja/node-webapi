

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const termsAndConditionsSchema = new schema({
    title: { type: String },
    paragraph:{type:String},
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("terms&conditions", termsAndConditionsSchema);