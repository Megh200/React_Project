const express = require("express");
const loc_route = require("./routes/locations_route");

const app = express();


app.use(loc_route);

app.listen(5000,() =>{
    console.log("server is created");
});