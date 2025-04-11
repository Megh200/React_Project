import React, {useState} from "react";
import Forum from "./forum.js" ;
import Ad from "./ad.js";

const App = () => {

    

    const [array, damfun] = useState(
          [  {name:"ama", class:2},
            {name:"hina", class:5},
            {name:"sik", class:3},    ]
    );

    const prin = function(newo){
        damfun( (ia) =>{
            return ia.concat(newo);
        } )
        
    };

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

        <Ad attr={prin} />
        
    </div>
 );

}

export default App;