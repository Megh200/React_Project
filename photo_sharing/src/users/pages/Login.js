import React from "react";
import "./Login.css";

const Login = () =>{
    const submithandler = () =>{};

    const changehandler = () =>{};


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