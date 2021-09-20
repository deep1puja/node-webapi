

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const privacyAndPolicySchema = new schema({
    title: { type: String },
    paragraph:{type:String},
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("privacy_policies", privacyAndPolicySchema);