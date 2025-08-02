const express = require("express");

const axios = require("axios");   // an api tool

const app = express();

// to use type.fit web data with api
axios({
    method:"get",
    url:"https://v6.exchangerate-api.com/v6/51f63df4568e1d049f3c3332/pair/EUR/GBP",
}).then(
(response) =>{
    console.log( response.data ) },
(error) =>{
    console.log(error) }
);


app.get("/", (req,res) =>{
    res.sendFile(`${__dirname}/api.html`);
})

app.listen(5000, () =>{
    console.log("ok")
});