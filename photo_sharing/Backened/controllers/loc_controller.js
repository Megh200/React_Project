const MyError = require("../model/error");

let user_locations = [
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

// to separately or individually export them .....

// const getlocbylocid = (req, res, next) =>{.......}            in beginning, it was like this

exports.getlocbylocid = (req, res, next) =>{
     // url locid by params of useParams
    const locid = req.params.locid;
    const location = user_locations.filter(loc => (loc.id===locid) );
    // console.log(location);

    if(!location){
        // error
        return next(new Myerror("no locations of this id", 404));
    }
    
    res.status(200).json({result:"success", msg:location });
};

exports.getlocbyuid = (req, res, next) =>{
    const uid = req.params.uid;
    const users = user_locations.filter(user => user.userid===uid);
    res.status(200).json({result:"success", msg:users });
};

exports.createnewloc = (req, res, next) =>{
    const {title, desc, address, userid} = req.body;
    const newloc = {title, desc, address, userid};

    user_locations.push(newloc);
    res.status(201).json({result:"success", msg:newloc});
};

exports.deleteloc = (req, res, next) =>{
    const locid = req.params.locid;
    user_locations = user_locations.filter(loc => loc.id!==locid );

    res.status(200).json({result:"success", msg:"loc is deleted"});
}
