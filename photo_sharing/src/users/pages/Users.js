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
                    const res = await fetch("http://locahost:5000/api/users");
                    const resData = await res.json();
                    if(!res.ok){
                        throw new Error(resData.message);}
                        setsavedUsers(resData.message);
                    }catch(err){
                        alert( err.message, () =>{ seterror(null); } )
                        seterror(err.message);
                    }
                };
                sendReq(); }, []);

return (
    <div>
        {/* <p>users page</p> */}

        <Userslist arr={savedUsers} />



    </div>

);

};

export default Users;