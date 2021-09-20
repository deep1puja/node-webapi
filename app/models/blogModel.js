const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogSchema = new schema({
    author:{
        type:String
    },
    title:{
        type:String,
        unique: true,
    },
    urlTitle:{
        type:String,
        unique: true,
    },
    imageUrl:{
        type:String
    },
    tag:{
        type:String
    },
    content: {
        type:String
    },
    description: {
        type:String
    },
    isActive: {
        type: Boolean,
        default:true
    }
},{
    timestamps:true
});

module.exports = mongoose.model("blog",blogSchema)