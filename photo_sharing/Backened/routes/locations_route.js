const express = require('express');
const Myerror = require("../model/error");

const loc_router = express.Router();     // for path

const user_locations = [
        {id:"loc1",
        title:"albert hall museum",
        desc:"The Albert Hall Museum in Jaipur is the oldest museum of the state and functions as the state museum of Rajasthan.",
        address:"Ram Niwas Garden, Ashok Nagar, Jaipur, Rajasthan 302007",
        userid:"1"
        },

        {id:"loc2",
        title:"delhi",
        desc:"..",
        address:"...",
        userid:"1"
        },

        {id:"loc3",
        title:"red fort",
        desc:"...",
        address:"...",
        userid:"2"
        }
    ];

loc_router.get("/:locid", );

loc_router.get("/users/:uid", );


loc_router.post("/", )

module.exports = loc_router;