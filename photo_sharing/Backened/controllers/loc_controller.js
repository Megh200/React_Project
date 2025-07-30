


const getlocbylocid = (req, res, next) =>{
     // url locid by params of useParams
    const locid = req.params.locid;
    const location = user_locations.find(loc =>{
        return (loc.id===locid) });
    // console.log(location);

    if(!location){
        // error
        return next(new Myerror("no locations of this id", 404));
    }
    
    res.status(200).json({result:"success", msg:location });
};

const getlocbyuid = (req, res, next) =>{
     const uid = req.params.uid;
    const users = user_locations.filter(user =>{
        return (user.userid===uid)
    });
    res.status(200).json({result:"success", msg:users });
};

const createnewloc = (req, res, next) =>{
    const {title, desc, address, userid} = req.body;
    const newloc = {title, desc, address, userid};

    user_locations.push(newloc);
    res.status(201).json({result:"success", msg:newloc});
};