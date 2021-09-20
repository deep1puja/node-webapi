

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const homeHowToEarnSectionSchema = new schema({
    heading: { type: String, required: true },
    topImage: {
        type: String, required: true
    },
    flexBoxes: [{
        _id: false,
        align: { type: String, required: true },
        title: { type: String, required: true },
        paragraph: { type: String, required: true }
    }],
    bottomImage: {
        type: String, required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("home_how_to_earn_contents", homeHowToEarnSectionSchema);