
const express=require('express')
const app=express() //to create in excuteable state
//create three pages with the help of get method
// app.get('',(req,res)=>{
//     res.send('<h1>u are in home page,started</h1>')

// })
//link front page to about page
app.get('',(req,res)=>{
    res.send('<h1>u are in home page</h1><a href="/about">Go to about page </a>') //used anchor tag to link

})
// app.get('',(req,res)=>{
//     console.log("data send by browser =",req.query.name)
//     res.send("u are in game,"+req.query.name);

// });
// app.get('/about',(req,res)=>{  //it open the about page
//     res.send(`<input type='text' placeholder='User Name' />
//     <button> click here</button>`)
// })

//linkvabout and home page
app.get('/about',(req,res)=>{  //it open the about page
    res.send(`<input type='text' placeholder='User Name' value=${req.query.name} />
    <button> click here</button>
    <a href="/"> go to home page</a>`)
})

// app.get('/help',(req,res)=>{   //it create help page //json data example help page
//     res.send({
//         name:'mahi',
//         email:'priyanshi@gmail.com'
//     })
// })

//if data is large
// app.get('/help',(req,res)=>{   //it create help page //json data example help page
//     res.send([
//     {
//          name:'mahi',
//         email:'priyanshi@gmail.com'
//     },
//     {
//         name:'ima',
//         email:'priyanshi@gmail.com'
//     },
//     {
//         name:'mi',
//         email:'priyanshi@gmail.com'
//     },
//     {
//         name:'reet',
//         email:'priyanshi@gmail.com'
//     }
// ])})

//link home ko help page se

app.get('/help',(req,res)=>{   //it create help page //json data example help page
        res.send(`{
            name:'mahi',email:'priyanshi@gmail.com'
        }<a href="/">Go to home page </a>`)
})

app.listen(2000);