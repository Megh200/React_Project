import React from "react";

import Useritem from "./Useritem.js";
import "./Userslist.css";

const Userslist = (props) =>{

    return (
        
            <ul className="userlist" >
                
                {props.arr.map(i => {
                    return (<Useritem  key={i._id}
                        id={i._id}
                        name={i.name}
                        pic={i.pic}
                        locationcount={i.locs_id.length}
                        // all are attributes, we passed them to Useritem
                        />)}
                )}
            </ul>
        
    )

};

export default Userslist;