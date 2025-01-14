import http from 'http';

const server = http.createServer();

const products = [{ name: "apple" }, { name: "Mango" }, { name: "orange" }];

function parse(req) {
   return new Promise((resolve, reject) => {
      let body = '';

      req.on('data', (chunk) => {
         body += chunk.toString();
      });

      req.on('end', () => {
         try {
            // Extract the product name from the body
            const productName = body.split('=')[1];
            resolve({ name: decodeURIComponent(productName) });
         } catch (error) {
            reject(error);
         }
      });
   });
}

server.on('request', (req, res) => {
   res.setHeader('Content-Type', "text/html");

   if (req.url === "/") {
      res.end(`
         <form action="/products" method="POST">
            <input type="text" name="productName"></input>
            <button type="submit">Submit</button>
         </form>
      `);
   } else if (req.url === "/products") {
      if (req.method === "POST") {
         parse(req).then((newProduct) => {
            products.push(newProduct); // Add the new product to the products array

            res.end(`Product created! \n
               ${JSON.stringify(products, null, 2)}
            `);
         }).catch((error) => {
            res.statusCode = 500;
            res.end("Error parsing the request.");
         });
      } else if (req.method === "GET") {
         res.setHeader("Content-Type", "application/json");
         res.statusCode = 200;
         res.end(JSON.stringify(products));
      } else {
         res.setHeader("Content-Type", "text/plain");
         res.statusCode = 405;
         res.end("Method Not Allowed");
      }
   } else {
      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 404;
      res.end("Page not Found");
   }
});

server.listen(3000, () => {
   console.log("Server is Started at PORT 3000");
});
