import React, {useState} from "react";
import "./Login.css";

const Login = () =>{
    
    const[logindata,setlog] = useState(
        {
            email:"",
            pass:""
        }
    );

    const submithandler = (event) =>{
        event.preventDefault();
        console.log("logindata", logindata);
    };

    const changehandler = (event) =>{
        const newentry = event.target.value;
        const inputname = event.target.name;

        setlog((previousvalue)=>{
            if(inputname === "loginemail"){
                return({
                    email:newentry,
                    pass:previousvalue.pass
                })
            }
            else if(inputname === "loginpass"){
                return({
                    email:previousvalue.email,
                    pass:newentry
                })
            }
        }

        );

    };


return(
    // adding eventlisteners
    <form className="login-form" onSubmit={submithandler} >
        <div className="form-control" >
            <label>Email</label>
            <input type="email" name="loginemail" required onChange={changehandler} />
        </div>
        <div className="form-control" >
            <label>Password</label>
            <input type="password" name="loginpass" required onChange={changehandler} />
        </div>
        <div className="form-control" >
            <button>Login</button>
        </div>
    </form>
);

};

export default Login;