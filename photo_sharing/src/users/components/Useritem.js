import React from "react";
import "./UsersItem.css";

const Useritem =(props) =>{

    return(
            <li className="useritem" >

                    <div className="useritem-content" >

                        <div className="useritem-pic" >
                            <img src={props.pic} alt="" />
                        </div>

                        <div className="useritem-info" >
                        <h2>{props.name}</h2>
                        <h3>{props.nol}</h3>
                        {props.nol===1 ? "location" :"locations"}
                        </div>

                    </div>

            </li>

    );

};

export default Useritem;