

//Node.js architecture (HOw to node.js works in background)
//it involves callstack,Node APIs and callbackqueue 
//callstack main functon jaise console.log inko call krta h or node APIs jo data collect krtti h woh api hoti or Applicaton programm interface bhi jo two language ke beech me interface hoti usko call krti
//jaiseki setTimeOut call by NODE API then for call callbackQueue ka use hota call the node API function or ye wait krti callstack ka ki woh finish ho then fir woh callstack me jaake call krti un Node API )

// const nodemon = require("nodemon")

// console.log("start now") (mainfunction() goes to  callstack)

// setTimeout(()=>{
//     console.log("started")
// },2000)     (setTimeout() is function of c++ language so it's goes to node API)

// setTimeout(()=>{
//     console.log('starting')
// },000)
// console.log("u aren't authorized") 
// node.js works as main function goes to callstack() and function which is related of c or c++ goes to "node API" and callbackqueue wait to finish call stack then call 'nodeAPI')

