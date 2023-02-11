const express=require('express')  

const app=express()
//create middleware
// const reqFilter=(req,res,next)=>{   //reqFilter use for middleware
//     console.log('reqFilter')
//     if(!req.query.age){
//         res.send("provide your age")
//     }
//     else if(req.query.age<20){
//         res.send("<h1>you're age is not ready to access</h1>")
//     }
//     else{
//         next()
//     }
//      //next()  //next is use to forward reqfilter call or give access to server
// }
// app.use(reqFilter)  //application level middleware ka use kiya kuki jitne  routes h unsb pe apply kiya h
//make separate for middleware to use middleware in specific routes it is best practice

// app.get('/',(req,res)=>{
//     res.send('welcome in font page')
// })
// // app.get('/user',(req,res)=>{
// //     res.send('welcome to user')
// // })
// app.get('/user',reqFilter,(req,res)=>{
//     res.send('welcome to user')
// })
// app.get('/about',reqFilter,(req,res)=>{   //use route-level middleware to use specific routes for middleware
//     res.send('welcome to about')
// })
 

//you can't apply route level middleware because if you want to apply middleware in 50 or 60 pages so you are not going to 
//write middleware every page so export routed middleware
//apply middleware n different group of route
const route=express.Router()
const reqFilter=require('./middleware')
route.use(reqFilter)
app.get('/',(req,res)=>{
    res.send('welcome in font page')
})
// app.get('/user',(req,res)=>{
//     res.send('welcome to user')
// })
route.get('/user',(req,res)=>{
    res.send('welcome to user')
})
route.get('/about',(req,res)=>{   //use route-level middleware to use specific routes for middleware
    res.send('welcome to about')
})
app.get('/helpline',(req,res)=>{   //use route-level middleware to use specific routes for middleware
    res.send('welcome to help')
})
app.use('/',route)  //jinpe route lgaya h unhi pe middleware use ho rha h //app.get pe nhi hoga

app.listen(5000)