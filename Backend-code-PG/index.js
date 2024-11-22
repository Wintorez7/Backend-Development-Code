const http = require("http");
const fs = require("fs")

const server = http.createServer((req,res) => {
    if(req.url === '/favicon.ico') return res.end()
    const log = `${Date.now()}:${req.url} New Req Received\n`;
    fs.appendFile('log.txt',log, (err,data) => {
        // console.log("new Request Receive")
        // res.end("hello from server");
        switch(req.url){
            case '/': res.end("Home Page")
            break
            case '/about': res.end("about Page")
            break
            default :
            res.end("404 Not Found")
        }
    })
    
});

server.listen(4000,() => {
    console.log("server is started")
})
