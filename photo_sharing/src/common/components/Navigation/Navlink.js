import React from "react";
import {NavLink} from "react-router-dom";

import "./Navlink.css";

const Navlink = (props) =>{
    return (
        <ul className="navlinks" >
            <li>
                <NavLink to="/" exact>Users</NavLink>
            </li>
            <li>
                <NavLink to="/1/locations" >My locations</NavLink>
            </li>
            <li>
                <NavLink to="/loc/new" >Add locations</NavLink>
            </li>
            <li>
                <NavLink to="/Login" >SignIn/Up</NavLink>
            </li>
            
        </ul>
    );
};

export default Navlink;