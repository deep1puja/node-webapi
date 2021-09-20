

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const homeOurFamilySectionSchema = new schema({
    heading: { type: String, required: true },
    headingBGColor: { type: String, required: true },
    type: { type: String, required: true },
    flexCards: [{
        _id: false,
        icon: { type: String, required: true },
        name: { type: String, required: true },
        verified: { type: Boolean, required: true },
        rating: { type: Number, required: true },
        paragraph: { type: String, required: true },
    }],
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("home_our_family_contents", homeOurFamilySectionSchema);