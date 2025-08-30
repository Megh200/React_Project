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
    const {name, email, password} = req.body;
    const user = all_users.find(i => i.email === email);

    if(user){   // check if user is already there
        return next(new Myerror("email is already registered", 422));
    }

    // new user
    const newuser = {id: Math.trunc(Math.random()*10)+1, name, email, password};
    all_users.push(newuser);
    res.json({result:"success", msg:"register is done"});
}


exports.login = (req, res, next) =>{
    const {email, password} = req.body;

    const user = all_users.find(i => i.email===email && i.password===password);
    // console.log(user);

    if(user && user.password!==password){
        return next(new Myerror("invalid password", 401));
    }
    if(!user){
        return next(new Myerror("invalid user, register first", 401));
    }
    res.status(200).json({result:"success", msg:"logged in"});
}




// mongodb+srv://admin:<admin mongo>@cluster0.otpxmmh.mongodb.net/photo_project?retryWrites=true&w=majority&appName=Cluster0