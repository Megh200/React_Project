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

    const submithandler = async(event) =>{
        event.preventDefault();
        
        console.log("logindata", logindata);

    // calling login() from context.js
        // islogin.login();    // here we are calling a fun.,that's why ()
                            // now see in Navlink.js 'button tag of logout'

        seterror(null);
        try{
            const res =await fetch("http://localhost:5000/api/users/login",{
                method: "POST",
                headers:{
                    "Content-type":"application/json",

                },
                body: JSON.stringify({
                    email: logindata.email,
                    password: logindata.pass,

                }),
            });

        const resData= await res.json();
        console.log("login page :", resData);
         if (!res.ok){
            throw new Error(resData.msg);
         }
         console.log("id here", islogin.login(resData.msg._id));
         islogin.login(resData.msg._id);
        }
        catch(err){
            alert(err.message, ()=>{
                seterror(null);
            });
            seterror(err.message);
        }
    
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