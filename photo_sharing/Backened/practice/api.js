const express = require("express");

const axios = require("axios");   // an api tool

const api = express();

// to use type.fit web data with api
axios({
    method:"get",
    url:"https://v6.exchangerate-api.com/v6/51f63df4568e1d049f3c3332/pair/EUR/GBP",
}).then(
(response) =>{
    console.log(response) },
(error) =>{
    console.log(error) }
);


api.listen(5000, () =>{
    console.log("ok")
});