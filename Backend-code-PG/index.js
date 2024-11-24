const http = require("http");
const fs = require("fs")
const url = require("url")

const server = http.createServer((req,res) => {
    if(req.url === '/favicon.ico') return res.end()
    const log = `${Date.now()}:${req.method} ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url, true);
    
    fs.appendFile('log.txt',log, (err,data) => {
        // console.log("new Request Receive")
        // res.end("hello from server");
        switch(myUrl.pathname){
            case '/': res.end("Home Page")
            break
            case '/about': 
                const username = myUrl.query.myname;
                res.end(`hi ${username}`)
            break
            default :
            res.end("404 Not Found")
        }
    })
    
});

server.listen(4000,() => {
    console.log("server is started")
})
