const express = require("express");
const Myerror = require("./model/error");

const loc_route = require("./routes/locations_route");

const app = express();


// app.use(loc_route);     in the beginning,we did this
app.use("/api/loc", loc_route);         // but now gave the path for locations

app.use((error, req, res, next) =>{
    if(res.headerSent){
         next(error);
    }
    res.status(error.code || 500);
    res.json({result:"fail", msg:error.msg || "smth bad"});
})

app.listen(5000,() =>{
    console.log("server is created");
});