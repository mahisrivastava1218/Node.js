//console.log(20)
// var a=10;
// var b=20;
// var c=90;
// console.warn(a+b+c);

// var x='20'; (== use to matched value not type)
// if(x==20){
//     console.log("matched")
// }
// var x=20;
// if(x===20){
//     console.log("matched")
// }

// var x=20;
// let y=30;
// const z=30;

// console.log(x+y+z)

// var x=2; (=== use to matched type and value)
// if(x===2){
//     console.log("matched")
// }

// var x=20;
// const arr=[2,3,4,5];
// console.log(arr)


// import{x} from './1str'(not use import)
// var x=20;
// const arr=[2,3,4,5]
// console.log(arr[0])

// how to use function & variable of another file

// const str =require('./1str')
// console.log(str.z()) (to find function value of z use ()bracket)

// const str =require('./1str')
// console.log(str) (for all value)

// arr=[2,5,7,8,9,0] (filter is used with array)
// arr.filter((items)=>{
//     console.log(items);
// })

// arr=[2,5,7,8,0,9,0] (//to filter in array function use filter)
// let result=arr.filter((items)=>{
//     return items>0
// })
// console.warn(result)

// const fs=require('fs')
// console.log("ao or jo")
// fs.writeFileSync("2str.txt","code kro")

// const fs=require('fs')

// fs.writeFileSync("1str.txt",'code kro jaake') (to make another txtfile)

// console.log(__dirname); (print the name of the directory #backend.js)

// console.log('->>>',__dirname)(dirname print with arrow)

// console.log(__filename) (it give the filename #1step.js)
// console.log('me file',__filename)
// const fs=require('fs')
// fs.writeFileSync('1t.txt','code dekho')

// const gs=require('fs').writeFileSync; (to import only that module) (we can use any const name)
// gs('abc.txt','abc')

