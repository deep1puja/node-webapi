const mongoose = require("mongoose");
const schema = mongoose.Schema;

const roleSchema = new schema({
    name: {
        type: String,
        unique: true
    },
    permissions: {
        blog: {
            view: {
                type: Boolean
            },
            update: {
                type: Boolean
            },
            delete: {
                type: Boolean
            },
            create: {
                type: Boolean
            },
            all: {
                type: Boolean
            }
        },
        faq: {
            view: {
                type: Boolean
            },
            update: {
                type: Boolean
            },
            delete: {
                type: Boolean
            },
            create: {
                type: Boolean
            },
            all: {
                type: Boolean
            }
        },
        role: {
            view: {
                type: Boolean
            },
            update: {
                type: Boolean
            },
            delete: {
                type: Boolean
            },
            create: {
                type: Boolean
            },
            all: {
                type: Boolean
            }
        },
        user: {
            view: {
                type: Boolean
            },
            update: {
                type: Boolean
            },
            delete: {
                type: Boolean
            },
            create: {
                type: Boolean
            },
            all: {
                type: Boolean
            }
        }
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    isActive: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('roles', roleSchema);