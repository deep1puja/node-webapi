const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const investorSubCategorySchema = new schema({
    name: { type: String },
    categoryId: {
        type:ObjectId,
       ref:"investorCategories"
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});
var autoPopulateLead = function (next) {
    this.populate('categoryId', ' -__v -isActive -createdAt -updatedAt');
    next();
};

investorSubCategorySchema.
pre('findOne', autoPopulateLead).
pre('findById', autoPopulateLead).
pre('find', autoPopulateLead);
module.exports = mongoose.model("investorSubCategories", investorSubCategorySchema);