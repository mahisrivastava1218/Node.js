const mongoose=require('mongoose')
mongoose.set('strictQuery', true)
const express=require('express')
const app=express()


mongoose.connect(DB, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log('connection success')
}).catch((err)=> console.log('error'))


app.get('',(req,res)=>{
    res.send('<h1>u are in home page</h1><a href="/about">Go to about page </a>') //used anchor tag to link

})
app.listen((9000),()=>{
    console.log('hello')
})
