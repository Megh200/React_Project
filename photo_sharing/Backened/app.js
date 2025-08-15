const express = require("express");
const Myerror = require("./model/error");

const loc_route = require("./routes/locations_route");

const app = express();

app.use(express.json());

// app.use(loc_route);     in the beginning,we did this
app.use("/api/loc", loc_route);         // but now gave the path for locations      a route middleware

app.use((error, req, res, next) =>{                  // error middleware
    if(res.headersSent){
         next(error);                  //dfault error
    }
    res.status(error.errorcode || 500);
    res.json({result:"fail", msg:error.message }); // NOT msg:error.msg
})
// JavaScript’s built-in Error class uses the .message property to store the error message
// bcz Built-in Error class only gives you these properties-> .message, .name, .stack etc but
// JavaScript’s built-in Error class does not include .errorcode, .code, or any such property by default.

app.listen(5000,() =>{
    console.log("server is created");
});