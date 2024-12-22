import http from 'http';

const server = http.createServer();

server.on('request',(req,res) => {
    console.log(req.method);

  if(req.method == "GET"){
    res.writeHead(200,{"Content-type":"text/plain"}); 
    res.statusCode = 200;
    res.end("Hello Nodejs this http sever")
  }else{
    res.statusCode = 400;
    res.end("Method Not Allow")
  }
})

server.listen(3000,() => {
    console.log("Server is Started at PORT 3000")
})

