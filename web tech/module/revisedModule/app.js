// !comon js module
/*
common js module we can run only in terminal
*/
// const val=require("./child1")
// console.log(val.arr.map((val,i)=>{console.log(val)}))
// console.log(val.num)
// console.log(val.obj)
// console.log(val.str)

// ! default export

/* 
default exports means we can add script tag by type="module"
*/

// import a from "./child1.js"

// console.log(a)

// ! named export

import {x,arr,obj} from "./child1.js"
console.log(x);
console.log(arr);
console.log(obj);



