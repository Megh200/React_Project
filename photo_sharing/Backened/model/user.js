const mongoose = require("mongoose");

const schema = mongoose.Schema;     // class object

const userschema = new schema(
    {
        name:{type:String, required:true},
        email:{type:String, required:true},
        pic:{type:String, required:true, default:"image"},
        password:{type:String, required:true, minlength:6},
        locs_id:[ {type:mongoose.Types.ObjectId, required:true, ref:"location"} ]
    }
);

module.exports = mongoose.model("dbusers", userschema);