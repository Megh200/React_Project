const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userschema = new schema(
    {
        name:{type:String, required:true},
        nol:{type:Number},
        email:{type:String, required:true},
        password:{type:String, required:true}
    }
);

module.exports = mongoose.model("dbusers", userschema);