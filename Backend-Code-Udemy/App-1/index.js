import http from 'http';

const server = http.createServer();

const products = [{ name:"apple"},{name:"Mango"},{name:"orange"}];

function parse(req){
   return new Promise((resolve,reject) => {
      let body = ''
      
      req.on('data',(chunk) => {
         body += chunk.toString();
      })

      req.on('end',() => {
         try {
            resolve({name: body.replace('productName=', "")})
         } catch (error) {
            reject(error)
         }
      })
   })
}

server.prependListener('request',(req,res) => {
   console.log(`incoming ${req.method} request for ${req.url}`)
   req.message = "Message from Middleware"
})
server.on("request" ,(req,res) => {
   console.log(req.message)
})

server.on('request',(req,res) => {
   res.setHeader('Content-Type',"text/html")
    // console.log(req.method)
      if(req.url === "/"){
         res.end(`
            <form action="/products" method="POST">
               <input type="text" name="product-Name"></input>
               <button type="submit">Submit</button>
             </form>
         `)
      }else if(req.url === "/products"){
         if(req.method === "POST"){
            parse(req).then((product) => {
               products.push(product);

               res.end(`product created! \n
                     ${JSON.stringify(products)}
                  `)
            }).catch(err => {
               res.statusCode = 400
               res.end
            })
         }
         else if(req.method === "GET"){
            
            res.setHeader("Content-Type","application/json");
            res.statusCode = 200;
            res.end(JSON.stringify(products))
         }
         else{
            res.setHeader("Content-Type","text/plain");
            res.statusCode = 405;
            res.end("Method Not Allowed");
            }
       }else{
         res.setHeader("Content-Type","text/plain");
         res.statusCode = 404;
         res.end("Page not Found");
        }
      
      }

);


server.listen(3000,() => {
    console.log("Server is Started at PORT 3000")
})

