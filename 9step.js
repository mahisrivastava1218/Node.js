
const express=require('express')
const path=require('path')
// console.log(__dirname)   //give the directory name

const app=express()
const publicpath=path.join(__dirname,'public') //give the path of public folder

// console.log(publicpath)

app.use(express.static(publicpath)) //app is come for express excuteable function and express ka alg se function hota h as here itis static


app.get('/about',(_,res)=>{
    res.sendFile(`${publicpath}/about.html`)
})
app.get('/',(_,res)=>{
    res.sendFile(`${publicpath}/index.html`)
})
app.get('/help',(_,res)=>{

    res.sendFile(`${publicpath}/help.html`)
})
// app.get('*',(_,res)=>{               
//     res.sendFile(`${publicpath}/not found.html`)
// })

//template engine
app.set('view engine','ejs');
// app.get('/profile',(_,res)=>{       //this will give static page
//     res.render('profile',{data})
// })
app.get('/profile',(_,res)=>{    //this will give dynamic
    const data={                  //take data from database

        name:'mahi',
        batch:'2k23',
        percentage:'72',
        skills:['mangodb','js','node','react','mysql','aws']
    };
    res.render('profile',{data})
})
app.get('/signin',(_,res)=>{
    res.render('signin')
})
app.listen(2000)











