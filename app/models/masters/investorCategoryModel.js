const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const investorCategorySchema = new schema({
    name: {
        type: String
    },
    order:{
        type: Number
    },
    isInvestorRelations: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("investorCategories", investorCategorySchema);