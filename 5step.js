const fs=require('fs')
const path=require('path')
const dirpath=path.join(__dirname,'crud')

// fs.writeFileSync(`${dirpath}/motu.txt`,'hello foodie') (you can also do this)
// const targetpath=`${dirpath}/motu.txt` 

// fs.writeFileSync(targetpath,'hello foodie')

//to read the file

// fs.readFile(targetpath,'utf8',(err,item)=>{
//     console.log(item)
// })
// fs.appendFile(targetpath,'but m not moti',(err)=>{ 
//     if(!err) console.log('update')  
// })
// fs.rename(targetpath,`${dirpath}/moti.txt`,(err)=>{
//     if(!err) console.log('ok updated now')
// })

// fs.unlinkSync(`${dirpath}/moti.txt`) (fs.unlinkSync is used to delete the file)