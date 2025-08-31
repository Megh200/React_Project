const mongoose = require("mongoose");

const schema = mongoose.Schema;     // called a class/function from express

const locschema = new schema(              // created a new object
    {
        title : {type:String, required:true},
        desc : {type:String, required:true},
        pic :{type:String, required:true},
        address : {type:String, required:true},
        userid : {type:String }
    }
)

module.exports = mongoose.model("DBlocation", locschema);