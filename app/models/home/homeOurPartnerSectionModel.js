

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const homeOurPartnerSectionSchema = new schema({
    heading: { type: String, required: true },
    headingBGColor: { type: String, required: true },
    align: { type: String, required: true },
    flexCards: [{
        _id: false,
        title: { type: String, required: true },
        partners: [{
            _id: false,
            title: { type: String, required: true },
            image: { type: String, required: true },
        }]
    }],
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("home_our_partner_contents", homeOurPartnerSectionSchema);