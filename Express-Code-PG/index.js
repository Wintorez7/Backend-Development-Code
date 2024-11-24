const http = require('http');
const express = require('express');


const app = express();

app.get('/', (req,res) => {
    return res.send('Hello from Home Page')
})
app.get('/about',(req,res) => {
    return res.send('This is About Page')
})

const myServer = http.createServer(app);

myServer.listen(3000,() => {
    console.log("Server started in PORT 3000")
})