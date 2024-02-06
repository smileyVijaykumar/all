let x=10;
let arr=[1,2,3,4,5,6,7,8,9,10];
let obj={
    name:"Common Js Module",
    value:"child1.js"
}

function demo(){
    // console.log("function called")
    return "function called"
}
//! Common Js Module exports
module.exports={
    num:x,
    array:arr,
    obj1:obj,
    sendfunc:demo,

}