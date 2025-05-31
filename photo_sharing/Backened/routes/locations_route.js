const express = require('express');
const Myerror = require("../model/error");

const loc_controller = require("../controllers/loc_controller");

const loc_router = express.Router();     // for path



loc_router.get("/:locid", loc_controller.getlocbylocid);

loc_router.get("/users/:uid", loc_controller.getlocbyuid);

loc_router.post("/", loc_controller.createnewloc);

loc_router.delete("/:locid", loc_controller.deleteloc);

module.exports = loc_router;