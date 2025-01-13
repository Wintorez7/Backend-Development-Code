import http from 'http';

const server = http.createServer();

const product = [{ name:"apple"},{name:"Mango"},{name:"orange"}];

server.on('request',(req,res) => {
    // console.log(req.method)
    console.log(req.url)
   if(req.url === "/products"){
      if(req.method === "GET"){
        res.setHeader("Content-Type","application/json");
        res.statusCode = 200;
        res.end(JSON.stringify(product))
      }else{
        res.setHeader("Content-Type","text/plain");
        res.statusCode = 405;
        res.end("Method Not Allowed");
      }
   }else{
      res.setHeader("Content-Type","text/plain");
      res.statusCode = 404;
      res.end("Page not Found");
   }

});


server.listen(3000,() => {
    console.log("Server is Started at PORT 3000")
})

