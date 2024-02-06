// import a from "./child1.js"
// import a,{x,arr,obj} from "./child1.js"


// console.log(x)
// console.log(a)
// console.log(arr)
// console.log(obj)


import onClicked,{btnHoverIn,btnHoverOut} from "./child1.js"

let val=document.querySelector("button");

val.onclick=function(){
    onClicked()
}

let divBlock = document.querySelector("#divBlock")
console.log(divBlock) 

divBlock.onmouseenter=function(){
    btnHoverIn();
}


divBlock.onmouseleave=function(){
    btnHoverOut();
}