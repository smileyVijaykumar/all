// let div = document.getElementById('root');

// let innerhtml = div.innerHTML;
// // console.log(innerhtml);

// div.innerHTML = `${div.innerHTML} 
//                 ${'<h2> Terrible world </h2>'}`;
// // console.log(div.innerHTML);


//  const sec = document.querySelector("section")
// //  console.log(sec)

// //  sec.innerHTML += "<h1>hello</h1>"

// // console.log(div.innerText)
// sec.innerHTML += "<h1>hello js</h1>";

// console.log(window)

// console.log(document)


// document.write("vijay");

// alert("hello")



// console.time("hello");
// for(let i=0;i<10000000;i++){

// }
// console.timeEnd("hello")

// var a;
// a=10;
// console.log(a)

// var b=20;
// console.log(b)

// a=20;

// var a=90;
// console.log(a)

// let a=90;
// let b;
// b=30;
// b=80;
// // let b=90; // re declaration is not posible js
// console.log(a)
// console.log(b)

// const a=10;
// // a=90;
// console.log(a)


// ! var scope

// var a=10;// global scope
// console.log(a)


// {
//     var b=90;
//     console.log(b) //global scope
// }


// function m1(){
//     console.log(a+b)// local scope or function scope
// }
// m1();


// ! let scope

// let a=10;
// console.log(a)// script scope

// {
//     let b=30;
//     console.log(b) // block scope

// }

// function demo(){
//     console.log(10+20);// local scope or function scope
// }
// demo();

//! const scope

// const a=10;
// console.log(a)// script scope


// {
//     const b=20;
//     console.log(b) // block scope
// }

// function demo(){
//     const a=10;
//     const b=20
//     console.log(a+b);
// }
// demo();



//! string

// let a="hello";
// let b='hi';
// let c=`good night`;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// ! template string literal

// let first_name = `vijay`;
// let last_name = "kumar";

// console.log(`My name is ${first_name + last_name}`)

// console.log(`${10+10}`)

//! type of operator

// let a=10;
// let b="23"
// console.log(typeof a)
// console.log(typeof b)

// let a="vijay";
// console.log(a[0])

// a[0]='a';
// console.log(a)// strings are immutable in nature can't be changed


// ! creating object

// let str=new String("vijay kumar");

// console.log(typeof str);


//! value of

// let s=str.valueOf();

// console.log(typeof s)

// ! eval

// let num="100 * 100";

// console.log(num)
// console.log(`${num}`)
// console.log(eval(num))



//! string()

// let a=100;

// console.log(typeof a)
// let b=String(a);
// console.log(b)
// console.log(typeof b)




// !number

// let a=100;
// let b=100.345;
// console.log(typeof a);
// console.log( typeof b);

//!Number constructor

// let a=new Number(100);
// console.log(typeof a)

// let b=a.valueOf();
// console.log(typeof b)



// !NaN

// let num="10000";
// let name="vijay"
// let x=Number(name);
// console.log(x)


//! prompt

// let n1=Number(prompt("Enter the number"));
// let n2=Number(prompt("Enter the number"));

// let n3=n1+n2;
// console.log(n3)


// !undefined
// var a;// declare a variable but not assign the value return undefined data type

// console.log(a)
// console.log(typeof a)

//!Null

// let a=null;// null mean empty value or absence of object
// console.log(a);
// console.log(typeof a)


// !boolean

/*
boolean is a js premetive data type.
boolean can hold two values true or false.
    
*/
// let a=true;
// console.log(typeof a);

// console.log(20000>20)


//! boolean constructor


// let a=new Boolean(true);

// console.log(typeof a)

// let b=a.valueOf();
// console.log(typeof b)


// let d="false";
// console.log(typeof d);
// let e=new Boolean(d)
// console.log(typeof e)

//!Symbol datatype


//  it is one of the  premetive data type in javascript
//  it was introduced in es6 feature
//  it is used for internal purpose kept in private
//  it return unique value

// let x=Symbol();
// console.log(x);
// let y=Symbol()
// console.log(y)

// console.log(x==y)

 
// !bigInt

// it was introduced in es8 feature
// the value ranges from -2^53-1 to +2^53-1
// any number suffix with n is called as bigInt
// we can't use floating value
// we can use instance of bigint it will through type error



// let num=100n;
// let num1=100.1n;
// console.log(typeof num)

// let num3=new BigInt();
// console.log(num3)

// console.log(1/0)

// let x=0;

// let y=x;
// console.log(y)

// let arr=[1,2,3,4,5,6];
// console.log(arr)

// let arr1=arr;
// arr1[0]=100;
// console.log(arr);

// let str="vijay";

// str[0]="a";
// console.log(str)


// let name=new String("kavin");

// let num= Number([1,2,3,45]);

// console.log(num)

// console.log("10" + + 'hello')

let a=NaN;
console.log(typeof a)











































































































































































































// var a;

// function demo(a, b) {
//     return function(){
//         console.log(a,b);
//     }
  
// }

// let x = demo(10,20);
// let y = demo(20,30);

// x()
// y()
// let body = document.querySelector('body')
// let a = 10; 
// console.log(a);
// body.innerText = 'hello'

// let a = 10;
// console.log(a)
