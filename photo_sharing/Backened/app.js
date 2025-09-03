const express = require("express");
const Myerror = require("./model/error");
const mongoose = require("mongoose");              // for database
const cors = require('cors');      // required if u r using frontend & backened on diff. ports


const loc_route = require("./routes/locations_route");
const user_route = require("./routes/users_route");

const app = express();

app.use(express.json());

app.use(cors());      // cors middleware before all requests

// app.use(loc_route);     in the beginning,we did this
app.use("/api/loc", loc_route);         // but now gave the path for locations      a route middleware
app.use("/api/users", user_route);

app.use((req, res, next) =>{                 // without path, yeah, cuz this is for universal paths error
     next(new Myerror("can't find path",404));
});

app.use((error, req, res, next) =>{                 // error middleware
    if(res.headersSent){
        return next(error);                  //default error
    }
    res.status(error.errorcode || 500);
    res.json({result:"fail", msg:error.message }); // NOT msg:error.msg
})
// JavaScript’s built-in Error class uses the .message property to store the error message
// bcz Built-in Error class only gives you these properties-> .message, .name, .stack etc but
// JavaScript’s built-in Error class does not include .errorcode, .code, or any such property by default.


// in beginning, the code was this alone then after database (mongodb/mongoose) connection.....
// app.listen(5000,() =>{
//     console.log("server is created");
// });

mongoose.connect(
    "mongodb+srv://admin:admin mongo@cluster0.otpxmmh.mongodb.net/photo_project?retryWrites=true&w=majority&appName=Cluster0"
).then( () =>{
    // as we want the server to run when only db connected, not when db not connected.
    app.listen(5000,() =>{
    console.log("server is created"); 
})
}
).catch( (error) =>{
    console.log(error);}
);
