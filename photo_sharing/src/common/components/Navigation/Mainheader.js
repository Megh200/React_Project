import React from "react";

import "./Mainheader.css";

const Mainheader = (props) =>{
    return (<header>
        {props.children}
    </header>);
};

export default Mainheader;