// let x = 10;
// let a = "hi";
// let arr=[1,2,3,4];
// let obj={
//     name:"vijay",
//     age:24
// }

// //  export default x;
// export default a;

// export{
//     x,
//     arr,
//     obj
// }


//function default export

function onClicked(){
    document.body.style.background="tomato";
}

export default  onClicked;


function btnHoverIn(){
    document.body.style.background="yellow";
}
function btnHoverOut(){
    document.body.style.background="orange";
}

export{
    btnHoverIn,
    btnHoverOut
}