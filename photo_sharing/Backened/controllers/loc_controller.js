const Myerror = require("../model/error");
const locschemaf = require("../model/location");

// dummy data
// let user_locations = [
//         {id:"loc1",
//         title:"albert hall museum",
//         desc:"The Albert Hall Museum in Jaipur is the oldest museum of the state and functions as the state museum of Rajasthan.",
//         address:"Ram Niwas Garden, Ashok Nagar, Jaipur, Rajasthan 302007",
//         userid:"1"
//         },

//         {id:"loc2",
//         title:"delhi",
//         desc:"..",
//         address:"...",
//         userid:"1"
//         },

//         {id:"loc3",
//         title:"red fort",
//         desc:"...",
//         address:"...",
//         userid:"2"
//         }
//     ];


// to separately or individually export them .....

// const getlocbylocid = (req, res, next) =>{.......}            in beginning, it was like this

exports.getlocbylocid = async(req, res, next) =>{
     // url locid by params of useParams
    const locid = req.params.locid;
    let locinfo;
    try{
        locinfo = await locschemaf.findById(locid);}
    catch(err){
        return next(new Myerror("db error", 500));
    }
    // location = user_locations.find(loc => (loc.id===locid) );
    // console.log(location);

    if(!locinfo){
        // error
        return next(new Myerror("no locations of this id", 404));
    }
    
    res.status(200).json({result:"success", msg:locinfo });
};

exports.getlocbyuid = async(req, res, next) =>{
    const uid = req.params.uid;
    let userinfo;
    try{
    userinfo = await locschemaf.find({userid:uid});
    }
    catch(err){
        return next(new Myerror("db error"+err, 500));
    }

    if(userinfo.length === 0){
        return next(new Myerror("uid not found",404));}

    res.status(200).json({result:"success", msg:userinfo});

    // const users = user_locations.filter(user => user.userid===uid);
    // res.status(200).json({result:"success", msg:users });
};

exports.createnewloc = async(req, res, next) =>{
    const {title, desc, address, userid} = req.body;
    
    const newloc = new locschemaf({
        title,
        desc,
        pic: "https://picsum.phtos/200",
        address,
        userid
    });
    try{
        // save the docu. 1 at a time
        await newloc.save();}
    catch(err){
        console.log(err);
        return next(new Myerror("db error"));

    };

    // user_locations.push(newloc);
    
    res.status(201).json({result:"success", msg:newloc});
};

exports.deleteloc = async(req, res, next) =>{
    const locid = req.params.locid;

    try{
        const loc = await locschemaf.findByIdAndDelete(locid);

        if(!loc){
            return next(new Myerror("location not found", 404));
        }

    }catch(err){
        console.log(err);
        return next(new Myerror("db error"));
    }

    // user_locations = user_locations.filter(loc => loc.id!==locid );

    res.status(200).json({result:"success", msg:"loc is deleted"});
}
