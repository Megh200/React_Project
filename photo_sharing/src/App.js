import React from "react";
import Forum from "./forum.js" ;

const App = () => {

    const array = [
        {name:"ama", class:2},
        {name:"hina", class:5},
        {name:"sik", class:3},
    ];

 return (
    <div>
        <p>HELLO GUYS!</p>
        <select>
        <option></option>
        <option>car</option>
        <option>bicycle</option>
        <option>bike</option>
        </select>

        <Forum ar={array} />

        
    </div>
 );

}

export default App;