// 
const express = require('express');

const app = express();

// since error "cannot GET /" ,so gave http req & res
app.get("/", (req,res) =>(
    res.send("server now found by routing / "))
);

// now if we want to create one more path
app.get("/about", (req,res) =>(
    res.send(" the about page")
));

// now to create a server we use..
app.listen(5000, () =>{
    console.log("server's created");
})