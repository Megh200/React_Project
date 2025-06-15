const express = require("express");
const axios = require("axios");   // an api tool
const app = express();


app.use(express.urlencoded({extended:true}));   //to use form data

// using post method.....; using api.html data
app.post("/", (req,res) =>{
    const tempurl = "https://v6.exchangerate-api.com/v6/51f63df4568e1d049f3c3332/pair";   //same link like we gave in url in axios() till ".../pair"
    const amount = req.body.amount;
    const curr1 = req.body.convert_from;
    const curr2 = req.body.convert_to;
    const finalurl = `${tempurl}/${curr1}/${curr2}`;
    // console.log(finalurl);
// to use api we use...
axios({
    method:"get",
    // url:"https://v6.exchangerate-api.com/v6/51f63df4568e1d049f3c3332/pair/EUR/GBP",
    url: finalurl
}).then(
(response) =>{
    const ans = response.data.conversion_rate * amount;
    res.send(amount + " is " + ans + " in " + curr2) },
(error) =>{
    console.log(error) }
)
});

app.get("/", (req,res) =>{
    res.sendFile(`${__dirname}/api.html`);
})

app.listen(5000, () =>{                  // to create a server
    console.log("server is created")
});