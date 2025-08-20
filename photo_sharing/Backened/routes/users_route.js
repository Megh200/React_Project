const express = require("express");
const user_controller = require("../controllers/user_controller");
const Myerror = require("../model/error");

const user_router = express.Router();


user_router.get("/", user_controller.getusers);

// user_router.get("/:uid", user_controller.getuserbyuid);

user_router.post("/register", user_controller.register);

// user_router.get("/", user_controller.login);


module.exports = user_router;