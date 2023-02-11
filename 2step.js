// const http=require('http')
// function dataControl(req,res){
//          res.write("<h1>hello kitty</h1>")
//          res.end()
// }
// http.createServer(dataControl).listen(4500)




// const http=require('http')
// const dataControl=(req,res) =>   (change to arrow function) (req is request)
// {
//          res.write("<h1>hello kitty m</h1>");  (res is response)
//          res.end();
// }
// http.createServer(dataControl).listen(4500)


// const http = require('http');

// http.createServer((req, res) => (most modified and usually usable way)
// {
//     res.write("<h1>hello kitty m</h1>");
//     res.end();
// }).listen(4500)


// const http = require('http');
// function test(c){
//     return c*8;
// }


// http.createServer((req, res) =>
// {
//     res.write("<h1>hello kitty m</h1>");
//     res.end();
// }).listen(4500)

// const colors=require('colors')
// console.log("hello low".red)



// const http = require('http');
// const test=(c)=>c*8 (used with arrow function it short syntax)

// http.createServer((req, res) =>
// {
//     res.write("<h1>hello kitty m</h1>");
//     res.end();
// }).listen(4500)


// now use package.json (initialize by npm(node package manager))(npm uses in node,angular,rect means where we want js related code)


// const http= require('http');
// const data= require('./check');
// http.createServer((reqe,resp)=>{
//     resp.writeHead(202,{'content_type':'Application\json'})
//     resp.write("<h1>hello</h1>")
//     resp.write(JSON.stringify(data))
//     resp.end()

// }).listen(4500);