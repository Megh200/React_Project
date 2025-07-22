import React from "react";
import {useState} from "react";

import "./Newloc.css";

const Newloc = () =>{
    const [newlocation,setnewlocation] = useState(
        {title:'',
         desc:'',
         address:''
        }
    );

    const submithandler = (event) =>{
        event.preventDefault();
    };

    const changehandler = () =>{

    };

return (
    // <h1>locations of users are here </h1>
    <form className="location-form" onSubmit={submithandler} >
        <div className="form-control" >
            <label>Title</label>
            <input type="text" name="newloctitle" required onChange={changehandler} />
        </div>
        <div className="form-control" >
            <label>Description</label>
            <textarea rows="3" name="newlocdesc" onChange={changehandler} ></textarea>
        </div>
        <div className="form-control" >
            <label>Address</label>
            <input type="text" name="newlocAddress" required onChange={changehandler} />
        </div>
         <div className="form-control" >
            <button>Submit</button>
        </div>
    </form>
);

};

export default Newloc;