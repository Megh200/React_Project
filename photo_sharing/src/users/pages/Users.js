import React, {useState, useEffect} from "react";
import Userslist from "../components/Userslist.js";


const Users = () =>{

    // const all_users = [
    //         {id:"1", name:"tiya", pic:"https://i.pinimg.com/736x/6a/8a/75/6a8a75997108f805112355c48ca4af27.jpg", nol:3},
    //         {id:"2", name:"arya", pic:"https://i.pinimg.com/736x/6a/8a/75/6a8a75997108f805112355c48ca4af27.jpg", nol:1}
    //     ]


        const [savedUsers, setsavedUsers] =useState();
        const [error, seterror] = useState();
        useEffect( () => {
            const sendReq = async() =>{
                try{
                    const res = await fetch("http://localhost:5000/api/users");
                    const resData = await res.json();
                    if(!res.ok){
                        throw new Error(resData.msg);}
                        setsavedUsers(resData.msg);
                    }catch(err){
                        alert( err.message, () =>{ seterror(null); } )
                        seterror(err.message);
                    }
                };
                sendReq(); }, []);
                console.log(savedUsers);

return (
    <div>
        {/* <p>users page</p> */}

        <React.Fragment>
         {savedUsers && <Userslist arr={savedUsers} />}
         </React.Fragment>


    </div>

);

};

export default Users;