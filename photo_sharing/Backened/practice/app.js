// 
const express = require('express');

const app = express();

app.use(urlencoded({extended:true}));

// a http method since error "cannot GET /" ,so gave http req & res
app.get("/", (req,res) =>{
    // res.send("<h1>server now found by routing / </h1>")

    res.sendFile(`${__dirname}/calc.html`);
});

// since we use POST method in form in calc.html
app.post("/", (req,res) =>{
    const n1 = req.body.n1;
    const n2 = req.body.n2;
});

// now if we want to create one more path

// app.get("/about", (req,res) =>{
//     res.send(" the about page")
// });

// now to create a server we use..
app.listen(9000, () =>{
    console.log("server's created");
});