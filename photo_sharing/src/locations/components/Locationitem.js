import React from "react";

import "./Locationitem.css";

const Locationitem = (props) =>{
    return(
        <li className="locationitem">
            <div className="locationitem-content" >
                <div className="pic" >
                    <img src={props.pic} alt=".." />
                </div>
                <div className="info">
                <h2>{props.title}</h2>
                <h5>{props.desc}</h5>
                <p>{props.address}</p>
                </div>
                
            </div>
        </li>

    );
};

export default Locationitem;