const mongoose = require("mongoose");

const schema = mongoose.Schema();

const userschema = new schema(
    {
        userid:{type:String, required:true},
        name:{type:String, required:true},
        nol:{type:Number},
        email:{type:String, required:true},
        password:{type:String, required:true}
    }
);

module.exports = mongoose.model("dbusers", userschema);