import React from "react";

import "./Newloc.css";

const Newloc = () =>{

return (
    // <h1>locations of users are here </h1>
    <form className="location-form" >
        <div className="form-control" >
            <label>Title</label>
            <input type="text" name="newloctitle" required />
        </div>
        <div className="form-control" >
            <label>Description</label>
            <input type="text" name="newlocdesc" required />
        </div>
        <div className="form-control" >
            <label>Address</label>
            <input type="text" name="Address" required />
        </div>
    </form>
);

};

export default Newloc;