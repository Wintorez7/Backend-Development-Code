const express = require('express')
const app = express();

// define middleware funtion 
const myFirstmiddleware = (req,res,next) => {
    console.log('this is the first middleware will run on every request')
    // next();
}
app.get('/',(req,res) => {
    res.send('Home page')
})

app.use(myFirstmiddleware);


app.get('/about',(req,res) => {
    res.send('About page')
})

app.listen(3000,() => {
    console.log('Server running at port 3000')
})