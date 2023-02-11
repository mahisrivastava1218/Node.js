// const fs=require('fs')
// fs.writeFileSync('apc.txt','this is me')

// const fs=require('fs')
// const path=require('path') (path is to not make file again & again & make file in loop)
// const dirpath=path.join(__dirname) (it gives the path of directory)
// console.log(dirpath)


// const fs=require('fs')
// const path=require('path')
// const dirpath=path.join(__dirname,'apc.txt') (it gives the path of file that we create)
// console.log(dirpath)



// const fs=require('fs')
// const path=require('path')
// const dirPath=path.join(__dirname,'file')
// // for(i=0;i<4;i++){
// //     fs.writeFileSync('xyx.txt','hello lol') (but it will create only one file bcz here is only one file name)
// // }
// for(i=0;i<4;i++){
// //     fs.writeFileSync(`bbc${i}.txt`,'as a bro') (you need to use tilt(``))
// // }  //or same==
//     fs.writeFileSync(dirPath+'/rupe'+i+'.txt','hello mahi')  (create files under the folder 'file')
// }


//get file names and print

const gs=require('fs')
const ps=require('path')
const dirpath=ps.join(__dirname,'file')
gs.readdir(dirpath,(err,file)=>{
    file.forEach((tem)=>{
        
        console.log(tem)
    })
})



