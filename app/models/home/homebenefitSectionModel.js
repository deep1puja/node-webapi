

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const homeBenefitSectionSchema = new schema({
    heading: { type: String, required: true },
    image: {
        type: Array, required: true
    },
    benefitsYaari: [{
        _id: false,
        icon: {
            type: String,
            required: true
        },
        color: { type: String, required: true },
        title: { type: String, required: true },
        paragraph: { type: String, required: true }
    }],
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("home_benefit_contents", homeBenefitSectionSchema);