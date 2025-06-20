const express = require('express');
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

loc_router.get("/:locid", (req, res, next) =>{
    // url locid by params of useParams
    const locid = req.params.locid;
    const location = user_locations.find(loc =>{
        return (loc.id===locid) });
    // console.log(location);
    
    res.status(200).json({result:"success", msg:location });
});

loc_router.get("/users/:uid", (req, res, next) =>{
    const uid = req.params.uid;
    const location = user_locations.find(loc =>{
        return (loc.userid===uid)
    });
    res.status(200).json({result:"success", msg:location});
});


module.exports = loc_router;