const Myerror = require("../model/error");

const all_users = [
            {id:"1", name:"tiya", pic:"https://i.pinimg.com/736x/6a/8a/75/6a8a75997108f805112355c48ca4af27.jpg", nol:3, email:"tiya.com", password:"123t"},
            {id:"2", name:"arya", pic:"https://i.pinimg.com/736x/6a/8a/75/6a8a75997108f805112355c48ca4af27.jpg", nol:1, email:"arya.com", password:"123a"}
        ]


exports.getusers = (req, res, next) =>{
    res.status(200).json({result:"success", msg:all_users});
}

// exports.getuserbyuid = (req, res, next) =>{
//     const uid = req.params.uid;
//     const user = all_users.find(user => user.id===uid);

//     if(!user){
//         return next(new Myerror("no such userid", 404));
//     }

//     res.status(200).json({result:"success", msg:user});
// }



exports.register = (req, res, next) =>{
    const {id, name, pic, nol} = req.body;
    const user = {id, name, pic, nol};
    all_users.push(user);

    res.json({result:"success", msg:"register is done"});
}

exports.login = (req, res, next) =>{
    const {email, password} = req.body;
    const logindetail = {email, password};

    const user = all_users.find(i => (i.email===email) );

    if(user && user.password!==password){
        return next(new Myerror("invalid password", 401));
    }
    else if(!user){
        return next(new Myerror("invalid user, register first", 401));
    }
    res.status(200).json({result:"success", msg:"logged in"});
}