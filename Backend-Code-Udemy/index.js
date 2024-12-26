import http from 'http';

const server = http.createServer();

server.on('request',(req,res) => {
    res.setHeader("Content-Type","text")

  if(req.method == "GET"){
    res.writeHead(200,{"Content-type":"text/plain"}); 
    res.statusCode = 200;
    res.end([{name:"Banana"},{name:"Appel"},{name:"orange"}])
  }else{
    res.statusCode = 404;
    res.end("Method Not Allow")
  }   
})

server.listen(3000,() => {
    console.log("Server is Started at PORT 3000")
})

