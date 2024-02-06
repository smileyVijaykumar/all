
// alert("hi")

// // var a;
// // a=10;
// // a=20;
// // console.log(a);

// // var b=20;

// // var b=90;
// // console.log(b)


// var a=10;

// let a=10;
// console.log(a);
// a=20;
// console.log(a);


// const a=10;
// console.log(a);

// a=20;
// console.log(a)

// const a;
// a=10;
// console.log(a)

// const a=10;
// const b=90;


// ! scope of variable

// var a=10;
// console.log(a)//global scope


// {
//     var b=20;
//     console.log(b)//global scope
// }

// function f(){
//     var c=90;
//     console.log(c)
// }

// f()

// !let

// let a=10;
// console.log(a)//script scope

// {
//     let b=10;
//     console.log(b)//block scope
// }

// function demo() {
//     let c=80;
//     console.log(c)//local scope
// }

// demo()

//! const

// const a=10;

// console.log(a)//script scope

// {
//     const b=80;
//     console.log(b)//block scope
// }

// //console.log(b); //not executed out of the block scope

// function test() {
    
//     const c=90;
//     console.log(c)//local scope
// }

// test()


// let a=10
// console.log(a)

// let c=10.00;
// let d="String"
// let e=[1,2,3,4,5]
// let obj={
//     name:"vijay",
//     age:19
// }



// a=10;
// console.log(a)


// function test() {
   
//     a=10;
//     console.log(a)
// }
// test()


// !hoisting
// console.log(a)
// var a=10;

// test()
// function test() {
    
//     a=10;
//     console.log(a)
// }

// let arr=["apple","orange","banana"];
// // console.log(arr);

// arr[0]="pine apple";
// console.log(arr)



// !String

// let a="apple";
// console.log(a)

// console.log(typeof(a))


// let b='pine apple';
// console.log(b)

// console.log(typeof(b))

// let c=`green apple`;
// console.log(c)

// console.log(typeof(c))


// ! template string

// let a=`${2+2}` 
// console.log(a)

// let first_name="vijay";
// let last_name="kumar";

// console.log(first_name + last_name)

// console.log("my name is "+first_name+" "+last_name);

// let first_name=`vijay`;
// let last_name=`kumar`;

// console.log(`My name is ${first_name} ${last_name}`)


// let str="kowshik";
// str[2]="a";
// console.log(str)


// let str=new String("hello");//object
// console.log(str)

// console.log(typeof(str))

// let h=str.valueOf();//string
// // console.log(h)
// console.log(typeof(h))

// let arr=[10,203,30,40];
// console.log(typeof(arr))

// let a=100.00;
// console.log(typeof(a))

// let b="100*100";
// console.log(b)
// console.log(typeof(b))

// console.log(eval("100+100"))


// let a=10;
// console.log(typeof(a))

// let str=String(a);
// console.log(typeof(str))


// !Number

// let a=10.89;
// console.log(typeof(a));

// let n=new Number(10);
// console.log(typeof(n))

// let x=n.valueOf();
// console.log(typeof(x))


// !NAN


// let num=100;
// let x=Number(NaN)
// console.log(x)


// let a=10;
// let b;
// console.log(a+b)

// !prompt

// let n1=Number(prompt("Enter the number"));

// let n1=Number(prompt("Enter the number"));//n1="20"
// let n2=Number(prompt("Enter the number"));//n1="20"

// let n=n1+n2;
// console.log(n)

//!infinity 

//any thing divided by zero

// console.log(1/0);
// console.log(-1/0);

// !undefine
// var a;
// console.log(a)
// console.log(typeof(a))

//!null

// let a=null;
// console.log(a)
// console.log(typeof(a))

// !boolean

// let x=new Boolean(true);//object
// console.log(typeof(x))

// let y=x.valueOf()
// console.log(typeof(y));//object


// let b=100;//string

// let c=Boolean(b);
// console.log(typeof(c))//boolean


// !symbol

// let x=Symbol();
// console.log(x)
// let y=Symbol()

// console.log(typeof(x))

// console.log(x===x)
// console.log(x===y)

// let s2=Symbol(100);
// console.log(s2=== x)

// // lets3=new Symbol()// not using symbol for new key word for error
// // console.log(s3)


// !Bigint

// let x=100n;
// console.log(typeof(x))

// let y=100.90n; not support floating value
// let c=new BigInt(10);//Bigint not having constructor  thats why show the error
// console.log(c)

// !operator

// 3  +  5 = 8

// console.log(2+2);
// console.log(2+"2")
// console.log(2+"2"+2);
// console.log("2"+2+2)
// console.log("2"+(2+2))



// console.log("2"-5)
// console.log(5-"3")

// console.log("6"*"6")


// a=10;
// console.log(a++)//11
// console.log(++a)//12


// let b=10;

// console.log(b-- + b++)//10 +9
// console.log(--b + --b)

// let x=10;

// console.log(x+=10);//x=x+10



// console.log(10=="10")//true
// console.log(10==="10")//true
// console.log(10 != 8)
// console.log(10<11)



// console.log(10<11 && 10>11); 
// console.log(10<11 || 10>11); 

// console.log(!true)

// ! function


// !named function
// function add(a,b) {
//     console.log(a+b)
// }
// add(10,20)


// ! anonymus function
// function(){
//     console.log("Anonymus function")
// }

//!first class or first citizen
// function(){
//         console.log("Anonymus function")
//     }


// !function expression

// let x=function(){
//     console.log("function expression")
// }
// x();


//!immediate invoke function

// (function(){
//     console.log("immediate invoke function")
// }());


// !deffault parameter function

// function sub(a,b){
//     console.log(a-b)
// }
// sub(20)

// !closure

// let a=10;

// function x() {
//     let b=100;
//     let c=true;
//     console.log(a)
//     console.log(b)
//     console.log(c)

//     console.log("((((((((((((((((((((((((((((((((((((((")

//     function y() {
//         console.log(a)
//         console.log(b)
//         console.log(c)
//     }
//     y()
// }
// x()



// !Arrow function

// let x=()=>{console.log("Arrow")}
// x()

// let y=_=>{console.log("underscore")}
// y()

// let z=a=>{console.log("only one para meter not using paranthesis")}

// z()

// let w=(a,b)=>{console.log("Two Parameter means cumpulsory used for paranthesis  " + (a+b))}
// w(10,20)


// !implicit return

// let x=(a)=> console.log(a);
// x(1000)

// !explicit return

// let y=(a,b)=>{return a+b}

// console.log(y(100,200))

// // let z=y(10,20);

// console.log(z)


//! Argument object


// function demo() {
//     return arguments
// }
// let x=demo([1,2,3,4,5,6,7,8,9])
// console.log(x)

// let data=()=>{return arguments}
// console.log(data(1,2,3,4,5,6,7,8,90))

// !constructor function

// function student(name,age,sec,blodgroup) {
//     this.name=name;
//     this.age=age;
//     this.sec=sec;
//     this.blodgroup=blodgroup;

// }
// let s1=new student("vijay",23,"c","g");
// console.log(s1)



















































































































































