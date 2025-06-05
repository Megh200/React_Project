const MyError = require("../model/error");

const all_users = [
            {id:"1", name:"tiya", pic:"https://i.pinimg.com/736x/6a/8a/75/6a8a75997108f805112355c48ca4af27.jpg", nol:3},
            {id:"2", name:"arya", pic:"https://i.pinimg.com/736x/6a/8a/75/6a8a75997108f805112355c48ca4af27.jpg", nol:1}
        ]

exports.getuserbyuid = (req, res, next) =>{
    const uid = req.params.uid;
    const user = all_users.filter(user => user.id===uid);

    if(!user){
        next(new Myerror("no such userid", 404));
    }
    res.status(200).json({result:"success", msg:user});
}

