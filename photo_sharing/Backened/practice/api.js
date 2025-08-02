const express = require("express");

const axios = require("axios");   // an api tool

const api = express();

// to use type.fit web data with api
axios({
    method:"get",
    url:"https://type.fit/api/quotes",
}).then(
(response) =>{
    console.log(response) },
(error) =>{
    console.log(error) }
);


api.listen(5000, () =>{
    console.log("ok")
});