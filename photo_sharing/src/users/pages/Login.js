import React, {useState, useContext} from "react";
import "./Login.css";
import {LoginContext} from "../../common/components/context";

const LogIn = () =>{
    
    // so submit krne pr login ho jaye
   // again, to use LoginContext, useContext
    const islogin = useContext(LoginContext);

    const [error, seterror] = useState(null);

    const[logindata,setlog] = useState(
        {
            email:"",
            pass:""
        }
    );

    const submithandler = (event) =>{
        event.preventDefault();
        
        console.log("logindata", logindata);

    // calling login() from context.js
        islogin.login();    // here we are calling a fun.,that's why ()
                            // now see in Navlink.js 'button tag of logout'

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

export default LogIn;