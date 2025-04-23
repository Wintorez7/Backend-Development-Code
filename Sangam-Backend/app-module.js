const express = require('express');
const app = express();

// application label settings
app.set('view engine','ejs')

// routing
app.get("/",(req,res) => {
    res.send('home page')
})

app.post("/api/data",(req,res) => {
    res.json({
        message:'Data Recived',
        data:req.body
    })
})

app.use((err, req,res, next) => {
    console.log(err.stack)
    res.status(500).send('Something went wrong ')
})