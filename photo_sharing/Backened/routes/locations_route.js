const express = require('express');
const loc_router = express.Router();     // for path


loc_router.get("/:locid", (req, res, next) =>{
    
    res.status(200).json({result:"success", msg:"loc_route" });
});

module.exports = loc_router;