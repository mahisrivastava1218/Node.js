
// const {MongoClient}=require('mongodb')
// const MongoClient=require('mongodb').MongoClient

// const database='insane'   //database
// const client=new MongoClient(url)  //Mongodb server client is node,so node is fetching information from mongodb we can use another in place of client 

// async function getData()
// {   //to use await there is need that function should be async
//     let result= await client.connect();  //to handle database use promise,here client return promise
//     let db=result.db(database)
//     let collection=db.collection('humanity')
//     let response=await collection.find({}).toArray()
//     console.log(response) //find method data find krke dega //.toArray convert in structure form

// }
// getData();

// const express=require('express')
// const mongoose=require('mongodb')
// const app=express()
// const MongoClient=require('mongoose').MongoClient

//{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('success')
//     }
// });
// app.listen(3000,()=>{
//     console.log('k')
// // })
// const MongoClient = require('mongodb').MongoClient;


// const database='insane'   //database
// const url='mongodb://localhost:27017'
// async function getData()
// {   //to use await there is need that function should be async
//     let result= await client.connect();  //to handle database use promise,here client return promise
//     let db=result.db(database)
//     let collection=db.collection('humanity')
//     let response=await collection.find({}).toArray()
//     console.log(response) //find method data find krke dega //.toArray convert in structure form

// }
// getData();


// const mongoose=require('mongoose');
// // app.listen(3000,()=>{
// //         console.log('k')
// // })
// mongoose.set('strictQuery', true);

// { useNewUrlParser: true, useUnifiedTopology: true })
// .then( () => console.log("Ho gya"))
// .catch( (err) => console.log(err));

//{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('success')
//     }
// });


