const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const filesSchema = new schema({
    file_name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    mime_type: {
        type: String,
        required: true
    },
    size: {
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

module.exports = mongoose.model("files", filesSchema);