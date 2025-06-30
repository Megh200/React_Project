import React from "react";
import Userslist from "../components/Userslist.js";
;
const Users = () =>{

    const all_users = [
            {id:1, name:"tiya", pic:"https://i.pinimg.com/736x/6a/8a/75/6a8a75997108f805112355c48ca4af27.jpg", nol:3},
            {id:1, name:"tiya", pic:"https://i.pinimg.com/736x/6a/8a/75/6a8a75997108f805112355c48ca4af27.jpg", nol:5}
        ]

return (
    <div>
        <p>users page</p>

        <Userslist arr={all_users} />



    </div>

);

};

export default Users;