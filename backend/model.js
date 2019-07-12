
//Dependencies
const mongoose = require('mongoose')


const schema = mongoose.Schema({
    shortId : {
        type : String,
        required : true,
        unique : true
    },
    longUrl : {
        type : String,
        required : true
    },
    shortUrl : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("ShortURL",schema)

