const express = require('express')
const app = express();
const PORT = 3000;

// root layout 
app.get('/',(req,res) => {
    res.send("welcome to our Home Page")
});

app.listen(PORT,() => {
    console.log(`Server Running at ${PORT}`)
})