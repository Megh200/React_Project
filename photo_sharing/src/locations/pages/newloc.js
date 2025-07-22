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
        console.log("values",newlocation);
    };

    const changehandler = (event) =>{
        const inputname = event.target.name;
        const newentry = event.target.value;

        // useState method with return state.
        // consider previous value as iterator "i" here & like i.title, i.desc etc like this
        setnewlocation((previousvalue)=>{
            if(inputname === "newloctitle"){
                return {
                    title:newentry,
                    desc:previousvalue.desc,
                    address:previousvalue.address
                };
            }
            else if(inputname === "newlocdesc"){
                return {
                    title:previousvalue.title,
                    desc:newentry,
                    address:previousvalue.address
                };
            }
            if(inputname === "newlocaddress"){
                return {
                    title:previousvalue.title,
                    desc:previousvalue.desc,
                    address:newentry
                };
            }
            }
        )
    };

return (
    // <h1>locations of users are here </h1>
    
    // adding eventlisteners
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
            <input type="text" name="newlocaddress" required onChange={changehandler} />
        </div>
         <div className="form-control" >
            <button>Submit</button>
        </div>
    </form>
);

};

export default Newloc;