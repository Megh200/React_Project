import React, {useState, useContext} from "react";

import {LoginContext} from "../../common/components/context";
import "./Newloc.css";

const Newloc = () =>{
    const login = useContext(LoginContext);
    const [error, seterror] = useState(null);

    const [newlocation,setnewlocation] = useState(
        {title:'',
         desc:'',
         address:''
        }
    );

    const submithandler = async(event) =>{
        event.preventDefault();
        console.log("values",newlocation);
        seterror(null);

        try{
            const response =await fetch("http://localhost:5000/api/locations",{
                method:"POST",
                body: formdata, 
                headers:{
                    "Content-type":"application/json",
                },
                body: JSON.stringify({
                    title:newlocation.title,
                    desc:newlocation.desc,
                    address:newlocation.address,
                    userid:login.userID,

                }),
             });
             const responseData=await response.json();
             console.log("new location page/: ", responseData.message);
             if(!response.ok){
                throw new Error(responseData.message);
             }
        }catch(err){
            alert(err.message, ()=>{
                setError(null);
            });
            setError(err.message);
        }    
    };

    const changehandler = (event) =>{
        const inputname = event.target.name;
        const newentry = event.target.value;

        // useState method with return state.
        // consider previousvalue as iterator "i" here & like i.title, i.desc etc
        // like this, but we can't write "i" bcz it's not an iterator,so we have to
        // write "previousValue", below is also right but can yeah ....
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