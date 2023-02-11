

// console.log("hello")
// console.log("kitty")
// console.warn("cute")

const { set } = require("lodash");


// console.log("hello")
// setTimeout(()=>{
//     console.warn("kitty") (it will not wait for this task run to next task then after it run and take delay time which is here 8sec)
// },8000)                    (8000=8sec and if 2000=2sec)
// console.log("cute")



////DRAWBACKS
// let a=10;
// let b=0;

// setTimeout(()=>{
//     b=50;
// },7000)
// console.warn(a+b)  (GIVE O/P 10 BECAUSE IT TAKES TIME TO RUN SECOND TASK)




//here we resolve the drawbacks of node.js(async language)

// let x=0;
// let y=9;
// let z=2;
// let waitdata=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(7)
//     },4000)

// })
// waitdata.then((data)=>{   (standard way to call and modify)
//     z=data;
//     console.log(x+y+z)
// })
