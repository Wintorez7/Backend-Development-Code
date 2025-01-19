const express = require('express')

const app = express();

const PORT = 3000;

app.get("/",(req,res,next) => {
    console.log("Root Route ")
    res.send('<h1>Root (/)</h1>')
})

app.post("/add-product",(req,res,next) => {
    console.log(req.body)
    console.log("First Middleware")
    res.send('<h1>response from the first Middleware</h1>')
})

app.get("/product",(req,res,next) => {
    console.log("second Middleware")
    res.send('<h1>response from the second Middleware</h1>')
})

app.listen(PORT,() => {
    console.log(`Server running at ${PORT}`);
})