//!common js 

const val = require("./child1")
const val1 = require("./child2")

console.log(val.num)
console.log(val.array.map(number=>{console.log(number)}))
console.log(val.obj1)
console.log(val.sendfunc())
console.log(val1)
if(val1.c){
    console.log("True block")
}else{
    console.log("False Block")
}