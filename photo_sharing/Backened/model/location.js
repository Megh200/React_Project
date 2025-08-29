const mongoose = require("mongoose");

const schema = mongoose.Schema;

const locschema = new schema(
    {
        title : {type:String, required:true},
        desc : {type:String, required:true},
        pic :{type:String, required:true},
        address : {type:String, required:true},
        userid : {type:String }
    }
)

module.exports = mongoose.model("location", locschema);