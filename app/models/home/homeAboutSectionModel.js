

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const homeAboutSectionSchema = new schema({
    title: { type: String, required: true },
    paragraph: { type: String, required: true },
    image: {
        type: String,
        required: true
    },
    detailsYaari: [{
        _id: false,
        imageRound: {
            type: String,
            required: true
        },
        title1: { type: String, required: true },
        title2: { type: String, required: true }
    }],
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("home_About_contents", homeAboutSectionSchema);