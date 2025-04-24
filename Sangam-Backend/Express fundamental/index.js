const express = require('express');
const app = express();
const PORT = 4000;
app.listen(PORT,() => {
    console.log(`server is running at ${PORT}`)
})

app.get('/',(req,res) => {
    res.send("Connection Successfull")
})
