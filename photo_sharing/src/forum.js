import React from "react";
import "./forum.css";

const Forum = (props) =>{

    // props.ar.forEach(item=>{console.log(item.name)});
    

return(
    <div>
    <p> <span>{props.ar[0].name}</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. <span>{props.ar[0].class}</span> Sequi natus debitis ipsa nobis quos maiores numquam iure, nisi tempore! Ipsa tempora esse dolorum at vel cum ea sequi, deserunt id.
Illo magnam necessitatibus cupiditate <span>{props.ar[1].name}</span> laboriosam explicabo exercitationem minima non sapiente natus quod, asperiores pariatur optio aut hic est sit modi totam iste ea? Animi nihil veniam provident cupiditate. Expedita, laborum.</p>

{props.ar.map((item)=>
    {return <p className="bebo">{item.name}-{item.class}</p>})}

</div>

);

};

export default Forum;