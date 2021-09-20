const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const investorSchema = new schema({
    name: {
        type: String,
        required: true
    },
    subCategoryId: {
        type: ObjectId,
        ref: "investorSubCategories"
    },
    subDocYes: {
        type: Boolean,
    },
    filePath: {
        type: String,
    },
    subDocs: [{
        _id: false,
        name: {
            type: String
        },
        filePath: {
            type: String
        }
    }],
    year: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});
var autoPopulateLead = function (next) {
    this.populate('subCategoryId', '-__v -isActive -createdAt -updatedAt');
    next();
};

investorSchema.
    pre('findOne', autoPopulateLead).
    pre('findById', autoPopulateLead).
    pre('find', autoPopulateLead);

module.exports = mongoose.model("investors", investorSchema);