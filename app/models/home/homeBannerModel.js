

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const homeBannerSchema = new schema({
    title1: { type: String, required: true },
    title2: { type: String, required: true },
    carasoulImage: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("home_banner_contents", homeBannerSchema);