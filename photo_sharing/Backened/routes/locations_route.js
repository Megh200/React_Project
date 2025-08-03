const express = require('express');
const loc_route = express.Router();     // for path


loc_route.get("/", (req, res, next) =>{
    res.status(200).json({result:"success", msg:"loc_route" });
});

module.exports = loc_route;