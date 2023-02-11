module.exports= reqFilter=(req,res,next)=>{   //reqFilter use for middleware
    console.log('reqFilter')
    if(!req.query.age){
        res.send("provide your age")
    }
    else if(req.query.age<20){
        res.send("<h1>you're age is not ready to access</h1>")
    }
    else{
        next()
    }
     //next()  //next is use to forward reqfilter call or give access to server
}