import React from "react";

import Locationitem from "./Locationitem";
import "./Locationlist.css";

const Locationlist = (props) =>{

    if(props.arr.length===0){return (
        <div className="center" >
            <h2>No locations</h2>
        </div>
    )};
    
    return( 
        <ul className="locationlist" >
            {props.arr.map(i => {
                return <Locationitem key={i._id}
                       id={i._id}
                       title={i.title}
                       pic={i.pic}
                       desc={i.desc}
                       address={i.address}
                    //    userid={i._userid}
                       />
            })}
        </ul>
    );
};

export default Locationlist;


