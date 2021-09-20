

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const homeWhySectionSchema = new schema({
    heading: { type: String, required: true },
    image: {
        type: String,
        required: true
    },
    gridBoxes: [{
        _id: false,
        title: { type: String, required: true },
    }],
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("home_why_contents", homeWhySectionSchema);