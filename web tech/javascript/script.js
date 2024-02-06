// !string
// let str="hello javascript";/

// !length

// console.log(str.length)

// !charAt

// console.log(str.charAt(9));//charAt(index)

// !index of

// console.log(str.indexOf("s"));//4
// console.log(str.lastIndexOf("a"));//4

// let name="goiwsik";

// console.log(name.indexOf("i"))
// console.log(str.endsWith("pt"))

// console.log(name.match("i"));

// console.log(name.match("a"))

// console.log(name.slice(0,4))
// console.log(name.slice(-3))

// // console.log(name.subString(-2)) we cant give the negative value

// console.log(name.substring(0,3))



// console.log(str.includes("z"))
// console.log(str.repeat(3))

// // console.log(str.replace("h" ,"H"))

// console.log(str.match("z"))

// console.log(str.search("z"))

// // console.log(str.slice(4,7))
// console.log(str.slice(-2))

// console.log(str.substring(0,5))


// let s="hello js";

// console.log(s.substr(0,5))

// console.log(s.substr(1,5))
// console.log(s.substr(6,2))

// console.log(s.substr(6,1))

// // !trim
// let a="      apple is very sweet                        "
// console.log(a)
// console.log(a.trim())


// let s1=new String("hello");
// console.log(typeof(s1))

// !value of
// let x=s1.valueOf()
// console.log(typeof(x))


//!toString

// let s2=s1.toString()
// console.log(typeof(s2))


// !Arrays


let arr=["apple","orange","pineapple","graphes","banana"];

    // console.log(arr)

    // console.log(arr[3]);
    // console.log(arr[1])

    // arr[3]="jack fruit"
    // console.log(arr)


    // arr.push("watermelon")
    // console.log(arr)


// console.log(arr.slice(-2))
// console.log(arr.slice(3,5))
// console.log(arr)

// // console.log(arr.splice(2,5))
// // console.log(arr)

// console.log(arr.join(" 1 "))

// console.log(arr.reverse())

// console.log(arr.indexOf("watermelon"))

// let arr1=[1,2,3,1,2,3,1,5,6,7,5,6,7];
// let arr2=['a',"b","c","d","e","f","g"]

// console.log(arr1.lastIndexOf(5))
// console.log(arr1.concat(arr2))

// let x=arr1.find((val)=>{return val==1})
// console.log(x)






// console.log(arr1.fill("gowsik"));

// let arr3=[1,2,[2,3,[1,2]]]//1,2,2,3,1,2

// let y=arr3.flat(2);
// console.log(y)


// let z=arr1.some((val) => val >= 7)
// console.log(z)


// let z=arr1.every((val)=>val>1)
// console.log(z)

// let a=[1,4,3,2,5,7,9]

// let x=a.sort((a,b)=>a-b)
// console.log(x)



// let arr1=[11,2,3,1,2,3,1,5,6,7,5,6,7];

// console.log(arr1.keys().next());

// let a=arr1.keys();
// console.log(a.next())

// for (const b in arr1) {
//     console.log(b)
        
//     }


    // let x=arr1.values();
    // // console.log(x.next())

    // for (const val of x) {
    //     console.log(val)
    // }\


//    let x=arr1.entries()
// console.log(x.next().value)

// let arr1=[1,2,3,4,5,6,7,8,9,10];

// let arr1=['a',"b",
// "c"];

// console.log(
//     arr1.map((val,i)=>{return val+"b"}))


let arr1=[1,2,3,4,5,6,7,8,9,10,3,3,3,3];

// arr1.forEach((val,ind)=>{
//     // console.log(val)
//     console.log(ind)
// })


// let x=arr1.filter((val)=>{return val==3})

// let a=Array.isArray(arr1)
// console.log(a);

// let s="hello js";

// let x=s.split(" ");
// console.log(x)
// console.log(Array.isArray(x))//true
// console.log(Array.isArray(s))//false

// function demo(a,b,...c) {
//     console.log(c)
// }
// let x=demo(1,2,3,4,5,6,7,8,9,10);

// console.log(Array.isArray(x))

// function demo() {
//     return arguments;
// }
// let x=demo([1,2,3,4,5])

// console.log(Array.isArray(x))

// let y=Array.from(x)
// console.log(Array.isArray(y))


// !spread operator

// let x=[1,2,3,4];
// let y=[1,2,3,4]

// console.log(...x,...y)

// let x=["harish","Gowsik","Surya"]

// let y=[1,2,3,4]



// function names(t1,t2,t3) {
//     console.log(t1,t2,t3)
// }


// names(...x)



// ! Object

// key:value

// let obj={
//     name:"gowsik",
//     age:"23",
//     gender:"male"
// }

// // console.log(obj)
// // // console.log(obj.name)

// // // console.log(obj.age , obj.gender)

// // // obj.name  
// // // obj["age"]

// // // console.log(obj)

// obj.city="sivagangai"
// obj.state="tamilnadu"
// obj["langauges"]=["Html","css"]

// console.log(obj.langauges[1])


// let players={}

// players.name="Dhoni";
// players.age=45

// console.log(players.name)

// let obj={
//     name:"vj",
//     age:23,
//     gender:"male"
// }

// function demo() {
//     return `i am ${this.name} i am ${this.age}` 
// }
// let x=demo.apply(obj)
// console.log(x)

// let z={
//     a:10,
//     b:20
// }

// function add(c,d) {
//     return c+d+this.a+this.b
// }
// let x=add.bind(z,100,200)
// console.log(x())

// function details() {
//     return `i am ${this.name} i am ${this.age}`
// }
// let x=details.call(obj)
// console.log(x)
// document.write(x)
// alert(x)
// let x=Object.keys(obj)
// let y=Object.values(obj)
// console.log(x)
// console.log(y)

// !Math

// console.log(Math)

// console.log(Math.PI)

// console.log(Math.random()*999)
// console.log(Math.random()*9999)

// console.log(Math.floor("10.04"))
// console.log(Math.floor("10.0000000"))



// console.log(Math.floor(Math.random()*999))
// console.log(Math.abs(10.5))
// console.log(Math.ceil(10.1))
// console.log(Math.ceil(10.9))


// console.log(Math.trunc(10.5))

// console.log(Math.max(10,20,40,50))

// console.log(Math.sqrt(25))

// console.log(Math.cbrt(27))

//! Json


// let user={
//     name:"vj",
//     mark:35

// }

// let x=JSON.stringify(user)
// console.log(x)

// let y=JSON.parse(x)
// console.log(y)


// !Date

// console.log(Date())

// let x=new Date();
// console.log(x.getDay())
// console.log(x.getFullYear())
// console.log(x.getHours())
// console.log(x.getMinutes())
// console.log(x.getSeconds())

// console.log(x.getTime())






















































































































































    
    





































































