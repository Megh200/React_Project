import React from "react";

import Useritem from "./Useritem.js";
import "./UsersList.css";

const Userslist = (props) =>{

    return (
        
            <ul className="userlist" >
                {props.arr.map(i => {
                    return (<Useritem  key={i.id}
                        id={i.id}
                        name={i.name}
                        pic={i.pic}
                        nol={i.nol}
                        // all are attributes, we passed them to Useritem
                        />)}
                )}
            </ul>
        
    )

};

export default Userslist;