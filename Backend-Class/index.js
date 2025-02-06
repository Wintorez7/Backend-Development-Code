const express = require('express')
const app = express()
const PORT = 3000;


app.get('/api/v1/user/home',(req,res) => {
    res.send('<h1>Home Page</h1>')
})

app.get('/api/v1/user/profile',(req,res) => {
    res.status(200).json({
        success:true,
        user:{
            username:'mohan',
            Age:24
        }
    })
})

app.get('/api/v1/user/product/:productId',(req,res) => {
    const id = req.params.productId;
    console.log(id);

    const product = {
        id:1,
        Name:'Asus Tuf laptop',
        Price:56000
    }

    res.status(200).json({
        success:true,
        product,
    }); 
})

app.listen(PORT,() => {
    console.log(`server running at Port ${PORT}`)
})
