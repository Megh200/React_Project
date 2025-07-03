import React from "react";
import {Link} from "react-router-dom";

import "./Usersitem.css";

const Useritem =(props) =>{
    
    return(
            <li className="useritem" >

                    <div className="useritem-content" >

                        <Link to = {`${props.id}/locations`} >
                        <div className="useritem-pic" >
                            <img src={props.pic} alt="user-photo" />
                        </div>

                        <div className="useritem-info" >
                        <h2>{props.name}</h2>
                        <h3>{props.nol} {props.nol===1 ? "location" :"locations"}</h3>
                        </div>
                        </Link>

                    </div>

            </li>

    );

};

export default Useritem;