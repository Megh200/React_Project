"use strict";

const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const bt = document.querySelector("button");


const cal = function(event){
    event.preventDefault();
   document.querySelector('#res').innerHTML=(n1);
};

bt.addEventListener('click',cal);



