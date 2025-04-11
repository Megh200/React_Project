import React from "react";

const Ad =(props) => {
    let vari = "";

    const refr = function(event){
        event.preventDefault();

        let newo = {name:vari, class:"no"};
        props.attr(newo);
    };

    
    

    const chan = (event) =>{
        vari = event.target.value;
    };

    return(
        
        <div>
           <form  onSubmit={refr}>
            <input type="text" onChange={chan} />
            <button  >sub</button>
            {/* type submit lena if error */}
            </form> 
        </div>

    );

};

export default Ad;