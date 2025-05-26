import React, {useContext} from "react";
import {NavLink} from "react-router-dom";

import "./Navlink.css";
import { LoginContext } from "../context.js";

const Navlink = (props) =>{

    // to use LoginContext, we'll use hook "useContext" here
    // bcz we have to share login info now here 
    const islogin = useContext(LoginContext);        // since Logincontext is obj so islogin is also obj


    return (
        <ul className="navlinks" >
            <li>
                <NavLink to="/" exact>Users</NavLink>
            </li>

            {/* we want "my loca.." & "add loc.." to be shown when loggedin;
            ofcourse "Users" will be shown everytime */}
            {/* now we'll take context's var. from context.js by LoginComtext */}
            
            { islogin.isloggedin && 
            (<li>
                <NavLink to="/1/locations" >My locations</NavLink>
            </li>) }
            
            { islogin.isloggedin && 
            (<li>
                <NavLink to="/loc/new" >Add locations</NavLink>
            </li>) }

            { !islogin.isloggedin &&
            (<li>
                <NavLink to="/Login" >SignIn/Up</NavLink>
            </li>)}

            {/* button pr click se logout hojaye */}
            { islogin.isloggedin && 
            ( <button onClick={islogin.logout} >Logout</button> ) }
            
        </ul>
    );
};

export default Navlink;