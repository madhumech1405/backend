const http =require('http')
const hostname='127.0.0.1';
const port =3001;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("content",'text/plain');
    res.end('welcome creater\n');
})
server.listen(port,hostname,()=>{
    console.log(`server ruuning at http://${hostname}:${port} `)

})