// let s="Hello js";
// let s1=" del am learning";

// // console.log(s.length)

// // console.log(s.charAt(1));

// // console.log(s.indexOf("H "))

// // console.log(s1.concat( s))
// // console.log(s.lastIndexOf("o"));
// // console.log(s.includes("llo "));


// // console.log(s.repeat(3));

// // console.log(s.replace("H",'h'));

// // console.log(s.split(" "))

// // console.log(s.match("e"))
// // console.log(s.match("z"))
// // console.log(s.search("e"))
// // console.log(s.search("z"))

// // console.log(s.slice(0,5))
// // console.log(s.slice(-2))
// // console.log(s.substring(4,5))
// // console.log(s.substring(-1))

// // console.log(s.substring(0,5,"hi"))


// // console.log(s.substring(-2))\

// //  let str=new String("hello java script"); 
// // console.log(str.valueOf())
// // let str1=str.valueOf();
// // console.log(typeof str1)


// // ! arrays

// let arr=[22,11,331,2,3,4];

// // arr.push(5);
// // console.log(arr)

// // console.log(arr.pop())

// // arr.unshift(0);
// // console.log(arr)

// // console.log(arr.shift())


// // console.log(arr.slice(2,3))
// // console.log(arr)


// // console.log(arr.splice(0,1,3.4))
// // console.log(arr)

// // console.log(arr.splice(0,3))
// // console.log(arr)

// // console.log(arr.reverse());

// // console.log(arr.reverse((a,b) =>{return b-a}))


// // console.log(arr.indexOf(1))

// // let a=arr.find(val=>val==9);
// // console.log(a)

// // console.log(arr.find(val=>val==4))

// // console.log(arr.findIndex(val=>val==11))

// // let x=[1,2,3,[2,3,[2,4]]]
// // console.log(x.flat(2))

// // let y=[10,11,2,12,13,14,15];
// // console.log(y)

// // console.log(y.some(val=>val>10))

// // console.log(y.every(val=>val>1))
// // console.log(y.includes(1))

// // console.log(y.sort((a,b)=>{return a-b}))

// // let a=arr.keys();

// // console.log(a.next())
// // console.log(a.next())
// // console.log(a.next())

// // let b=arr.values();
// // console.log(b.next())
// // console.log(b.next())
// // console.log(b.next())


// // let c=arr.entries();

// // console.log(c.next())

// // let x=arr.map((val,ind)=>{
// //     // console.log(ind+5)
// //     return ind +4;
// // })
// // console.log(x)

// // arr.forEach((val,del)=>{
// //     // console.log(val+5)
// //     return val;
// // })
 
// // let str="Hello Array";
// // let s3=str.split(" ");
// // console.log(s3);


// // let s4=s3.map((val,del)=>{
// //     return val;
// // }).reverse().join(" ")

// // console.log(s4)

// // let s4=s3.forEach((val,del)=>{
// //     return val;
// // })
// // console.log(s4)


// // let x=arr.filter((val,del)=>{
// //     return val>10;
// // })

// // console.log(x);


// // let x=arr.reduce((acc,val)=>{
// //     return acc+val
// // },2)

// // console.log(x)

// // const numbers = [1, 2, 3, 4, 5];

// // console.log(Array.isArray(numbers))


// // const sum = numbers.reduce((accumulator, currentValue) => {
// //   return accumulator * currentValue;
// // }, 1);

// // console.log(sum); // Output: 15



// // function demo(a,b,...c) {
// //     console.log(a);
// //     console.log(b);
// //     console.log(c)
// // }
// // let x=demo(1,2,3,4,5,6,7);

// // console.log(Array.isArray(x))

// // let numbers=[1,2,3,4];
// // console.log(...numbers)

// // let sum=(a,b,c,d)=>{return a+b+c+d};

// // let x=sum(...numbers)

// // console.log(10+undefined)
// // console.log(x)


// // let a = [1,2,3];
// // let b = [4,5,6];

// // console.log([...a,...b]);

// // console.log([...a])

// // let obj={
// //     name:"vijay",
// //     age:24
// // }

// // console.log({...obj})
// // // console.log({...obj.name})

// // let studentMarks=[10,20,30,40,50];
// // let studentAge=[1,2,3,4,5];

// // let y=[...studentMarks,...studentAge]
// // console.log(y);

// // let obj={
// //     a:1,
// //     b:2,c:3
// // }

// // console.log({...obj})

// // let str="Hello";

// // let z=[...str]
// // console.log(z)





// // let sum=(a,b,c,d,e)=>{
// //     return a+b+c+d+e;
// // }
// // let x=sum(...studentMarks)
// // console.log(x)



// //!object

// // let obj={
// //     a:"1",
// //     b:2
// // }

// // console.log(obj.b)
// // console.log(obj["a"])
// // console.log(obj["b"])
// // obj.c=3;
// // obj["d"]=4;
// // console.log(obj)

// // let obj={
// //     a:1,
// //     b:2
// // }
// // function demo(c,d){
// //     return this.a+this.b+c+d
// // }

// // let x=demo.call(obj,1,2)
// // console.log(x)


// // let student={
// //     name:"vijay",
// //     age:25,
// //     sex:"male"
// // }

// // let x=JSON.stringify(student);
// // console.log(x)

// // let emp='{"name":"John","age":30,"city":"New York"}';

// // let z=JSON.parse(emp)
// // console.log(z)


//  //Function to create a card element
// //   function createCard(title, content) {
// //     // Create the main card container
// //     const card = document.createElement('div');
// //     card.classList.add('card');

// //     // Create title element (e.g., h2)
// //     const titleElement = document.createElement('h2');
// //     titleElement.textContent = title;

// //     // Create content element (e.g., p)
// //     const contentElement = document.createElement('p');
// //     contentElement.textContent = content;

// //     // Append title and content elements to the card
// //     card.appendChild(titleElement);
// //     card.appendChild(contentElement);

// //     // Append the card to the body or any other container element
// //     document.body.appendChild(card);
// //   }

// //   // Example usage
// //   createCard('Card Title', 'This is the content of the card.');



// let card=document.createElement('div');
// card.classList.add('card');

// let img=document.createElement("img")
// img.src="https://media.istockphoto.com/id/936401344/photo/woman-meditates-in-yoga-asana-padmasana.jpg?s=2048x2048&w=is&k=20&c=Ju0NaBjTZZ2WfzzeB6KhXTYUCKj_1tVL1Bh8X8G4vQk=";
// let Title=document.createElement("h1");
// Title.innerText="Vijay"
// let content = document.createElement("p")
// content.innerText="lorem ipsum"

// card.appendChild(img)
// card.appendChild(Title);
// card.appendChild(content)

// card.style.width="350px";
// card.style.height="350px";
// card.style.background="#0C62A6";

// card.style.color="#fff"
// card.style.display="flex";
// card.style.flexDirection="column";

// card.style.justifyContent="center";
// card.style.alignItems="center";

// img.style.width="120px";
// img.style.height="120px"
// img.style.borderRadius="50%"
// img.style.outline="1px double white"


// document.body.append(card);



let div=document.createElement("div");
// div.innerText="div element"
// console.log(div)

let h1 = document.createElement("h1")
h1.innerHTML="<del>header Tag</del>";
console.log(h1)

let p = document.createElement("p")
p.innerText="para content"
console.log(p)


div.append(h1)
div.append(p)
document.body.append(div);

















































