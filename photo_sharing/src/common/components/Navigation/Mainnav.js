import React from "react";
import {Link} from "react-router-dom";

import Mainheader from "./Mainheader";
import Navlink from "./Navlink";
import "./Mainnav.css";

const Mainnav = (props) =>{
    return (
    <Mainheader>
        <h1 className="mainnav-title" >       
            <Link to = "/">Picpot</Link>
            </h1>
            <nav>
                <Navlink/>
            </nav>

    </Mainheader>);
};

export default Mainnav;